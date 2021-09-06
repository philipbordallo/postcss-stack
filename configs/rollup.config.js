const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'src/index.js',
  output: [
    {
      file: './dist/index.cjs.js',
      exports: 'default',
      footer: 'module.exports.postcss = true',
      format: 'cjs',
    },
    {
      file: './dist/index.es.js',
      exports: 'default',
      footer: 'export const postcss = true',
      format: 'es',
    },
  ],
  plugins: [
    babel(),
  ],
};
