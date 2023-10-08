import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ["lib-a"],
  },
  build: {
    commonjsOptions: {
      exclude: ["lib-a"],
      include: [],
    },
  },
});

