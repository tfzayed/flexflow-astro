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

export type PricingSection = {
  title: string;
  badge: string;
  features: string[];
  plans: {
    label: string;
    id: string;
    packs: {
      type: string;
      icon: string;
      price: string;
      compound: string;
      features: string[];
    }[];
  }[];
};

export type CardType = {
  title: string;
  content: string;
  icon: string;
  date?: string;
};
