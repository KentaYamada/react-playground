module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  ignorePatterns: [".eslintrc.cjs"],
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "import/prefer-default-export": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
