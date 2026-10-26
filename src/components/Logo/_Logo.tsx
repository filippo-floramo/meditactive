/**
 * Lotus mark. Decorative: pair it with visible text or an accessible name.
 * @returns Lotus SVG
 */
export function Logo() {
  return (
    <svg
      data-part="logo"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 26c-4-3-6-7-6-11 0-3 2-6 6-9 4 3 6 6 6 9 0 4-2 8-6 11z" />
      <path d="M16 26c-5 0-10-3-12-9 3-1 6-1 8 0" />
      <path d="M16 26c5 0 10-3 12-9-3-1-6-1-8 0" />
    </svg>
  );
}
