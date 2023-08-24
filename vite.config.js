import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "react-scroll-view",
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "prop-types", "styled-components"],
    },
  },
});