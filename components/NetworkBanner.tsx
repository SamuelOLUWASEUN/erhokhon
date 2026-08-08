"use client";

import { AnimatePresence, motion } from "framer-motion";
import { RefreshCw, WifiOff } from "lucide-react";
import { useNetworkStatus } from "@/hooks/useNetworkStatus";

export default function NetworkBanner(): React.ReactElement | null {
  const { state } = useNetworkStatus();

  if (state === "online") return null;

  const isOffline = state === "offline";

  return (
    <div className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex justify-center px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={state}
          initial={{ opacity: 0, y: -16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          role="status"
          aria-live="polite"
          className={
            "pointer-events-auto flex items-center gap-3 rounded-full border px-4 py-2.5 backdrop-blur-md shadow-lg " +
            (isOffline
              ? "border-rose-500/20 bg-rose-500/10 shadow-rose-500/10"
              : "border-emerald-500/20 bg-emerald-500/10 shadow-emerald-500/10")
          }
        >
          {isOffline ? (
            <>
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-500 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-rose-500" />
              </span>
              <WifiOff className="h-4 w-4 shrink-0 text-rose-600" aria-hidden="true" />
              <p className="text-sm font-medium text-rose-900">
                You are currently offline. Some features may be unavailable.
              </p>
            </>
          ) : (
            <>
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <p className="text-sm font-medium text-emerald-900">Connection restored.</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white transition-transform hover:scale-105 active:scale-95"
              >
                <RefreshCw className="h-3 w-3" aria-hidden="true" />
                Refresh to Sync
              </button>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
