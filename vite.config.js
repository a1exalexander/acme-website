import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: 8080,
    allowedHosts: ['all']
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
      },
    },
  }
});
