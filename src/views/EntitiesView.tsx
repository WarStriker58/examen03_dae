import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { type Post } from '@/services/api';
import { useFavorites } from '@/context/FavoritesContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Heart, Hash, User, Layers } from 'lucide-react';

export const EntitiesView: React.FC = () => {
  const allPosts = useLoaderData() as Post[];
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (post: Post) => {
    const added = toggleFavorite(post.id);
    if (added) {
      toast.success(`Añadido a favoritos: ${post.title.substring(0, 15)}...`);
    } else {
      toast.info(`Eliminado de favoritos: ${post.title.substring(0, 15)}...`);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white">Explorador de Entidades</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Listado completo e interactivo consumiendo directamente de la entidad <code>/posts</code> de la API.
        </p>
      </div>

      {/* Grid masivo optimizado */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => {
          const favorite = isFavorite(post.id);
          return (
            <Card key={post.id} className="bg-card/50 backdrop-blur border-border hover:bg-card/80 transition-colors flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-base font-bold text-white line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="icon"
                    className={`h-8 w-8 shrink-0 rounded-md border-border ${favorite ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 hover:bg-rose-500/20' : 'hover:bg-secondary'}`}
                    onClick={() => handleFavoriteClick(post)}
                  >
                    <Heart className={`h-3.5 w-3.5 ${favorite ? 'fill-current' : ''}`} />
                  </Button>
                </div>
              </CardHeader>
              
              {/* Contenido principal mostrando las propiedades requeridas */}
              <CardContent className="space-y-4">
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                  {post.body}
                </p>
                
                {/* Visualización clara de 3 propiedades adicionales de la entidad */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-border/60 text-[11px] font-mono text-muted-foreground">
                  <div className="flex items-center gap-1 bg-secondary/40 p-1.5 rounded border border-border/40 justify-center">
                    <Hash className="h-3 w-3 text-emerald-400" />
                    <span>ID: {post.id}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-secondary/40 p-1.5 rounded border border-border/40 justify-center">
                    <User className="h-3 w-3 text-blue-400" />
                    <span>UID: {post.userId}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-secondary/40 p-1.5 rounded border border-border/40 justify-center">
                    <Layers className="h-3 w-3 text-purple-400" />
                    <span>Type: Post</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};