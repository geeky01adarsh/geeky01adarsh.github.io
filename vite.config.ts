import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // User/org GitHub Pages: https://<username>.github.io/ (root URL)
  base: "/",
  plugins: [react()],
});
