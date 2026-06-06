import axios from 'axios';

// Definimos la estructura exacta que nos devuelve la API de JSONPlaceholder para un Post
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 🌟 CORRECCIÓN AQUÍ: Agregamos "jsonplaceholder." a la URL
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postService = {
  // Obtiene la lista completa de publicaciones (Feed masivo)
  getAll: async (): Promise<Post[]> => {
    // Al hacer un .get('/posts'), Axios lo une con la baseURL transformándose en:
    // https://jsonplaceholder.typicode.com/posts
    const response = await api.get<Post[]>('/posts');
    return response.data;
  },
  
  // Obtiene los primeros N elementos para vistas reducidas (ej. destacados en Home)
  getLimited: async (limit: number = 6): Promise<Post[]> => {
    const response = await api.get<Post[]>(`/posts?_limit=${limit}`);
    return response.data;
  }
};