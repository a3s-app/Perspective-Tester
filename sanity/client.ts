import { createClient } from "next-sanity";

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "j6m3ma08";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-10-13";
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  perspective: "published",
  useCdn: true,
});
// ISR already caches these responses. Regeneration must read the latest publish.
export const publishedClient = client.withConfig({ useCdn: false });
// Draft preview only. The token is server-side and never sent to the browser.
export const previewClient = client.withConfig({
  useCdn: false,
  perspective: "drafts",
  token: process.env.SANITY_VIEWER_TOKEN,
  stega: false,
});
