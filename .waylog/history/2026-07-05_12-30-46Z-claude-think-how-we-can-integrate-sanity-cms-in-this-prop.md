# Think how we can integrate sanity cms in this prop
_Exported on 08/04/2026 at 02:30:32 GMT+5:30 from Claude via WayLog_


**User**

Think how we can integrate sanity cms in this properly create a proper a clean plan analyse how current blog appears think of it properly and research properly and develop and integration plan in this

---


**Claude**

I'll analyze how the blog currently works in this project, then research Sanity integration patterns and put together a clean plan. Let me start by exploring the codebase.

---


**Claude**

Now let me look at the rendering components and the deployment pipeline.

---


**Claude**

While research runs, let me check the sitemap (looks manually maintained) and the audio reader's dependency on the content model.

---


**Claude**

Research is done and it confirmed some important constraints. Here's the complete analysis and integration plan.

## TL;DR

Your blog is two hardcoded posts in [lib/blog.ts](lib/blog.ts) rendered by a fully static Next.js 15 export deployed to GitHub Pages. Sanity fits this well — but only in one specific shape: **fetch content at build time with `@sanity/client`, host the Studio separately on Sanity's free hosting (not embedded in the app), and let a Sanity webhook trigger a GitHub Actions rebuild on every publish.** Notably, the standard `next-sanity` package should be **avoided entirely** — its current version requires Next 16, and even its Next-15-compatible line has a known bug that breaks `output: "export"` builds.

## How the blog works today

- **Content**: `blogPosts` array in [lib/blog.ts](lib/blog.ts) — a custom block model of `heading | paragraph` blocks, where inline links are declared as exact substrings matched at render time (`toSegments`). Adding a post means editing TypeScript and committing.
- **Rendering**: [app/blog/page.tsx](app/blog/page.tsx) → `BlogIndexPage` (featured card + grid), [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx) → `BlogPostPage`, with `generateStaticParams` + `dynamicParams = false`, full OG/Twitter metadata and BlogPosting JSON-LD.
- **Derived features that depend on the data model**: reading time (word count over all blocks), the audio reader (joins all block text into one plain string), heading anchors (`slugifyHeading`), the RSS feed at [app/blog/feed.xml/route.ts](app/blog/feed.xml/route.ts) (`force-static`, generated at build).
- **Images**: local files in `public/blog/` and author photos in `public/`, served through `assetPath()` (GitHub Pages basePath handling) with `next/image` `unoptimized: true`.
- **SEO**: [public/sitemap.xml](public/sitemap.xml) is **hand-maintained** with blog URLs hardcoded — a thing that silently goes stale with a CMS if not addressed.
- **Deploy**: push to `main` → GitHub Actions → `next build` (static export) → GitHub Pages.

## The governing constraint

`output: "export"` means there is no server at runtime: no ISR, no `revalidate`, no draft mode, no API routes on the host. So Sanity content can only enter the site **at build time**, and "publishing" means "trigger a rebuild." That's actually a great fit for a low-volume marketing blog — the production site makes zero runtime API calls, and Sanity's free tier (10k documents, 100 GB bandwidth) is far more than you'll ever use.

## Target architecture

```
Editor writes in Sanity Studio (hosted free at yourname.sanity.studio)
        │ publish
        ▼
Sanity GROQ webhook ──POST──▶ GitHub repository_dispatch API
        ▼
GitHub Actions rebuild (same deploy.yml, one extra trigger)
  • next build fetches published posts via @sanity/client (GROQ)
  • generateStaticParams builds one page per post
        ▼
Static site on GitHub Pages   •   images served from Sanity's image CDN
```

Content is live ~2–3 minutes after clicking Publish, with no hosting changes and no new costs.

## Key decisions (and why)

