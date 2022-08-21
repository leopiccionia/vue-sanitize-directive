import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue-sanitize-directive/',
  plugins: [vue()],
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
