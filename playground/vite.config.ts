import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode === "production" ? "/babyuew-monorepo-testbed/" : "",
    plugins: [vue()],
    optimizeDeps: {
      include: ["lib-a"],
    },
    build: {
      commonjsOptions: {
        include: [/lib-a/, /node_modules/],
      },
    },
  };
});

