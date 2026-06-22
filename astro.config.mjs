import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import htmlMinifierNext from "astro-html-minifier-next";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://zalnars.is-a.dev",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    htmlMinifierNext({
      trimCustomFragments: true,
      removeComments: true,
      removeAttributeQuotes: true,
      removeEmptyElements: true,
      removeOptionalTags: true,
      removeScriptTypeAttributes: true,
      removeTagWhitespace: true,
      removeStyleLinkTypeAttributes: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
      collapseBooleanAttributes: true,
      collapseAttributeWhitespace: true,
      decodeEntities: true,
      mergeScripts: true,
      noNewlinesBeforeTagClose: true,
      minifyURLs: true,
      minifySVG: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      preventAttributesEscaping: true,
    }),
  ],
  adapter: vercel(),
});
