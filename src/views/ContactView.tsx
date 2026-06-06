import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Send, Mail, MessageSquare, User } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Por favor, completa todos los campos requeridos.');
      return;
    }

    // Simulación de envío exitoso
    toast.success(`¡Gracias ${formData.name}! Mensaje enviado correctamente.`, {
      description: 'Nos pondremos en contacto contigo a la brevedad.',
    });

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-md mx-auto py-6">
      <Card className="border-border bg-card/60 backdrop-blur shadow-xl">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold tracking-tight text-white">Soporte Técnico</CardTitle>
          <CardDescription>
            ¿Tienes alguna duda sobre la integración de JSONFeed? Escríbenos.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {/* Campo Nombre */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                <User className="h-3.5 w-3.5" /> Nombre Completo
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full text-sm bg-secondary/50 border border-input rounded-md px-3 py-2 text-white placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            {/* Campo Correo */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" /> Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="johndoe@example.com"
                className="w-full text-sm bg-secondary/50 border border-input rounded-md px-3 py-2 text-white placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Campo Mensaje */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                <MessageSquare className="h-3.5 w-3.5" /> Mensaje
              </label>
              <textarea
                rows={4}
                placeholder="Escribe tu consulta o sugerencia aquí..."
                className="w-full text-sm bg-secondary/50 border border-input rounded-md px-3 py-2 text-white placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium gap-2">
              <Send className="h-3.5 w-3.5" /> Enviar Mensaje
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};