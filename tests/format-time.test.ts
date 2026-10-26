import { describe, expect, it } from "vitest";
import { formatTime } from "../src/helpers";

describe("formatTime", () => {
  it("formats minutes and seconds with zero padding", () => {
    expect(formatTime(600000)).toBe("10:00");
    expect(formatTime(65000)).toBe("01:05");
    expect(formatTime(0)).toBe("00:00");
  });

  it("rounds partial seconds up", () => {
    expect(formatTime(59001)).toBe("01:00");
  });

  it("adds hours when needed", () => {
    expect(formatTime(3725000)).toBe("1:02:05");
  });
});
