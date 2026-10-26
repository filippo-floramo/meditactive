import { adoptStyles } from "../../helpers";
import cssText from "./_Waves.css?raw";

adoptStyles(cssText);

const BACK =
  "M0 80 C120 30 240 30 360 80 S600 130 720 80 S960 30 1080 80 S1320 130 1440 80 S1680 30 1800 80 S2040 130 2160 80 S2400 30 2520 80 S2760 130 2880 80 L2880 160 L0 160 Z";
const MIDDLE =
  "M0 80 C120 112 240 112 360 80 S600 48 720 80 S960 112 1080 80 S1320 48 1440 80 S1680 112 1800 80 S2040 48 2160 80 S2400 112 2520 80 S2760 48 2880 80 L2880 160 L0 160 Z";
const FRONT =
  "M0 80 C80 58 160 58 240 80 S400 102 480 80 S640 58 720 80 S880 102 960 80 S1120 58 1200 80 S1360 102 1440 80 S1600 58 1680 80 S1840 102 1920 80 S2080 58 2160 80 S2320 102 2400 80 S2560 58 2640 80 S2800 102 2880 80 L2880 160 L0 160 Z";

/**
 * Three looping wave layers; their height follows the stage's --progress.
 * @returns Decorative waves
 */
export function Waves() {
  return (
    <div data-part="waves" aria-hidden="true">
      <div data-part="wave-band" data-wave="back">
        <svg data-part="wave" viewBox="0 0 2880 160" preserveAspectRatio="none">
          <path d={BACK} />
        </svg>
      </div>
      <div data-part="wave-band" data-wave="middle">
        <svg data-part="wave" viewBox="0 0 2880 160" preserveAspectRatio="none">
          <path d={MIDDLE} />
        </svg>
      </div>
      <div data-part="wave-band" data-wave="front">
        <svg data-part="wave" viewBox="0 0 2880 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mt-wave-front" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" data-part="stop-top" />
              <stop offset="1" data-part="stop-bottom" />
            </linearGradient>
          </defs>
          <path d={FRONT} fill="url(#mt-wave-front)" />
        </svg>
      </div>
    </div>
  );
}
