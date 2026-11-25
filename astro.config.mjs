import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the temple's confirmed production domain before publishing.
export default defineConfig({
  site: 'https://srivenkateswaraswamytemple-kovai.org',
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
