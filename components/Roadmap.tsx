"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, UserPlus, Wallet } from "lucide-react";
import { ROADMAP_STEPS } from "@/lib/data";
import LiquidButton from "@/components/LiquidButton";
import type { LucideIcon } from "lucide-react";

const STEP_ICONS: Record<string, LucideIcon> = {
  "create-account": UserPlus,
  "add-funds": Wallet,
  "transact-globally": Globe2,
};

export default function Roadmap(): React.ReactElement {
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
            Simple. Transparent. Fast.
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Get started in under a minute with our streamlined onboarding process.
          </p>
        </motion.div>

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {/* Desktop connector rail (steps run left to right) */}
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent sm:block"
            aria-hidden="true"
          />
          <motion.div
            className="pointer-events-none absolute top-6 hidden h-2 w-2 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_10px_3px_rgba(37,99,235,0.6)] sm:block"
            initial={{ left: "0%", opacity: 0 }}
            whileInView={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              left: { duration: 2.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 },
              opacity: { duration: 2.6, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 0.6 },
            }}
            aria-hidden="true"
          />

          {/* Mobile connector rail (steps stack top to bottom) */}
          <div
            className="absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-200 to-transparent sm:hidden"
            aria-hidden="true"
          />
          <motion.div
            className="pointer-events-none absolute left-1/2 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_10px_3px_rgba(37,99,235,0.6)] max-sm:block"
            initial={{ top: "0%", opacity: 0 }}
            whileInView={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              top: { duration: 2.6, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.6 },
              opacity: { duration: 2.6, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 0.6 },
            }}
            aria-hidden="true"
          />

          {ROADMAP_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[step.id] ?? UserPlus;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/25"
                >
                  <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                </motion.div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <LiquidButton href="#pricing" variant="liquid">
            Open an Account
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </LiquidButton>
        </div>
      </div>
    </section>
  );
}
