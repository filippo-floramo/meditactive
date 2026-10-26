/** Timer lifecycle: idle (settable), running, paused. */
export type SessionStatus = "idle" | "running" | "paused";

/** Meditation session state. `runId` changes whenever the countdown must restart from scratch. */
export interface SessionState {
  total: number;
  remaining: number;
  status: SessionStatus;
  done: boolean;
  runId: number;
}

/** Actions accepted by {@link sessionReducer}. */
export type SessionAction =
  | { type: "adjust"; delta: number }
  | { type: "reset" }
  | { type: "toggle" }
  | { type: "stop" }
  | { type: "tick"; remaining: number }
  | { type: "complete" }
  | { type: "again" };

/** Longest settable session: 3 hours in milliseconds. */
export const MAX_DURATION = 3 * 60 * 60 * 1000;

/** Default session: 10 minutes, idle. */
export const INITIAL_SESSION: SessionState = {
  total: 600000,
  remaining: 600000,
  status: "idle",
  done: false,
  runId: 0
};

/**
 * Pure transition function for the session timer.
 * @param state - Current session state
 * @param action - Requested transition
 * @returns Next session state
 */
export function sessionReducer(state: SessionState, action: SessionAction): SessionState {
  switch (action.type) {
    case "adjust": {
      if (state.status !== "idle") {
        return state;
      }

      const total = Math.min(MAX_DURATION, Math.max(0, state.remaining + action.delta));

      return { ...state, total, remaining: total, runId: state.runId + 1 };
    }

    case "reset": {
      return { ...state, total: 0, remaining: 0, status: "idle", runId: state.runId + 1 };
    }

    case "toggle": {
      if (state.status === "running") {
        return { ...state, status: "paused" };
      }

      return state.remaining > 0 ? { ...state, status: "running" } : state;
    }

    case "stop": {
      return {
        ...state,
        status: "idle",
        remaining: state.total,
        done: false,
        runId: state.runId + 1
      };
    }

    case "tick": {
      return { ...state, remaining: action.remaining };
    }

    case "complete": {
      if (state.status !== "running") {
        return state;
      }

      return { ...state, status: "idle", remaining: 0, done: true };
    }

    case "again": {
      return {
        ...state,
        done: false,
        status: "idle",
        remaining: state.total,
        runId: state.runId + 1
      };
    }

    default: {
      return state;
    }
  }
}
