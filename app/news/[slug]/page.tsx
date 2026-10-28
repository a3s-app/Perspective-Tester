import { getSettings } from "@/cms/server";
import { imageURL } from "@/cms/content-utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { DraftBanner } from "@/components/cms/draft-banner";
import { NewsArticlePage } from "@/components/pro-blocks/landing-page/news-article-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { getAllNews, getNewsBySlug } from "@/cms/articles";

export const revalidate = 3600;
export async function generateStaticParams() {
  return (await getAllNews()).map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    return { title: "Announcement Not Found" };
  }

  // A wide photo earns the large social card; a square graphic would only get
  // cropped by it, so it gets the thumbnail card instead.
  const isWideHero = item.heroSize.width / item.heroSize.height >= 1.6;

  const settings = await getSettings();
  const title = item.seo?.title || item.title;
  const description = item.seo?.description || item.description;
  const shareImage = imageURL(item.seo?.image, item.heroImage);
  return {
    robots: {
      index: !(await draftMode()).isEnabled && !(item.seo?.noIndex || settings.seo?.noIndex),
      follow: true,
    },
    title,
    description,
    keywords: item.seo?.keywords || item.tags,
    alternates: {
      canonical: `/news/${item.slug}`,
    },
    openGraph: {
      type: "article",
      title: item.seo?.socialTitle || title,
      description: item.seo?.socialDescription || description,
      url: `/news/${item.slug}`,
      publishedTime: item.date,
      images: [
        {
          url: shareImage,
          width: item.heroSize.width,
          height: item.heroSize.height,
          alt: item.heroAlt,
        },
      ],
    },
    twitter: {
      card: isWideHero ? "summary_large_image" : "summary",
      title: item.seo?.socialTitle || title,
      description: item.seo?.socialDescription || description,
      images: [shareImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  const settings = await getSettings();
  const SITE_URL = settings.siteURL || "https://perspectivetester.com";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.description,
    image: new URL(item.heroImage, SITE_URL).href,
    datePublished: item.date,
    author: {
      "@type": "Organization",
      name: settings.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: settings.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${item.slug}`,
    },
  };

  return (
    <SiteShell>
      <DraftBanner path={`/news/${item.slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <NewsArticlePage item={item} />
    </SiteShell>
  );
}
