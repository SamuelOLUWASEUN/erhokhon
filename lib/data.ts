import type {
  BentoFeature,
  MetricCard,
  PricingTier,
  RoadmapStep,
  Testimonial,
} from "./types";

export const AVATAR_URLS: readonly string[] = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
];

export const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&q=80&w=1000";

export const METRIC_CARDS: readonly MetricCard[] = [
  {
    id: "active-users",
    variant: "default",
    value: "2M",
    label: "Active Users",
    description:
      "Our features sets us apart. For every transaction, there is a reassurance.",
    showAvatars: true,
  },
  {
    id: "uptime",
    variant: "default",
    value: "99.99%",
    label: "Total Product Uptime",
  },
  {
    id: "fees",
    variant: "default",
    value: "$0",
    label: "Transaction fees",
  },
  {
    id: "global",
    variant: "accent",
    value: "150+ Countries",
    label: "",
    description:
      "We have active users with incredible uptime across the world's continent",
    showWaveGraphic: true,
  },
];

export const BENTO_FEATURES: readonly BentoFeature[] = [
  {
    id: "ai-insight",
    title: "AI Spending Insight",
    description: "Send money or transfer instantly with zero fee.",
    visual: "insight",
    span: "col-span-1",
  },
  {
    id: "global-transfers",
    title: "Instant Global Transfers",
    description: "Send money around the world in seconds with zero fees.",
    visual: "transfer",
    span: "col-span-2",
  },
  {
    id: "multi-currency",
    title: "Multi-Currency Wallet",
    description: "Hold and exchange multiple currencies in app.",
    visual: "wallet",
    span: "col-span-1",
  },
  {
    id: "encryption",
    title: "Bank-Level Encryption",
    description: "Your data protected with 256-bit encryption.",
    visual: "encryption",
    span: "col-span-1",
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Get help whenever you need it.",
    visual: "support",
    span: "col-span-1",
  },
  {
    id: "freeze-card",
    title: "Freeze Card Instantly",
    description: "Lock your card anytime to prevent unauthorized use.",
    visual: "freeze",
    span: "col-span-1",
  },
];

export const ROADMAP_STEPS: readonly RoadmapStep[] = [
  {
    id: "create-account",
    index: 1,
    title: "Create your Account",
    description: "Sign up for free and verify your identity in seconds.",
  },
  {
    id: "add-funds",
    index: 2,
    title: "Add your funds",
    description: "Deposit money securely using your preferred method.",
  },
  {
    id: "transact-globally",
    index: 3,
    title: "Transact globally",
    description: "Send, receive, and spend money anywhere, anytime.",
  },
];

export const PRICING_TIERS: readonly PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    price: "$0",
    cadence: "/monthly",
    description:
      "Simple, free plan with core features & support to get you started.",
    ctaLabel: "Get Started",
    featured: false,
    checklist: [
      "Free transfers",
      "Personalized dashboard",
      "24/7 support",
      "Tailored solutions",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$9",
    cadence: "/monthly",
    description:
      "Faster transfers and advanced tools for professionals who want more efficiency.",
    ctaLabel: "Choose Pro",
    featured: true,
    badge: "Most Popular",
    checklist: [
      "Priority transfers",
      "Advanced analytics",
      "Dedicated support",
      "Personalized dashboard",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    description:
      "Tailored, scalable solutions, integrations & dedicated management for organizations.",
    ctaLabel: "Get Started",
    featured: false,
    checklist: [
      "API integration",
      "Account manager",
      "Contact Sales",
      "Tailored solutions",
    ],
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "daniella-hassan",
    name: "Daniella Hassan",
    role: "Founder",
    quote:
      "The system is reliable. Adaptable, and easy to adopt, even for individuals who are not familiar with similar platforms or modern tools.",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "demola-ezedin",
    name: "Demola Ezedin",
    role: "Business Owner",
    quote:
      "The system is reliable. Adaptable, and easy to adopt, even for individuals who are not familiar with similar platforms or modern tools.",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
  },
  {
    id: "nathan-kenu",
    name: "Nathan Kenu",
    role: "Business Owner",
    quote: "Using Erhokhon simplified expenses for me, at least...",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  },
];

export const TRANSACTIONS: readonly { label: string; amount: string }[] = [
  { label: "Netflix", amount: "-$12.99" },
  { label: "Taxi", amount: "-$4.50" },
  { label: "Uber Eats", amount: "-$21.30" },
  { label: "PayPal", amount: "+$540.00" },
];
