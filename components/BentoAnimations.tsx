"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

/**
 * AI Spending Scan & Data Pulse
 * A looping radar sweep with pulsing blips and a small waveform trace,
 * matching the "radar/scan visualization" brief for the AI Spending
 * Insight tile.
 */
export function RadarScanVisual(): React.ReactElement {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#0f3d3a]"
      role="img"
      aria-label="Radar-style animation representing AI spending scans"
    >
      <svg viewBox="0 0 200 130" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="radarSweep" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
          </linearGradient>
        </defs>

        {[18, 32, 46].map((r) => (
          <circle key={r} cx="65" cy="65" r={r} fill="none" stroke="#2dd4bf" strokeOpacity="0.25" strokeWidth="1" />
        ))}
        <line x1="65" y1="16" x2="65" y2="114" stroke="#2dd4bf" strokeOpacity="0.15" strokeWidth="1" />
        <line x1="16" y1="65" x2="114" y2="65" stroke="#2dd4bf" strokeOpacity="0.15" strokeWidth="1" />

        <motion.g
          style={{ transformOrigin: "65px 65px" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <path d="M65 65 L65 19 A46 46 0 0 1 96 32 Z" fill="url(#radarSweep)" />
        </motion.g>

        <motion.circle
          cx="82"
          cy="48"
          r="2.4"
          fill="#5eead4"
          animate={reduceMotion ? { opacity: 0.7 } : { opacity: [0, 1, 0] }}
          transition={reduceMotion ? undefined : { duration: 2.2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.circle
          cx="46"
          cy="82"
          r="2"
          fill="#5eead4"
          animate={reduceMotion ? { opacity: 0.6 } : { opacity: [0, 1, 0] }}
          transition={reduceMotion ? undefined : { duration: 2.6, repeat: Infinity, delay: 1.2 }}
        />

        <path
          d="M138 96 L144 84 L149 102 L154 78 L159 92 L165 86"
          fill="none"
          stroke="#5eead4"
          strokeOpacity="0.85"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/**
 * Global Money Network & Connection Nodes
 * A latitude/longitude globe with sequential node pulses and two
 * counter-rotating orbit rings, matching the "nodes lighting up + orbiting
 * transfer arcs" brief for the Instant Global Transfers tile.
 */
export function GlobalNetworkVisual(): React.ReactElement {
  const reduceMotion = useReducedMotion();

  const nodes: readonly { x: number; y: number; delay: number }[] = [
    { x: 42, y: 38, delay: 0 },
    { x: 100, y: 26, delay: 0.3 },
    { x: 154, y: 46, delay: 0.6 },
    { x: 62, y: 82, delay: 0.9 },
    { x: 128, y: 86, delay: 1.2 },
    { x: 92, y: 58, delay: 1.5 },
  ];

  return (
    <div
      className="relative h-32 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1f3d] to-[#163a5c]"
      role="img"
      aria-label="Animated globe with connection nodes representing global money transfers"
    >
      <svg viewBox="0 0 200 130" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="100" cy="60" r="46" fill="none" stroke="#38bdf8" strokeOpacity="0.35" strokeWidth="1" />
        <ellipse cx="100" cy="60" rx="46" ry="16" fill="none" stroke="#38bdf8" strokeOpacity="0.25" strokeWidth="1" />
        <ellipse cx="100" cy="60" rx="20" ry="46" fill="none" stroke="#38bdf8" strokeOpacity="0.25" strokeWidth="1" />

        {nodes.slice(0, -1).map((node, i) => {
          const next = nodes[i + 1];
          if (!next) return null;
          return (
            <line
              key={`edge-${node.x}-${node.y}`}
              x1={node.x}
              y1={node.y}
              x2={next.x}
              y2={next.y}
              stroke="#38bdf8"
              strokeOpacity="0.3"
              strokeWidth="1"
            />
          );
        })}

        {nodes.map((node) => (
          <motion.circle
            key={`node-${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="#7dd3fc"
            animate={reduceMotion ? { opacity: 0.85 } : { opacity: [0.25, 1, 0.25] }}
            transition={reduceMotion ? undefined : { duration: 2.4, repeat: Infinity, delay: node.delay }}
          />
        ))}

        <motion.g
          style={{ transformOrigin: "100px 60px" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "linear" }}
        >
          <ellipse
            cx="100"
            cy="60"
            rx="58"
            ry="20"
            fill="none"
            stroke="#f59e0b"
            strokeOpacity="0.55"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </motion.g>
        <motion.g
          style={{ transformOrigin: "100px 60px" }}
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <ellipse
            cx="100"
            cy="60"
            rx="30"
            ry="54"
            fill="none"
            stroke="#f59e0b"
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeDasharray="3 7"
          />
        </motion.g>
      </svg>

      <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-amber-900 shadow">
        $
      </div>
      <div className="absolute bottom-3 right-4 flex h-6 w-6 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-amber-900 shadow">
        $
      </div>
    </div>
  );
}

/**
 * Bank-Level Encryption & Security Check
 * A two-tone (amber → green) ring draws itself on scroll into view, a
 * shield with a padlock scales in, then a checkmark badge confirms —
 * matching the "shield and padlock animation that closes or checks" brief.
 */
export function ShieldCheckVisual(): React.ReactElement {
  const reduceMotion = useReducedMotion();
  const radius = 45;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      className="relative flex h-[72px] items-center gap-4 overflow-hidden rounded-2xl bg-gradient-to-br from-[#0a2540] to-[#123055] px-4"
      role="img"
      aria-label="Shield and padlock animation confirming bank-level encryption"
    >
      <svg viewBox="0 0 120 120" className="h-16 w-16 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="shieldRingGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        <circle cx="60" cy="60" r={radius} fill="none" stroke="#1e3a5f" strokeWidth="6" />
        <motion.circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke="url(#shieldRingGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={circumference}
          transform="rotate(-90 60 60)"
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0 } : { duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />

        <motion.path
          d="M60 30 L82 40 V62 C82 78 72 90 60 95 C48 90 38 78 38 62 V40 Z"
          fill="#3b82f6"
          stroke="#bfdbfe"
          strokeWidth="1.5"
          style={{ transformOrigin: "60px 30px" }}
          initial={{ scaleY: 0.15, opacity: 0 }}
          whileInView={{ scaleY: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={reduceMotion ? { duration: 0.2 } : { duration: 0.6, ease: "easeOut", delay: 0.9 }}
        />
        <rect x="52" y="58" width="16" height="13" rx="2" fill="#e0f2fe" />
        <path d="M55 58 V52 a5 5 0 0 1 10 0 V58" fill="none" stroke="#e0f2fe" strokeWidth="2.5" />
      </svg>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : { type: "spring", stiffness: 300, damping: 15, delay: 1.4 }
        }
        className="absolute left-11 top-9 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 shadow-lg"
      >
        <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden="true" />
      </motion.div>

      <div>
        <p className="text-xs font-semibold text-white">Card protected</p>
        <p className="text-[11px] tracking-wider text-white/60">•••• •••• •••• 2163</p>
      </div>
    </div>
  );
}
