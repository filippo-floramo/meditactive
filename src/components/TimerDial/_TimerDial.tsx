import type { SessionStatus } from "../../context";
import { adoptStyles, formatTime } from "../../helpers";
import cssText from "./_TimerDial.css?raw";

adoptStyles(cssText);

const CIRCUMFERENCE = 942.48;

/** Props for {@link TimerDial}. */
export interface TimerDialProps {
  modeName: string;
  remaining: number;
  progress: number;
  status: SessionStatus;
}

const statusText = (status: SessionStatus, remaining: number): string => {
  if (status === "paused") {
    return "Paused";
  }

  return remaining <= 0 ? "Add time to begin" : "Ready when you are";
};

/**
 * Progress ring on a glass disc with mode label, remaining time, and status or breathing cue.
 * @param props - {@link TimerDialProps}
 * @returns Timer dial
 */
export function TimerDial({ modeName, remaining, progress, status }: TimerDialProps) {
  const running = status === "running";

  return (
    <div data-part="dial">
      {running && <span data-part="halo" aria-hidden="true" />}
      <svg data-part="ring" viewBox="0 0 320 320" aria-hidden="true">
        <circle data-part="track" cx="160" cy="160" r="150" />
        <circle
          data-part="progress"
          data-started={progress > 0}
          cx="160"
          cy="160"
          r="150"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={(CIRCUMFERENCE * (1 - progress)).toFixed(2)}
          transform="rotate(-90 160 160)"
        />
      </svg>
      <div data-part="face">
        <p data-part="mode-name">{modeName}</p>
        <p data-part="time" role="timer">
          {formatTime(remaining)}
        </p>
        <p data-part="status">
          {running ? (
            <>
              <span data-part="breathe" data-phase="in">
                Breathe in
              </span>
              <span data-part="breathe" data-phase="out">
                Breathe out
              </span>
            </>
          ) : (
            <span data-part="status-text" key={statusText(status, remaining)}>
              {statusText(status, remaining)}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
