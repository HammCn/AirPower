import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "airpower",
      fileName: (format) => `airpower.${format}.js`,
    },
    rollupOptions: {
      external: [], // 若依赖第三方库（如 lodash），需在此声明
      output: {
        globals: {},
      },
    },
  },
  plugins: [dts()],
});
