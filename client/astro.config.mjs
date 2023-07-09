import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import sanity from 'astro-sanity';
import tailwind from "@astrojs/tailwind";
dotenv.config();


// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: process.env.SANITY_STUDIO_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_DATASET,
    useCdn: true,
    apiVersion: '2023-07-09'
  }), tailwind()]
});