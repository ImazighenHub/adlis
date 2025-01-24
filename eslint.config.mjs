// @ts-check
import path from "node:path";
import {fileURLToPath} from "node:url";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";
import {fixupConfigRules} from "@eslint/compat";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const patchedConfig = fixupConfigRules([
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "plugin:tailwindcss/recommended",
        "prettier"
    )
]);


const config = [
  ...patchedConfig,
  // Add more flat configs here
  { ignores: [".next/*",
      ".cache/*",
      "package-lock.json",
      "public/*",
      "node_modules/*",
      "next-env.d.ts",
      "next.config.ts",
      "yarn.lock",
      "pnpm-lock.yaml",] },
    {
        settings: {
            tailwindcss: {
                callees: ["cn", "cva", "classnames", "clsx", "classNames"],
                config: "tailwind.config.ts",
            },
        }
    }
];

export default config;