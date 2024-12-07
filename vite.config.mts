import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      app: path.resolve(__dirname, "src/app"),
      pages: path.resolve(__dirname, "src/pages"),
      widgets: path.resolve(__dirname, "src/widgets"),
      features: path.resolve(__dirname, "src/features"),
      entities: path.resolve(__dirname, "src/entities"),
      shared: path.resolve(__dirname, "src/shared"),
    },
  },
  server: {
    open: "/",
    proxy: {
      "/api": {
        target: "http://49.50.163.101:8080", // Spring 백엔드 URL
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
  },
});
