import { createContext, useContext, useEffect, useReducer, useState } from "react";
import type { Dispatch, ReactNode } from "react";
import { INITIAL_SESSION, sessionReducer } from "./_session-reducer";
import type { SessionAction, SessionState } from "./_session-reducer";

/** Meditation mode: Light or Deep. */
export type Mode = "light" | "deep";

/** Shared app state exposed by {@link AppProvider}. */
export interface AppState {
  mode: Mode;
  setMode: (mode: Mode) => void;
  sound: boolean;
  setSound: (sound: boolean) => void;
  session: SessionState;
  dispatch: Dispatch<SessionAction>;
}

const STORAGE_KEY = "meditactive-mode";

const AppContext = createContext<AppState | null>(null);

const readMode = (): Mode => {
  try {
    return localStorage.getItem(STORAGE_KEY) === "deep" ? "deep" : "light";
  } catch {
    return "light";
  }
};

/**
 * Provides mode, sound preference and session timer state.
 * @param props.children - App tree
 * @returns Context provider
 */
export function AppProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(readMode);
  const [sound, setSound] = useState(true);
  const [session, dispatch] = useReducer(sessionReducer, INITIAL_SESSION);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // Storage can be blocked (private mode); the mode still works for this visit.
    }
  }, [mode]);

  return (
    <AppContext.Provider value={{ mode, setMode, sound, setSound, session, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

/**
 * Reads the app state.
 * @returns App state from the nearest {@link AppProvider}
 */
export function useApp(): AppState {
  const value = useContext(AppContext);

  if (!value) {
    throw new Error("useApp must be used inside AppProvider");
  }

  return value;
}
