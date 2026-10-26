# Meditactive redesign — implementation handoff

Reference design: `design/meditactive-redesign.html` (a Claude Design canvas file — read it for exact colors, sizes, keyframes and copy; it is not meant to run as-is in the app).

## Goal
Restyle the existing React app (same features, same routes `/` and `/meditate`) to match the reference. Keep: framer-motion, react-router, react-countdown, audio hooks, quote API, dark/light (Deep/Light) mode in `context.js`.

## What changes
- **Font**: Manrope 300–700 (replace Noto Sans in `_config.scss`).
- **Gradient flow**: replace the 400% `bg-animation` pan with 3 stacked full-screen layers (home / light / deep), each = base linear-gradient + 3 large radial "blobs" drifting via `mt-drift` keyframes (26s/34s/41s, alternate). Cross-fade layers with opacity (1.4s). Drift paused on the session screen while idle, running on home and while timer runs.
- **Waves**: drop `react-wavify`; use 3 inline SVG wave layers (paths in reference), each 200% wide translating -50% linearly (16s, 22s reverse, 12s). Container height: 20% on home, `16% + progress * 38%` during a session (transition 1.6s). Colors per mode in `MT_THEMES`.
- **Home**: header (lotus logo + "Meditactive"), headline, subtitle, two glass cards (Light / Deep) as real `<button>`s; staggered entrance (0.1s steps), hover lift.
- **Session**: top bar (back button, Light/Deep segmented control with sliding thumb, disabled while active). Timer inside a progress ring (SVG r=150, dasharray 942.48) on a glass disc; mode label, mm:ss (tabular nums, weight 300), status line ("Ready when you are" / "Paused" / breathing labels). −5m/−30s left, +30s/+5m right — they fade and slide toward the ring while running. Controls: Reset↔Stop, big Play/Pause, Sound toggle.
- **Breathing**: 8s halo scale loop + "Breathe in"/"Breathe out" crossfading labels while running.
- **Completion**: replace the Modal with a blurred backdrop + spring sheet ("Well done.", minutes completed, quote from the API between hairlines, "Back home" / "New session").
- **Transitions**: route change = blur+fade out (0.6s) then blur+rise in (1s, cubic-bezier(.2,.8,.2,1)). Use framer-motion `AnimatePresence` variants for this.
- **Accessibility**: aria-labels on icon buttons, `prefers-reduced-motion` disables drift/waves/breathing.

## Theme tokens
See `MT_THEMES` in the reference `<script>` block (light / deep / home).
