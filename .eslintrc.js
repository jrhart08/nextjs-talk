module.exports = {
  extends: [
    'next/core-web-vitals',
    'airbnb-typescript',
    'plugin:import/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
};
