import type { Metadata } from "next";
import { getAllGuides, type Guide } from "@/cms/articles";
import { getSettings } from "@/cms/server";
import { SiteShell } from "@/components/pro-blocks/landing-page/site-shell";
import {
  GuidesIndexPage,
  type GuideCard,
} from "@/components/pro-blocks/landing-page/guides-index-page";

export const revalidate = 3600;

const description =
  "Practical guides drawn from our accessibility audits and testing work.";

export const metadata: Metadata = {
  title: "Accessibility Guides",
  description,
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Accessibility Guides",
    description,
    url: "/guides",
    type: "website",
  },
};

function readingTime(guide: Guide) {
  const text = guide.body
    .flatMap((block) =>
      block._type === "guideTable"
        ? (block.rows ?? []).flatMap((row) => row.cells ?? [])
        : (block.children ?? []).map((span) => span.text ?? ""),
    )
    .join(" ");
  const words = `${guide.title} ${text}`.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}

export default async function GuidesPage() {
  const guides: GuideCard[] = (await getAllGuides()).map((guide) => ({
    href: `/guides/${guide.slug}`,
    title: guide.title,
    description: guide.description,
    date: guide.date,
    dateLabel: guide.dateLabel,
    readingTime: readingTime(guide),
  }));
  const settings = await getSettings();
  return (
    <SiteShell>
      <GuidesIndexPage
        guides={guides}
        siteURL={settings.siteURL || "https://perspectivetester.com"}
      />
    </SiteShell>
  );
}
