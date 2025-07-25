import { resolve } from "path";
import { defineConfig } from "vite";
import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim');

export default defineConfig({
  server: {
    allowedHosts: true,
    cors: true,
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
