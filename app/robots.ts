import type { MetadataRoute } from "next";
import { getSettings } from "@/cms/server";
export const revalidate = 3600;
export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await getSettings();
  return {
    rules: {
      userAgent: "*",
      ...(settings.seo?.noIndex
        ? { disallow: "/" }
        : { allow: "/", disallow: ["/api/", "/preview/", "/admin/"] }),
    },
    sitemap: new URL(
      "/sitemap.xml",
      settings.siteURL || "https://perspectivetester.com",
    ).href,
  };
}
