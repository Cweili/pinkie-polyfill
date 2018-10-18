import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import pkg from './package.json';

export default {
  input: 'pinkie-polyfill.js',
  output: [
    {
      file: 'dist/pinkie-polyfill.js',
      format: 'iife',
      name: 'Pinkie'
    }
  ],
  plugins: [
    resolve(),
    common()
  ],
};
