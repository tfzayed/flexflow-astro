import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    badge: z.string().optional(),
    image: z.string().optional(),
    button: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    badge: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const aboutCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    badge: z.string().optional(),
    description: z.string().optional(),
    video: z
      .object({
        enable: z.boolean(),
        src: z.string().url().optional(),
      })
      .optional(),
    draft: z.boolean().optional(),
    story: z
      .object({
        badge: z.string().optional(),
        title: z.string(),
        description: z.string(),
        cards: z.array(
          z.object({
            date: z.string(),
            icon: z.string(),
            title: z.string(),
            content: z.string(),
          }),
        ),
      })
      .optional(),
    value: z
      .object({
        badge: z.string().optional(),
        title: z.string(),
        description: z.string(),
        cards: z.array(
          z.object({
            icon: z.string(),
            title: z.string(),
            content: z.string(),
          }),
        ),
        inspiration: z.object({
          title: z.string(),
          visions: z.array(
            z.object({
              title: z.string(),
              icon: z.string(),
              image: z.string(),
              content: z.string(),
            }),
          ),
        }),
      })
      .optional(),
    team: z.object({
      badge: z.string(),
      title: z.string(),
      members: z.array(
        z.object({
          name: z.string(),
          image: z.string(),
          designation: z.string(),
        }),
      ),
    }),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  about: aboutCollection,
};
