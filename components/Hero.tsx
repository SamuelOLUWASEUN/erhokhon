"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";

export default function Hero(): React.ReactElement {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-8 pt-20 md:pb-16 md:pt-32">
      {/* Text block — centered on mobile, left-aligned on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center lg:mx-0 lg:max-w-6xl lg:items-start lg:text-left"
      >
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          Your Money.
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            No Middlemen.
          </span>
          <br />
          No Delays.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
          Send, receive, and grow your finances with military-grade security and
          zero fees. Join the future of global banking.
        </p>

        <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <LiquidButton href="#pricing" variant="liquid" className="w-full min-h-[48px] justify-center sm:w-auto">
            Open an Account
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </LiquidButton>
          <LiquidButton href="#features" variant="glass" className="w-full min-h-[48px] justify-center sm:w-auto">
            <PlayCircle className="h-4 w-4" aria-hidden="true" />
            View Demo
          </LiquidButton>
        </div>
      </motion.div>

      {/* Hero graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="relative mx-auto mt-8 w-full max-w-[320px] sm:max-w-md lg:max-w-lg"
      >
        <div
          className="absolute inset-12 -z-10 rounded-full bg-gradient-to-br from-blue-500/15 to-indigo-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="overflow-hidden rounded-3xl border border-slate-200/80 shadow-2xl dark:border-slate-800">
          <Image
            src="/images/hero-mockup.png"
            alt="Erhokhon App"
            width={892}
            height={763}
            priority
            sizes="(max-width: 640px) 320px, (max-width: 1024px) 448px, 512px"
            className="h-auto w-full object-cover"
          />
        </div>

        {/* Compact floating glass badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
          className="absolute -bottom-4 left-2 z-20 w-[210px] rounded-2xl border border-white/90 bg-white/80 p-3 shadow-xl shadow-blue-500/10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/80 sm:-left-6 sm:w-[240px] sm:p-4"
        >
          <p className="text-[10px] font-medium text-slate-500 dark:text-slate-400 sm:text-xs">
            Total Balance
          </p>
          <p className="text-base font-bold text-slate-900 dark:text-white sm:text-lg">
            $1,648.00
          </p>
          <svg
            viewBox="0 0 100 25"
            className="mt-1 h-6 w-full fill-none stroke-blue-500 stroke-2"
            aria-hidden="true"
          >
            <motion.path
              d="M0 20 L20 15 L40 18 L60 8 L80 12 L100 2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
