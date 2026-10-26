import { describe, expect, it } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { App } from "../src";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

describe("App", () => {
  it("offers both modes as buttons on home", () => {
    renderAt("/");

    expect(
      screen.getByRole("heading", { level: 1, name: /how would you like your session/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Light/ })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^Deep/ })).toBeInTheDocument();
  });

  it("picking a mode opens the session in that mode", async () => {
    renderAt("/");
    fireEvent.click(screen.getByRole("button", { name: /^Deep/ }));

    expect(await screen.findByRole("timer")).toHaveTextContent("10:00");
    expect(screen.getByRole("button", { name: "Deep" })).toHaveAttribute("aria-pressed", "true");
  });

  it("adjusts the timer while idle", async () => {
    renderAt("/meditate");
    fireEvent.click(await screen.findByRole("button", { name: "Add 5 minutes" }));
    fireEvent.click(screen.getByRole("button", { name: "Remove 30 seconds" }));

    expect(screen.getByRole("timer")).toHaveTextContent("14:30");
  });

  it("locks adjusters and mode while running", async () => {
    renderAt("/meditate");
    fireEvent.click(await screen.findByRole("button", { name: "Start" }));

    expect(screen.getByRole("button", { name: "Pause" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add 5 minutes" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Light" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Stop session" })).toBeInTheDocument();
  });

  it("disables start when the timer is empty", async () => {
    renderAt("/meditate");
    fireEvent.click(await screen.findByRole("button", { name: "Reset timer" }));

    expect(screen.getByRole("button", { name: "Start" })).toBeDisabled();
    expect(screen.getByText("Add time to begin")).toBeInTheDocument();
  });

  it("shows the completion dialog when the countdown ends", async () => {
    renderAt("/meditate");
    fireEvent.click(await screen.findByRole("button", { name: "Reset timer" }));
    fireEvent.click(screen.getByRole("button", { name: "Add 30 seconds" }));

    const realNow = Date.now;
    let now = realNow();

    Date.now = () => now;
    fireEvent.click(screen.getByRole("button", { name: "Start" }));
    now += 31000;
    await act(() => new Promise((resolve) => setTimeout(resolve, 300)));
    Date.now = realNow;

    expect(screen.getByRole("dialog", { name: "Well done." })).toBeInTheDocument();
    expect(screen.getByText("You completed 1 minute of Light meditation.")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "New session" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(screen.getByRole("timer")).toHaveTextContent("00:30");
  });
});
