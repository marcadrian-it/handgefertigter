import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import sanity from 'astro-sanity';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: process.env.SANITY_STUDIO_PROJECT_ID,
      dataset: process.env.SANITY_STUDIO_DATASET,
      useCdn: true,
      apiVersion: '2023-07-09',
    }),
    tailwind(),
    react(),
  ],
  output: 'hybrid',
  adapter: netlify(),
});
