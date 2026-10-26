import { adoptStyles } from "../../helpers";
import cssText from "./_TimerAdjust.css?raw";

adoptStyles(cssText);

/** One adjust button: visible label, accessible name, and delta in milliseconds. */
export interface AdjustStep {
  label: string;
  name: string;
  delta: number;
}

/** Props for {@link TimerAdjust}. */
export interface TimerAdjustProps {
  side: "start" | "end";
  steps: AdjustStep[];
  disabled: boolean;
  onAdjust: (delta: number) => void;
}

/**
 * Column of round buttons that add or remove time; slides toward the dial while active.
 * @param props - {@link TimerAdjustProps}
 * @returns Adjust button list
 */
export function TimerAdjust({ side, steps, disabled, onAdjust }: TimerAdjustProps) {
  return (
    <ul data-part="adjust" data-side={side}>
      {steps.map((step) => (
        <li key={step.name}>
          <button
            type="button"
            data-variant="glass"
            aria-label={step.name}
            disabled={disabled}
            onClick={() => onAdjust(step.delta)}
          >
            {step.label}
          </button>
        </li>
      ))}
    </ul>
  );
}
