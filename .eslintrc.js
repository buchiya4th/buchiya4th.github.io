module.exports = {
  root: true,
  ignorePatterns: ['/docs'],
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
  ],
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'],
    quotes: ['error', 'single'],
    'no-console': 'off',
  },
}
