import resolve from '@rollup/plugin-node-resolve'

const esm = {
    input: './src/index.js',
    output: {
        file: './dist/STabs.esm.js',
        format: 'esm',
        name: 'STabs'
    },
    plugins: [
        resolve(),
    ]
}

const iife = {
    input: './src/index.js',
    output: {
        file: './dist/STabs.js',
        format: 'iife',
        name: 'STabs'
    },
    plugins: [
        resolve(),
    ]
}

export default [
    esm,
    iife
];