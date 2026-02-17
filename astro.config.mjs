// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import htmx from "astro-htmx";
import preact from "@astrojs/preact";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    htmx(),
    preact({
      compat: true, // важливо для signals та react-like коду
    }),
  ],
});
