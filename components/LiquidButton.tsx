"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LiquidButtonBaseProps {
  children: React.ReactNode;
  variant?: "liquid" | "glass";
  className?: string;
}

interface LiquidButtonAsLink extends LiquidButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface LiquidButtonAsButton extends LiquidButtonBaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
}

type LiquidButtonProps = LiquidButtonAsLink | LiquidButtonAsButton;

const TAP_SPRING = { type: "spring" as const, stiffness: 400, damping: 17 };

export default function LiquidButton(props: LiquidButtonProps): React.ReactElement {
  const { children, variant = "liquid", className } = props;

  const classes = cn(
    "group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-shadow duration-300",
    "before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent before:transition-transform before:duration-700 before:content-[''] hover:before:translate-x-full",
    variant === "liquid"
      ? "bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40"
      : "border border-white/90 bg-white/70 text-slate-900 shadow-sm backdrop-blur-xl hover:bg-white/90",
    className
  );

  const content = <span className="relative z-10 inline-flex items-center gap-2">{children}</span>;

  if ("href" in props && props.href) {
    return (
      <motion.a
        href={props.href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={TAP_SPRING}
        className={classes}
      >
        {content}
      </motion.a>
    );
  }

  const buttonProps = props as LiquidButtonAsButton;
  return (
    <motion.button
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={TAP_SPRING}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
