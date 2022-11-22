module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    project: ["./tsconfig.json"],
    sourceType: "module"
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint"
  ],
  rules: {
    "import/prefer-default-export": "off",
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/react-in-jsx-scope": "off",
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
        warnOnDuplicates: true
      }
    ],
    // note: airbnb側で対応中
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function"
      }
    ],
    // note: https://emotion.sh/docs/eslint-plugin-react
    "react/no-unknown-property": [
      "error",
      {
        "ignore": ["css"]
      }
    ]
  }
};
