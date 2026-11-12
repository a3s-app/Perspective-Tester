import type { Metadata } from "next";
import { getAllGuides, getAllNews, getAllPosts } from "@/cms/articles";
import { getRoutes, getSettings } from "@/cms/server";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import {
  SiteMapPage,
  type SiteMapLink,
} from "@/components/pro-blocks/landing-page/site-map-page";

export const revalidate = 3600;

const ARTICLE_SECTIONS = ["/blog", "/news", "/guides"];

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on the Perspective Tester website.",
  alternates: { canonical: "/site-map" },
};

export default async function Page() {
  const [settings, routes, posts, news, guides] = await Promise.all([
    getSettings(),
    getRoutes(),
    getAllPosts(),
    getAllNews(),
    getAllGuides(),
  ]);

  // Pages nested one level under a section, keyed by the section's path.
  const nested: Record<string, SiteMapLink[]> = {
    "/blog": posts.map((p) => ({ label: p.title, href: `/blog/${p.slug}` })),
    "/news": news.map((n) => ({ label: n.title, href: `/news/${n.slug}` })),
    "/guides": guides.map((g) => ({ label: g.title, href: `/guides/${g.slug}` })),
  };
  // CMS pages under another page (the case study under /case-studies). Ones
  // that are already footer links are skipped on the page itself.
  for (const route of routes) {
    if (!route.path || route.noIndex) continue;
    const parent = route.path.slice(0, route.path.lastIndexOf("/"));
    if (!parent || ARTICLE_SECTIONS.includes(parent)) continue;
    (nested[parent] ??= []).push({
      label: route.title ?? route.path,
      href: route.path,
    });
  }

  return (
    <SiteShell>
      <SiteMapPage
        nested={nested}
        siteURL={settings.siteURL || "https://perspectivetester.com"}
      />
    </SiteShell>
  );
}
