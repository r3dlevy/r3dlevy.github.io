import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost',
  //base:"D:\\Hacking\\Projets\\Blog\\Code\\Dev\\astrofy\\dist",
  integrations: [mdx(), sitemap(), tailwind()]
});