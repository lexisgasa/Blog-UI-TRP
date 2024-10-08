/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    setupFiles: ["./src/setupTests.ts"],
    environment: "jsdom",
    coverage: {
      include: ["src/**/*.tsx", "!src/main.tsx", "!src/**/types.ts"],
    },
  },
  plugins: [react()],
});
