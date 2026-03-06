import type { Metadata } from "next";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { PrivacyPage } from "@/components/pro-blocks/landing-page/privacy-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Perspective Tester collects, uses, and protects your personal information. Read our privacy policy covering data collection, usage, sharing, and your rights.",
  openGraph: {
    title: "Privacy Policy | Perspective Tester",
    description:
      "How Perspective Tester collects, uses, and protects your personal information.",
    url: "/privacy",
  },
};

export default function Page() {
  return (
    <main id="main-content">
      <LpNavbar1 />
      <PrivacyPage />
      <Footer1 />
    </main>
  );
}
