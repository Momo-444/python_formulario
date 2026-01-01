// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize CSS
      cssMinify: 'lightningcss',
      // Better tree-shaking
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
          },
        },
      },
    },
  },

  integrations: [react()],

  // Compression et optimisation
  compressHTML: true,

  // Prefetch pour navigation plus rapide
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});