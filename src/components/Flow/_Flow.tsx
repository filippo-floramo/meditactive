import { adoptStyles } from "../../helpers";
import cssText from "./_Flow.css?raw";

adoptStyles(cssText);

const LAYERS = ["home", "light", "deep"] as const;
const BLOBS = ["1", "2", "3"] as const;

/**
 * Gradient flow: one layer per scene, cross-faded by the stage's data-scene.
 * @returns Decorative background layers
 */
export function Flow() {
  return (
    <div data-part="flow" aria-hidden="true">
      {LAYERS.map((layer) => (
        <div key={layer} data-part="layer" data-layer={layer}>
          {BLOBS.map((blob) => (
            <span key={blob} data-part="blob" data-blob={blob} />
          ))}
        </div>
      ))}
    </div>
  );
}
