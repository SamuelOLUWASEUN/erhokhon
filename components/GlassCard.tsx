"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "glass" | "accent";
  delay?: number;
  as?: "div" | "article" | "figure";
}

const HOVER_SPRING = { type: "spring" as const, stiffness: 300, damping: 20 };

export default function GlassCard({
  children,
  className,
  variant = "glass",
  delay = 0,
  as = "div",
}: GlassCardProps): React.ReactElement {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.01, transition: HOVER_SPRING }}
      className={cn(
        "group relative overflow-hidden rounded-3xl transition-colors duration-300",
        variant === "glass"
          ? "border border-white/80 bg-white/60 shadow-xl shadow-blue-500/5 backdrop-blur-xl hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/15"
          : "border border-white/10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/40",
        className
      )}
    >
      {/* Specular light reflection sweep on hover */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      {children}
    </MotionTag>
  );
}
