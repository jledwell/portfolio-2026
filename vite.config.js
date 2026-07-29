import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-2026/',
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      clientPort: 5173,
    },
    // Native fsevents-based watching silently fails on this machine,
    // leaving the dev server serving stale modules. Poll instead.
    watch: {
      usePolling: true,
      interval: 300,
    },
  },
})
