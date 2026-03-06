import type { Metadata } from "next";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { A3SPage } from "@/components/pro-blocks/landing-page/a3s-page";

export const metadata: Metadata = {
  title: "A3S - Accessibility as a Service",
  description:
    "A3S is a fully managed accessibility service that ensures your digital properties achieve and maintain WCAG 2.2 AA compliance. Automated scanning, expert remediation, and legal protection included.",
  keywords: [
    "accessibility as a service",
    "managed accessibility",
    "WCAG 2.2 compliance",
    "accessibility remediation",
    "ADA compliance service",
    "web accessibility management",
  ],
  openGraph: {
    title: "A3S - Accessibility as a Service | Perspective Tester",
    description:
      "Fully managed accessibility service ensuring WCAG 2.2 AA compliance with automated scanning, expert remediation, and legal protection.",
    url: "/a3s",
  },
};

export default function Page() {
  return (
    <main id="main-content">
      <LpNavbar1 />
      <A3SPage />
      <Footer1 />
    </main>
  );
}
