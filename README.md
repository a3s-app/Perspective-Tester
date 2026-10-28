# Perspective Tester — Sanity website

The existing marketing website now reads its published content from Sanity project **Perspective Tester (`j6m3ma08`)**, dataset **`production`**. The website runs on Next.js 16 with React 19 and is prepared for Vercel.

- Hosted editor: https://perspective-tester-j6m3ma08.sanity.studio/
- Local website: http://localhost:3001
- This copy started from `origin/main` at `73c9040` on branch `codex/sanity-cms`.
- The original Payload checkout is separate and was preserved.

## Folder layout

Keep these two independent projects together:

```text
sanity-cms/
├── Perspective-Tester/          # This Next.js app; pnpm; its own Git repository
└── studio-perspective-tester/   # Standalone Sanity Studio; npm; its own Git repository
```

The Studio is hosted by Sanity. It is not embedded at `/admin` or `/studio`. Keep both repositories when saving or sharing this work; a website commit does not include the sibling Studio.

## Editing the website

Open the hosted editor and sign in with the Sanity account that owns the project. Its sidebar contains:

| Area | What it controls |
| --- | --- |
| Site settings | Website name, contact email, public URL, default search settings, navigation/footer/shared content references |
| Pages | All 15 existing pages, their URL paths, ordered sections, additional rich text, and search/social metadata |
| Content sections | 26 designs with editable headings, paragraphs, buttons, links, images, lists, logos, testimonials, video IDs and transcripts |
| Blog posts | Article body, author, cover image and description, date, tags, and search/social metadata |
| News | Announcement body, cover image, date, tags, and search/social metadata |
| Authors | Author name, job title, and photo |

The current content is already imported: 15 pages, 26 sections, 3 blog posts, 2 news articles, and 1 author. Original images were uploaded to Sanity. The existing visual designs remain in the website's React components; editors change their content and order in Studio.

To edit a page, open **Pages**, choose the page, then open the relevant **Page sections** reference. Publish the section to make its edit public. Publish the page itself when changing its path, section order, rich text, or search settings. Shared sections update every page that uses them. A new page can use existing section designs or its own rich text. New visual designs still require a component and matching schema.

Drafts stay private until published. To show someone an unpublished blog post or news article as it will look on the site, send them a preview link:

```text
https://www.perspectivetester.com/api/preview?secret=<SANITY_PREVIEW_SECRET>&slug=<post-slug>
```

Add `&type=news` for a news article. The link shows a "Draft preview" banner, is marked `noindex`, and lasts for that browser session; **Exit preview** returns to the public site. Anyone holding the secret can see every draft, so share it only with reviewers and change it if it leaks. Unpublished posts do not appear in the blog list, sitemap or RSS feed.

## Local development

Use Node.js 22.18 or newer and pnpm 9.15.4. From this website folder:

```bash
pnpm install --frozen-lockfile
cp .env.example .env.local # Only if .env.local does not already exist
pnpm dev
```

Set a random `SANITY_REVALIDATE_SECRET` in `.env.local`. Do not commit this file or share the secret. Public project and dataset identifiers are safe to include in source code. Public content reads do not need a Sanity API token.

In a second terminal, run the publish listener from the sibling Studio:

```bash
cd ../studio-perspective-tester
npm ci
npm run content:watch
```

Keep it running while editing. It listens for published Sanity changes and signs refresh requests to the local website. It does not require a tunnel or expose the website publicly. Local development uses port 3001 so the original website on port 3000 can remain running. Optional local Studio: run `npm run dev` in the Studio folder and open http://localhost:3333.

To check a production build locally:

```bash
pnpm build
pnpm start --hostname 127.0.0.1 --port 3001
```

Stop the development server first if it is already using port 3001.

## How caching works

The website fetches **published** content on the server. Next.js generates and caches pages, so a normal repeat visit does not query Sanity for every piece of content. Images are served by Sanity's image CDN.

