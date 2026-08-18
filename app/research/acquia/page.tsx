import type { Metadata } from "next";
import { AcquiaResearchPage } from "@/components/pro-blocks/landing-page/acquia-research-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

const TITLE = "Acquia and Web Governance: The Documentary Record";
const DESCRIPTION =
  "A sourced review of Acquia's accessibility product, formerly Monsido and Acquia Optimize: what it does, what it gets right, what its contract and accessibility statement actually say, and where the real limits sit. Every claim cited.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Acquia accessibility",
    "Acquia Web Governance",
    "Acquia Optimize",
    "Monsido",
    "PageAssist",
    "Acquia accessibility statement",
    "Drupal accessibility",
    "web governance WCAG scanning",
    "accessibility monitoring platform",
  ],
  alternates: {
    canonical: "/research/acquia",
  },
  openGraph: {
    title: `${TITLE} | Perspective Tester`,
    description: DESCRIPTION,
    url: "/research/acquia",
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
 * so the numbered references are machine-readable, and with the commercial
 * relationship disclosed rather than implied.
 */
const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-08-18",
  dateModified: "2026-08-18",
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
  about: [{ "@type": "Organization", name: "Acquia, Inc." }],
  disambiguatingDescription:
    "Published by Perspective Tester, which provides manual accessibility testing and remediation services. Acquia is both a potential competitor and a platform its clients run on. Compiled from primary sources.",
  citation: [
    "Acquia, Inc., Subscription and Services Agreement, Sections 9.1 and 9.4.",
    "Acquia, Inc., Accessibility Statement.",
    "Acquia, Inc., Product Accessibility page.",
    "Acquia, Inc., Acquia Web Governance product and web accessibility feature pages.",
    "Acquia Product Documentation, PageAssist introduction and Accessibility Fast Track.",
    "Acquia, Inc., Acquia Completes Acquisition of Monsido, January 2024.",
    "Drupal.org, Accessibility (Drupal core accessibility commitments).",
    "Makati, T., Tigwell, G. W., & Shinohara, K. (2024). The Promise and Pitfalls of Web Accessibility Overlays for Blind and Low Vision Users. ASSETS '24, ACM. https://doi.org/10.1145/3663548.3675650",
    "U.S. Federal Trade Commission, FTC Approves Final Order Requiring accessiBe to pay $1 Million, April 22, 2025.",
    "U.S. Department of Justice, Extension of Compliance Dates, Federal Register (April 20, 2026).",
    "Section508.gov, Accessibility Conformance Report/VPAT Frequently Asked Questions, U.S. General Services Administration.",
  ],
};

export default function Page() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <AcquiaResearchPage />
    </SiteShell>
  );
}
