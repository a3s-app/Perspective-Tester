import type { Metadata } from "next";
import { A3SHowItWorksPage } from "@/components/pro-blocks/landing-page/a3s-how-it-works-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "How A3S Works",
  description:
    "How A3S brings your website into conformance with WCAG and keeps it there: assessment, audit and remediation, validation and ACR, ongoing monitoring, vendor coordination and reporting.",
  keywords: [
    "accessibility monitoring",
    "accessibility regression testing",
    "accessibility vendor management",
    "WCAG compliance process",
    "ongoing accessibility compliance",
    "accessibility as a service",
  ],
  openGraph: {
    title: "How A3S Works | Perspective Tester",
    description:
      "How A3S brings your website into conformance with WCAG and keeps it there.",
    url: "/a3s/how-it-works",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <A3SHowItWorksPage />
    </SiteShell>
  );
}
