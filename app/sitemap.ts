import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

// Regenerates when the Sanity cache tag is revalidated, hourly at the latest.
export const revalidate = 3600;

const SITE_URL = "https://perspectivetester.com";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}`, changeFrequency: "weekly", priority: 1.0 },
  { url: `${SITE_URL}/a3s`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/manage`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/clients`, changeFrequency: "monthly", priority: 0.8 },
  { url: `${SITE_URL}/overlay-widgets`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
  { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
  { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.8 },
  { url: `${SITE_URL}/accessibility`, changeFrequency: "yearly", priority: 0.5 },
  { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
  { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  return [
    ...staticRoutes,
    ...posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
