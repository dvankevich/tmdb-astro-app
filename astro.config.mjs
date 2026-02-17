// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import htmx from "astro-htmx";
import preact from "@astrojs/preact"; // тепер має працювати

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    htmx(),
    preact({
      compat: true, // ← дуже рекомендую для @preact/signals та сумісності з React-стилем коду
    }),
  ],
});
