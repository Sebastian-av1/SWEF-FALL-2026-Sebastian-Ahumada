import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    allowedHosts: true,
    // Sends /api requests from the frontend to the Flask backend.
    proxy: { "/api": "http://localhost:8000" },
  },
});
