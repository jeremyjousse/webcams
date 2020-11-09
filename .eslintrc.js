module.exports = {
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  ignorePatterns: [
    'public/build/'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    semi: ['error', 'never'], // remove ;
    quotes: ['error', 'single'], // " -> '
    indent: ['error', 2, // 2 spaces indent
      { 'SwitchCase': 1 }]
  },
  settings: {
    'import/core-modules': ['svelte']
  }
}
