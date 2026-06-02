// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.associum.ai',
  output: 'static',
  integrations: [react(), sitemap()],
  // Generate clean URLs (e.g. /product instead of /product/index.html)
  build: {
    format: 'file',
  },
});
