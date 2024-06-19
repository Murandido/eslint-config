import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import globals from "globals";

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
  ...tsEslint.configs.recommended,
  ...compat.extends("standard"),
  prettierEslint,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          printWidth: 80,
          tabWidth: 2,
          doubleQuote: true,
          trailingComma: "all",
          arrowParens: "always",
          semi: true,
        },
      ],
    },
  },
];
