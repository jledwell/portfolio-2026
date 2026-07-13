import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Site is deployed at https://uxworkflow.com/portfolio-2026/
  base: '/portfolio-2026/',
  plugins: [react()],
  server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
  },
})
