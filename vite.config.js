import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
   base: '/EVnoa-testing',
  optimizeDeps: {
    include: ['@popperjs/core']
  }
})