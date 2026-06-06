import React, { createContext, useContext, useState, useEffect } from 'react';

// Definimos la estructura del Contexto para que TypeScript sepa qué funciones y variables ofrece
interface FavoritesContextType {
  favorites: number[]; // Guardamos una lista con los IDs de los posts favoritos
  toggleFavorite: (id: number) => boolean; // Agrega o quita un favorito y retorna si quedó agregado
  isFavorite: (id: number) => boolean; // Verifica si un ID específico ya es favorito
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Inicializamos el estado leyendo directamente desde el LocalStorage del navegador
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('jsonfeed_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Cada vez que cambie nuestra lista de favoritos, actualizamos de inmediato el LocalStorage
  useEffect(() => {
    localStorage.setItem('jsonfeed_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: number): boolean => {
    let isAdded = false;
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((favId) => favId !== id); // Lo elimina si ya existía
      } else {
        isAdded = true;
        return [...prev, id]; // Lo agrega si no existía
      }
    });
    return isAdded;
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Hook personalizado para usar favoritos fácilmente en cualquier componente sin código repetitivo
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error('useFavorites debe ser usado dentro de un FavoritesProvider');
  return context;
};