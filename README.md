# Perspective Tester

Marketing website for [Perspective Tester](https://perspectivetester.com) — a digital accessibility consultancy helping organizations achieve and maintain WCAG 2.2 compliance.

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
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site will be available at `http://localhost:3000`.

### Production Build

```bash
# Build static export
npm run build

# The static files will be in the ./out directory
```

## Deployment to GitHub Pages

This project uses GitHub Actions for automatic deployment. Every push to `main` triggers a build and deploy to GitHub Pages.

### Setup Steps

1. **Push the code to GitHub:**
   ```bash
   git remote add origin https://github.com/a3s-app/Perspective-Tester.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**

3. **That's it.** The included workflow at `.github/workflows/deploy.yml` will automatically build and deploy on every push to `main`.

### Custom Domain

To use a custom domain (e.g., `perspectivetester.com`):

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

## Contact Form

The contact form supports two modes:

1. **Formspree (recommended):** Create a free form at [formspree.io](https://formspree.io), then set the endpoint:
   ```bash
   # Create a .env.local file
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
   ```
   For GitHub Pages, add this as a repository secret and update the workflow, or hardcode it in `.env.local` before building.

2. **Mailto fallback:** If no Formspree endpoint is configured, the form constructs a `mailto:` link to `Info@perspectivetester.com`.

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
