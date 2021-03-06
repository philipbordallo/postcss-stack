const babel = require('rollup-plugin-babel');

module.exports = {
  input: 'src/index.js',
  output: [
    { file: './dist/index.cjs.js', format: 'cjs', exports: 'default' },
    { file: './dist/index.es.js', format: 'es', exports: 'default' },
  ],
  plugins: [
    babel(),
  ],
};
