import type { Metadata } from "next";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { StMarysCountyCaseStudy } from "@/components/pro-blocks/landing-page/st-marys-county-case-study";

export const metadata: Metadata = {
  title: "St. Mary's County, MD Accessibility Case Study",
  description:
    "How St. Mary's County, Maryland is meeting the April 2027 ADA Title II deadline across 4,000+ pages with a three-person team, using manual testing, prioritised remediation, and a documented compliance record.",
  keywords: [
    "St. Mary's County accessibility",
    "Maryland website accessibility",
    "county website accessibility case study",
    "ADA Title II 2027 deadline",
    "WCAG 2.2 AA local government",
    "Trusted Tester accessibility audit",
  ],
  alternates: {
    canonical: "/case-studies/st-marys-county",
  },
  openGraph: {
    title: "St. Mary's County, MD Accessibility Case Study",
    description:
      "Three developers, thousands of pages, one federal deadline, and the record to prove the work.",
    url: "/case-studies/st-marys-county",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Mary's County, MD Accessibility Case Study",
    description:
      "How a Maryland county is meeting the April 2027 ADA Title II deadline with proof, not hope.",
  },
};

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "St. Mary's County, MD Accessibility Case Study",
  description:
    "How St. Mary's County, Maryland is meeting the April 2027 ADA Title II deadline with manual testing, prioritised remediation, and a documented compliance record.",
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  inLanguage: "en-US",
  author: {
    "@type": "Organization",
    name: "Perspective Tester",
    url: "https://perspectivetester.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Perspective Tester",
    url: "https://perspectivetester.com",
  },
  about: [
    "Digital accessibility",
    "Local government",
    "ADA Title II",
    "WCAG 2.2 AA",
  ],
};

export default function Page() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <StMarysCountyCaseStudy />
    </SiteShell>
  );
}
