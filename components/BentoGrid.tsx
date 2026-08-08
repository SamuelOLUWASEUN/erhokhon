"use client";

import { motion } from "framer-motion";
import {
  Headset,
  Lock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { BENTO_FEATURES } from "@/lib/data";
import type { BentoFeature } from "@/lib/types";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/GlassCard";
import LottieVisual from "@/components/LottieVisual";

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
      className="h-16"
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
    <div className="relative h-28 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
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
      className="h-28"
      ariaLabel="Currency nodes connecting across a global transfer network"
    />
  );
}

function WalletVisual(): React.ReactElement {
  return (
    <div className="flex gap-2">
      <div className="glass-surface flex h-16 flex-1 flex-col justify-between rounded-xl p-3">
        <span className="text-lg font-bold text-slate-900">£</span>
        <span className="text-[10px] font-medium text-slate-500">GBP</span>
      </div>
      <div className="glass-surface flex h-16 flex-1 flex-col justify-between rounded-xl p-3">
        <span className="text-lg font-bold text-slate-900">₦</span>
        <span className="text-[10px] font-medium text-slate-500">NGN</span>
      </div>
    </div>
  );
}

function EncryptionVisual(): React.ReactElement {
  const fallback = (
    <div className="glass-surface flex items-center gap-3 rounded-2xl px-4 py-3">
      <ShieldCheck className="h-6 w-6 shrink-0 text-blue-600" aria-hidden="true" />
      <div>
        <p className="text-xs font-semibold text-slate-900">Card protected</p>
        <p className="text-[11px] tracking-wider text-slate-500">•••• •••• •••• 2163</p>
      </div>
    </div>
  );

  return (
    <LottieVisual
      src="/lottie/shield-lock-close.lottie"
      fallback={fallback}
      className="h-16"
      ariaLabel="Shield closing to indicate 256-bit encryption"
    />
  );
}

const VISUALS: Record<BentoFeature["visual"], React.ComponentType> = {
  insight: InsightVisual,
  transfer: TransferVisual,
  wallet: WalletVisual,
  encryption: EncryptionVisual,
  support: () => (
    <div className="glass-surface flex h-16 w-16 items-center justify-center rounded-2xl">
      <Headset className="h-6 w-6 text-blue-600" aria-hidden="true" />
    </div>
  ),
  freeze: () => (
    <div className="glass-surface flex h-16 w-16 items-center justify-center rounded-2xl">
      <Lock className="h-6 w-6 text-blue-600" aria-hidden="true" />
    </div>
  ),
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

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENTO_FEATURES.map((feature, i) => {
            const Visual = VISUALS[feature.visual];
            return (
              <GlassCard
                key={feature.id}
                as="article"
                delay={(i % 3) * 0.08}
                className={cn("flex flex-col gap-4 p-6", feature.span === "col-span-2" && "sm:col-span-2")}
              >
                <Visual />
                <div className="relative">
                  <h3 className="text-base font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
