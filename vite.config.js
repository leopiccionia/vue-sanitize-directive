import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: new URL('src/index.js', import.meta.url).pathname,
      fileName: (format) => `vue-sanitize-directive.${format}.js`,
      formats: ['esm', 'umd'],
      name: 'VueSanitizeDirective',
    },
    rollupOptions: {
      output: {
        exports: 'named',
      },
    },
    target: 'ES2020',
  },
  esbuild: {
    charset: 'utf8',
  },
})
