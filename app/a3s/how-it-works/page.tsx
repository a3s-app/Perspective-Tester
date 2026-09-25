import type { Metadata } from "next";
import { A3SHowItWorksPage } from "@/components/pro-blocks/landing-page/a3s-how-it-works-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "How A3S Works - Audit, Monitor, Verify",
  description:
    "How A3S keeps your site accessible: a monthly audit, fix and verify cycle, monitoring for regressions after you're compliant, vendor coordination and a dated record of every issue.",
  keywords: [
    "accessibility monitoring",
    "accessibility regression testing",
    "accessibility vendor management",
    "WCAG 2.2 AA compliance process",
    "ongoing accessibility compliance",
    "accessibility as a service",
  ],
  openGraph: {
    title: "How A3S Works | Perspective Tester",
    description:
      "A monthly audit, fix and verify cycle, regression monitoring, vendor coordination and a dated record of every accessibility issue.",
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
