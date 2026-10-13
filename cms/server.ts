import type {
  SETTINGS_QUERY_RESULT,
  PAGE_QUERY_RESULT,
  SECTION_QUERY_RESULT,
  ROUTES_QUERY_RESULT,
} from "@/sanity.types";
import "server-only";
import { cache } from "react";
import { publishedClient } from "@/sanity/client";
import {
  PAGE_QUERY,
  ROUTES_QUERY,
  SECTION_QUERY,
  SETTINGS_QUERY,
} from "@/sanity/queries";
import { sectionDefaults } from "./section-defaults";
import { decodeContent, isObject } from "./content-utils";
import type { ContentMap } from "@/components/cms/content-provider";

export const cacheOptions = (tags: string[]) => ({
  next: { revalidate: 3600, tags },
});
export const getSettings = cache(async () => {
  const settings = await publishedClient.fetch<SETTINGS_QUERY_RESULT>(
    SETTINGS_QUERY,
    {},
    cacheOptions(["settings"]),
  );
  if (!settings)
    throw new Error(
      "Sanity has no site settings. Run the Studio content import first.",
    );
  return settings;
});
export const getPage = cache((path: string) =>
  publishedClient.fetch<PAGE_QUERY_RESULT>(
    PAGE_QUERY,
    { path },
    cacheOptions([`page:${path}`]),
  ),
);
export const getRoutes = cache(() =>
  publishedClient.fetch<ROUTES_QUERY_RESULT>(
    ROUTES_QUERY,
    {},
    cacheOptions(["routes"]),
  ),
);
export const getSection = cache((id: string) =>
  publishedClient.fetch<SECTION_QUERY_RESULT>(
    SECTION_QUERY,
    { id },
    cacheOptions([`section:${id}`]),
  ),
);
export async function getSections(ids: (string | null)[] = []) {
  return (
    await Promise.all(ids.filter((id): id is string => !!id).map(getSection))
  ).filter((s) => s !== null);
}
export function contentMap(
  sections: Awaited<ReturnType<typeof getSections>>,
): ContentMap {
  return Object.fromEntries(
    sections.flatMap((section) => {
      if (!section.template || !sectionDefaults[section.template]) return [];
      const value = decodeContent(
        section.content?.[0],
        sectionDefaults[section.template],
      );
      return isObject(value) ? [[section.template, value]] : [];
    }),
  );
}
export async function getSharedContent() {
  const settings = await getSettings();
  return {
    ...contentMap(await getSections(settings.sharedSectionIds ?? [])),
    "site-settings": {
      name: settings.name,
      contactEmail: settings.contactEmail,
      siteURL: settings.siteURL,
    },
  };
}
