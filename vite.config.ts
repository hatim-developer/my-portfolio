import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      containers: "/src/containers",
      assets: "/src/assets",
      data: "/src/data",
      constants: "/src/constants",
    },
  },
});
