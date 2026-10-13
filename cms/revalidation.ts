export type ContentChange = {
  _id: string;
  _type: string;
  path?: string;
  previousPath?: string;
  slug?: string;
  previousSlug?: string;
};
export function changeTags(change: ContentChange): string[] {
  if (
    !change._id ||
    change._id.startsWith("drafts.") ||
    change._id.startsWith("versions.")
  )
    return [];
  switch (change._type) {
    case "siteSettings":
      return ["settings"];
    case "section":
      return [`section:${change._id}`];
    case "author":
      return ["authors"];
    case "page":
      return [
        "routes",
        ...[change.path, change.previousPath]
          .filter(
            (p): p is string => !!p && p.startsWith("/") && p.length < 240,
          )
          .map((p) => `page:${p}`),
      ];
    case "post":
      return [
        "posts",
        ...[change.slug, change.previousSlug]
          .filter((s): s is string => !!s && s.length < 240)
          .map((s) => `post:${s}`),
      ];
    case "news":
      return [
        "news",
        ...[change.slug, change.previousSlug]
          .filter((s): s is string => !!s && s.length < 240)
          .map((s) => `news:${s}`),
      ];
    default:
      return [];
  }
}
