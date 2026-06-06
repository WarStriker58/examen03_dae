import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // 🌟 CAMBIA ESTO por el nombre real de tu repositorio:
  base: "/examen03_dae/", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})