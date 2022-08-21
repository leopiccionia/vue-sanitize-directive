import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: {
    'vue2/vue-sanitize-directive': 'src/vue2.ts',
    'vue3/vue-sanitize-directive': 'src/vue3.ts',
  },
  esbuildOptions (config) {
    config.charset = 'utf8'
    config.platform = 'browser'
  },
  format: ['cjs', 'esm', 'iife'],
  globalName: 'VueSanitizeDirective',
  splitting: false,
  target: 'ES2017',
})
