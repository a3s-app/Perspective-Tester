import type { Metadata } from "next";
import { NewsIndexPage } from "@/components/pro-blocks/landing-page/news-index-page";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import { getAllNews } from "@/lib/news";

const SITE_URL = "https://perspectivetester.com";

export const metadata: Metadata = {
  title: "News and Announcements",
  description:
    "Announcements, sponsorships, and company updates from Perspective Tester, including the Colorado Digital Government Summit sponsorship.",
  keywords: [
    "Perspective Tester news",
    "accessibility announcements",
    "Colorado Digital Government Summit",
    "government technology summit",
    "digital accessibility announcements",
  ],
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "News | Perspective Tester",
    description:
      "Announcements, sponsorships, and company updates from the Perspective Tester team.",
    url: "/news",
    type: "website",
  },
};

export default function Page() {
  const items = getAllNews();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Perspective Tester News",
    description:
      "Announcements, sponsorships, and company updates from the Perspective Tester team.",
    url: `${SITE_URL}/news`,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/news/${item.slug}`,
        name: item.title,
      })),
    },
  };

  return (
    <SiteShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <NewsIndexPage />
    </SiteShell>
  );
}
