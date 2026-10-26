import type { Mode } from "../../context";
import { adoptStyles } from "../../helpers";
import cssText from "./_ModeSwitch.css?raw";

adoptStyles(cssText);

/** Props for {@link ModeSwitch}. */
export interface ModeSwitchProps {
  mode: Mode;
  disabled: boolean;
  onChange: (mode: Mode) => void;
}

/**
 * Light/Deep segmented control with a sliding thumb.
 * @param props - {@link ModeSwitchProps}
 * @returns Mode fieldset
 */
export function ModeSwitch({ mode, disabled, onChange }: ModeSwitchProps) {
  return (
    <fieldset data-part="mode-switch" disabled={disabled}>
      <legend data-part="visually-hidden">Meditation mode</legend>
      <span data-part="thumb" aria-hidden="true" />
      <button type="button" aria-pressed={mode === "light"} onClick={() => onChange("light")}>
        Light
      </button>
      <button type="button" aria-pressed={mode === "deep"} onClick={() => onChange("deep")}>
        Deep
      </button>
    </fieldset>
  );
}
