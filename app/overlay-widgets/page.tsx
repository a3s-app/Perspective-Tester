import type { Metadata } from "next";
import { OverlayWidgetsPage } from "@/components/pro-blocks/landing-page/overlay-widgets-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "Accessibility Widgets Do Not Deliver Compliance: The Record",
  description:
    "What courts and federal regulators have said about overlay accessibility widgets like AudioEye, accessiBe, and UserWay, and why real compliance requires human testing and code fixes.",
  keywords: [
    "accessibility overlay widgets",
    "accessiBe lawsuit",
    "AudioEye compliance",
    "UserWay ADA",
    "FTC accessiBe order",
    "overlay widget legal",
    "ADA overlay lawsuits",
  ],
  openGraph: {
    title:
      "Accessibility Widgets Do Not Deliver Compliance: The Record | Perspective Tester",
    description:
      "Courts and the FTC have ruled on overlay widgets. See what the record actually says and what real compliance requires.",
    url: "/overlay-widgets",
  },
};

export default function Page() {
  return (
    <SiteShell>
      <OverlayWidgetsPage />
    </SiteShell>
  );
}
