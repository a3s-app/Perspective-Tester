"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";

const NAV_LINKS = [
  { label: "A3S", href: "/a3s" },
  { label: "Manage", href: "/manage" },
  { label: "Clients", href: "/clients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export function Footer1() {
  return (
    <footer
      className="border-t bg-background"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto py-10 lg:py-14">
        {/* Top: logo + nav links */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link href="/" aria-label="Go to homepage">
            <Logo />
          </Link>

          <nav
            className="flex flex-wrap items-center gap-2 text-sm"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-border" role="presentation" />

        {/* Bottom: copyright + legal */}
        <div className="flex flex-col-reverse items-center gap-4 text-xs text-muted-foreground md:flex-row md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Perspective Tester. All rights
            reserved.
          </p>
          <nav
            className="flex flex-wrap items-center gap-2"
            aria-label="Legal links"
          >
            <Link
              href="/privacy"
              className="rounded-md px-3 py-1.5 transition-colors hover:text-foreground"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="rounded-md px-3 py-1.5 transition-colors hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="rounded-md px-3 py-1.5 transition-colors hover:text-foreground"
            >
              Accessibility
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
