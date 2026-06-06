import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useFavorites } from '@/context/FavoritesContext';
import { Activity, Heart } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { favorites } = useFavorites();

  // Clase utilitaria para resaltar la pestaña en la que se encuentra el usuario actualmente
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-white ${
      isActive ? 'text-white font-semibold' : 'text-muted-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        {/* Logo del Proyecto */}
        <Link to="/" className="flex items-center space-x-2 text-white font-bold tracking-tight">
          <Activity className="h-5 w-5 text-emerald-500" />
          <span>JSONFeed</span>
        </Link>

        {/* Enlaces de Navegación del Examen */}
        <nav className="flex items-center space-x-6">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/entities" className={linkClass}>Entities</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* Indicador de Favoritos en LocalStorage */}
        <div className="flex items-center space-x-1 bg-secondary/50 px-3 py-1.5 rounded-full border border-border">
          <Heart className={`h-4 w-4 ${favorites.length > 0 ? 'fill-rose-500 text-rose-500' : 'text-muted-foreground'}`} />
          <span className="text-xs font-semibold text-white">{favorites.length}</span>
        </div>
      </div>
    </header>
  );
};