import type { Metadata } from "next";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { AccessibilityTestingGuide } from "@/components/pro-blocks/landing-page/accessibility-testing-guide";

const description =
  "Understand what Lighthouse and axe-core can detect, where automated accessibility checks have limits, and which issues need human testing. Explore practical examples and official sources.";

export const metadata: Metadata = {
  title: "Lighthouse and axe-core Accessibility Testing Guide",
  description,
  alternates: { canonical: "/accessibility-testing-guide" },
  openGraph: {
    title: "What accessibility scans catch. What they miss.",
    description,
    url: "/accessibility-testing-guide",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lighthouse and axe-core Accessibility Testing Guide",
    description,
  },
};

export default function AccessibilityTestingGuidePage() {
  return (
    <SiteShell hideCopyrightYear>
      <AccessibilityTestingGuide />
    </SiteShell>
  );
}
