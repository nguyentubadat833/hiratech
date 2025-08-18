import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    page: defineCollection({
      type: "page",
      source: "*.{md,json}",
    })
  },
});
