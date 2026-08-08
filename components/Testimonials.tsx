"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AVATAR_URLS, TESTIMONIALS } from "@/lib/data";
import GlassCard from "@/components/GlassCard";
import LiquidButton from "@/components/LiquidButton";

function LiveStars(): React.ReactElement {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.4, rotate: -20 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: 0.2, ease: "backOut" }}
      aria-hidden="true"
    >
      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
    </motion.span>
  );
}

export default function Testimonials(): React.ReactElement {
  return (
    <>
      <section id="testimonials" className="scroll-mt-20 px-4 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              What our users are saying
            </h2>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
              Discover how our service makes a difference for users worldwide.
            </p>

            <div className="mt-6 flex items-center justify-center gap-6">
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">2M+ Satisfied Users</p>
              <span className="h-1 w-1 rounded-full bg-slate-300" aria-hidden="true" />
              <div className="flex items-center gap-1.5">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">4.8</p>
                <LiveStars />
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">Apple Store Ratings</p>
              </div>
            </div>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <GlassCard key={testimonial.id} as="figure" delay={i * 0.1} className="flex flex-col gap-4 p-6">
                <blockquote className="relative text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="relative mt-auto flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatarUrl}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </figcaption>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-600 px-8 py-16 text-center sm:px-16"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white, transparent 35%), radial-gradient(circle at 80% 60%, white, transparent 30%)",
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Join 2 million people who moved smarter.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-white/80">
              Start your journey toward zero-fees banking today. No credit check
              required to get started.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LiquidButton
                href="#top"
                variant="glass"
                className="!bg-white !text-blue-700 hover:!bg-white/90"
              >
                Download App
              </LiquidButton>
              <LiquidButton
                href="#features"
                variant="glass"
                className="!border-white/40 !bg-white/10 !text-white hover:!bg-white/20"
              >
                Learn More
              </LiquidButton>
            </div>

            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="flex -space-x-3">
                {AVATAR_URLS.slice(0, 4).map((url, idx) => (
                  <div
                    key={url}
                    className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-blue-600"
                    style={{ zIndex: 4 - idx }}
                  >
                    <Image src={url} alt="" fill sizes="32px" className="object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-xs font-medium text-white/85">
                24,000+ new users joined this week
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
