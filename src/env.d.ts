declare module "astro-htmx";
declare module "@astrojs/preact";
declare module "@astrojs/netlify";

interface ImportMetaEnv {
  readonly TMDB_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
