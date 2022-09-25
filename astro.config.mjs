import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://junior-developer-group.com/',
  base: '/junior-developer-group',
  integrations: [vue(), sitemap()]
});