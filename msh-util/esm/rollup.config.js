// import resolve from '@rollup/plugin-node-resolve'
// import { terser } from '@rollup/plugin-terser'
// import  babel from '@rollup/plugin-babel'

const babel = require('@rollup/plugin-babel').default
const resolve = require('@rollup/plugin-node-resolve').default
const terser = require('@rollup/plugin-terser').default

const extensions = ['.js', '.ts']

exports.default = {
	input: 'src/index.ts',
	output: [
		{
			file: 'dist/bundles/bundle.esm.js',
			format: 'esm',
			sourcemap: true,
		},
		{
			file: 'dist/bundles/bundle.esm.min.js',
			format: 'esm',
			plugins: [terser()],
			sourcemap: true,
		},
		{
			file: 'dist/bundles/bundle.umd.js',
			format: 'umd',
			name: 'myLibrary',
			sourcemap: true,
		},
		{
			file: 'dist/bundles/bundle.umd.min.js',
			format: 'umd',
			name: 'myLibrary',
			plugins: [terser()],
			sourcemap: true,
		},
	],
	plugins: [
		resolve({ extensions }),
		babel({ babelHelpers: 'bundled', exclude: './node_modules/**', extensions, include: ['src/**/*.ts'] }),
	],
}
