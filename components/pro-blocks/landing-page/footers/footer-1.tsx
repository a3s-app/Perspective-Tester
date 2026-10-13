"use client";

import { useSection, useSiteSettings } from "@/components/cms/content-provider";
import defaults from "@/cms/content/footer-1.json";

import { Logo } from "@/components/pro-blocks/logo";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Clock,
  Facebook,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  Megaphone,
  Newspaper,
  RefreshCw,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
};

const contentIcons = {
  ShieldCheck,
  RefreshCw,
  Sparkles,
  Building2,
  BookOpen,
  ShieldAlert,
  Newspaper,
  Megaphone,
  FileText,
  Mail,
  Scale,
  ArrowUpRight,
  Linkedin,
  Instagram,
  Facebook,
};

function FooterLinks({
  heading,
  links,
  linkLabel,
}: {
  heading: string;
  links: FooterLink[];
  linkLabel: string;
}) {
  const content = useSection("footer-1", defaults, contentIcons);

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
            <Icon
              className="h-4 w-4 shrink-0 text-primary"
              aria-hidden="true"
            />
            <span>{label}</span>
            {external ? (
              <span className="sr-only"> {content.text_1}</span>
            ) : null}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export function Footer1() {
  const { contactEmail: CONTACT_EMAIL } = useSiteSettings();
  const content = useSection("footer-1", defaults, contentIcons);
  const PRODUCT_LINKS: FooterLink[] = content.PRODUCT_LINKS;
  const COMPANY_LINKS: FooterLink[] = content.COMPANY_LINKS;
  const LEGAL_LINKS: FooterLink[] = content.LEGAL_LINKS;
  const PLATFORM_LINKS: FooterLink[] = content.PLATFORM_LINKS;
  const SOCIAL_LINKS = content.SOCIAL_LINKS;

  return (
    <footer
      className="border-t bg-background"
      role="contentinfo"
      aria-label={content.aria_label_2}
    >
      <div className="container-padding-x container mx-auto py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-8">
          <div className="flex flex-col gap-5">
            {/* No aria-label here: it would replace the visible "Perspective
                Tester" wordmark as the accessible name and fail WCAG 2.5.3. */}
            <Link href={content.href_3} className="w-fit">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              {content.paragraph_4}
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground hover:text-foreground inline-flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors sm:w-fit"
              >
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="sr-only">{content.text_5}</span>
                <span className="break-all sm:break-normal">
                  {CONTACT_EMAIL}
                </span>
              </a>
              <p className="text-muted-foreground inline-flex items-center gap-2 px-2 py-1.5 text-sm">
                <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>{content.text_6}</span>
              </p>
            </div>
            <nav
              aria-label={content.aria_label_7}
              className="flex flex-col gap-3"
            >
              <h3 className="text-foreground text-sm font-semibold tracking-wide">
                {content.heading_8}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="text-muted-foreground hover:text-foreground inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-card transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">
                      {label} {content.text_9}
                    </span>
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <FooterLinks
            heading={content.heading_10}
            links={PRODUCT_LINKS}
            linkLabel={content.linkLabel_11}
          />
          <FooterLinks
            heading={content.heading_12}
            links={COMPANY_LINKS}
            linkLabel={content.linkLabel_13}
          />
          <div className="flex flex-col gap-8">
            <FooterLinks
              heading={content.heading_14}
              links={LEGAL_LINKS}
              linkLabel={content.linkLabel_15}
            />
            <FooterLinks
              heading={content.heading_16}
              links={PLATFORM_LINKS}
              linkLabel={content.linkLabel_17}
            />
          </div>
        </div>

        <div className="my-8 h-px w-full bg-border" role="presentation" />

        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {content.paragraph_18}
          </p>
          <p className="inline-flex items-center gap-2">
            <ShieldCheck
              className="h-3.5 w-3.5 text-primary"
              aria-hidden="true"
            />
            <span>{content.text_19}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
