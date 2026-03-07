import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pro-blocks/landing-page/privacy-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

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
    <SiteShell>
      <PrivacyPage />
    </SiteShell>
  );
}
