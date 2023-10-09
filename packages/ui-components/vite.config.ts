import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      exclude: ["./src/main.ts"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib.ts"),
      name: "index",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});

