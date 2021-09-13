import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import polyfill from 'rollup-plugin-polyfill';

export default {
  input: 'src/index.ts',
  output: {
    file: pkg.main,
    format: 'iife',
    name: 'baroPayments',
  },
  plugins: [
    typescript(),
    uglify(),
    polyfill(['es6-object-assign/auto']),
    commonjs({
      include: /node_modules/,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
  ],
};
