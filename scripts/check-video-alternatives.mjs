#!/usr/bin/env node
// Verifies the homepage's video text alternatives (WCAG 1.2.3).
//
//   node scripts/check-video-alternatives.mjs              # built site in ./out
//   node scripts/check-video-alternatives.mjs https://perspectivetester.com
//
// Fails when:
//   - an embedded YouTube video has no on-page text alternative
//     (<details id="transcript-<video id>"> with real content),
//   - a document link returns anything but 200 with the content type its
//     extension promises, or whose bytes don't match the format (catches soft
//     404s: an HTML placeholder served with 200 for a .docx/.pdf URL),
//   - any link points at a p15r.com asset.

import { readFile } from "node:fs/promises";
import path from "node:path";

const MIN_WORDS = 25;

const DOCUMENT_TYPES = {
  ".pdf": { contentType: "application/pdf", magic: "%PDF" },
  ".docx": {
    contentType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    magic: "PK",
  },
  ".html": { contentType: "text/html" },
  ".txt": { contentType: "text/plain" },
  ".vtt": { contentType: "text/vtt", magic: "WEBVTT" },
};

const target = process.argv[2] ?? "out";
const isLive = /^https?:\/\//.test(target);
const failures = [];

async function loadHomepage() {
  if (isLive) {
    const res = await fetch(target);
    if (!res.ok) throw new Error(`${target} returned ${res.status}`);
    return res.text();
  }
  return readFile(path.join(target, "index.html"), "utf8");
}

function textOf(html) {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function checkAlternatives(html) {
  const videoIds = [
    ...html.matchAll(/youtube(?:-nocookie)?\.com\/embed\/([\w-]{11})/g),
  ].map((m) => m[1]);
  const unique = [...new Set(videoIds)];

  if (unique.length === 0) failures.push("No embedded YouTube videos found.");

  for (const id of unique) {
    const match = html.match(
      new RegExp(`<details[^>]*id="transcript-${id}"[^>]*>([\\s\\S]*?)</details>`),
    );
    if (!match) {
      failures.push(`Video ${id}: no on-page text alternative.`);
      continue;
    }
    const words = textOf(match[1]).split(" ").length;
    if (words < MIN_WORDS) {
      failures.push(`Video ${id}: text alternative has ${words} words.`);
    } else {
      console.log(`ok   video ${id}: ${words}-word text alternative`);
    }
  }
}

function resolveHref(href) {
  const base = isLive ? target : "https://perspectivetester.com";
  try {
    return new URL(href.replace(/&amp;/g, "&"), base);
  } catch {
    return null;
  }
}

async function fetchDocument(url) {
  const sameSite = url.hostname === "perspectivetester.com";
  if (!isLive && sameSite) {
    const bytes = await readFile(path.join(target, url.pathname)).catch(
      () => null,
    );
    return bytes
      ? { status: 200, contentType: null, head: bytes.subarray(0, 8) }
      : { status: 404 };
  }
  const res = await fetch(url, { redirect: "follow" });
  const head = Buffer.from(await res.arrayBuffer()).subarray(0, 8);
  return {
    status: res.status,
    contentType: res.headers.get("content-type"),
    head,
  };
}

async function checkLinks(html) {
  const hrefs = [...html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].map(
    (m) => m[1],
  );

  for (const href of new Set(hrefs)) {
    const url = resolveHref(href);
    if (!url) continue;
    const ext = path.extname(url.pathname).toLowerCase();

    if (
      /(^|\.)p15r\.com$/.test(url.hostname) &&
      (ext || url.pathname.startsWith("/wp-content/"))
    ) {
      failures.push(`Link points at a p15r.com asset: ${url.href}`);
    }

    const expected = DOCUMENT_TYPES[ext];
    if (!expected || ext === ".html") continue;

    const doc = await fetchDocument(url);
    if (doc.status !== 200) {
      failures.push(`${url.href}: HTTP ${doc.status}`);
      continue;
    }
    if (doc.contentType && !doc.contentType.startsWith(expected.contentType)) {
      failures.push(
        `${url.href}: content-type ${doc.contentType}, expected ${expected.contentType}`,
      );
      continue;
    }
    if (expected.magic && !doc.head.toString("latin1").startsWith(expected.magic)) {
      failures.push(
        `${url.href}: body starts with ${JSON.stringify(doc.head.toString("latin1"))}, not a real ${ext} (soft 404?)`,
      );
      continue;
    }
    console.log(`ok   ${url.href}`);
  }
}

const html = await loadHomepage();
checkAlternatives(html);
await checkLinks(html);

if (failures.length) {
  console.error(`\nVideo text alternatives: ${failures.length} problem(s)`);
  for (const f of failures) console.error(`FAIL ${f}`);
  process.exit(1);
}
console.log("\nVideo text alternatives: all checks passed.");
