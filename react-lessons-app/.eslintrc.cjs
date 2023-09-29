module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    semi: ["error", "always", { omitLastInOneLineBlock: false }], // исправляет ошибки где нет запятых и т.д
    "comma-dangle": ["error", "never"],
    quotes: ["eror", "single"], // все ковычки к одному стилю
    'react/prop-types':[0],
    'indent':["error",'tab']
  },
};
