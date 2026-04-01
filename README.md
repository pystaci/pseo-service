# Programmatic SEO Service — $499

A static site built with Astro, TypeScript, and Tailwind CSS for a programmatic SEO service. Includes a landing page and 50+ niche-specific pages generated at build time.

## Setup

```bash
cp .env.example .env
# Edit .env with your Stripe payment link and site URL
npm install
```

## Development

```bash
npm run dev
```

Opens at [http://localhost:3100](http://localhost:3100).

## Build

```bash
npm run build
```

Outputs a fully static site to `dist/`. Preview locally:

```bash
npm run preview
```

## Deploy

The build output in `dist/` is compatible with any static hosting provider:

- **Cloudflare Pages**: Set build command to `npm run build` and output directory to `dist`.
- **Vercel**: Framework preset "Astro" works automatically.

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `PAYMENT_LINK` | Stripe payment link URL | `#` |
| `SITE_URL` | Canonical site URL | `http://localhost:3100` |

## Structure

- `/` — Landing page with hero, how it works, deliverables, FAQs, trust, CTA
- `/niche/[slug]/` — 56 niche-specific SEO pages with JSON-LD, internal links, canonical tags
- `/sitemap-index.xml` — Auto-generated sitemap
- `/robots.txt` — Allows all crawlers, links to sitemap
