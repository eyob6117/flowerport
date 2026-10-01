# Flowerport Transport — corporate website

Landing page for **Flowerport Transport** (a WoubGet Holdings company), which provides temperature-controlled road transport in Ethiopia for flower farms, meat exporters and vegetable growers. Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com) as a fully static site, deployed to GitHub Pages.

**Live:** https://eyob6117.github.io/flowerport/

## Sections

Hero with animated branded truck · About & key figures · Services · Farm-to-airport cold chain · Fleet monitoring · Industries & WoubGet Holdings group · Why Flowerport · Global reach map · Transport booking form · Footer.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321/flowerport/
npm run build     # type-checks and builds to dist/
npm run preview
```

## Editing content

Almost all copy lives in [`src/data/site.ts`](src/data/site.ts): company details, navigation, figures, services, cold-chain steps, industries, group companies and destination hubs.

> **Content source.** Copy is based on the Flowerport Transport company profile. Contact details, flight times and the fleet dashboard readings are illustrative placeholders; confirm them before launch.

The hero truck is an animated SVG (`src/components/TruckScene.astro`); set `heroVideo.src` in `site.ts` to use real fleet footage instead. The logo mark is `src/components/Mark.astro`; replace it with the official vector logo when available.

The dotted world map is pre-generated from Natural Earth data; re-run `npm run map` if you change the projection in `scripts/build-map.mjs` and `src/lib/geo.ts`.

## Quote form

Without configuration, submitting the form opens a pre-filled email to the address in `site.ts`. To post enquiries to a form service or CRM webhook (e.g. Formspree, HubSpot), set a repository variable and pass it to the build:

```yaml
# .github/workflows/deploy.yml, build step
- run: npm run build
  env:
    PUBLIC_QUOTE_ENDPOINT: ${{ vars.QUOTE_ENDPOINT }}
```

## Deployment

`.github/workflows/deploy.yml` builds on every pull request and deploys `main` to GitHub Pages. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

For a custom domain, add it under Settings → Pages and set `SITE_URL=https://your-domain` and `BASE_PATH=/` as env vars on the build step.
