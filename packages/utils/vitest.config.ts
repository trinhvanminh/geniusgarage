import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // No need to import describe, it, expect in every test
    // coverage: {
    //   provider: "v8",
    //   reporter: ["text", "html"],
    // },
  },
});
