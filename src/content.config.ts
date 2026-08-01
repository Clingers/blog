import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    author: z.string().default('Wilfred'),
    readTime: z.string(),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { articles };
