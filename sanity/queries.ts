import { defineQuery } from "next-sanity";

export const SETTINGS_QUERY =
  defineQuery(`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  _id, name, description, siteURL, contactEmail, seo, keywords, socialLinks,
  "sharedSectionIds": sharedSections[]._ref
}`);
export const PAGE_QUERY = defineQuery(`*[_type == "page" && path == $path][0]{
  _id, title, path, seo, body, "sectionIds": sections[]._ref
}`);
export const SECTION_QUERY = defineQuery(
  `*[_type == "section" && _id == $id][0]{ _id, template, content }`,
);
export const ROUTES_QUERY = defineQuery(
  `*[_type == "page" && defined(path)]{path, title, _updatedAt, "noIndex": seo.noIndex}`,
);
export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)] | order(date desc){
  _id, "slug": slug.current, title, description, date, hero, heroAlt, heroCredit, tags, body, seo,
  author->{name, role, photo}
}`);
export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  _id, "slug": slug.current, title, description, date, hero, heroAlt, heroCredit, tags, body, seo,
  author->{name, role, photo}
}`);
export const NEWS_QUERY =
  defineQuery(`*[_type == "news" && defined(slug.current)] | order(date desc){
  _id, "slug": slug.current, title, description, date, hero, heroAlt, heroCredit, tags, body, seo,
  heroSize, heroMatte
}`);
export const NEWS_ITEM_QUERY =
  defineQuery(`*[_type == "news" && slug.current == $slug][0]{
  _id, "slug": slug.current, title, description, date, hero, heroAlt, heroCredit, tags, body, seo,
  heroSize, heroMatte
}`);
