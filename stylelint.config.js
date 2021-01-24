module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'string-quotes': 'double',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'function-name-case': null,
  },
}
