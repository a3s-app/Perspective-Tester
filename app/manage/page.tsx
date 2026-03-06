import type { Metadata } from "next";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { ManagePage } from "@/components/pro-blocks/landing-page/manage-page";

export const metadata: Metadata = {
  title: "Manage Platform - Accessibility Compliance Tracking",
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
    title: "Manage Platform - Accessibility Compliance Tracking | Perspective Tester",
    description:
      "Track and manage accessibility compliance across your digital portfolio with real-time dashboards, integrations, and automated reporting.",
    url: "/manage",
  },
};

export default function Page() {
  return (
    <main id="main-content">
      <LpNavbar1 />
      <ManagePage />
      <Footer1 />
    </main>
  );
}
