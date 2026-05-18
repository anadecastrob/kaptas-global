import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'prop-types': path.resolve(__dirname, './src/prop-types-shim.js'),
    },
  },
  build: {
    // Source maps in production make Lighthouse happier (Best Practices
    // score) and make error stack traces from Sentry/etc. usable. Adds a
    // few hundred KB of .map files served separately from the JS bundle;
    // does not affect runtime performance.
    sourcemap: true,
  },
})
