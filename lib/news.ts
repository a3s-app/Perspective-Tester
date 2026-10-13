import type { POST_QUERY_RESULT } from '@/sanity.types';
export interface NewsLink {
  /** Exact substring of the paragraph text to turn into a link. */
  text: string;
  /** Internal paths ("/a3s") open in place; absolute URLs open in a new tab. */
  href: string;
}

export type NewsContentBlock =
  /** `level` defaults to 2; use 3 for a subheading nested under the one above. */
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "paragraph"; text: string; links?: NewsLink[] };

export interface NewsItem {
  slug: string;
  title: string;
  description: string;
  /** ISO date, used for sorting, <time> and structured data. */
  date: string;
  dateLabel: string;
  tags: string[];
  heroImage: string;
  heroAlt: string;
  /** Intrinsic pixel size of the hero, used for social cards and matte layout. */
  heroSize: { width: number; height: number };
  /**
   * Set for a hero that is a designed graphic rather than photography: instead
   * of filling the header and the index cards, the image is shown whole
   * against `background` — ideally the graphic's own backdrop, so the matte is
   * invisible.
   */
  heroMatte?: { background: string };
  heroCredit?: { text: string; href?: string };
  body?: NonNullable<POST_QUERY_RESULT>['body'];
  seo?: NonNullable<POST_QUERY_RESULT>['seo'];
  content: NewsContentBlock[];
}

export function getNewsReadingTime(item: NewsItem): string {
  const words = [
    item.title,
    item.description,
    ...item.content.map((block) => block.text),
  ]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}
