import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  build: {
    emptyOutDir: true,
    outDir: '../docs',
  },
  base: '/vue-sanitize-directive/',
  plugins: [vue()],
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
