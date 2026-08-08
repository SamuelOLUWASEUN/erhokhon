"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import { Headset, ShieldCheck, Snowflake, Sparkles } from "lucide-react";
import { BENTO_FEATURES } from "@/lib/data";
import type { BentoFeature } from "@/lib/types";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/GlassCard";
import LottieVisual from "@/components/LottieVisual";

/**
 * Deterministic pseudo-variance so the dot grid reads as organic rather than
 * a perfect lattice, without touching Math.random (which would produce a
 * server/client hydration mismatch on a static export).
 */
function dotOpacity(row: number, col: number): number {
  return 0.12 + 0.32 * ((Math.sin(row * 1.7 + col * 0.9) + 1) / 2);
}

/** Stylized "global network" dot field — an abstract texture, not a literal map. */
function WorldMapDots(): React.ReactElement {
  const cols = 16;
  const rows = 7;
  const dots = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      dots.push(
        <circle
          key={`${row}-${col}`}
          cx={10 + col * 19}
          cy={10 + row * 18}
          r={1.6}
          fill="#2563eb"
          opacity={dotOpacity(row, col)}
        />
      );
    }
  }
  return (
    <svg viewBox="0 0 300 130" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {dots}
    </svg>
  );
}

/**
 * Procedural frosted/icy surface: blurred color blobs behind a translucent
 * frosted layer plus an SVG turbulence filter for grain. Built in CSS/SVG
 * rather than a stock photo — no hotlinked third-party asset, no licensing
 * risk, and it matches the existing glassmorphism system instead of sitting
 * apart from it.
 */
