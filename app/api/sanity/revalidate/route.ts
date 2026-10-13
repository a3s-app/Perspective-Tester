import { NextRequest } from "next/server";
import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { changeTags, type ContentChange } from "@/cms/revalidation";

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret)
    return Response.json(
      { error: "Revalidation is not configured" },
      { status: 503 },
    );
  try {
    const { body, isValidSignature } = await parseBody<ContentChange>(
      request,
      secret,
      true,
    );
    if (!isValidSignature)
      return Response.json({ error: "Invalid signature" }, { status: 401 });
    if (!body || typeof body._type !== "string" || typeof body._id !== "string")
      return Response.json(
        { error: "Invalid content change" },
        { status: 400 },
      );
    const tags = [...new Set(changeTags(body))];
    tags.forEach((tag) => revalidateTag(tag, { expire: 0 }));
    return Response.json({ revalidated: tags });
  } catch {
    return Response.json(
      { error: "Unable to validate content change" },
      { status: 400 },
    );
  }
}
