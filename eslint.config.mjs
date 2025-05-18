import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "react-hooks/exhaustive-deps": "warn",
      "@next/next/no-img-element": "warn",
      "react/no-unescaped-entities": "error"
    },
    files: ["src/**/*.{js,jsx,ts,tsx}"],
  },
  {
    // Disable exhaustive-deps for particles.tsx as it has circular dependencies
    files: ["src/components/ui/particles.tsx"],
    rules: {
      "react-hooks/exhaustive-deps": "off"
    }
  }
];

export default eslintConfig;
