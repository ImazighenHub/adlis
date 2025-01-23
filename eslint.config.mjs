// @ts-check
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";
import {fixupConfigRules} from "@eslint/compat";
import prettierConfigRecommended from "eslint-plugin-prettier/recommended";
import tailwind from "eslint-plugin-tailwindcss";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([...compat.extends("next/core-web-vitals", "next/typescript")]);

const config = [
  ...patchedConfig,
  ...tailwind.configs["flat/recommended"],

  // Add more flat configs here
  prettierConfigRecommended, // Last since it disables some previously set rules
  { ignores: [".next/*",
      ".cache/*",
      "package-lock.json",
      "public/*",
      "node_modules/*",
      "next-env.d.ts",
      "next.config.ts",
      "yarn.lock",
      "pnpm-lock.yaml",] },
];

export default config;