function FrostedIce({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}): React.ReactElement {
  const filterId = useId();
  return (
    <div className={cn("relative overflow-hidden rounded-2xl", className)}>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-indigo-100" />
      <div className="absolute -left-4 top-1/4 h-16 w-16 rounded-full bg-amber-300/40 blur-2xl" />
      <div className="absolute right-2 top-2 h-14 w-14 rounded-full bg-rose-300/40 blur-2xl" />
      <div className="absolute bottom-0 left-1/3 h-20 w-20 rounded-full bg-blue-400/40 blur-2xl" />
      <svg className="absolute inset-0 h-full w-full opacity-[0.15] mix-blend-overlay" aria-hidden="true">
        <filter id={filterId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#${filterId})`} />
      </svg>
      <div className="absolute inset-0 bg-white/30 backdrop-blur-md" />
      {/* Two faint card silhouettes suggest "cards, on ice" without needing a photo */}
      <div className="absolute bottom-3 left-1/2 h-10 w-16 -translate-x-[calc(50%+8px)] rotate-[-8deg] rounded-md border border-white/70 bg-white/25" />
      <div className="absolute bottom-3 left-1/2 h-10 w-16 -translate-x-[calc(50%-8px)] rotate-[6deg] rounded-md border border-white/80 bg-white/40" />
      {children}
    </div>
  );
}

function InsightVisual(): React.ReactElement {
  const fallback = (
    <div className="glass-surface flex items-center gap-2 rounded-2xl px-4 py-3">
      <Sparkles className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
      <p className="text-xs font-medium text-slate-700">
        Transfer <span className="font-semibold text-slate-900">$250</span> to
        Sarah — zero fee
      </p>
    </div>
  );

  return (
    <LottieVisual
      src="/lottie/ai-insight-scan.lottie"
      fallback={fallback}
      className="h-14"
      ariaLabel="AI scanning a spending pattern"
    />
  );
}

function TransferVisual(): React.ReactElement {
  const nodes = [
    { symbol: "$", pos: "left-2 top-2" },
    { symbol: "¥", pos: "right-4 top-6" },
    { symbol: "€", pos: "left-1/3 bottom-2" },
  ];

  const fallback = (
    <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
      <WorldMapDots />
      <svg viewBox="0 0 300 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <line x1="30" y1="20" x2="150" y2="50" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="150" y1="50" x2="260" y2="30" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 4" />
        <line x1="150" y1="50" x2="110" y2="85" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>
      {nodes.map((node) => (
        <div
          key={node.symbol}
          className={cn(
            "absolute flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-blue-600 shadow-md",
            node.pos
          )}
        >
          {node.symbol}
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-xs font-bold text-white shadow-lg">
        £
      </div>
    </div>
  );

  return (
    <LottieVisual
      src="/lottie/global-transfer-nodes.lottie"
      fallback={fallback}
      className="h-32"
      ariaLabel="Currency nodes connecting across a global transfer network"
    />
  );
}

function WalletVisual(): React.ReactElement {
  return (
    <FrostedIce className="h-24">
      <div className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-blue-600 shadow-sm backdrop-blur-sm">
        £
      </div>
      <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-sm font-bold text-blue-600 shadow-sm backdrop-blur-sm">
        ₦
      </div>
    </FrostedIce>
  );
}

function EncryptionVisual(): React.ReactElement {
  const fallback = (
    <div className="relative flex items-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 px-4 py-3.5">
      <svg className="absolute inset-0 h-full w-full opacity-10" aria-hidden="true">
        <pattern id="encDots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#encDots)" />
      </svg>
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/95 shadow-sm">
        <ShieldCheck className="h-5 w-5 text-blue-600" aria-hidden="true" />
      </div>
      <div className="relative">
        <p className="text-xs font-semibold text-white">Card protected</p>
        <p className="text-[11px] tracking-wider text-white/75">•••• •••• •••• 2163</p>
      </div>
    </div>
  );

  return (
    <LottieVisual
      src="/lottie/shield-lock-close.lottie"
      fallback={fallback}
      className="h-[68px]"
      ariaLabel="Shield closing to indicate 256-bit encryption"
    />
  );
}

function SupportCard({
  title,
  description,
  delay,
}: {
  title: string;
  description: string;
  delay: number;
}): React.ReactElement {
  return (
    <GlassCard variant="accent" delay={delay} className="flex flex-col items-center justify-center gap-2 p-6 text-center">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/20">
        <Headset className="h-5 w-5 text-white" aria-hidden="true" />
      </div>
      <h3 className="relative text-base font-bold text-white">{title}</h3>
      <p className="relative text-xs leading-relaxed text-white/80">{description}</p>
    </GlassCard>
  );
}

const VISUALS: Record<Exclude<BentoFeature["visual"], "support" | "freeze">, React.ComponentType> = {
  insight: InsightVisual,
  transfer: TransferVisual,
  wallet: WalletVisual,
  encryption: EncryptionVisual,
};

export default function BentoGrid(): React.ReactElement {
  return (
    <section id="features" className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Precision Financial Tools
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Experience a banking suite designed for speed, security, and growth.
          </p>
        </motion.div>

        <div className="mt-12 rounded-[2.5rem] border border-white/60 bg-slate-100/70 p-3 shadow-inner sm:p-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENTO_FEATURES.map((feature, i) => {
              if (feature.visual === "support") {
                return (
                  <SupportCard
                    key={feature.id}
                    title={feature.title}
                    description={feature.description}
                    delay={(i % 3) * 0.08}
                  />
                );
              }

              if (feature.visual === "freeze") {
                return (
                  <GlassCard key={feature.id} as="article" delay={(i % 3) * 0.08} className="flex flex-col gap-3 p-6">
                    <div className="relative">
                      <h3 className="flex items-center gap-1.5 text-base font-bold text-slate-900">
                        <Snowflake className="h-4 w-4 text-blue-500" aria-hidden="true" />
                        {feature.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                    <FrostedIce className="h-28" />
                  </GlassCard>
                );
              }

              const Visual = VISUALS[feature.visual];
              return (
                <GlassCard key={feature.id} as="article" delay={(i % 3) * 0.08} className="flex flex-col gap-3 p-6">
                  <div className="relative">
                    <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                  <Visual />
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
