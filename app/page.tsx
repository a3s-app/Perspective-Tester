import type { Metadata } from "next";
import { HeroSection2 } from "@/components/pro-blocks/landing-page/hero-sections/hero-section-2";
import { VideoShowcaseSection } from "@/components/pro-blocks/landing-page/video-showcase-section";
import { ProductsSection } from "@/components/pro-blocks/landing-page/products-section";
import { EnterpriseSection } from "@/components/pro-blocks/landing-page/enterprise-section";
import { CapabilitiesSection } from "@/components/pro-blocks/landing-page/capabilities-section";
import { FinalCtaSection } from "@/components/pro-blocks/landing-page/final-cta-section";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "Perspective Tester - Enterprise Accessibility Testing & Compliance",
  description:
    "Test, monitor, and manage accessibility across your digital products. Perspective Tester helps enterprises achieve and maintain WCAG 2.2 compliance at scale with A3S and P15R.",
  openGraph: {
    title: "Perspective Tester - Enterprise Accessibility Testing & Compliance",
    description:
      "Test, monitor, and manage accessibility across your digital products. Achieve WCAG 2.2 compliance at scale.",
    url: "/",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <HeroSection2 />
      <VideoShowcaseSection />
      <ProductsSection />
      <EnterpriseSection />
      <CapabilitiesSection />
      <FinalCtaSection />
    </SiteShell>
  );
}
