import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import globals from "globals";

import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import tsEslint from "typescript-eslint";
import prettierEslint from "eslint-plugin-prettier/recommended";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["**/node_modules"],
  },
  reactRecommended,
  ...tsEslint.configs.recommended,
  ...fixupConfigRules(
    compat.extends("plugin:react-hooks/recommended", "standard"),
  ),
  prettierEslint,
  {
    plugins: {
      "jsx-a11y": jsxA11Y,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jest,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react/self-closing-comp": "error",

      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          doubleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          semi: true,
          endOfLine: "auto",
        },
      ],

      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],

      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
      "react/no-unknown-property": "error",
    },
  },
];
