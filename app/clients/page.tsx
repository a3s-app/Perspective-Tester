import type { Metadata } from "next";
import { ClientsPage } from "@/components/pro-blocks/landing-page/clients-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "Our Clients - Trusted Across Industries",
  description:
    "Perspective Tester is trusted by 30+ organizations across government, education, healthcare, real estate, and enterprise. See our clients and read testimonials about our accessibility services.",
  keywords: [
    "accessibility clients",
    "government accessibility",
    "education accessibility",
    "healthcare accessibility compliance",
    "enterprise WCAG compliance",
    "accessibility testimonials",
  ],
  openGraph: {
    title: "Our Clients | Perspective Tester",
    description:
      "Trusted by 30+ organizations across government, education, healthcare, and enterprise for digital accessibility compliance.",
    url: "/clients",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <ClientsPage />
    </SiteShell>
  );
}
