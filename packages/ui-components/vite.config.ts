import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      include: ["./src/**/**.ts", "./src/**/**.vue"],
      exclude: ["./src/main.ts", "./public/*"],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ui-components",
      fileName: "index",
      formats: ["umd", "es"],
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

