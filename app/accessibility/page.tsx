import type { Metadata } from "next";
import { AccessibilityStatementPage } from "@/components/pro-blocks/landing-page/accessibility-statement-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Perspective Tester is committed to WCAG 2.2 Level AA conformance. Read our accessibility statement covering standards, features, assessment methods, and how to provide feedback.",
  keywords: [
    "accessibility statement",
    "WCAG 2.2 compliance",
    "ADA compliance",
    "web accessibility commitment",
  ],
  openGraph: {
    title: "Accessibility Statement | Perspective Tester",
    description:
      "Our commitment to WCAG 2.2 Level AA conformance and digital accessibility for all users.",
    url: "/accessibility",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <AccessibilityStatementPage />
    </SiteShell>
  );
}
