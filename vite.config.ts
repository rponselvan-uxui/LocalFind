import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// We do NOT need to import tailwindcss or autoprefixer here

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
  
  // --- THIS IS THE FIX ---
  // The 'css' block has been completely removed.
  // Vite and Tailwind v4 will now configure PostCSS automatically.
  // --- END FIX ---

  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
});