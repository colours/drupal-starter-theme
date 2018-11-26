/**
 * Use AirBnB ES6 linting standards, as well as a Jest plugin for tests
 *
 * Rule reference: http://eslint.org/docs/rules
 * Individual rule reference: http://eslint.org/docs/rules/NAME-OF-RULE
 */
module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  env: {
      "browser": true,
  },
  rules: {
      'no-console': [0], // turned off for now while we are console.logging everywhere.
      'import/no-extraneous-dependencies': ["error", {
          "devDependencies": true
      }],
      'indent': ["warn", 2],
      'object-curly-spacing': [2, "always"],
      'no-return-assign': [0],
      'no-restricted-syntax': [
          'error',
          'ForInStatement',
          'LabeledStatement',
          'WithStatement',
      ],
      'no-underscore-dangle': [2, {
          "allowAfterThis": true
      }]
  },
};
