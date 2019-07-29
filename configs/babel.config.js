module.exports = (api) => {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', {
      targets: {
        node: 6,
      },
    }],
  ];

  return {
    presets,
  };
};
