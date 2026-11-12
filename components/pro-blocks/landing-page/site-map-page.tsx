"use client";

import Link from "next/link";
import { useSection } from "@/components/cms/content-provider";
import defaults from "@/cms/content/footer-1.json";
import { PageBreadcrumb } from "@/components/pro-blocks/landing-page/page-breadcrumb";

export type SiteMapLink = { label: string; href: string };

type FooterLink = { label: string; href: string };

// Built from the same link lists as the footer, so the two stay in step.
// Pages that sit under a section (articles, the case study) are nested
// under that section's link.
export function SiteMapPage({
  nested,
  siteURL,
}: {
  nested: Record<string, SiteMapLink[]>;
  siteURL: string;
}) {
  const content = useSection("footer-1", defaults);
  const company: FooterLink[] = [
    ...content.COMPANY_LINKS,
    ...[
      { label: "Guides", href: "/guides" },
      { label: "Accessibility Testing Guide", href: "/accessibility-testing-guide" },
    ].filter((extra) => !content.COMPANY_LINKS.some((link) => link.href === extra.href)),
  ];
  const groups: { heading: string; links: FooterLink[] }[] = [
    { heading: content.heading_10, links: content.PRODUCT_LINKS },
    { heading: content.heading_12, links: company },
    { heading: content.heading_14, links: content.LEGAL_LINKS },
  ];
  const listed = new Set(groups.flatMap((g) => g.links.map((l) => l.href)));
  const childrenOf = (href: string) =>
    (nested[href] ?? []).filter((child) => !listed.has(child.href));

  return (
    <section className="bg-background section-padding-y">
      <div className="container-padding-x container mx-auto flex max-w-4xl flex-col gap-10">
        <PageBreadcrumb
          siteURL={siteURL}
          items={[{ label: "Home", href: "/" }, { label: "Site map" }]}
        />
        <h1 className="heading-xl text-foreground">Site map</h1>
        <p>
          <Link href="/" className={LINK}>
            Home
          </Link>
        </p>
        {groups.map((group) => (
          <div key={group.heading} className="flex flex-col gap-4">
            <h2 className="heading-sm text-foreground">{group.heading}</h2>
            <ul role="list" className="flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={LINK}>
                    {link.label}
                  </Link>
                  {childrenOf(link.href).length ? (
                    <ul
                      role="list"
                      className="mt-3 flex flex-col gap-3 border-l pl-5"
                    >
                      {childrenOf(link.href).map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className={LINK}>
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const LINK =
  "inline-block py-0.5 font-medium text-foreground underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary [overflow-wrap:anywhere]";
