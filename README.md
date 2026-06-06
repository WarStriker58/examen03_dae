# 💬 JSONFeed React (jsonfeed-react)

Una Single Page Application (SPA) moderna, minimalista y de alto rendimiento desarrollada en **React 19** y **Vite**. La aplicación consume datos asíncronos en tiempo real desde la API pública de JSONPlaceholder, gestiona un sistema de persistencia local para elementos favoritos y despliega notificaciones dinámicas con una interfaz oscura elegante potenciada por Tailwind CSS y componentes Shadcn UI.

## 🚀 Enlaces del Proyecto
*   **Despliegue Funcional (Deploy):** [INSERTA_AQUÍ_TU_LINK_DE_VERCEL_NETLIFY_O_PAGES]
*   **Video Demostrativo (YouTube):** [INSERTA_AQUÍ_TU_LINK_DE_YOUTUBE]

---

## 🛠️ Tecnologías Utilizadas
*   **Core:** React 19 (Hooks, Context, Loaders de enrutamiento)
*   **Herramienta de Construcción:** Vite + TypeScript (Tipado estricto)
*   **Enrutamiento:** React Router Dom (Arquitectura basada en Loaders asíncronos pre-render)
*   **Cliente HTTP:** Axios (Instancia centralizada para consumo de endpoints)
*   **Estilos y Componentes:** Tailwind CSS + Shadcn UI (Tema oscuro integrado)
*   **Notificaciones:** Sonner (Toast manager reactivo)
*   **Iconografía:** Lucide React
*   **Persistencia:** LocalStorage API del Navegador

---

## 📂 Estructura Principal del Código
*   `src/services/api.ts`: Cliente Axios configurado y mapeo de tipos para la entidad `/posts`.
*   `src/routes.tsx`: Definición de rutas fijas (`/`, `/entities`, `/contact`) y acoplamiento de loaders de datos pre-renderizado.
*   `src/context/FavoritesContext.tsx`: Proveedor global del estado de favoritos con sincronización automática a `localStorage`.
*   `src/layouts/RootLayout.tsx`: Estructura general de la app, Navbar responsivo, indicador de favoritos y contenedor global de notificaciones.
*   `src/views/`: Módulos de pantalla individuales (`HomeView` con Hero institucional, `EntitiesView` listando 3+ propiedades del feed, y `ContactView` con formulario controlado).

---

## 💻 Pasos para Ejecutar el Servidor Local

Sigue estos comandos ordenados de forma lógica en tu terminal para clonar y ejecutar el entorno de desarrollo:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/WarStriker58/examen03_dae.git
   cd jsonfeed-react
   ```

2. **Instalar dependencias necesarias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```
   *El proyecto se abrirá automáticamente en tu navegador en la dirección `http://localhost:5173`.*

4. **Compilar para producción (Opcional):**
   ```bash
   npm run build
   ```
