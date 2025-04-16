import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Rewrite all unknown routes to index.html
    fs: {
      strict: false,
    },
  },
})