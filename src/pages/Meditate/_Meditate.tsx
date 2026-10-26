import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useApp } from "../../context";
import { CompletionSheet } from "../../components/CompletionSheet";
import { Logo } from "../../components/Logo";
import { ModeSwitch } from "../../components/ModeSwitch";
import { Screen } from "../../components/Screen";
import { SessionControls } from "../../components/SessionControls";
import { Ticker } from "../../components/Ticker";
import { TimerAdjust } from "../../components/TimerAdjust";
import type { AdjustStep } from "../../components/TimerAdjust";
import { TimerDial } from "../../components/TimerDial";
import { adoptStyles } from "../../helpers";
import { useAmbientSound } from "../../hooks";
import deepSound from "../../sounds/deep-meditation.mp3";
import lightSound from "../../sounds/light-meditation.mp3";
import cssText from "./_Meditate.css?raw";

adoptStyles(cssText);

const DECREASE: AdjustStep[] = [
  { label: "-5m", name: "Remove 5 minutes", delta: -300000 },
  { label: "-30s", name: "Remove 30 seconds", delta: -30000 }
];

const INCREASE: AdjustStep[] = [
  { label: "+5m", name: "Add 5 minutes", delta: 300000 },
  { label: "+30s", name: "Add 30 seconds", delta: 30000 }
];

/**
 * Session screen: mode switch, adjustable timer dial, controls, and completion sheet.
 * @returns Session screen
 */
export function Meditate() {
  const navigate = useNavigate();
  const { mode, setMode, sound, setSound, session, dispatch } = useApp();
  const active = session.status !== "idle";
  const modeName = mode === "light" ? "Light" : "Deep";
  const progress = session.total > 0 ? Math.min(1, Math.max(0, 1 - session.remaining / session.total)) : 0;
  const adjust = (delta: number) => dispatch({ type: "adjust", delta });

  useAmbientSound(mode === "deep" ? deepSound : lightSound, session.status, sound);

  useEffect(() => () => dispatch({ type: "stop" }), [dispatch]);

  return (
    <Screen name="session">
      <header data-part="session-bar">
        <button type="button" data-variant="glass" aria-label="Back to home" onClick={() => navigate("/")}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <ModeSwitch mode={mode} disabled={active} onChange={setMode} />
        <Logo />
      </header>
      <main data-part="session">
        <section data-part="timer" aria-label="Timer">
          <TimerAdjust side="start" steps={DECREASE} disabled={active} onAdjust={adjust} />
          <TimerDial modeName={modeName} remaining={session.remaining} progress={progress} status={session.status} />
          <TimerAdjust side="end" steps={INCREASE} disabled={active} onAdjust={adjust} />
        </section>
        <SessionControls
          status={session.status}
          remaining={session.remaining}
          sound={sound}
          onToggle={() => dispatch({ type: "toggle" })}
          onStop={() => dispatch({ type: "stop" })}
          onReset={() => dispatch({ type: "reset" })}
          onSound={() => setSound(!sound)}
        />
      </main>
      {session.remaining > 0 && (
        <Ticker
          key={session.runId}
          remaining={session.remaining}
          status={session.status}
          onTick={(remaining) => dispatch({ type: "tick", remaining })}
          onComplete={() => dispatch({ type: "complete" })}
        />
      )}
      {session.done && (
        <CompletionSheet
          modeName={modeName}
          total={session.total}
          onHome={() => {
            dispatch({ type: "again" });
            navigate("/");
          }}
          onAgain={() => dispatch({ type: "again" })}
        />
      )}
    </Screen>
  );
}
