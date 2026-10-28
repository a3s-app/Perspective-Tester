import "server-only";
import { cache } from "react";
import { draftMode } from "next/headers";
import { previewClient, publishedClient } from "@/sanity/client";
import {
  POSTS_QUERY,
  POST_QUERY,
  NEWS_QUERY,
  NEWS_ITEM_QUERY,
} from "@/sanity/queries";
import type {
  POST_QUERY_RESULT,
  NEWS_ITEM_QUERY_RESULT,
  POSTS_QUERY_RESULT,
  NEWS_QUERY_RESULT,
} from "@/sanity.types";
import type { BlogPost, BlogContentBlock } from "@/lib/blog";
import type { NewsItem } from "@/lib/news";
import { cacheOptions } from "./server";
import { imageURL } from "./content-utils";

type Article =
  NonNullable<POST_QUERY_RESULT> | NonNullable<NEWS_ITEM_QUERY_RESULT>;
function common(doc: Article) {
  const content: BlogContentBlock[] = (doc.body ?? []).map((block) => ({
    type:
      block.style === "h2" || block.style === "h3" ? "heading" : "paragraph",
    text: (block.children ?? []).map((span) => span.text ?? "").join(""),
  }));
  return {
    slug: doc.slug ?? "",
    title: doc.title ?? "",
    description: doc.description ?? "",
    date: doc.date ?? "",
    dateLabel: doc.date
      ? new Date(doc.date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
          timeZone: "UTC",
        })
      : "",
    heroImage: imageURL(doc.hero, "/pt-logo.png"),
    heroAlt: doc.heroAlt ?? "",
    tags: doc.tags ?? [],
    content,
    body: doc.body ?? [],
    seo: doc.seo,
  };
}
export function blogPost(doc: NonNullable<POST_QUERY_RESULT>): BlogPost {
  return {
    ...common(doc),
    author: {
      name: doc.author?.name ?? "",
      role: doc.author?.role ?? "",
      photo: imageURL(doc.author?.photo, "/pt-logo.png"),
    },
    heroCredit: doc.heroCredit ?? undefined,
  };
}
export function newsItem(doc: NonNullable<NEWS_ITEM_QUERY_RESULT>): NewsItem {
  return {
    ...common(doc),
    heroSize: {
      width: doc.heroSize?.width || 1600,
      height: doc.heroSize?.height || 900,
    },
    heroMatte: doc.heroMatte?.background
      ? { background: doc.heroMatte.background }
      : undefined,
    heroCredit: doc.heroCredit?.text
      ? { text: doc.heroCredit.text, href: doc.heroCredit.href ?? undefined }
      : undefined,
  };
}
export const getAllPosts = cache(async () =>
  (
    await publishedClient.fetch<POSTS_QUERY_RESULT>(
      POSTS_QUERY,
      {},
      cacheOptions(["posts", "authors"]),
    )
  ).map(blogPost),
);
// Draft mode is switched on only by /api/preview, which checks the secret.
const previewing = async () =>
  !!process.env.SANITY_VIEWER_TOKEN && (await draftMode()).isEnabled;
export const getPostBySlug = cache(async (slug: string) => {
  const doc = (await previewing())
    ? await previewClient.fetch<POST_QUERY_RESULT>(
        POST_QUERY,
        { slug },
        { cache: "no-store" },
      )
    : await publishedClient.fetch<POST_QUERY_RESULT>(
        POST_QUERY,
        { slug },
        cacheOptions([`post:${slug}`, "authors"]),
      );
  return doc ? blogPost(doc) : null;
});
export const getAllNews = cache(async () =>
  (
    await publishedClient.fetch<NEWS_QUERY_RESULT>(
      NEWS_QUERY,
      {},
      cacheOptions(["news"]),
    )
  ).map(newsItem),
);
export const getNewsBySlug = cache(async (slug: string) => {
  const doc = (await previewing())
    ? await previewClient.fetch<NEWS_ITEM_QUERY_RESULT>(
        NEWS_ITEM_QUERY,
        { slug },
        { cache: "no-store" },
      )
    : await publishedClient.fetch<NEWS_ITEM_QUERY_RESULT>(
        NEWS_ITEM_QUERY,
        { slug },
        cacheOptions([`news:${slug}`]),
      );
  return doc ? newsItem(doc) : null;
});
