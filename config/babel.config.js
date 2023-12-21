module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // Use current version of Node for Jest
        },
      },
    ],
  ],
};