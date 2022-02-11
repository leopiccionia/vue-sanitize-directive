import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'

const plugins = [
  nodeResolve({ browser: true, preferBuiltins: true }),
  commonjs(),
  json(),
  esbuild({ target: 'es6' }),
  terser(),
]

export default {
  input: 'src/index.js',
  output: [
    {
      exports: 'named',
      file: 'dist/vue-sanitize-directive.umd.js',
      format: 'umd',
      name: 'VueSanitizeDirective',
    },
    {
      exports: 'named',
      file: 'dist/vue-sanitize-directive.esm.js',
      format: 'es',
    },
  ],
  plugins,
}
