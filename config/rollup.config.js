const babel = require('rollup-plugin-babel');

module.exports =  {
  input: 'src/index.js',
  output: [
    { file: './dist/index.cjs.js', format: 'cjs' },
    { file: './dist/index.es.js', format: 'es' }
  ],
  plugins: [
    babel()
  ]
};
