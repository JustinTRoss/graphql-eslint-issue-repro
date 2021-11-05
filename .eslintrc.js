module.exports = {
  ignorePatterns: [".yarn/**", "dist/**/*.js", "/**/*.d.ts", "**/*.spec.ts"],
  overrides: [
    {
      files: ["*.ts", "*.js"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        // ...
      },
    },
  ],
};
