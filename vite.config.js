import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],

  server: {
    proxy: {
      "/comicvine": {
        target: "https://comicvine.gamespot.com/api/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/comicvine/, ""),
      },
    },
  },
});
