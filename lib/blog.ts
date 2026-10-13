import type { POST_QUERY_RESULT } from '@/sanity.types';
export interface BlogLink {
  /** Exact substring of the paragraph text to turn into a link. */
  text: string;
  href: string;
}

export type BlogContentBlock =
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string; links?: BlogLink[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  author: {
    name: string;
    role: string;
    photo: string;
  };
  date: string;
  dateLabel: string;
  heroImage: string;
  heroAlt: string;
  heroCredit?: string;
  tags: string[];
  body?: NonNullable<POST_QUERY_RESULT>['body'];
  seo?: NonNullable<POST_QUERY_RESULT>['seo'];
  content: BlogContentBlock[];
}

/** Estimated reading time, derived from word count (~200 wpm). */
export function getReadingTime(post: BlogPost): string {
  const words = [
    post.title,
    post.description,
    ...post.content.map((block) => block.text),
  ]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/**
 * Split paragraph text into plain strings and link segments, so inline links
 * can be rendered without storing markup in the content. Anchors are matched
 * on their first occurrence, in the order they appear in the text.
 */
export function toSegments(
  text: string,
  links?: BlogLink[],
): Array<string | BlogLink> {
  if (!links || links.length === 0) return [text];

  const matches = links
    .map((link) => ({ link, index: text.indexOf(link.text) }))
    .filter((match) => match.index >= 0)
    .sort((a, b) => a.index - b.index);

  const segments: Array<string | BlogLink> = [];
  let cursor = 0;
  for (const { link, index } of matches) {
    if (index < cursor) continue; // overlaps a previous link, skip
    if (index > cursor) segments.push(text.slice(cursor, index));
    segments.push(link);
    cursor = index + link.text.length;
  }
  if (cursor < text.length) segments.push(text.slice(cursor));
  return segments;
}

/** URL-safe id for a heading, used for in-page anchors. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
