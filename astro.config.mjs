import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/r3dlevy/r3dlevy.github.io',
  //base: "https://github.com/r3dlevy/r3dlevy.github.io",
  integrations: [mdx(), sitemap(), tailwind()]
});