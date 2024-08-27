import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
    mdx({
      components: {
        h2: './src/components/mdx/H2.astro',
        h3: './src/components/mdx/H3.astro',
      }
    })
  ],
  output: "server",
  adapter: vercel()
});