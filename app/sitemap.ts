import type { MetadataRoute } from "next";
import { getRoutes, getSettings } from "@/cms/server";
import { getAllNews, getAllPosts } from "@/cms/articles";
export const revalidate = 3600;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [settings, pages, posts, news] = await Promise.all([
    getSettings(),
    getRoutes(),
    getAllPosts(),
    getAllNews(),
  ]);
  if (settings.seo?.noIndex) return [];
  const base = settings.siteURL || "https://perspectivetester.com";
  return [
    ...pages
      .filter((p) => p.path && !p.noIndex)
      .map((p) => ({
        url: new URL(p.path!, base).href,
        lastModified: p._updatedAt,
        priority: p.path === "/" ? 1 : 0.7,
      })),
    ...posts
      .filter((p) => !p.seo?.noIndex)
      .map((p) => ({
        url: new URL("/blog/" + p.slug, base).href,
        lastModified: p.date,
        priority: 0.6,
      })),
    ...news
      .filter((p) => !p.seo?.noIndex)
      .map((p) => ({
        url: new URL("/news/" + p.slug, base).href,
        lastModified: p.date,
        priority: 0.6,
      })),
  ];
}
