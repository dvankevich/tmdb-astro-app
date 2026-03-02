// src/lib/i18n.ts

type Translations = {
  popularMovies: string;
  currentLanguage: string;
  tmdbLanguage: string;
  // додай сюди нові ключі пізніше, наприклад searchPlaceholder: string;
};

const translations: Record<"uk" | "en", Translations> = {
  uk: {
    popularMovies: "Популярні фільми",
    currentLanguage: "Поточна мова",
    tmdbLanguage: "TMDB мова",
  },
  en: {
    popularMovies: "Popular movies",
    currentLanguage: "Current language",
    tmdbLanguage: "TMDB language",
  },
};

export function t(key: keyof Translations, locale: "uk" | "en" = "uk"): string {
  return translations[locale]?.[key] ?? translations.uk[key] ?? key;
}
