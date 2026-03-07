import type { ReactNode } from "react";
import { Footer1 } from "@/components/pro-blocks/landing-page/footers/footer-1";
import { LpNavbar1 } from "@/components/pro-blocks/landing-page/lp-navbars/lp-navbar-1";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <LpNavbar1 />
      <main id="main-content">
        {children}
      </main>
      <Footer1 />
    </>
  );
}
