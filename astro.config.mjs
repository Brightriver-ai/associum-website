// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Per-environment base URL (canonical/OG/sitemap). CI sets SITE_URL for
  // staging vs production; falls back to the production domain for local builds.
  site: process.env.SITE_URL || 'https://www.associum.ai',
  output: 'static',
  integrations: [react(), sitemap()],
  // Generate clean URLs (e.g. /product instead of /product/index.html)
  build: {
    format: 'file',
  },
});
