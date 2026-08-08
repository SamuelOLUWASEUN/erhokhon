"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import LiquidButton from "@/components/LiquidButton";

const NAV_LINKS: readonly { label: string; href: string; id: string }[] = [
  { label: "Features", href: "#features", id: "features" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Testimonial", href: "#testimonials", id: "testimonials" },
];

export default function Header(): React.ReactElement {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach((section) => observerRef.current?.observe(section));
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={
          "flex w-full items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 " +
          (scrolled
            ? "border-white/90 bg-white/70 backdrop-blur-2xl shadow-xl shadow-slate-900/5"
            : "border-white/40 bg-white/30 backdrop-blur-md")
        }
      >
        <a
          href="#top"
          className="flex items-center gap-1 text-lg font-extrabold tracking-tight text-slate-900"
        >
          Erhokhon
          <span className="text-blue-600">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                "text-sm transition-colors " +
                (activeId === link.id
                  ? "font-semibold text-blue-600"
                  : "font-medium text-slate-600 hover:text-slate-900")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LiquidButton href="#pricing" className="px-5 py-2.5 text-xs">
            Get Started
          </LiquidButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/80 bg-white/60 text-slate-700 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </motion.div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-4 right-4 top-[72px] z-40 flex flex-col gap-1 rounded-3xl border border-white/80 bg-white/70 p-4 shadow-xl shadow-slate-900/5 backdrop-blur-2xl md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={
                "rounded-xl px-3 py-2.5 text-sm hover:bg-white/60 " +
                (activeId === link.id ? "font-semibold text-blue-600" : "font-medium text-slate-700")
              }
            >
              {link.label}
            </a>
          ))}
          <LiquidButton href="#pricing" className="mt-2 w-full">
            Get Started
          </LiquidButton>
        </motion.div>
      )}
    </header>
  );
}
