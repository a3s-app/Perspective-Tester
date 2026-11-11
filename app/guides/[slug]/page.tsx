import { getSettings } from "@/cms/server";
import { imageURL } from "@/cms/content-utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { DraftBanner } from "@/components/cms/draft-banner";
import { GuidePage } from "@/components/pro-blocks/landing-page/guide-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { getAllGuides, getGuideBySlug } from "@/cms/articles";

export const revalidate = 3600;
export async function generateStaticParams() {
  return (await getAllGuides()).map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  const settings = await getSettings();
  const title = guide.seo?.title || guide.title;
  const description = guide.seo?.description || guide.description;
  const shareImage = imageURL(guide.seo?.image, "/pt-logo.png");
  return {
    robots: {
      index:
        !(await draftMode()).isEnabled &&
        !(guide.seo?.noIndex || settings.seo?.noIndex),
      follow: true,
    },
    title,
    description,
    keywords: guide.seo?.keywords || guide.tags,
    alternates: {
      canonical: `/guides/${guide.slug}`,
    },
    openGraph: {
      type: "article",
      title: guide.seo?.socialTitle || title,
      description: guide.seo?.socialDescription || description,
      url: `/guides/${guide.slug}`,
      publishedTime: guide.date,
      images: [{ url: shareImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.seo?.socialTitle || title,
      description: guide.seo?.socialDescription || description,
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
  const guide = await getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const settings = await getSettings();
  return (
    <SiteShell>
      <DraftBanner path={`/guides/${guide.slug}`} />
      <GuidePage
        guide={guide}
        siteURL={settings.siteURL || "https://perspectivetester.com"}
      />
    </SiteShell>
  );
}
