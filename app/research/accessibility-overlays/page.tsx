import type { Metadata } from "next";
import { OverlayResearchPage } from "@/components/pro-blocks/landing-page/overlay-research-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

const TITLE = "Accessibility Overlays: The Documentary Record";
const DESCRIPTION =
  "A sourced review of accessibility overlays and the two most widely deployed vendors, AudioEye and UserWay. Built from peer-reviewed research, court filings, SEC disclosures, FTC orders and each company's own documentation, including where overlays genuinely help. Every claim cited.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "accessibility overlay",
    "AudioEye review",
    "UserWay review",
    "AudioEye vs UserWay",
    "UserWay class action",
    "AudioEye terms of service",
    "overlay widget WCAG compliance",
    "accessiBe FTC order",
    "ADA overlay lawsuits",
  ],
  alternates: {
    canonical: "/research/accessibility-overlays",
  },
  openGraph: {
    title: `${TITLE} | Perspective Tester`,
    description: DESCRIPTION,
    url: "/research/accessibility-overlays",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Perspective Tester`,
    description: DESCRIPTION,
  },
};

/**
 * Structured data. Typed as a research report with an explicit citation list
 * so the numbered references are machine-readable, and with the competitive
 * relationship disclosed rather than implied.
 */
const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-08-17",
  dateModified: "2026-08-17",
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
    { "@type": "Organization", name: "AudioEye, Inc.", tickerSymbol: "AEYE" },
    { "@type": "Organization", name: "UserWay Inc." },
  ],
  disambiguatingDescription:
    "Published by Perspective Tester, which provides manual accessibility testing and remediation services and competes with both companies examined. Compiled from primary sources.",
  citation: [
    "Makati, T., Tigwell, G. W., & Shinohara, K. (2024). The Promise and Pitfalls of Web Accessibility Overlays for Blind and Low Vision Users. ASSETS '24, ACM. https://doi.org/10.1145/3663548.3675650",
    "Kubesch, D. (2024). The Impact of Web Accessibility Overlays. Master's thesis, Salzburg University of Applied Sciences and Halmstad University.",
    "Settlement Agreement, LightHouse et al. v. ADP, Inc. et al., No. 4:20-cv-09020-HSG (N.D. Cal.), December 2021.",
    "BloomsyBox.com LLC v. UserWay Inc., U.S. District Court for the District of Delaware; Magistrate's Report and Recommendation, February 13, 2026.",
    "UserWay Inc., Terms of Use.",
    "AudioEye, Inc., Annual Report on Form 10-K for the fiscal year ended December 31, 2025, U.S. Securities and Exchange Commission.",
    "AudioEye, Inc., Terms of Service, Sections 10.1-10.3.",
    "U.S. Federal Trade Commission, FTC Approves Final Order Requiring accessiBe to pay $1 Million, April 22, 2025.",
    "WebAIM, Survey of Web Accessibility Practitioners #3 Results, March 2021.",
    "National Federation of the Blind, Resolution 2021-04, July 10, 2021.",
    "Overlay Fact Sheet, overlayfactsheet.com.",
    "U.S. Department of Justice, Extension of Compliance Dates, Federal Register (April 20, 2026).",
  ],
};

export default function Page() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <OverlayResearchPage />
    </SiteShell>
  );
}
