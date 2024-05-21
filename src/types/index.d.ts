// what we do
export type SingleFeature = {
  image: string;
  content: string;
  title: string;
};

// insights
export type Insight = {
  insight: {
    title: string;
    content: string;
    image: string;
    insights: {
      title: string;
      icon: string;
    }[];
  }[];
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type Testimonial = {
  enable: boolean;
  title: string;
  badge: string;
  testimonials: {
    name: string;
    designation: string;
    avatar: string;
    content: string;
  }[];
};

export type Faq = {
  title: string;
  badge: string;
  content: string;
  faqs: {
    header: string;
    content: string;
  }[];
};
