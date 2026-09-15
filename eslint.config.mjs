import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      "no-nested-ternary": "error",
      "no-restricted-syntax": [
        "error",
        {
          selector: "ImportExpression",
          message: "Keep imports at the top level of the module.",
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "dist/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
