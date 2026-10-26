const pad = (value: number): string => String(value).padStart(2, "0");

/**
 * Formats milliseconds as mm:ss, or h:mm:ss past an hour. Partial seconds round up.
 * @param ms - Duration in milliseconds
 * @returns Clock text
 */
export function formatTime(ms: number): string {
  const seconds = Math.ceil(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const clock = `${pad(minutes)}:${pad(seconds % 60)}`;

  return hours > 0 ? `${hours}:${clock}` : clock;
}
