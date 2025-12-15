import globals from "globals";
import pluginJs from "@eslint/js";
import eslintConfigESLint from "eslint-config-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings: { node: { version: "^20.11.0" } },
  },
  pluginJs.configs.recommended,
  ...eslintConfigESLint,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "jsdoc/require-jsdoc": "off",
    },
  },
];
