// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Only production should be discoverable. CI sets DEPLOY_ENV per environment;
// local builds default to production.
const isProduction = (process.env.DEPLOY_ENV ?? 'production') === 'production';

// https://astro.build/config
export default defineConfig({
  // Per-environment base URL (canonical/OG/sitemap). CI sets SITE_URL for
  // staging vs production; falls back to the production domain for local builds.
  site: process.env.SITE_URL || 'https://www.associum.ai',
  output: 'static',
  // Prefetch linked pages so navigation starts instantly instead of waiting on a
  // cold fetch. `hover` fetches on hover/touchstart (just before the click), and
  // every page opts in via prefetchAll. Works together with the ClientRouter.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  // Directory-style output (/product/index.html) to match the IaC website
  // module's `directory-index` CloudFront Function (associo-iac). The 404 page
  // is still emitted as /404.html, which the module maps via custom error responses.
  build: {
    format: 'directory',
  },
  integrations: [
    react(),
    sitemap({
      // Drop the 404 from the sitemap. On non-production the whole site is
      // disallowed in robots.txt and noindex'd, so the sitemap stays prod-focused.
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
