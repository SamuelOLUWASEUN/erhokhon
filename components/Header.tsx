"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";

const NAV_LINKS: readonly { label: string; href: string; id: string }[] = [
  { label: "Features", href: "#features", id: "features" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Security", href: "#features", id: "features" },
  { label: "Company", href: "#footer", id: "footer" },
];

/**
 * Lightweight dark-mode toggle that operates on the `<html>` element's
 * class list. Uses localStorage to persist preference across sessions.
 * Intentionally avoids pulling in `next-themes` as a dependency for a
 * single toggle — keeps the bundle lean.
 */
function useDarkMode(): { dark: boolean; toggle: () => void } {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("erhokhon-theme");
    // Default to light for new visitors — only honor dark if explicitly chosen
    const prefersDark = stored === "dark";
    setDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggle = useCallback(() => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("erhokhon-theme", next ? "dark" : "light");
      return next;
    });
  }, []);

  return { dark, toggle };
}

export default function Header(): React.ReactElement {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { dark, toggle: toggleDark } = useDarkMode();

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  useEffect(() => {
    const ids = Array.from(new Set(NAV_LINKS.map((link) => link.id)));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

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
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-1 text-lg font-bold text-slate-900 dark:text-white">
            Erhokhon
            <span className="text-blue-600">.</span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={
                  "text-sm transition-colors " +
                  (activeId === link.id
                    ? "font-semibold text-slate-900 dark:text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white")
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Desktop theme toggle */}
            <button
              type="button"
              onClick={toggleDark}
              className="hidden h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:text-slate-900 dark:border-slate-700 dark:text-slate-400 dark:hover:text-white md:flex"
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              href="#pricing"
              className="hidden rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 md:inline-flex"
            >
              Get Started
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 dark:border-slate-700 dark:text-slate-300 md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Right-side sheet drawer (mobile only) */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-md md:hidden"
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.aside
              key="drawer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
              className="fixed bottom-0 right-0 top-0 z-50 flex w-[280px] flex-col justify-between bg-white p-6 shadow-2xl dark:bg-slate-900 sm:w-[320px] md:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              {/* Close button — right-aligned, no duplicate brand */}
              <div>
                <div className="mb-6 flex w-full justify-end">
                  <button
                    type="button"
                    onClick={() => setDrawerOpen(false)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400"
                    aria-label="Close menu"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                {/* Nav links */}
                <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className={
                        "border-b border-slate-100 py-3 text-base font-medium transition-colors dark:border-slate-800/60 " +
                        (activeId === link.id
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white")
                      }
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <a
                  href="#pricing"
                  onClick={() => setDrawerOpen(false)}
                  className="mt-6 flex min-h-[48px] w-full items-center justify-center rounded-xl bg-slate-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Get Started
                </a>
              </div>

              {/* Theme toggle at bottom */}
              <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 dark:border-slate-700">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {dark ? "Dark mode" : "Light mode"}
                </span>
                <button
                  type="button"
                  onClick={toggleDark}
                  className="relative flex h-7 w-12 items-center rounded-full bg-slate-200 transition-colors dark:bg-blue-600"
                  role="switch"
                  aria-checked={dark}
                  aria-label="Toggle dark mode"
                >
                  <motion.span
                    layout
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-sm"
                    style={{ marginLeft: dark ? 24 : 4 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {dark ? (
                      <Moon className="h-3 w-3 text-blue-600" />
                    ) : (
                      <Sun className="h-3 w-3 text-amber-500" />
                    )}
                  </motion.span>
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
