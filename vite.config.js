import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { createGzip } from "zlib";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  configureServer: [
    (app) => {
      app.use((req, res, next) => {
        const acceptEncoding = req.headers["accept-encoding"];
        if (!acceptEncoding || !acceptEncoding.match(/\b(gzip)\b/)) {
          next();
          return;
        }
        res.setHeader("Content-Encoding", "gzip");
        res.setHeader("Vary", "Accept-Encoding");
        createGzip().pipe(res);
        next();
      });
    },
  ],
});
