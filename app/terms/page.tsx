import type { Metadata } from "next";
import { TermsPage } from "@/components/pro-blocks/landing-page/terms-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

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
    <SiteShell>
      <TermsPage />
    </SiteShell>
  );
}
