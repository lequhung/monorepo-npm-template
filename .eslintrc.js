module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    // this makes eslint not fail for new/config files
    createDefaultProgram: true
  },
  extends: ['plugin:@typescript-eslint/recommended'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Special ESLint rules or overrides go here.
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/ban-ts-comment': 'off'
  }
};
