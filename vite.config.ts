import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // 🌟 OBLIGATORIO: Cambia 'jsonfeed-react' por el nombre de tu repositorio en GitHub
  base: "/jsonfeed-react/", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})