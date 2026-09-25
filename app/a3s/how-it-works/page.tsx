import type { Metadata } from "next";
import { A3SHowItWorksPage } from "@/components/pro-blocks/landing-page/a3s-how-it-works-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "How A3S Works - From Where You Are to Compliant",
  description:
    "Already doing accessibility work? Start with one question: do you have an ACR? See how A3S brings an existing ACR up to date, or takes your site from a baseline audit to WCAG 2.2 AA, then keeps it there every month.",
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
      "Do you have an ACR? See how A3S brings it up to date, or takes your site from a baseline audit to WCAG 2.2 AA and keeps it there.",
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
