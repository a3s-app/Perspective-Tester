import type { Metadata } from "next";
import { ResearchIndexPage } from "@/components/pro-blocks/landing-page/research-index-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { getAllResearch } from "@/lib/research";

const TITLE = "Research";
const DESCRIPTION =
  "Evidence reviews on accessibility tooling and compliance, built from court filings, SEC disclosures, regulatory orders and peer-reviewed research. Every claim cited.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/research",
  },
  openGraph: {
    title: `${TITLE} | Perspective Tester`,
    description: DESCRIPTION,
    url: "/research",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Perspective Tester`,
    description: DESCRIPTION,
  },
};

export default function Page() {
  const pieces = getAllResearch();

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${TITLE} | Perspective Tester`,
    description: DESCRIPTION,
    url: "https://perspectivetester.com/research",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "Perspective Tester",
      url: "https://perspectivetester.com",
    },
    hasPart: pieces.map((piece) => ({
      "@type": "Report",
      headline: piece.title,
      abstract: piece.summary,
      datePublished: piece.published,
      dateModified: piece.lastReviewed,
      url: `https://perspectivetester.com/research/${piece.slug}`,
    })),
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <ResearchIndexPage />
    </SiteShell>
  );
}
