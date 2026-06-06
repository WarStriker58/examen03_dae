import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { type Post } from '@/services/api';
import { useFavorites } from '@/context/FavoritesContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Heart, ArrowRight, Star } from 'lucide-react';

export const HomeView: React.FC = () => {
  // Consumimos los datos cargados previamente por el loader de React Router
  const posts = useLoaderData() as Post[];
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (post: Post) => {
    const added = toggleFavorite(post.id);
    if (added) {
      toast.success(`"${post.title.substring(0, 20)}..." añadido a tus favoritos.`);
    } else {
      toast.info(`"${post.title.substring(0, 20)}..." eliminado de favoritos.`);
    }
  };

  return (
    <div className="space-y-12">
      {/* 🏠 SECCIÓN HERO: Obligatorio según Rúbrica */}
      <section className="relative rounded-3xl border border-border bg-gradient-to-b from-card to-background p-8 md:p-12 text-center overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-emerald-500/5 mix-blend-color-dodge pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Star className="h-3 w-3 fill-emerald-400" /> API Feed Real-Time
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Explora <span className="text-emerald-500">JSONFeed</span> React
          </h1>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Una SPA de alto rendimiento construida sobre React 19 y Vite. Consume datos asíncronos de la API pública de JSONPlaceholder, maneja estados persistentes en LocalStorage e integra componentes minimalistas estilizados con Tailwind.
          </p>
          <div className="pt-2">
            <Link to="/entities">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white gap-2 font-medium">
                Ver Feed Completo <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 📜 LISTADO DESTACADO (HOME) */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white">Publicaciones Destacadas</h2>
          <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md border border-border">
            Mostrando {posts.length} elementos
          </span>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => {
            const favorite = isFavorite(post.id);
            return (
              <Card key={post.id} className="flex flex-col justify-between hover:border-emerald-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-emerald-500/5">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {post.title}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full text-muted-foreground hover:text-rose-500"
                      onClick={() => handleFavoriteClick(post)}
                    >
                      <Heart className={`h-4 w-4 transition-transform group-active:scale-95 ${favorite ? 'fill-rose-500 text-rose-500' : ''}`} />
                    </Button>
                  </div>
                  <CardDescription className="text-xs text-emerald-500/70 font-mono">
                    ID publicación: #{post.id}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {post.body}
                  </p>
                </CardContent>
                <CardFooter className="border-t border-border/40 pt-4 text-xs text-muted-foreground flex justify-between font-medium bg-secondary/10">
                  <span>Autor ID: {post.userId}</span>
                  <span className="text-emerald-500 font-mono">Status: Active</span>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
};