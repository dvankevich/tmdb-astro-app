// src/lib/i18n.ts

type Translations = {
  popularMovies: string;
  currentLanguage: string;
  tmdbLanguage: string;
  htmxLoad: string;
  helloFromHtmx: string;
  // додай сюди нові ключі пізніше, наприклад searchPlaceholder: string;
};

const translations: Record<"uk" | "en", Translations> = {
  uk: {
    popularMovies: "Популярні фільми",
    currentLanguage: "Поточна мова",
    tmdbLanguage: "TMDB мова",
    htmxLoad: "Завантажити через HTMX",
    helloFromHtmx: "Привіт від HTMX",
  },
  en: {
    popularMovies: "Popular movies",
    currentLanguage: "Current language",
    tmdbLanguage: "TMDB language",
    htmxLoad: "Load via HTMX",
    helloFromHtmx: "Hello from HTMX",
  },
};

export function t(key: keyof Translations, locale: "uk" | "en" = "uk"): string {
  return translations[locale]?.[key] ?? translations.uk[key] ?? key;
}
