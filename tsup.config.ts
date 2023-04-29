import { defineConfig } from 'tsup'

export default defineConfig({
  clean: true,
  dts: true,
  entry: {
    'vue-sanitize-directive': 'src/index.ts',
  },
  esbuildOptions (config) {
    config.charset = 'utf8'
    config.platform = 'browser'
  },
  format: ['cjs', 'esm', 'iife'],
  globalName: 'VueSanitizeDirective',
  splitting: false,
  target: 'es2017',
  treeshake: true,
})
