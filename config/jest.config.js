module.exports = {
  testEnvironment: 'node',
  rootDir: '../', // This should point to the root directory of your project
  testMatch: [
    '<rootDir>/tests/**/*.js', // This will match any files in the tests directory that end with .js
  ],
  // If you're using ES6 modules, you might also need this:
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
};