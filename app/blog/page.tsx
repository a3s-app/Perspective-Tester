import type { Metadata } from "next";
import { BlogIndexPage } from "@/components/pro-blocks/landing-page/blog-index-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { getAllPosts } from "@/lib/blog";

const SITE_URL = "https://perspectivetester.com";

export const metadata: Metadata = {
  title: "Blog - Notes on Digital Accessibility",
  description:
    "Field notes from the Perspective Tester team on WCAG 2.2, accessibility remediation, and building digital experiences that work for real users.",
  keywords: [
    "accessibility blog",
    "WCAG 2.2",
    "digital accessibility",
    "neuroinclusive design",
    "accessibility insights",
  ],
  alternates: {
    canonical: "/blog",
    types: {
      "application/rss+xml": `${SITE_URL}/blog/feed.xml`,
    },
  },
  openGraph: {
    title: "Blog | Perspective Tester",
    description:
      "Field notes from our team on WCAG 2.2, remediation, and building accessible digital experiences.",
    url: "/blog",
  },
};

export default function Page() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Perspective Tester Blog",
    description:
      "Field notes on WCAG 2.2, accessibility remediation, and inclusive digital experiences.",
    url: `${SITE_URL}/blog`,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      url: `${SITE_URL}/blog/${post.slug}`,
      author: { "@type": "Person", name: post.author.name },
    })),
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogIndexPage />
    </SiteShell>
  );
}
