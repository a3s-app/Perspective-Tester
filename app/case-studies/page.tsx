import type { Metadata } from "next";
import { CaseStudiesIndexPage } from "@/components/pro-blocks/landing-page/case-studies-index-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

const SITE_URL = "https://perspectivetester.com";

export const metadata: Metadata = {
  title: "Digital Accessibility Case Studies",
  description:
    "See how public organizations turn accessibility requirements into verified repairs, practical operating programs, and evidence they can defend.",
  keywords: [
    "digital accessibility case studies",
    "WCAG remediation case study",
    "government website accessibility",
    "accessibility compliance program",
    "A3S case studies",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Digital Accessibility Case Studies | Perspective Tester",
    description:
      "Real accessibility constraints, operating decisions, verified repairs, and the evidence organizations keep.",
    url: "/case-studies",
    type: "website",
    images: [
      {
        url: "/case-studies/kit-carson-county/county-road.webp",
        width: 1600,
        height: 1067,
        alt: "A rural road crossing the Kit Carson County plains at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Accessibility Case Studies | Perspective Tester",
    description:
      "See how accessibility work becomes a practical, ongoing, and defensible program.",
    images: ["/case-studies/kit-carson-county/county-road.webp"],
  },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Perspective Tester Digital Accessibility Case Studies",
  description:
    "Case studies showing how organizations test, repair, verify, and document digital accessibility work.",
  url: `${SITE_URL}/case-studies`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: 1,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: `${SITE_URL}/case-studies/kit-carson-county`,
        name: "Kit Carson County, Colorado Accessibility Case Study",
      },
    ],
  },
};

export default function Page() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <CaseStudiesIndexPage />
    </SiteShell>
  );
}
