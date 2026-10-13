import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export const templates: Record<string, ComponentType> = {
  "a3s-how-it-works-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/a3s-how-it-works-page").then(
      (module) => module.A3SHowItWorksPage,
    ),
  ),
  "a3s-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/a3s-page").then(
      (module) => module.A3SPage,
    ),
  ),
  "about-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/about-page").then(
      (module) => module.AboutPage,
    ),
  ),
  "accessibility-statement-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/accessibility-statement-page").then(
      (module) => module.AccessibilityStatementPage,
    ),
  ),
  "capabilities-section": dynamic(() =>
    import("@/components/pro-blocks/landing-page/capabilities-section").then(
      (module) => module.CapabilitiesSection,
    ),
  ),
  "case-studies-index-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/case-studies-index-page").then(
      (module) => module.CaseStudiesIndexPage,
    ),
  ),
  "clients-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/clients-page").then(
      (module) => module.ClientsPage,
    ),
  ),
  "contact-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/contact-page").then(
      (module) => module.ContactPage,
    ),
  ),
  "enterprise-section": dynamic(() =>
    import("@/components/pro-blocks/landing-page/enterprise-section").then(
      (module) => module.EnterpriseSection,
    ),
  ),
  "final-cta-section": dynamic(() =>
    import("@/components/pro-blocks/landing-page/final-cta-section").then(
      (module) => module.FinalCtaSection,
    ),
  ),
  "kit-carson-county-case-study": dynamic(() =>
    import("@/components/pro-blocks/landing-page/kit-carson-county-case-study").then(
      (module) => module.KitCarsonCountyCaseStudy,
    ),
  ),
  "manage-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/manage-page").then(
      (module) => module.ManagePage,
    ),
  ),
  "overlay-widgets-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/overlay-widgets-page").then(
      (module) => module.OverlayWidgetsPage,
    ),
  ),
  "privacy-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/privacy-page").then(
      (module) => module.PrivacyPage,
    ),
  ),
  "products-section": dynamic(() =>
    import("@/components/pro-blocks/landing-page/products-section").then(
      (module) => module.ProductsSection,
    ),
  ),
  "terms-page": dynamic(() =>
    import("@/components/pro-blocks/landing-page/terms-page").then(
      (module) => module.TermsPage,
    ),
  ),
  "video-showcase-section": dynamic(() =>
    import("@/components/pro-blocks/landing-page/video-showcase-section").then(
      (module) => module.VideoShowcaseSection,
    ),
  ),
  "hero-section-2": dynamic(() =>
    import("@/components/pro-blocks/landing-page/hero-sections/hero-section-2").then(
      (module) => module.HeroSection2,
    ),
  ),
};
