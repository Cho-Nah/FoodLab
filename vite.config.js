import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  proxy: {
    "/": {
      target: "http://localhost:8080", // Адрес вашего backend-сервера
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""), // Опционально, если хотите изменить путь запроса
    },
  },
});