Sanity queries and generated pages have a one-hour revalidation interval. A signed publish webhook expires the affected cached content sooner; the next request regenerates it. The local listener performs the same refresh while developing. Unpublishing and changing a page path or article slug also clear the old cached route. Sitemap, RSS, and search metadata use CMS content too.

A page already open in a visitor's browser does not replace itself in real time. Reload or navigate again after publishing. ISR's timed refresh is a fallback; without a working webhook, content can remain cached until a request triggers revalidation after the interval.

## Vercel setup

Deploy the website as a Next.js application. GitHub Pages static export cannot run the refresh endpoint or contact API.

1. Connect the website repository to a Vercel project. Use this app directory as the root, the **Next.js** framework, and Node.js 22.18+. `vercel.json` supplies the pnpm install and build commands.
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID=j6m3ma08`, `NEXT_PUBLIC_SANITY_DATASET=production`, and `NEXT_PUBLIC_SITE_URL` to the intended public website URL.
3. Add a long random `SANITY_REVALIDATE_SECRET` as a server-only environment variable. Use the same value in the Sanity webhook below.
4. For draft preview links, add `SANITY_PREVIEW_SECRET` (a long random value) and `SANITY_VIEWER_TOKEN` (a **Viewer** API token from the Sanity project's API settings), both server-only.
5. Deploy the website. Configure its final public URL in **Site settings** as well; it is used in sitemap, RSS and structured data.
6. In [Sanity project settings](https://www.sanity.io/manage/project/j6m3ma08), create one GROQ-powered webhook for `production`, using the configuration below.

Use the production webhook configuration below, and enable it once the deployed website includes the refresh endpoint. The endpoint must be reachable by Sanity; if deployment protection is enabled, configure access for the webhook.

### Production webhook

- URL: `https://www.perspectivetester.com/api/sanity/revalidate` (or your deployed website's canonical hostname)
- Method: **POST**
- Triggers: **Create, Update, Delete**
- Drafts and versions: **off**
- Secret: exactly the website's `SANITY_REVALIDATE_SECRET`
- API version: select `v2025-02-19` in the webhook dropdown. This controls the webhook's GROQ evaluation independently of the website client's API date.

Filter:

```groq
coalesce(after()._type, before()._type) in ["page", "section", "siteSettings", "post", "news", "author"]
&& !(coalesce(after()._id, before()._id) in path("drafts.**"))
&& !(coalesce(after()._id, before()._id) in path("versions.**"))
```

Projection:

```groq
{
  "_id": coalesce(after()._id, before()._id),
  "_type": coalesce(after()._type, before()._type),
  "path": after().path,
  "previousPath": before().path,
  "slug": after().slug.current,
  "previousSlug": before().slug.current
}
```

The before/after values support renaming and unpublishing as well as ordinary updates. See Sanity's [webhook reference](https://www.sanity.io/docs/http-reference/webhooks) for the platform settings. This configuration only sends document identifiers and routing fields.

## Contact delivery

The existing form still uses FormSubmit as its primary delivery service, with the recipient controlled in **Site settings → Contact email**. Its existing optional Resend channel uses server-only `RESEND_API_KEY` and `RESEND_FROM_EMAIL`; use a verified sender when configuring it. No test inquiry was sent during this integration. The old optional Slack integration remains inactive unless configured.

## Development and verification

```bash
pnpm typecheck
pnpm build
```

After changing Studio schemas or GROQ queries, regenerate the types from the sibling Studio:

```bash
cd ../studio-perspective-tester
npm run typegen
npm run typecheck
npm run schema:deploy
```

Generated query result types live in `sanity.types.ts`. Runtime queries use those types explicitly. `cms/content/` and `cms/seed/` preserve the original content for import and template shapes; publishing normal content edits does not require changing those files.

With the local production website running, the Studio provides `npm run test:integration` (signed webhook, caching, drafts, routing and unpublish) and `npm run test:local-refresh` (automatic publish listener). These checks create temporary noindex documents in this project's dataset and remove them afterward. The latter requires `npm run content:watch` in another terminal.
