import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/hero-hunter/",

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
