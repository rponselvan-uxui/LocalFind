import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // We still load the env variables, but ONLY for Vite's server-side processes.
    // DO NOT pass them to the client-side 'define' block.
    const env = loadEnv(mode, '.', ''); 
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        // You would add a proxy here to talk to your new backend
        // proxy: {
        //   '/api': 'http://localhost:8000' // Example: Your backend running on port 8000
        // }
      },
      plugins: [react()],
      //
      // The 'define' block exposing process.env.GEMINI_API_KEY has been REMOVED.
      //
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});