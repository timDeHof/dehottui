module.exports = {
  root: true,
  env: {
    "browser": true,
    "es2020": true,
    "node": true,
    "vitest-globals/env": true,
  },
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  ignorePatterns: ["dist", ".eslintrc.cjs", "node_modules", "coverage"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:vitest/recommended",
    "plugin:vitest-globals/recommended",
  ],
  overrides: [
    {
      files: [
        "**/*.ts",
        "**/*.tsx",
        "**/*.js",
        "**/*.jsx",
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
      ],
      parser: "@typescript-eslint/parser",
      settings: {
        "react": { version: "detect" },
        "import/resolver": {
          typescript: {},
        },
      },
      extends: ["plugin:testing-library/react"],
    },
  ],
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh", "vitest", "testing-library"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["@/components/*/*"],
      },
    ],
    "import/default": "off",
    "import/no-named-as-default-member": "off",
    "import/no-named-as-default": "off",

    "react/react-in-jsx-scope": "off",
    "vitest/max-nested-describe": [
      "error",
      {
        max: 5,
      },
    ],
    "prefer-rest-params": ["error"],
    "no-unused-vars": "off",
  },
};
