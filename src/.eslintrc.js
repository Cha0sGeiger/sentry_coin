module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
    jest: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "prettier", "react-hooks"],
  rules: {
    eqeqeq: ["error", "always", { null: "ignore" }],
    "guard-for-in": "error",
    "no-prototype-builtins": 1,
    "react/prop-types": 0,
    "prettier/prettier": 1,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-console":
      process.env.NODE_ENV === "production"
        ? ["error", { allow: ["warn", "error"] }]
        : 0,
    "no-extra-boolean-cast": 0,
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    curly: ["warn", "all"],
    "brace-style": ["warn", "1tbs"],
    "linebreak-style": ["error", "unix"],
    // "indent": ["warn", 2]
  },
  settings: {
    react: {
      // createClass: 'createReactClass', // Regex for Component Factory to use,
      // default to "createReactClass"
      // pragma: 'React', // Pragma to use, default to "React"
      version: "16.8.0", // React version, default to the latest React stable release
    },
    propWrapperFunctions: ["forbidExtraProps"], // The names of any functions used to wrap the
    // propTypes object, e.g. `forbidExtraProps`.
    // If this isn't set, any propTypes wrapped in
    // a function will be skipped.
  },
};
