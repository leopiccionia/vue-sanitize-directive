import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import nodeShims from 'rollup-plugin-polyfill-node'
import { terser } from 'rollup-plugin-terser'

const entries = ['index', 'ssr']

const plugins = [
    nodeShims(),
    nodeResolve(),
    json(),
    commonjs(),
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
