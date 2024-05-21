import { defineCollection, z } from "astro:content";

// homepage
const homepageCollection = defineCollection({
  schema: z.object({
    banner: z.object({
      title: z.string(),
      content: z.string(),
      image: z.string(),
      buttons: z.array(
        z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
      ),
      brand: z.object({
        title: z.string(),
        logos: z.array(z.string()),
      }),
    }),
    how_it_work: z.object({
      enable: z.boolean(),
      title: z.string(),
      content: z.string(),
      processes: z.array(
        z.object({
          title: z.string(),
          icon: z.string(),
          image: z.string(),
          content: z.string(),
        }),
      ),
    }),
  }),
});

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

const featureCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    badge: z.string(),
    description: z.string(),
    banner: z.object({
      title: z.string(),
      content: z.string(),
      button: z.object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      }),
      image: z.string(),
    }),
    service: z.object({
      title: z.string(),
      badge: z.string(),
      content: z.string(),
      services: z.array(
        z.object({
          title: z.string(),
          icon: z.string(),
          content: z.string(),
        }),
      ),
    }),
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

const pricingCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    badge: z.string().optional(),
    features: z.array(z.string()).optional(),
    plans: z.array(
      z.object({
        label: z.string(),
        id: z.string(),
        packs: z.array(
          z.object({
            type: z.string(),
            icon: z.string(),
            price: z.number(),
            compound: z.string(),
            features: z.array(z.string()),
          }),
        ),
      }),
    ),
    pricing_table_data: z
      .object({
        tableHead: z.object({
          name: z.string(),
          free: z.string(),
          basic: z.string(),
          pro: z.string(),
          premium: z.string(),
        }),

        tableBody: z.array(
          z.object({
            name: z.string(),
            free: z.string(),
            basic: z.string(),
            pro: z.string(),
            premium: z.string(),
          }),
        ),

        tableFooter: z.object({
          name: z.string(),
          free: z.string(),
          basic: z.string(),
          pro: z.string(),
          premium: z.string(),
        }),
      })
      .optional(),
  }),
});

const howItWorksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    banner: z
      .object({
        title: z.string(),
        content: z.string(),
        button: z
          .object({
            enable: z.boolean(),
            label: z.string(),
            link: z.string(),
          })
          .optional(),
        video: z
          .object({
            enable: z.boolean(),
            id: z.string(),
            thumbnail: z.string(),
          })
          .optional(),
      })
      .optional(),
    processes: z
      .array(
        z.object({
          title: z.string(),
          content: z.string(),
          image: z.string(),
          button: z
            .object({
              enable: z.boolean(),
              label: z.string(),
              link: z.string(),
            })
            .optional(),
        }),
      )
      .optional(),
  }),
});

// integration
const integrationSingleCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    logo: z.string().optional(),
    homepage_section: z
      .object({
        title: z.string(),
        badge: z.string(),
        content: z.string(),
        button: z.object({
          enable: z.boolean(),
          label: z.string(),
          link: z.string(),
        }),
        apps: z.array(z.string()),
      })
      .optional(),
    video: z
      .object({
        id: z.string(),
        thumbnail: z.string(),
      })
      .optional(),
    categories: z.array(z.string()).optional(),
    type: z.string().optional(),
    content: z.string().optional(),
  }),
});

// career
const careerCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    button: z
      .object({
        enable: z.boolean(),
        label: z.string(),
        link: z.string(),
      })
      .optional(),
    banner: z
      .object({
        title: z.string(),
        content: z.string(),
        image: z.string(),
      })
      .optional(),
    benefits: z
      .object({
        title: z.string(),
        content: z.string(),
        card: z.array(
          z.object({
            title: z.string(),
            icon: z.string(),
          }),
        ),
      })
      .optional(),
    value: z
      .object({
        badge: z.string(),
        title: z.string(),
        description: z.string(),
        cards: z.array(
          z.object({
            icon: z.string(),
            title: z.string(),
            content: z.string(),
          }),
        ),
      })
      .optional(),
    gallery: z
      .object({
        title: z.string(),
        images: z.array(z.string()),
      })
      .optional(),
    department: z.array(z.string()).optional(),
    details: z.string().optional(),
    summery: z.string().optional(),
    location: z.string().optional(),
    city: z.string().optional(),
    duration: z.string().optional(),
    salary: z.string().optional(),
    image: z.string().optional(),
    qualification: z.array(z.string()).optional(),
    jobDescription: z.string().optional(),
    jobResponsibilities: z.string().optional(),
    otherBenefits: z.string().optional(),
  }),
});

// Export collections
export const collections = {
  homepage: homepageCollection,
  blog: blogCollection,
  authors: authorsCollection,
  integration: integrationSingleCollection,
  pages: pagesCollection,
  features: featureCollection,
  about: aboutCollection,
  career: careerCollection,
  pricing: pricingCollection,
  "how-it-works": howItWorksCollection,
};
