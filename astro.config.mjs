// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import htmx from "astro-htmx";
import preact from "@astrojs/preact";
import netlify from "@astrojs/netlify";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    htmx(),
    preact({
      compat: true,
    }),
  ],

  adapter: netlify(),

  // ==================== НОВЕ: i18n конфігурація ====================
  i18n: {
    defaultLocale: "uk",
    locales: ["uk", "en"],
    routing: {
      prefixDefaultLocale: false, // ← зміна сюди
      // redirectToDefaultLocale: false,   // вже не потрібно, але можна явно
    },
  },
  // =================================================================
});
