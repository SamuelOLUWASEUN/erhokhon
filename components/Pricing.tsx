"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PRICING_TIERS } from "@/lib/data";
import { cn } from "@/lib/utils";

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
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Plans that scale with you
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">
            Choose the perfect tier for your business needs.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {PRICING_TIERS.map((tier, i) => (
            <div key={tier.id} className={cn(tier.featured && "lg:-translate-y-4")}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className={cn(
                  "relative flex flex-col items-center overflow-hidden rounded-3xl p-8 text-center transition-all duration-300",
                  tier.featured
                    ? "border-2 border-blue-600 bg-gradient-to-b from-blue-50/50 to-white shadow-xl shadow-blue-500/10 dark:border-blue-500 dark:from-slate-800/80 dark:to-slate-900"
                    : "border border-slate-200 bg-white shadow-sm hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                )}
              >
                {tier.featured && (
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-600/10 to-transparent dark:from-blue-500/15"
                    aria-hidden="true"
                  />
                )}

                {tier.badge && (
                  <span className="relative mb-4 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                    {tier.badge}
                  </span>
                )}

                <h3 className="relative text-lg font-bold text-slate-900 dark:text-white">
                  {tier.name}
                </h3>
                <div className="relative mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                    {tier.price}
                  </span>
                  {tier.cadence && (
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {tier.cadence}
                    </span>
                  )}
                </div>
                <p className="relative mt-3 max-w-[220px] text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {tier.description}
                </p>

                <a
                  href="#top"
                  className={cn(
                    "relative mt-6 flex w-full min-h-[48px] items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] sm:text-base",
                    tier.featured
                      ? "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/40"
                      : "bg-slate-900 text-white shadow-md hover:bg-slate-800 hover:shadow-lg dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                  )}
                >
                  {tier.ctaLabel}
                </a>

                <ul className="relative mx-auto mt-8 flex w-fit flex-col items-start gap-3">
                  {tier.checklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <Check className="h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
