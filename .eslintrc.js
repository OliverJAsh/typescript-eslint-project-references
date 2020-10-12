const config = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: [
      "./shared/tsconfig.json",
      "./app/tsconfig.json"
    ],
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/strict-boolean-expressions": 2,
  },
};

module.exports = config;
