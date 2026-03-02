// src/lib/tmdb.ts

/**
 * Перетворює 'uk' / 'en' у формат TMDB (uk-UA / en-US)
 */
export function getTmdbLanguage(locale: "uk" | "en" = "uk"): string {
  return locale === "uk" ? "uk-UA" : "en-US";
}
