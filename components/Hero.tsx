"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";
import { TRANSACTIONS } from "@/lib/data";

export default function Hero(): React.ReactElement {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-12 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Copy column */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your Money.
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              No Middlemen.
            </span>
            <br />
            No Delays.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-slate-500 sm:text-lg">
            Send, receive, and grow your finances with military-grade security and
            zero fees. Join the future of global banking.
          </p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
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

        {/* Graphic column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-[340px] sm:max-w-md lg:max-w-xl"
        >
          <div
            className="absolute inset-12 -z-10 rounded-full bg-gradient-to-br from-blue-500/15 to-indigo-500/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative aspect-[892/763] w-full overflow-hidden rounded-3xl">
            <Image
              src="/images/hero-mockup.png"
              alt="A 3D render of hands holding a smartphone showing the Erhokhon banking app with a $1,648.00 balance and recent transaction history"
              fill
              priority
              sizes="(max-width: 640px) 340px, (max-width: 1024px) 448px, 560px"
              className="object-cover"
            />
          </div>

          {/* Floating balance card — inset on mobile, offset on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            }}
            whileHover={{ scale: 1.02 }}
            className="absolute bottom-3 left-3 right-3 z-20 rounded-2xl border border-white/80 bg-white/75 p-4 shadow-xl shadow-blue-500/10 backdrop-blur-xl sm:right-auto sm:left-[-24px] sm:bottom-6 sm:w-[260px]"
          >
            <p className="text-xs font-medium text-slate-500">Total Balance</p>
            <p className="mt-1 text-2xl font-bold tracking-tight text-slate-900">
              $1,648.00
            </p>

            <svg viewBox="0 0 200 40" className="mt-3 h-8 w-full" aria-hidden="true">
              <motion.path
                d="M0 30 L25 22 L50 26 L75 12 L100 18 L125 8 L150 14 L175 4 L200 10"
                fill="none"
                stroke="url(#balanceGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.8 }}
              />
              <defs>
                <linearGradient id="balanceGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#4f46e5" />
                </linearGradient>
              </defs>
            </svg>

            <div className="mt-3 flex flex-col gap-2">
              {TRANSACTIONS.map((tx) => {
                const isIncoming = tx.amount.startsWith("+");
                return (
                  <div key={tx.label} className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      {tx.label}
                      {isIncoming && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </span>
                      )}
                    </span>
                    <span
                      className={
                        isIncoming
                          ? "font-semibold text-emerald-600"
                          : "font-semibold text-slate-700"
                      }
                    >
                      {tx.amount}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
