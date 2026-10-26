import type { Mode } from "../../context";
import { adoptStyles } from "../../helpers";
import cssText from "./_ModeCard.css?raw";

adoptStyles(cssText);

/** Props for {@link ModeCard}. */
export interface ModeCardProps {
  mode: Mode;
  title: string;
  description: string;
  onSelect: (mode: Mode) => void;
}

/**
 * Glass card button that starts a session in the given mode.
 * @param props - {@link ModeCardProps}
 * @returns Card button
 */
export function ModeCard({ mode, title, description, onSelect }: ModeCardProps) {
  return (
    <button type="button" data-part="mode-card" data-card={mode} onClick={() => onSelect(mode)}>
      <span data-part="card-icon" aria-hidden="true">
        {mode === "light" ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
          </svg>
        )}
      </span>
      <span data-part="card-title">{title}</span>
      <span data-part="card-text">{description}</span>
      <span data-part="card-cta">
        Begin
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </button>
  );
}
