import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import { terser } from 'rollup-plugin-terser'

const entries = ['index', 'ssr']

const plugins = [
  nodeResolve({ browser: true, preferBuiltins: true }),
  commonjs(),
  json(),
  esbuild({ target: 'es6' }),
  terser(),
]

const config = entries.map((slug) => {
  return {
    input: `src/${slug}.js`,
    output: [
      {
        exports: 'named',
        file: `dist/${slug}.umd.js`,
        format: 'umd',
        name: 'VueSanitizeDirective',
      },
      {
        exports: 'named',
        file: `dist/${slug}.esm.js`,
        format: 'es',
      },
    ],
    plugins,
  }
})

export default config
