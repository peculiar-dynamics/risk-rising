//  https://docs.astro.build/en/guides/content-collections/
// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const newsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    preview: z.string(),
    author: z.string(),
    date: z.date(),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  news: newsCollection,
};

// update module - quit console and run npx astro sync
