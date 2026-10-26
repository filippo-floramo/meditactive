import { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import type { SessionStatus } from "../../context";

/** Props for {@link Ticker}. */
export interface TickerProps {
  remaining: number;
  status: SessionStatus;
  onTick: (remaining: number) => void;
  onComplete: () => void;
}

/**
 * Headless react-countdown driver. Remount it with a new `key` to restart from `remaining`.
 * @param props - {@link TickerProps}
 * @returns Countdown that renders nothing
 */
export function Ticker({ remaining, status, onTick, onComplete }: TickerProps) {
  const ref = useRef<Countdown>(null);
  // react-countdown restarts whenever `date` changes, so it is fixed for this mount.
  const [date] = useState(() => Date.now() + remaining);

  useEffect(() => {
    if (status === "running") {
      ref.current?.start();
    }

    if (status === "paused") {
      ref.current?.pause();
    }
  }, [status]);

  return (
    <Countdown
      ref={ref}
      date={date}
      autoStart={false}
      intervalDelay={200}
      precision={1}
      renderer={() => null}
      onTick={({ total }) => onTick(total)}
      onComplete={onComplete}
    />
  );
}
