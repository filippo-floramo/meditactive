import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  build: {
    // CRA built to build/; keep it so the existing Netlify publish directory still works.
    outDir: "build",
    sourcemap: true,
    target: "es2022"
  }
});
