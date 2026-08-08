"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AVATAR_URLS, METRIC_CARDS } from "@/lib/data";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/GlassCard";

function WaveGraphic(): React.ReactElement {
  return (
    <svg
      viewBox="0 0 300 100"
      fill="none"
      className="absolute bottom-0 right-0 h-24 w-full opacity-70"
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
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Reliability you can Count on, every second.
          </h2>
          <p className="mt-4 text-base text-slate-500">
            We certainly have perform beyond your expectations
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {METRIC_CARDS.map((card, i) => (
            <GlassCard
              key={card.id}
              variant={card.variant === "accent" ? "accent" : "glass"}
              delay={i * 0.08}
              className="flex min-h-[220px] flex-col justify-between p-6"
            >
              {card.showAvatars && (
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

              <div className="relative mt-auto">
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

              {card.showWaveGraphic && <WaveGraphic />}
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
