import { defineConfig } from "eslint/config";
import nextJs from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextJs,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "node_modules/**",
      "next-env.d.ts",
    ],
  },
]);
