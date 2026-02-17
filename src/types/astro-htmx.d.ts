// src/types/astro-htmx.d.ts

declare module "astro-htmx" {
  import type { AstroIntegration } from "astro";

  const integration: () => AstroIntegration;
  export default integration;
}
