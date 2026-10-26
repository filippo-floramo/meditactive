import type { SessionStatus } from "../../context";
import { adoptStyles } from "../../helpers";
import cssText from "./_SessionControls.css?raw";

adoptStyles(cssText);

/** Props for {@link SessionControls}. */
export interface SessionControlsProps {
  status: SessionStatus;
  remaining: number;
  sound: boolean;
  onToggle: () => void;
  onStop: () => void;
  onReset: () => void;
  onSound: () => void;
}

/**
 * Session controls: Reset or Stop, Play/Pause, and the ambient sound toggle.
 * @param props - {@link SessionControlsProps}
 * @returns Control menu
 */
export function SessionControls({
  status,
  remaining,
  sound,
  onToggle,
  onStop,
  onReset,
  onSound
}: SessionControlsProps) {
  const running = status === "running";

  return (
    <menu data-part="controls">
      <li>
        {status === "idle" ? (
          <button type="button" data-variant="glass" aria-label="Reset timer" onClick={onReset}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" />
              <path d="M3.5 4v5h5" />
            </svg>
          </button>
        ) : (
          <button type="button" data-variant="glass" aria-label="Stop session" onClick={onStop}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="6" width="12" height="12" rx="2.5" fill="currentColor" />
            </svg>
          </button>
        )}
      </li>
      <li>
        <button
          type="button"
          data-variant="primary"
          data-part="play"
          aria-label={running ? "Pause" : "Start"}
          disabled={!running && remaining <= 0}
          onClick={onToggle}
        >
          {running ? (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
              <rect x="14" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.5 5.2v13.6a1 1 0 0 0 1.5.86l10.2-6.8a1 1 0 0 0 0-1.72L10 4.34a1 1 0 0 0-1.5.86z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </li>
      <li>
        <button
          type="button"
          data-variant="glass"
          aria-label="Ambient sound"
          aria-pressed={sound}
          onClick={onSound}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M11 5 6 9H3v6h3l5 4z" />
            {sound ? (
              <>
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M18.5 5.5a9 9 0 0 1 0 13" />
              </>
            ) : (
              <path d="M16 9.5l5 5M21 9.5l-5 5" />
            )}
          </svg>
        </button>
      </li>
    </menu>
  );
}
