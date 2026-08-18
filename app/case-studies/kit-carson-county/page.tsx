import type { Metadata } from "next";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { KitCarsonCountyCaseStudy } from "@/components/pro-blocks/landing-page/kit-carson-county-case-study";

export const metadata: Metadata = {
  title: "Kit Carson County, CO Accessibility Case Study",
  description:
    "How Kit Carson County turned website accessibility from a costly one-time project into an ongoing, documented monthly program with A3S.",
  keywords: [
    "Kit Carson County accessibility",
    "Colorado website accessibility",
    "county website accessibility case study",
    "ADA Title II county compliance",
    "A3S case study",
    "government website remediation",
  ],
  openGraph: {
    title: "Kit Carson County, CO Accessibility Case Study",
    description:
      "Uninterrupted monthly audits, practical remediation, and one defensible accessibility record.",
    url: "/case-studies/kit-carson-county",
    type: "article",
    images: [
      {
        url: "/case-studies/kit-carson-county/hero-workload.webp",
        width: 1600,
        height: 1067,
        alt: "Editorial illustration of one IT specialist supporting several county services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kit Carson County, CO Accessibility Case Study",
    description:
      "How one rural county made accessibility ongoing, practical, and defensible.",
    images: ["/case-studies/kit-carson-county/hero-workload.webp"],
  },
};

const caseStudyJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kit Carson County, CO Accessibility Case Study",
  description:
    "How Kit Carson County turned website accessibility into an ongoing, documented monthly program with A3S.",
  image:
    "https://perspectivetester.com/case-studies/kit-carson-county/hero-workload.webp",
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
    "Website remediation",
  ],
};

export default function Page() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyJsonLd) }}
      />
      <KitCarsonCountyCaseStudy />
    </SiteShell>
  );
}
