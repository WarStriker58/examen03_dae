import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { Navbar } from '@/components/Navbar';
import { Toaster } from 'sonner';

export const RootLayout: React.FC = () => {
  const navigation = useNavigation();
  
  // Detecta si React Router está cargando datos de un loader en segundo plano
  const isLoading = navigation.state === 'loading';

  return (
    <FavoritesProvider>
      <div className="relative flex min-h-screen flex-col bg-background text-foreground selection:bg-emerald-500/30">
        
        {/* Notificaciones de Sonner configuradas en modo oscuro por defecto */}
        <Toaster theme="dark" position="bottom-right" closeButton richColors />
        
        <Navbar />

        {/* Barra de progreso visual si el loader de datos tarda */}
        {isLoading && (
          <div className="absolute top-14 left-0 right-0 h-0.5 bg-emerald-500 animate-pulse z-50" />
        )}

        {/* Contenedor Principal de las Vistas */}
        <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl animate-in fade-in duration-300">
          <Outlet />
        </main>

        {/* Footer requerido para estética institucional del examen */}
        <footer className="border-t border-border py-4 bg-card/20">
          <div className="container mx-auto px-4 text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} JSONFeed React App. Desarrollado con React 19 + Shadcn UI.
          </div>
        </footer>
      </div>
    </FavoritesProvider>
  );
};