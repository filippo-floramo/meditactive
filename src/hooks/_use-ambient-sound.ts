import { useEffect, useMemo } from "react";
import type { SessionStatus } from "../context";

/**
 * Loops an ambient track while the session runs; rewinds when the session goes idle.
 * @param src - Audio file URL
 * @param status - Session status
 * @param enabled - User sound preference
 */
export function useAmbientSound(src: string, status: SessionStatus, enabled: boolean): void {
  const audio = useMemo(() => {
    const element = new Audio(src);

    element.loop = true;

    return element;
  }, [src]);

  useEffect(() => {
    if (status === "running" && enabled) {
      // Autoplay policies may reject play(); the session continues silently.
      audio.play().catch(() => undefined);

      return;
    }

    audio.pause();

    if (status === "idle") {
      audio.currentTime = 0;
    }
  }, [audio, status, enabled]);

  useEffect(() => () => audio.pause(), [audio]);
}
