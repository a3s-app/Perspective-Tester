export type ContentChange = {
  _id: string;
  _type: string;
  path?: string;
  previousPath?: string;
  slug?: string;
  previousSlug?: string;
};
const ARTICLE_ROUTES: Record<string, string> = {
  post: "/blog",
  news: "/news",
  guide: "/guides",
};
// A slug that 404'd before it was published keeps its cached 404 page, which
// carries no content tag, so the article's own URL is cleared by path too.
export function changePaths(change: ContentChange): string[] {
  const base = ARTICLE_ROUTES[change._type];
  if (!base || !change._id || /^(drafts|versions)\./.test(change._id))
    return [];
  return [change.slug, change.previousSlug]
    .filter((s): s is string => !!s && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s))
    .map((s) => `${base}/${s}`)
    .concat(change._type === "guide" ? ["/guides"] : []);
}
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
    case "guide":
      return [
        "guides",
        ...[change.slug, change.previousSlug]
          .filter((s): s is string => !!s && s.length < 240)
          .map((s) => `guide:${s}`),
      ];
    default:
      return [];
  }
}
