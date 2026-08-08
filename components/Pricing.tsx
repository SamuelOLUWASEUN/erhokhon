"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/data";
import { cn } from "@/lib/utils";
import GlassCard from "@/components/GlassCard";
import LiquidButton from "@/components/LiquidButton";

export default function Pricing(): React.ReactElement {
  return (
    <section id="pricing" className="scroll-mt-20 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Plans that scale with you
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Choose the perfect tier for your business needs.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {PRICING_TIERS.map((tier, i) => (
            <div key={tier.id} className={cn(tier.featured && "lg:-translate-y-4")}>
              <GlassCard
                delay={i * 0.1}
                className={cn(
                  "flex flex-col items-center p-8 text-center",
                  tier.featured && "ring-2 ring-blue-500/40 shadow-2xl shadow-blue-500/15"
                )}
              >
                {tier.featured && (
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-600/15 to-transparent"
                    aria-hidden="true"
                  />
                )}

                {tier.badge && (
                  <span className="relative mb-4 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    {tier.badge}
                  </span>
                )}

                <h3 className="relative text-lg font-bold text-slate-900">{tier.name}</h3>
                <div className="relative mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span className="text-sm font-medium text-slate-500">{tier.cadence}</span>
                  )}
                </div>
                <p className="relative mt-3 max-w-[220px] text-sm leading-relaxed text-slate-500">
                  {tier.description}
                </p>

                <LiquidButton
                  href="#top"
                  variant={tier.featured ? "liquid" : "glass"}
                  className="relative mt-6 w-full"
                >
                  {tier.ctaLabel}
                </LiquidButton>

                <ul className="relative mx-auto mt-8 flex w-fit flex-col items-start gap-3">
                  {tier.checklist.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
