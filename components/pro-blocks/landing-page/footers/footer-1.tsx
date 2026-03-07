"use client";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Building2,
  Clock,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "Info@perspectivetester.com";

type FooterLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

const PRODUCT_LINKS: FooterLink[] = [
  { label: "A3S", href: "/a3s", icon: ShieldCheck },
  { label: "P15R", href: "/manage", icon: Sparkles },
];

const COMPANY_LINKS: FooterLink[] = [
  { label: "Clients", href: "/clients", icon: Building2 },
  { label: "About", href: "/about", icon: FileText },
  { label: "Contact", href: "/contact", icon: Mail },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy", href: "/privacy", icon: ShieldCheck },
  { label: "Terms", href: "/terms", icon: Scale },
  { label: "Accessibility", href: "/accessibility", icon: FileText },
];

const PLATFORM_LINKS: FooterLink[] = [
  { label: "a3s.app", href: "https://a3s.app", icon: ArrowUpRight, external: true },
  { label: "p15r.com", href: "https://p15r.com", icon: ArrowUpRight, external: true },
];

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/perspective-tester",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/perspectivetester/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/PerspectiveTester",
    icon: Facebook,
  },
] as const;

function FooterLinks({
  heading,
  links,
  linkLabel,
}: {
  heading: string;
  links: FooterLink[];
  linkLabel: string;
}) {
  return (
    <nav aria-label={linkLabel} className="flex flex-col gap-3">
      <h3 className="text-foreground text-sm font-semibold tracking-wide">
        {heading}
      </h3>
      <div className="flex flex-col gap-1.5">
        {links.map(({ label, href, icon: Icon, external }) => (
          <Link
            key={label}
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors"
          >
            <Icon className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Footer1() {
  return (
    <footer
      className="border-t bg-background"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-padding-x container mx-auto py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Go to homepage" className="w-fit">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Enterprise accessibility testing, remediation workflows, and
              compliance reporting for government and high-stakes digital
              programs.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground hover:text-foreground inline-flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors sm:w-fit"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="break-all sm:break-normal">{CONTACT_EMAIL}</span>
              </a>
              <p className="text-muted-foreground inline-flex items-center gap-2 px-2 py-1.5 text-sm">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>Typical response: within 1 business day</span>
              </p>
            </div>
            <nav aria-label="Footer social links" className="flex flex-col gap-3">
              <h3 className="text-foreground text-sm font-semibold tracking-wide">
                Follow Us
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="text-muted-foreground hover:text-foreground inline-flex h-10 w-10 items-center justify-center rounded-full border bg-card transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">{label}</span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <FooterLinks
            heading="Products"
            links={PRODUCT_LINKS}
            linkLabel="Footer product links"
          />
          <FooterLinks
            heading="Company"
            links={COMPANY_LINKS}
            linkLabel="Footer company links"
          />
          <div className="flex flex-col gap-8">
            <FooterLinks
              heading="Legal"
              links={LEGAL_LINKS}
              linkLabel="Footer legal links"
            />
            <FooterLinks
              heading="Platforms"
              links={PLATFORM_LINKS}
              linkLabel="Footer platform links"
            />
          </div>
        </div>

        <div className="my-8 h-px w-full bg-border" role="presentation" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Perspective Tester. All rights
            reserved.
          </p>
          <p className="inline-flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            <span>Built with accessibility-first standards.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
