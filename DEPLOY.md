# Deployment Plan

This project is a fully static Astro site. The build outputs to `dist/` and can be hosted on any static provider. Two recommended options are below.

## Environment Variables

Set these in your hosting provider UI:

- `SITE_URL` — canonical site URL (e.g., `https://pseo.yourdomain.com`)
- `PAYMENT_LINK` — Stripe Payment Link URL (Angel will provide the live link)

## Cloudflare Pages

1. New Project → Connect to your repo (or drag-and-drop `dist/` for manual deploys)
2. Framework preset: Astro (or None)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add environment variables (`SITE_URL`, `PAYMENT_LINK`)
6. Deploy

## Vercel

1. Import Project → pick this repo
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output: `dist`
5. Add environment variables (`SITE_URL`, `PAYMENT_LINK`)
6. Deploy

## Local Preview

```
npm run build
npm run preview -- --port 3100
```

If port 3100 is busy, Astro will select the next available port automatically.