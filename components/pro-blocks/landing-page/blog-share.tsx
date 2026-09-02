"use client";

import { useEffect, useState } from "react";
import { Check, Facebook, Link2, Linkedin, Share2 } from "lucide-react";

const SITE_URL = "https://perspectivetester.com";

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.966 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

export function BlogShare({
  title,
  slug,
  basePath = "/blog",
}: {
  title: string;
  slug: string;
  /** Section the article lives under, e.g. "/blog" or "/news". */
  basePath?: string;
}) {
  const canonicalUrl = `${SITE_URL}${basePath}/${slug}`;
  const [shareUrl, setShareUrl] = useState(canonicalUrl);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
    if (typeof navigator !== "undefined" && "share" in navigator) {
      setCanNativeShare(true);
    }
  }, []);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const socialLinks = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Linkedin,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: XIcon,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Facebook,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setCopyFailed(false);
    } catch {
      // Clipboard writes are refused in insecure contexts and when the
      // permission is denied. Say so rather than appearing to do nothing.
      setCopied(false);
      setCopyFailed(true);
    }
  };

  const handleNativeShare = async () => {
    try {
      await navigator.share({ title, url: shareUrl });
    } catch {
      /* user dismissed the share sheet */
    }
  };

  return (
    <div className="mt-10 flex flex-col gap-4 border-t pt-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm font-semibold text-foreground">Share this article</p>

      <div className="flex flex-wrap items-center gap-2">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="text-muted-foreground hover:text-foreground inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-card transition-colors"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">{label} (opens in a new tab)</span>
          </a>
        ))}

        {canNativeShare ? (
          <button
            type="button"
            onClick={handleNativeShare}
            aria-label="Share via your device"
            title="Share"
            className="text-muted-foreground hover:text-foreground inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-card transition-colors"
          >
            <Share2 className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">Share via your device</span>
          </button>
        ) : null}

        <button
          type="button"
          onClick={handleCopy}
          className="text-foreground inline-flex h-10 items-center gap-2 rounded-full border border-input bg-card px-4 text-sm font-medium transition-colors hover:bg-accent"
        >
          {copied ? (
            <Check className="h-4 w-4 text-primary" aria-hidden="true" />
          ) : (
            <Link2 className="h-4 w-4 text-primary" aria-hidden="true" />
          )}
          <span>{copied ? "Link copied" : "Copy link"}</span>
        </button>

        {copyFailed ? (
          <p className="text-destructive w-full text-xs sm:w-auto">
            Copying failed. You can copy the address from your browser bar.
          </p>
        ) : null}
      </div>

      <p role="status" aria-live="polite" className="sr-only">
        {copied ? "Link copied to clipboard" : ""}
        {copyFailed
          ? "Copying failed. You can copy the address from your browser bar."
          : ""}
      </p>
    </div>
  );
}
