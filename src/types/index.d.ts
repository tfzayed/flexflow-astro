export type SingleFeature = {
  image: string;
  content: string;
  title: string;
};

export type Insight = {
  title: string;
  content: string;
  image: string;
  insights: {
    title: string;
    icon: string;
  }[];
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type Feature = {
  enable: boolean;
  title: string;
  content: string;
  badge: string;
  features: SingleFeature[];
  insight: Insight[];
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

export type IntegrationCard = {
  title: string;
  badge: string;
  content: string;
  button: Button;
  apps: string[];
};
