import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

// Replaces Next's default 404, which renders outside the site shell (no
// <main>, so the skip link had no target and content sat outside landmarks).
export default function NotFound() {
  return (
    <SiteShell>
      <section className="bg-background section-padding-y">
        <div className="container-padding-x container mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="text-sm font-semibold text-primary">404</p>
          <h1 className="heading-xl text-balance text-foreground">
            Page not found
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            The page you are looking for does not exist or has moved.
          </p>
          <Button asChild size="lg">
            <Link href="/">
              Go to the home page
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
