module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "standard",
    "plugin:prettier/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    'plugin:prettier/recommended'
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: [
    "react-refresh",
    "react",
    "simple-import-sort",
    "prettier",
    "react-hooks",
  ],
  rules: {
    "react-refresh/only-export-components": "warn",
    "prettier/prettier": [{}, { usePrettierrc: true }],
    "react/react-in-jsx-scope": "off",
    "jsx-a11y/accessible-emoji": "off",
    "react/prop-types": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