1. **Skip `next-sanity`; use `@sanity/client` + `groq` + `@portabletext/react` directly.** The current `next-sanity` v13 requires Next 16, and the Next-15-compatible v11 has an open bug ([#1899](https://github.com/sanity-io/next-sanity/issues/1899)) where *any* import from it breaks static-export builds ("Server Actions are not supported with static export"). Everything you need — the client, GROQ, image URLs, Portable Text rendering — works without it.
2. **Standalone Studio in a `studio/` folder, deployed with `sanity deploy` to `*.sanity.studio` (free).** Embedding a `/studio` route in the app is effectively unsupported under `output: "export"` ([#703](https://github.com/sanity-io/next-sanity/issues/703)), and GitHub Pages would 404 the Studio's client-side routes anyway. A separate folder also isolates Studio's heavy dependency tree (React 19.2, Node 22) from your site build.
3. **Portable Text replaces the custom block model.** Your `heading | paragraph + substring links` model maps 1:1 onto Portable Text (`styles: [normal, h2]`, a `link` annotation instead of fragile substring matching — editors select text and add a URL, like any editor). Reading time and the audio reader keep working via `toPlainText`.
4. **Authors as separate documents.** Both posts share one author; a referenced `author` document (name, role, photo) avoids retyping and gives correct attribution as the team grows.
5. **No live visual preview in v1.** Draft mode requires a server; on GitHub Pages it doesn't exist. Editors preview inside Studio's document view (drafts are never published to the site — the client's `perspective: "published"` guarantees it). If real preview becomes a need later, a free Vercel preview-only deployment can be added without touching production.

## Content model

```
post                                    author
├─ title        string (req)            ├─ name   string
├─ slug         slug (from title, req)  ├─ role   string
├─ description  text (req)              └─ photo  image
├─ author       reference → author
├─ publishedAt  date (req)              tag: keep as string array on post
├─ heroImage    image + hotspot         (2 posts don't justify a tag
│    ├─ alt     string (req — you're    document type yet)
│    └─ credit  string (optional)        an a11y company; validate alt)
├─ tags         array<string>
└─ body         Portable Text
     styles: normal, h2
     marks: strong, em, link {href, validated http/https}
```

`dateLabel` disappears — derive it from `publishedAt` with `date-fns` (already a dependency). Heading anchors keep working: `slugifyHeading` runs on h2 block text at render.

## Implementation plan (5 phases, independently shippable)

**Phase 1 — Sanity project + Studio** (~half a day)
- Create the Sanity project (free plan), one public `production` dataset.
- Add `studio/` folder (`npm create sanity@latest`, Studio v6): define `post` and `author` schemas with validations (required alt text, slug uniqueness, http/https-only links).
- `sanity deploy` → hosted Studio; add its origin in Sanity CORS settings.

**Phase 2 — one-time content migration** (~half a day)
- Script (`scripts/migrate-to-sanity.ts`) using `@sanity/client` with a write token: upload the 2 hero images + author photo via `assets.upload`, convert each `BlogContentBlock[]` to Portable Text (paragraph → `block/normal`; heading → `block/h2`; each `links` entry → a `link` mark span produced by the same substring matching `toSegments` does today), then `createOrReplace` with deterministic `_id`s (`post-<slug>`) so it's idempotent.
- Verify in Studio that both posts round-tripped correctly.

**Phase 3 — frontend integration** (~1 day, the core)
- Add deps to the site: `@sanity/client`, `groq`, `@portabletext/react`, `@sanity/image-url`.
- New `lib/sanity.ts`: client (`apiVersion: "2025-02-19"`, `perspective: "published"`, `useCdn: false` — build-time only, avoids CDN staleness on webhook rebuilds), GROQ queries, image URL builder (`w`, `auto=format`, `q=75`, `fit=max`).
- Rewrite [lib/blog.ts](lib/blog.ts): `BlogPost` type becomes the GROQ projection shape; `getAllPosts`/`getPostBySlug` become async fetches; `getReadingTime` and audio text switch to `toPlainText(body)`. Delete `toSegments`.
- Update consumers: `BlogIndexPage` and blog pages become async; `BlogPostPage` renders `body` with `<PortableText>` and custom components that reproduce the exact current classes (h2 with anchor id, paragraph styles, link styles); hero/author images switch from `assetPath()` to Sanity CDN URLs (alt text comes from the CMS).
- Update [feed.xml route](app/blog/feed.xml/route.ts) to the async fetch.
- **Replace the static sitemap with `app/sitemap.ts`** (supported in static export) so new posts are included automatically — delete the blog entries from the hand-maintained file (or move fully to generated).
- Build-safety detail: `generateStaticParams` returning `[]` with `dynamicParams = false` must not silently produce an empty blog — fail the build if the fetch errors.

**Phase 4 — publish-to-deploy automation** (~2 hours)
- Add `repository_dispatch: types: [sanity-publish]` trigger to [deploy.yml](.github/workflows/deploy.yml), plus a `concurrency` group with `cancel-in-progress: true` (multi-document publishes fire multiple webhook deliveries).
- Add `NEXT_PUBLIC_SANITY_PROJECT_ID` / dataset as repo variables.
- In Sanity: GROQ webhook filtered to `_type == "post" || _type == "author"`, POSTing `{"event_type": "sanity-publish"}` to `https://api.github.com/repos/<owner>/Perspective-Tester/dispatches` with a **fine-grained, single-repo PAT** in the Authorization header (it's visible to anyone with Sanity API-settings access, so scope it minimally; note `repository_dispatch` only triggers on the default branch — fine, you deploy from `main`).

**Phase 5 — cleanup + verification** (~2 hours)
- Delete the hardcoded posts array, migrated images from `public/blog/`, and dead helpers.
- End-to-end test: edit a post in Studio → publish → watch Actions build → confirm the change on GitHub Pages; verify OG metadata, JSON-LD, RSS, sitemap, audio reader, and heading anchors survived; run a build with the `GITHUB_PAGES=true` basePath.

## Risks & gotchas worth knowing upfront

- **Version trap**: most Sanity+Next tutorials assume `next-sanity` and a server runtime — they will mislead here. The plan above deliberately avoids that package. (Alternatively, upgrading the site to Next 16 first would unlock the standard toolchain, but that's a separate project.)
- **Image domain**: images move from same-origin to `cdn.sanity.io` — no config change needed since `unoptimized: true`, but `assetPath()` must not be applied to CDN URLs.
- **Editorial link workflow changes**: links become selections in the editor rather than substring declarations — strictly better, but the migration script must convert the old format carefully (overlapping/missing substrings already get skipped today; log any that don't match).
- **A failed webhook = stale site**, silently. Worth adding a build-failure notification (Actions email is on by default) and knowing you can always rebuild manually via `workflow_dispatch`.
- **Free plan is ample** but has hard stops (no overages): 10k docs, 250k API req/mo, 100 GB bandwidth — a static blog uses a rounding error of this.

Rough total: **2–3 focused days**. Phases 1–3 can be built and verified locally without touching production; the site keeps working from hardcoded content until the cutover in Phase 3 merges.

If you want, I can start executing this — Phase 1's schemas and the Phase 2 migration script are fully specifiable from the current code, so the natural first step is scaffolding the `studio/` folder and schemas (you'd need to create the Sanity project/account and provide the project ID).

---


**User**

leave content migration aside let's integrate it for now

---


**Claude**

Got it — I'll skip the migration and wire in the Sanity integration now, keeping the two existing hardcoded posts rendering from local data until you decide to migrate them. The site will merge build-time Sanity posts with the local ones (Sanity wins on slug conflicts), and it will build fine even before the Sanity project ID exists.

---


**Claude**

Now the helper functions at the bottom of the file:

---


**Claude**

Now task 3: the components and pages. First `assetPath` needs to pass through absolute CDN URLs:

---


**Claude**

Now the schemas — modeled to match the exact shape the frontend queries:

---


**Claude**

Studio dependencies installed. Now verifying everything compiles and builds:

---


**Claude**

Build succeeds with both posts. Let me verify the rendered output — heading anchors, inline links, sitemap, and RSS:

---


**Claude**

Sitemap and anchors check out. The paragraph count of 1 is just line-based grep on minified HTML — let me count occurrences properly:

---


**Claude**

All rendering verified. One more build in CI's exact configuration (GitHub Pages basePath):

---


**Claude**

The Sanity integration is built and verified — both the normal and GitHub Pages builds pass, with the two existing posts rendering identically to before. The site now works in three modes: no Sanity config (local posts only, exactly like today), Sanity configured (published posts merged in at build time, Sanity winning on slug conflicts), and eventually Sanity-only once you migrate.

**What changed:**

- **[lib/sanity.ts](lib/sanity.ts)** (new) — `@sanity/client` with `perspective: "published"` and CDN off (build-time only), the GROQ posts query, and mapping to the existing `BlogPost` shape with hero/author images built as sized `auto=format` Sanity CDN URLs. Deliberately avoids `next-sanity`, whose Next 15 line breaks `output: "export"` builds. If a configured project is unreachable, the build fails instead of shipping an empty blog.
- **[lib/blog.ts](lib/blog.ts)** — `content` is now Portable Text. The two hardcoded posts stay untouched in their original authoring format and are converted at load time (the old substring-link logic became the converter). `getAllPosts`/`getPostBySlug` are async and merge Sanity + local posts.
- **[blog-post-page.tsx](components/pro-blocks/landing-page/blog-post-page.tsx)** — body renders through `<PortableText>` with components reproducing the exact previous markup: same paragraph/link classes, `h2` ids for anchors. Reading time and the audio reader now derive from `toPlainText`.
- **[app/sitemap.ts](app/sitemap.ts)** (new) replaces the hand-maintained `public/sitemap.xml`, so new CMS posts appear in the sitemap automatically. RSS feed and JSON-LD updated for the async source.
- **`studio/`** (new) — standalone Sanity Studio v6 with `post` and `author` schemas matching the frontend query (required alt text on hero images, http/https-validated links, body restricted to what the site actually renders). Typechecks clean. It deploys to Sanity's free hosting — embedding it in the app is unsupported under static export.
- **[deploy.yml](.github/workflows/deploy.yml)** — added a `repository_dispatch: [sanity-publish]` trigger and the two `NEXT_PUBLIC_SANITY_*` build vars, so a Sanity webhook can trigger deploys.

**What's left needs your accounts** — all steps are written up in [docs/sanity-setup.md](docs/sanity-setup.md):
1. Create the Sanity project (`cd studio && npx sanity login && npx sanity init --bare`), put the project id in `studio/.env` and deploy the Studio.
2. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` / `NEXT_PUBLIC_SANITY_DATASET` as GitHub repository variables (and `.env.local` for local dev). No API token needed — the build only reads published docs from a public dataset.
3. Create the Sanity webhook pointing at GitHub's `repository_dispatch` endpoint with a fine-grained PAT (exact settings in the doc).

One housekeeping note: I updated `package-lock.json` (what CI's `npm ci` uses) but not `pnpm-lock.yaml` — if you install with pnpm locally, run `pnpm install` once to sync it. Nothing is committed yet; say the word if you want a commit.

---


**User**

How can I make it instant as soon as I publish it there it should be showed on the site as well ?

---


**Claude**

Short answer: on the current GitHub Pages setup, truly instant isn't possible — the site is static files, so new content can only appear after a rebuild (the webhook pipeline I wired up gets you to ~2–3 minutes, and that's close to the floor). "Instant" requires changing one of two things:

## Option 1 — Move hosting to Vercel (the real fix, ~seconds)

This is the standard way to get instant publishing with Sanity, and your stack is already ideal for it:

- Deploy the same Next.js app to Vercel's free tier and drop `output: "export"`. Pages become ISR (server-rendered once, then cached at the edge).
- The Sanity webhook stops triggering a rebuild and instead hits a tiny `/api/revalidate` route that calls `revalidateTag("posts")` — the changed page regenerates on the next request.
- **Publish → live in 1–5 seconds.** No build, no Actions run.

Bonuses you also get: new post slugs work immediately (no more `dynamicParams = false` constraint), the `/api/contact` Resend route actually works in production (it currently can't run on GitHub Pages), no more basePath/`assetPath` juggling, and draft preview / Sanity's Presentation tool becomes possible later. You'd point the `perspectivetester.com` DNS at Vercel; GitHub Pages can stay as a fallback. The free Hobby tier is fine for a marketing site (non-commercial terms nominally apply — the $20/mo Pro tier if you want to be strict about that).

## Option 2 — Stay on GitHub Pages, fetch client-side (compromise, not recommended)

The blog index could fetch fresh posts from Sanity's CDN in the browser on top of the static build. But it's a half-measure: a brand-new post's *page* wouldn't exist until the rebuild anyway (its URL would 404), search engines see only the build-time content, and you add a loading flash for every visitor to solve a 2-minute editorial delay. I'd skip this.

## Option 3 — Accept ~2 minutes, tighten the pipeline

If "a couple of minutes" is actually fine, the current setup is the right one: keep the build lean (it's already ~40s), and the deploy adds another minute. There's no way below ~1.5 minutes on Pages.

**My recommendation:** if instant publishing matters to you, Option 1 — it's a small migration (delete the export config, add one revalidate route, change the webhook URL, move DNS), and it removes several other limitations at once. Want me to do that migration, or keep the current setup?

---


**User**

it's already hosted on vercel github pages isjust added and not used

---


**Claude**

Ah, that changes everything — if Vercel is the real host, we can drop the static-export constraint and get true instant publishing with ISR + on-demand revalidation. Let me check for any Vercel-specific config first, then make the switch.

---


**Claude**

Now the env example and docs updates:

---


**Claude**

Done — the site now supports instant publishing. Since Vercel is the real host, I removed the static-export constraint entirely and switched to ISR with on-demand revalidation:

**How it works now:** every Sanity fetch is cached under a `sanity-content` tag. When you publish in Studio, a Sanity webhook POSTs to `/api/revalidate?secret=…`, which invalidates that tag — the blog index, the post page, feed, and sitemap all regenerate on their next request. **Publish → live in a few seconds**, no build, no redeploy. Posts published after the last deploy also work immediately (I removed `dynamicParams = false`, so new slugs render on first request instead of 404ing).

**What changed:**
- [next.config.mjs](next.config.mjs) — dropped `output: "export"` and the GitHub Pages basePath logic.
- Deleted `.github/workflows/deploy.yml` — with static export gone it would have failed on every push, and you confirmed Pages is unused. (It's in git history if you ever want it back.) Vercel's own git integration handles deploys.
- [lib/sanity.ts](lib/sanity.ts) — fetches now use `cache: "force-cache"` with the revalidation tag instead of a build-time memo.
- [app/api/revalidate/route.ts](app/api/revalidate/route.ts) (new) — the webhook endpoint, guarded by a `SANITY_REVALIDATE_SECRET` shared secret.
- Feed and sitemap regenerate on publish (hourly fallback). Side bonus: your `/api/contact` Resend route now actually runs in production — it couldn't under static export.
- Build verified: typecheck clean, `next build` passes with the right route types (blog pages SSG, revalidate route serverless).

**Your three setup steps** (all detailed in [docs/sanity-setup.md](docs/sanity-setup.md)):
1. Create the Sanity project: `cd studio && npm install && npx sanity login && npx sanity init --bare`, then deploy the Studio with `npm run deploy`.
2. In Vercel env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET=production`, and `SANITY_REVALIDATE_SECRET` (generate with `openssl rand -hex 32`), then redeploy once.
3. In sanity.io/manage → API → Webhooks: POST to `https://perspectivetester.com/api/revalidate?secret=<that secret>`, filter `_type == "post" || _type == "author"`, trigger on create/update/delete.

Nothing is committed yet — want me to commit this?

---
