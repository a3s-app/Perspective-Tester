import type { Metadata } from "next";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { AboutPage } from "@/components/pro-blocks/landing-page/about-page";

export const metadata: Metadata = {
  title: "About Us - Our Mission & Team",
  description:
    "Perspective Tester is dedicated to engineering equity in digital accessibility. Meet our team of accessibility experts helping organizations achieve WCAG compliance across government, education, healthcare, and enterprise.",
  keywords: [
    "accessibility consultants",
    "WCAG experts",
    "digital accessibility team",
    "accessibility company",
    "Perspective Tester team",
  ],
  openGraph: {
    title: "About Us | Perspective Tester",
    description:
      "Meet the team behind Perspective Tester — accessibility experts dedicated to engineering equity in digital experiences.",
    url: "/about",
  },
};

export default function Page() {
  return (
    <main id="main-content">
      <LpNavbar1 />
      <AboutPage />
      <Footer1 />
    </main>
  );
}
