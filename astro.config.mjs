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
    // Які мови підтримуємо (порядок не важливий)
    locales: ["en", "uk"],

    // Основна мова проекту (українська)
    defaultLocale: "uk",

    // Робимо префікс для ВСІХ мов, у тому числі й для defaultLocale
    routing: {
      prefixDefaultLocale: true,
    },
  },
  // =================================================================
});
