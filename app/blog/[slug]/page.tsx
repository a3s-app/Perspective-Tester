import { getSettings } from "@/cms/server";
import { imageURL } from "@/cms/content-utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { draftMode } from "next/headers";
import { DraftBanner } from "@/components/cms/draft-banner";
import { BlogPostPage } from "@/components/pro-blocks/landing-page/blog-post-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { getAllPosts, getPostBySlug } from "@/cms/articles";

export const revalidate = 3600;
export async function generateStaticParams() {
  return (await getAllPosts()).map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  const settings = await getSettings();
  const title = post.seo?.title || post.title;
  const description = post.seo?.description || post.description;
  const shareImage = imageURL(post.seo?.image, post.heroImage);
  return {
    robots: {
      index: !(await draftMode()).isEnabled && !(post.seo?.noIndex || settings.seo?.noIndex),
      follow: true,
    },
    title,
    description,
    keywords: post.seo?.keywords || post.tags,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.seo?.socialTitle || title,
      description: post.seo?.socialDescription || description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: shareImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo?.socialTitle || title,
      description: post.seo?.socialDescription || description,
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
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const settings = await getSettings();
  const SITE_URL = settings.siteURL || "https://perspectivetester.com";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: new URL(post.heroImage, SITE_URL).href,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: settings.name,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <SiteShell>
      <DraftBanner path={`/blog/${post.slug}`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <BlogPostPage post={post} />
    </SiteShell>
  );
}
