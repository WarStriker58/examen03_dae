import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomeView } from './views/HomeView';
import { EntitiesView } from './views/EntitiesView';
import { ContactView } from './views/ContactView';
import { postService } from './services/api';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // El contenedor principal que tendrá el Navbar y Footer
    children: [
      {
        index: true,
        element: <HomeView />,
        // El loader se ejecuta antes de montar HomeView. Los datos estarán listos de inmediato.
        loader: async () => {
          try {
            return await postService.getLimited(4); // Cargamos solo 4 para el bloque destacado del Home
          } catch (error) {
            console.error("Error cargando posts del Home:", error);
            return []; // Retornamos un array vacío como respaldo para evitar que la app explote
          }
        }
      },
      {
        path: 'entities',
        element: <EntitiesView />,
        // Para la pestaña completa de entidades cargamos el feed de 100 posts
        loader: async () => {
          try {
            return await postService.getAll();
          } catch (error) {
            console.error("Error cargando todas las entidades:", error);
            return [];
          }
        }
      },
      {
        path: 'contact',
        element: <ContactView />
      },
      {
        path: '*',
        element: <Navigate to="/" replace /> // Redirección automática si escriben una ruta inválida
      }
    ]
  }
]);