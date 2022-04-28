module.exports = {
  '*.{ts,tsx}': [
    () => 'tsc -p ./tsconfig.json --noEmit',
    'eslint -c ./.eslintrc-strict.js',
    'prettier --write',
  ],
  '*.{css,md,json}': 'prettier --write',
};