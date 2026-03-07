import type { Metadata } from "next";
import { AboutPage } from "@/components/pro-blocks/landing-page/about-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

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
      "Meet the team behind Perspective Tester, accessibility experts dedicated to engineering equity in digital experiences.",
    url: "/about",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <AboutPage />
    </SiteShell>
  );
}
