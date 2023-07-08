import { defineConfig } from 'astro/config';

import sanity from 'astro-sanity';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      dataset: process.env.SANITY_STUDIO_DATASET,
    }),
  ],
});
