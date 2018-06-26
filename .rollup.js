import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: [
    { file: './dist/index.cjs.js', format: 'cjs' },
    { file: './dist/index.es.js', format: 'es' }
  ],
  plugins: [
    babel({
      presets: [
        ['env', { modules: false, targets: { node: 6 } }]
      ]
    })
  ]
};
