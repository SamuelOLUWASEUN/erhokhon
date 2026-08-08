"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { NetworkState } from "@/lib/types";

interface UseNetworkStatusResult {
  state: NetworkState;
  isOnline: boolean;
  dismiss: () => void;
}

const RECOVERY_AUTO_DISMISS_MS = 5000;

/**
 * Tracks real browser connectivity via navigator.onLine + online/offline
 * events. Guards all `window`/`navigator` access so this hook is safe to
 * import into a Server Component tree (the effects simply no-op on the
 * server and hydrate correctly on the client).
 */
export function useNetworkStatus(): UseNetworkStatusResult {
  // Default to "online" for the SSR pass — avoids a hydration mismatch
  // flashing the offline banner on every server-rendered load.
  const [state, setState] = useState<NetworkState>("online");
  const wasOffline = useRef(false);
  const dismissTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearDismissTimer = useCallback(() => {
    if (dismissTimer.current) {
      clearTimeout(dismissTimer.current);
      dismissTimer.current = null;
    }
  }, []);

  const dismiss = useCallback(() => {
    clearDismissTimer();
    setState("online");
  }, [clearDismissTimer]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof navigator === "undefined") {
      return;
    }

    // Sync true initial state once mounted on the client.
    setState(navigator.onLine ? "online" : "offline");
    wasOffline.current = !navigator.onLine;

    const handleOffline = (): void => {
      clearDismissTimer();
      wasOffline.current = true;
      setState("offline");
    };

    const handleOnline = (): void => {
      if (wasOffline.current) {
        setState("recovering");
        wasOffline.current = false;
        clearDismissTimer();
        dismissTimer.current = setTimeout(() => {
          setState("online");
        }, RECOVERY_AUTO_DISMISS_MS);
      } else {
        setState("online");
      }
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
      clearDismissTimer();
    };
  }, [clearDismissTimer]);

  return { state, isOnline: state !== "offline", dismiss };
}
