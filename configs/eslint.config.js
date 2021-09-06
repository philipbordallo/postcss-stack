module.exports = {
  extends: [
    '@philipbordallo',
  ],
  rules: {
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'decl',
        ],
      },
    ],
  },
};
