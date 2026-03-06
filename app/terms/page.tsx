import type { Metadata } from "next";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { TermsPage } from "@/components/pro-blocks/landing-page/terms-page";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for using the Perspective Tester website and accessibility services, including A3S and P15R.",
  openGraph: {
    title: "Terms of Service | Perspective Tester",
    description:
      "Terms and conditions for using Perspective Tester's website and accessibility services.",
    url: "/terms",
  },
};

export default function Page() {
  return (
    <main id="main-content">
      <LpNavbar1 />
      <TermsPage />
      <Footer1 />
    </main>
  );
}
