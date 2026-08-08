"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Coins, ShieldCheck } from "lucide-react";
import { AVATAR_URLS, METRIC_CARDS } from "@/lib/data";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/GlassCard";

function WaveGraphic(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 300 100"
      fill="none"
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-16 w-full opacity-40"
      aria-hidden="true"
    >
      <path
        d="M0 70 C 40 40, 60 90, 100 60 S 160 20, 200 55 S 260 90, 300 50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0 85 C 40 60, 60 100, 100 80 S 160 45, 200 75 S 260 100, 300 70"
        stroke="white"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small ring that draws itself to ~99.99%, giving the uptime figure a live, measured feel. */
function UptimeRing(): React.ReactElement {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative flex h-11 w-11 items-center justify-center">
      <svg viewBox="0 0 44 44" className="h-11 w-11 -rotate-90" aria-hidden="true">
        <circle cx="22" cy="22" r={radius} fill="none" stroke="#e2e8f0" strokeWidth="4" />
        <motion.circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#10b981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: circumference * 0.012 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <span className="absolute flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
      </span>
    </div>
  );
}

/** Coin badge with a spring pop-in — gives the $0 fees card the same sense of life as the others. */
function FeesBadge(): React.ReactElement {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0, rotate: -12 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.2 }}
      className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-50"
    >
      <Coins className="h-5 w-5 text-emerald-600" aria-hidden="true" />
    </motion.div>
  );
}

export default function SocialProof(): React.ReactElement {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Reliability you can Count on, every second.
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            We certainly have perform beyond your expectations
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRIC_CARDS.map((card, i) => (
            <GlassCard
              key={card.id}
              variant={card.variant === "accent" ? "accent" : "glass"}
              delay={i * 0.08}
              className="flex min-h-[220px] flex-col items-center justify-between p-6 text-center"
            >
              {card.visual === "avatars" && (
                <div className="relative flex -space-x-3">
                  {AVATAR_URLS.map((url, idx) => (
                    <div
                      key={url}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm"
                      style={{ zIndex: AVATAR_URLS.length - idx }}
                    >
                      <Image src={url} alt="" fill sizes="36px" className="object-cover" />
                    </div>
                  ))}
                </div>
              )}
              {card.visual === "uptime" && <UptimeRing />}
              {card.visual === "fees" && <FeesBadge />}
              {card.visual === "wave" && (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                  <ShieldCheck className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              )}

              <div className="relative z-10 mt-auto">
                <p
                  className={cn(
                    "text-3xl font-extrabold tracking-tight",
                    card.variant === "accent" ? "text-white" : "text-slate-900"
                  )}
                >
                  {card.value}
                </p>
                {card.label && (
                  <p
                    className={cn(
                      "mt-1 text-sm font-semibold",
                      card.variant === "accent" ? "text-white/90" : "text-slate-700"
                    )}
                  >
                    {card.label}
                  </p>
                )}
                {card.description && (
                  <p
                    className={cn(
                      "mt-2 text-xs leading-relaxed",
                      card.variant === "accent" ? "text-white/80" : "text-slate-500"
                    )}
                  >
                    {card.description}
                  </p>
                )}
              </div>

              {card.visual === "wave" && <WaveGraphic />}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
