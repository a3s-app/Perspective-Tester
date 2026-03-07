import type { Metadata } from "next";
import { ContactPage } from "@/components/pro-blocks/landing-page/contact-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "Contact Us - Get a Consultation",
  description:
    "Get in touch with Perspective Tester to discuss your accessibility needs. Request a consultation for A3S managed services, P15R, accessibility audits, remediation, or VPAT documentation.",
  keywords: [
    "contact accessibility experts",
    "accessibility consultation",
    "WCAG compliance quote",
    "accessibility audit request",
    "accessibility services inquiry",
  ],
  openGraph: {
    title: "Contact Us | Perspective Tester",
    description:
      "Request a consultation for accessibility services. We respond within one business day.",
    url: "/contact",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <ContactPage />
    </SiteShell>
  );
}
