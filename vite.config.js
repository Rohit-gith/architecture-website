import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // npm run dev / npm run preview chalate hi browser apne aap khul jayega
  server: { open: true },
  preview: { open: true },
});
