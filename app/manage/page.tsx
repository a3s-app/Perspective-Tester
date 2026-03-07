import type { Metadata } from "next";
import { ManagePage } from "@/components/pro-blocks/landing-page/manage-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "P15R - Accessibility Ops Without Chaos",
  description:
    "Track, manage, and report on accessibility compliance across your entire digital portfolio. Real-time dashboards, Jira and Slack integrations, vendor collaboration, and automated VPAT generation.",
  keywords: [
    "accessibility management platform",
    "compliance tracking",
    "accessibility dashboard",
    "VPAT generation",
    "accessibility reporting",
    "Jira accessibility integration",
  ],
  openGraph: {
    title: "P15R - Accessibility Ops Without Chaos | Perspective Tester",
    description:
      "Track and manage accessibility compliance across your digital portfolio with real-time dashboards, integrations, and automated reporting.",
    url: "/manage",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <ManagePage />
    </SiteShell>
  );
}
