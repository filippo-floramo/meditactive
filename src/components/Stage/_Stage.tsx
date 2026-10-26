import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import type { Mode, SessionStatus } from "../../context";
import { adoptStyles } from "../../helpers";
import { Flow } from "../Flow";
import { Waves } from "../Waves";
import cssText from "./_Stage.css?raw";

adoptStyles(cssText);

/** Background scene: the home palette or one of the session modes. */
export type Scene = "home" | Mode;

/** Props for {@link Stage}. */
export interface StageProps {
  scene: Scene;
  mode: Mode;
  status: SessionStatus;
  flowing: boolean;
  progress: number;
  children: ReactNode;
}

/**
 * Full-screen shell: gradient flow, waves, and the current screen on top.
 * Theme tokens hang off its data attributes.
 * @param props - {@link StageProps}
 * @returns Stage element
 */
export function Stage({ scene, mode, status, flowing, progress, children }: StageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Progress is continuous and has no attribute form; a custom property keeps the styling in CSS.
    ref.current?.style.setProperty("--progress", String(progress));
  }, [progress]);

  return (
    <div
      ref={ref}
      data-part="stage"
      data-scene={scene}
      data-mode={mode}
      data-status={status}
      data-flow={flowing ? "running" : "paused"}
    >
      <Flow />
      <Waves />
      {children}
    </div>
  );
}
