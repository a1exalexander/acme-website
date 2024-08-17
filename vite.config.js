import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        admin: resolve(__dirname, "admin/index.html"),
      },
    },
  },
});
