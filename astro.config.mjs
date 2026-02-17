// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import htmx from "astro-htmx";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [htmx()],
});
