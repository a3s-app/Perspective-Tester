import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentProvider } from "./content-provider";
import { templates } from "./templates";
import { ArticleBody } from "./article-body";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { BlogIndexPage } from "@/components/pro-blocks/landing-page/blog-index-page";
import { NewsIndexPage } from "@/components/pro-blocks/landing-page/news-index-page";
import { getAllNews, getAllPosts } from "@/cms/articles";
import {
  contentMap,
  getPage,
  getSections,
  getSettings,
  getRoutes,
} from "@/cms/server";
import { imageURL, jsonLD } from "@/cms/content-utils";

export async function pageMetadata(path: string): Promise<Metadata> {
  const page = await getPage(path);
  if (!page) return { title: "Page not found" };
  const settings = await getSettings();
  const title = page.seo?.title || page.title || settings.name;
  const description =
    page.seo?.description || settings.description || undefined;
  const image = imageURL(page.seo?.image || settings.seo?.image);
  return {
    title,
    description,
    keywords: page.seo?.keywords,
    alternates: {
      canonical: path,
      ...(path === "/blog"
        ? { types: { "application/rss+xml": "/blog/feed.xml" } }
        : {}),
    },
    robots: {
      index: !(page.seo?.noIndex || settings.seo?.noIndex),
      follow: true,
    },
    openGraph: {
      title: page.seo?.socialTitle || title || undefined,
      description: page.seo?.socialDescription || description,
      url: path,
      type: page.seo?.pageType === "Article" ? "article" : "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: page.seo?.socialTitle || title || undefined,
      description: page.seo?.socialDescription || description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
export async function WebsitePage({ path }: { path: string }) {
  const page = await getPage(path);
  if (!page) notFound();
  const sections = await getSections(page.sectionIds ?? []);
  const settings = await getSettings();
  const structuredType = page.seo?.pageType || "WebPage";
  const related =
    structuredType === "CollectionPage"
      ? (await getRoutes()).filter(
          (p) => p.path?.startsWith(path + "/") && !p.noIndex,
        )
      : [];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": structuredType,
    name: page.title,
    headline: structuredType === "Article" ? page.title : undefined,
    description: page.seo?.description,
    url: new URL(path, settings.siteURL || "https://perspectivetester.com")
      .href,
    image: imageURL(page.seo?.image) || undefined,
    ...(structuredType === "Article"
      ? {
          author: {
            "@type": "Organization",
            name: settings.name,
            url: settings.siteURL,
          },
          publisher: {
            "@type": "Organization",
            name: settings.name,
            url: settings.siteURL,
          },
        }
      : {}),
    ...(related.length
      ? {
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: related.length,
            itemListElement: related.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.title,
              url: new URL(p.path!, settings.siteURL!).href,
            })),
          },
        }
      : {}),
  };
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLD(structuredData) }}
      />
      {sections.map((section) => {
        const type = section.template;
        const Template = type ? templates[type] : undefined;
        return (
          <ContentProvider key={section._id} content={contentMap([section])}>
            {type === "blog-index-page" ? (
              <BlogListing />
            ) : type === "news-index-page" ? (
              <NewsListing />
            ) : Template ? (
              <Template />
            ) : null}
          </ContentProvider>
        );
      })}
      {!!page.body?.length && (
        <section className="container-padding-x container mx-auto max-w-4xl space-y-6 py-16">
          {!sections.length && (
            <h1 className="heading-xl mb-8">{page.title}</h1>
          )}
          <ArticleBody value={page.body} />
        </section>
      )}
    </SiteShell>
  );
}
async function BlogListing() {
  return <BlogIndexPage posts={await getAllPosts()} />;
}
async function NewsListing() {
  return <NewsIndexPage items={await getAllNews()} />;
}
