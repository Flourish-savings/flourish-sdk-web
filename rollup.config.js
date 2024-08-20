import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: 'dist/esm/index.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
    }),
  ],
};
