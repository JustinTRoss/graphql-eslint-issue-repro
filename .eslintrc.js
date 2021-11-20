module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
  overrides: [
    {
      files: ["*.ts", "*.js"],
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      // extends: "plugin:@graphql-eslint/schema-recommended",
      parserOptions: {
        schema: ["./src/index.ts", "./src/modules/**/Schema/**/*.ts"],
      },
      rules: {
        "@graphql-eslint/possible-type-extension": ["error"],
      },
    },
  ],
};
