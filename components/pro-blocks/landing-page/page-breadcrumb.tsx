import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

// The last crumb is the current page: plain text marked aria-current, not a link.
export function PageBreadcrumb({
  items,
  tone = "default",
  siteURL,
}: {
  items: Crumb[];
  tone?: "default" | "inverse";
  siteURL: string;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: new URL(item.href, siteURL).href } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ol
        className={cn(
          "flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm",
          tone === "inverse" ? "text-white/85" : "text-muted-foreground",
        )}
      >
        {items.map((item, index) => (
          <li
            key={item.label}
            className={cn(
              "inline-flex items-center gap-1.5",
              // A long current-page title repeats the h1 right below it, so
              // phones show only the trail of links.
              !item.href && item.label.length > 30 && "max-sm:hidden",
            )}
          >
            {index > 0 ? (
              <ChevronRight className="size-3.5 shrink-0" aria-hidden="true" />
            ) : null}
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "rounded-sm underline underline-offset-4 transition-colors",
                  tone === "inverse"
                    ? "decoration-white/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    : "decoration-muted-foreground/50 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span
                aria-current="page"
                className={
                  tone === "inverse" ? "text-white" : "text-foreground"
                }
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
