"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

// dotLottie renders to a <canvas> via WASM — load it client-only so the
// server render never touches it, and so a missing WASM asset can't fail
// the build.
const DotLottieReact = dynamic(
  () => import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  { ssr: false }
);

interface LottieVisualProps {
  /** Path to a .lottie or .json asset, typically under /public/lottie/. */
  src: string;
  /** Rendered instead of (and until) the Lottie asset is confirmed loadable. */
  fallback: React.ReactNode;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  ariaLabel: string;
}

/**
 * NOTE ON ASSETS: this component intentionally does not ship pointed at any
 * third-party lottie.host / LottieFiles CDN URL. Those "public" links are
 * per-account ephemeral uploads, not versioned package assets — wiring
 * production code to one is a silent-breakage risk with no upstream
 * guarantee. Drop real exported .lottie/.json files into /public/lottie/
 * and pass that path as `src`; until then (or if the fetch/decode fails)
 * this renders `fallback`, so the UI never ships a blank canvas.
 */
export default function LottieVisual({
  src,
  fallback,
  className,
  loop = true,
  autoplay = true,
  ariaLabel,
}: LottieVisualProps): React.ReactElement {
  const [failed, setFailed] = useState(false);

  const handleRef = useCallback((dotLottie: DotLottie | null) => {
    if (!dotLottie) return;
    dotLottie.addEventListener("loadError", () => setFailed(true));
  }, []);

  if (failed) {
    return <>{fallback}</>;
  }

  return (
    <div className={cn("relative", className)} role="img" aria-label={ariaLabel}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        dotLottieRefCallback={handleRef}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
