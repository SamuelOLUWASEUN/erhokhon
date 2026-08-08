"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle, Sparkles } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";

export default function Hero(): React.ReactElement {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-12 sm:pt-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-6xl">
            Your Money.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              No Middlemen.
            </span>
            <br />
            No Delays.
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-500">
            Send, receive, and grow your finances with military-grade security and
            zero fees. Join the future of global banking.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LiquidButton href="#pricing" variant="liquid">
              Open an Account
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </LiquidButton>
            <LiquidButton href="#features" variant="glass">
              <PlayCircle className="h-4 w-4" aria-hidden="true" />
              View Demo
            </LiquidButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Ambient blue glow behind the render, consistent with the liquid-glass palette */}
          <div
            className="absolute inset-8 -z-10 rounded-full bg-gradient-to-br from-blue-500/25 to-indigo-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative aspect-[1024/871] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10">
            <Image
              src="/images/hero-mockup.png"
              alt="A 3D render of hands holding a smartphone showing the Erhokhon banking app with a $1,648.00 balance and recent transaction history"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 560px"
              className="object-cover"
            />
          </div>

          {/* Small live-status badge — complements the baked-in app UI without duplicating it */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.6 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
            }}
            whileHover={{ scale: 1.04 }}
            className="glass-surface absolute -left-4 top-6 flex items-center gap-2 rounded-full px-4 py-2 sm:-left-8"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            <span className="text-xs font-semibold text-slate-700">Live &amp; encrypted</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
