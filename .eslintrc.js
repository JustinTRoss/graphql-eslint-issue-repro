module.exports = {
  ignorePatterns: [".yarn/**", "dist/**/*.js", "/**/*.d.ts", "**/*.spec.ts"],
  overrides: [
    {
      files: ["*.ts", "*.js"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/all",
    },
  ],
};
