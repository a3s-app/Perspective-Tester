import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticlePage } from "@/components/pro-blocks/landing-page/news-article-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { getAllNews, getNewsBySlug } from "@/lib/news";

const SITE_URL = "https://perspectivetester.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllNews().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    return { title: "Announcement Not Found" };
  }

  return {
    title: item.title,
    description: item.description,
    keywords: item.tags,
    alternates: {
      canonical: `/news/${item.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${item.title} | Perspective Tester`,
      description: item.description,
      url: `/news/${item.slug}`,
      publishedTime: item.date,
      images: [
        {
          url: item.heroImage,
          width: 1600,
          height: 920,
          alt: item.heroAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      images: [item.heroImage],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.title,
    description: item.description,
    image: `${SITE_URL}${item.heroImage}`,
    datePublished: item.date,
    author: {
      "@type": "Organization",
      name: "Perspective Tester",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Perspective Tester",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${item.slug}`,
    },
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <NewsArticlePage item={item} />
    </SiteShell>
  );
}
