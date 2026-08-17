import type { Metadata } from "next";
import { AudioEyeResearchPage } from "@/components/pro-blocks/landing-page/audioeye-research-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

const TITLE = "AudioEye and Accessibility Overlays: The Documentary Record";
const DESCRIPTION =
  "A sourced review of AudioEye and accessibility overlays: peer-reviewed research, court filings, SEC disclosures, FTC orders, NFB resolutions and AudioEye's own documentation — including where overlays do help. Every claim cited.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AudioEye review",
    "AudioEye accessibility",
    "AudioEye lawsuit",
    "accessibility overlay evidence",
    "AudioEye ADP settlement",
    "AudioEye terms of service",
    "accessiBe FTC order",
    "WCAG compliance overlay",
  ],
  alternates: {
    canonical: "/research/audioeye",
  },
  openGraph: {
    title: `${TITLE} | Perspective Tester`,
    description: DESCRIPTION,
    url: "/research/audioeye",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} | Perspective Tester`,
    description: DESCRIPTION,
  },
};

/**
 * Structured data. Typed as a research/report article with an explicit
 * citation list so the numbered references are machine-readable, and with
 * the competitive relationship disclosed rather than implied.
 */
const articleSchema = {
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
  about: {
    "@type": "Organization",
    name: "AudioEye, Inc.",
    tickerSymbol: "AEYE",
  },
  disambiguatingDescription:
    "Published by Perspective Tester, which provides manual accessibility testing and remediation services and competes with AudioEye. Compiled from primary sources.",
  citation: [
    "Makati, T., Tigwell, G. W., & Shinohara, K. (2024). The Promise and Pitfalls of Web Accessibility Overlays for Blind and Low Vision Users. ASSETS '24, ACM. https://doi.org/10.1145/3663548.3675650",
    "Kubesch, D. (2024). The Impact of Web Accessibility Overlays. Master's thesis, Salzburg University of Applied Sciences and Halmstad University.",
    "Settlement Agreement, LightHouse et al. v. ADP, Inc. et al., No. 4:20-cv-09020-HSG (N.D. Cal.), December 2021.",
    "AudioEye, Inc., Annual Report on Form 10-K for the fiscal year ended December 31, 2025, U.S. Securities and Exchange Commission.",
    "AudioEye, Inc., Terms of Service, Sections 10.1-10.3.",
    "U.S. Federal Trade Commission, FTC Approves Final Order Requiring accessiBe to pay $1 Million, April 22, 2025.",
    "WebAIM, Survey of Web Accessibility Practitioners #3 Results, March 2021.",
    "National Federation of the Blind, Resolution 2021-04, Regarding the Use of Overlays to Make Websites Accessible to the Blind, July 10, 2021.",
    "Overlay Fact Sheet, overlayfactsheet.com.",
    "U.S. Department of Justice, Extension of Compliance Dates, Federal Register (April 20, 2026).",
  ],
};

export default function Page() {
  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <AudioEyeResearchPage />
    </SiteShell>
  );
}
