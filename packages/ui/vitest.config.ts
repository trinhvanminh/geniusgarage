import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom", // jsdom - Simulates browser DOM in Node.js
    globals: true, // No need to import describe, it, expect in every test
    setupFiles: ["./src/test/setup.ts"], // Runs before all tests (we'll add custom matchers here)
  },
});
