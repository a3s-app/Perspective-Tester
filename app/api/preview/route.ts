import { timingSafeEqual } from "node:crypto";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

const SECTIONS = new Set(["blog", "news"]);
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function matches(given: string, expected: string) {
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

// /api/preview?secret=…&slug=my-post (&type=news) shows that unpublished draft.
export async function GET(request: NextRequest) {
  const expected = process.env.SANITY_PREVIEW_SECRET;
  if (!expected || !process.env.SANITY_VIEWER_TOKEN)
    return new Response("Draft preview is not configured", { status: 503 });

  const params = request.nextUrl.searchParams;
  const slug = params.get("slug") ?? "";
  const type = params.get("type") ?? "blog";
  if (!matches(params.get("secret") ?? "", expected))
    return new Response("Invalid preview link", { status: 401 });
  if (!SLUG.test(slug) || !SECTIONS.has(type))
    return new Response("Invalid preview link", { status: 400 });

  (await draftMode()).enable();
  redirect(`/${type}/${slug}`);
}
