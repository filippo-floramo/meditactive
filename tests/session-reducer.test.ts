import { describe, expect, it } from "vitest";
import {
  INITIAL_SESSION,
  MAX_DURATION,
  sessionReducer,
  type SessionState
} from "../src/context";

const idle = (total: number): SessionState => ({
  ...INITIAL_SESSION,
  total,
  remaining: total
});

describe("sessionReducer", () => {
  it("starts idle with a 10 minute timer", () => {
    expect(INITIAL_SESSION).toMatchObject({
      total: 600000,
      remaining: 600000,
      status: "idle",
      done: false
    });
  });

  it("adjusts total and remaining while idle, clamped to 0 and the max", () => {
    expect(sessionReducer(idle(60000), { type: "adjust", delta: 30000 })).toMatchObject({
      total: 90000,
      remaining: 90000
    });
    expect(sessionReducer(idle(20000), { type: "adjust", delta: -30000 }).total).toBe(0);
    expect(sessionReducer(idle(MAX_DURATION), { type: "adjust", delta: 300000 }).total).toBe(
      MAX_DURATION
    );
  });

  it("ignores adjust while running", () => {
    const running = { ...idle(60000), status: "running" as const };

    expect(sessionReducer(running, { type: "adjust", delta: 30000 })).toBe(running);
  });

  it("remounts the countdown when the duration changes", () => {
    const next = sessionReducer(idle(60000), { type: "adjust", delta: 30000 });

    expect(next.runId).toBe(INITIAL_SESSION.runId + 1);
  });

  it("toggles between running and paused, never from zero", () => {
    const running = sessionReducer(idle(60000), { type: "toggle" });

    expect(running.status).toBe("running");
    expect(sessionReducer(running, { type: "toggle" }).status).toBe("paused");
    expect(sessionReducer(idle(0), { type: "toggle" }).status).toBe("idle");
  });

  it("stop returns to idle with the full duration", () => {
    const paused = { ...idle(60000), status: "paused" as const, remaining: 1000 };

    expect(sessionReducer(paused, { type: "stop" })).toMatchObject({
      status: "idle",
      remaining: 60000
    });
  });

  it("reset clears the duration", () => {
    expect(sessionReducer(idle(60000), { type: "reset" })).toMatchObject({
      total: 0,
      remaining: 0
    });
  });

  it("tick updates remaining", () => {
    const running = { ...idle(60000), status: "running" as const };

    expect(sessionReducer(running, { type: "tick", remaining: 42000 }).remaining).toBe(42000);
  });

  it("complete marks a running session done", () => {
    const running = { ...idle(60000), status: "running" as const };

    expect(sessionReducer(running, { type: "complete" })).toMatchObject({
      status: "idle",
      remaining: 0,
      done: true
    });
    expect(sessionReducer(idle(60000), { type: "complete" }).done).toBe(false);
  });

  it("again closes the sheet and restores the duration", () => {
    const done = { ...idle(60000), remaining: 0, done: true };

    expect(sessionReducer(done, { type: "again" })).toMatchObject({
      done: false,
      status: "idle",
      remaining: 60000
    });
  });
});
