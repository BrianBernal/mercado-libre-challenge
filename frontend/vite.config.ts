/// <reference types="vitest" />

// react
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./src/setupTest/setupVitest.ts"],
  },
});
