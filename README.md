# Flower Port — corporate website

Landing page for **Flower Port**, an Ethiopia-based international flower exporter. Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com) as a fully static site, deployed to GitHub Pages.

**Live:** https://eyob6117.github.io/flowerport/

## Sections

Hero with live-shipment card · About & key figures · Product portfolio · Farm-to-market cold chain · Interactive global route map · Why Ethiopia · Sustainability · Partner programmes & testimonials · Insights · Quote request form · Footer with offices.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321/flowerport/
npm run build     # type-checks and builds to dist/
npm run preview
```

## Editing content

Almost all copy lives in [`src/data/site.ts`](src/data/site.ts): company details, navigation, figures, products, cold-chain steps, destination hubs and transit times, testimonials and insights.

> **Placeholder content.** Figures (stems per year, hectares, staff numbers, percentages), certifications, testimonials, contact details and articles are illustrative. Replace them with verified company data before launch.

Flower artwork is drawn procedurally in SVG (`src/components/Bloom.astro`), so the site ships with no stock photography. To use real photography, drop images into `src/assets/` and swap the `<Bloom>` usages for Astro's `<Image>` component.

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
