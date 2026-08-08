export interface MetricCard {
  id: string;
  variant: "default" | "accent";
  value: string;
  label: string;
  description?: string;
  showAvatars?: boolean;
  showWaveGraphic?: boolean;
}

export interface BentoFeature {
  id: string;
  title: string;
  description: string;
  visual: "insight" | "transfer" | "wallet" | "encryption" | "support" | "freeze";
  span: "col-span-1" | "col-span-2";
}

export interface RoadmapStep {
  id: string;
  index: number;
  title: string;
  description: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  ctaLabel: string;
  featured: boolean;
  badge?: string;
  checklist: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}

export type NetworkState = "online" | "offline" | "recovering";
