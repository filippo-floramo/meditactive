import { useEffect, useId, useRef } from "react";
import { adoptStyles } from "../../helpers";
import cssText from "./_CompletionSheet.css?raw";

adoptStyles(cssText);

/** Props for {@link CompletionSheet}. */
export interface CompletionSheetProps {
  modeName: string;
  total: number;
  onHome: () => void;
  onAgain: () => void;
}

const summary = (modeName: string, total: number): string => {
  const minutes = Math.round(total / 60000);
  const length = minutes < 1 ? "under a minute" : `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;

  return `You completed ${length} of ${modeName} meditation.`;
};

/**
 * Modal sheet shown when a session completes. Escape starts a new session.
 * @param props - {@link CompletionSheetProps}
 * @returns Modal dialog
 */
export function CompletionSheet({ modeName, total, onHome, onAgain }: CompletionSheetProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    ref.current?.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      data-part="sheet"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onAgain();
      }}
    >
      <span data-part="sheet-badge" aria-hidden="true">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12.5l4.5 4.5L19 7.5" />
        </svg>
      </span>
      <h2 id={titleId}>Well done.</h2>
      <p>{summary(modeName, total)}</p>
      <menu data-part="sheet-actions">
        <li>
          <button type="button" data-variant="outline" onClick={onHome}>
            Back home
          </button>
        </li>
        <li>
          <button type="button" data-variant="primary" onClick={onAgain}>
            New session
          </button>
        </li>
      </menu>
    </dialog>
  );
}
