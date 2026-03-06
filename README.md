# Perspective Tester

Marketing website for [Perspective Tester](https://perspectivetester.com) — a digital accessibility consultancy helping organizations achieve and maintain WCAG 2.2 compliance.

**Live Site:** [https://a3s-app.github.io/Perspective-Tester/](https://a3s-app.github.io/Perspective-Tester/)

## Tech Stack

- **Framework:** Next.js 15 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI Components:** shadcn/ui + Radix UI
- **Deployment:** GitHub Pages via GitHub Actions

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, products, services, enterprise, and CTA |
| `/a3s` | A3S — Accessibility as a Service product page |
| `/manage` | Manage — Accessibility management platform page |
| `/clients` | Client logos and testimonials |
| `/about` | Team, values, and company information |
| `/contact` | Contact form with consultation request |
| `/accessibility` | Accessibility statement |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/a3s-app/Perspective-Tester.git
cd Perspective-Tester

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

The site will be available at `http://localhost:3000`.

> **Note:** In local development, `basePath` is not applied (no `/Perspective-Tester` prefix). The subpath is only added during GitHub Pages builds via the `GITHUB_PAGES=true` environment variable.

### Production Build (Local)

```bash
# Build static export (without GitHub Pages subpath)
npm run build

# The static files will be in the ./out directory
# You can serve them locally with:
npx serve out
```

### Production Build (GitHub Pages)

```bash
# Build with GitHub Pages subpath prefix
GITHUB_PAGES=true npm run build

# The static files in ./out will have /Perspective-Tester prefix on all assets
```

## Deploying to GitHub Pages

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

### Step-by-Step Setup

1. **Clone and push (if starting fresh):**
   ```bash
   git clone https://github.com/a3s-app/Perspective-Tester.git
   cd Perspective-Tester
   npm install
   npm run build          # Verify it builds locally
   git push origin main   # Triggers the deployment workflow
   ```

2. **Enable GitHub Pages in the repository:**
   - Go to your repository on GitHub: [github.com/a3s-app/Perspective-Tester](https://github.com/a3s-app/Perspective-Tester)
   - Navigate to **Settings** > **Pages**
   - Under **Build and deployment > Source**, select **GitHub Actions**
   - Click **Save**

3. **Trigger a deployment:**
   - Push any commit to the `main` branch, OR
   - Go to **Actions** tab > **Deploy to GitHub Pages** > **Run workflow**

4. **Verify the deployment:**
   - Go to the **Actions** tab to see the build progress
   - Once complete, visit [https://a3s-app.github.io/Perspective-Tester/](https://a3s-app.github.io/Perspective-Tester/)

### How It Works

The deployment pipeline (`.github/workflows/deploy.yml`) does the following:

1. Checks out the code
2. Installs Node.js 20 and runs `npm ci`
3. Runs `npm run build` with `GITHUB_PAGES=true` — this sets `basePath: "/Perspective-Tester"` and `assetPrefix: "/Perspective-Tester"` in `next.config.mjs` so all links, images, CSS, and JS files are served from the correct subpath
4. Uploads the `./out` directory as a GitHub Pages artifact
5. Deploys to GitHub Pages

### Custom Domain (Optional)

If you want to use a custom domain (e.g., `perspectivetester.com`) instead of `a3s-app.github.io/Perspective-Tester`:

1. Go to **Settings** > **Pages** in your GitHub repository
2. Under **Custom domain**, enter `perspectivetester.com`
3. Add these DNS records with your domain registrar:

   | Type | Name | Value |
   |------|------|-------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | a3s-app.github.io |

4. Check **Enforce HTTPS** once the certificate is provisioned
5. Once a custom domain is active, you can remove the `basePath`/`assetPrefix` logic from `next.config.mjs` since the site will be served at the root (`/`)

## Contact Form

The contact form uses [FormSubmit](https://formsubmit.co) — a free service with **unlimited submissions** and no API key required. Form submissions are sent directly to `Info@perspectivetester.com`.

- No environment variables needed
- No account or signup required
- Works on static sites (GitHub Pages)
- Submissions arrive as formatted HTML table emails
- Built-in spam protection

To change the recipient email, update the FormSubmit URL in `components/pro-blocks/landing-page/contact-page.tsx`.

## Project Structure

```
app/                  # Next.js routes (thin — delegates to components)
components/
  pro-blocks/         # Page-level components
    landing-page/     # All landing page sections and sub-pages
  ui/                 # shadcn/ui primitives
public/               # Static assets (images, logos, sitemap, robots.txt)
.github/workflows/    # GitHub Actions CI/CD
```

## SEO

- Page-specific metadata with Open Graph and Twitter cards
- JSON-LD structured data (Organization + WebSite schemas)
- Static `sitemap.xml` and `robots.txt` in `public/`
- Semantic HTML with proper heading hierarchy

## Accessibility

- WCAG 2.2 AA compliant
- Skip navigation link
- Proper ARIA labels and landmarks
- Keyboard-navigable
- Screen reader tested
- Scroll-margin-top for focus visibility
- Minimum 24x24px touch targets
