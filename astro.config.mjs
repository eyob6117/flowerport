// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// GitHub Pages serves this repo at https://eyob6117.github.io/flowerport/.
// When a custom domain is attached, set SITE_URL=https://www.example.com and BASE_PATH=/ in the workflow.
const site = process.env.SITE_URL ?? 'https://eyob6117.github.io';
const base = process.env.BASE_PATH ?? '/flowerport';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
