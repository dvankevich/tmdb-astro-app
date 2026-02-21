// src/lib/tmdb.ts

/**
 * Повертає поточну мову з URL (/uk/ або /en/)
 */
export function getCurrentLocale(): "uk" | "en" {
  // Astro.currentLocale працює тільки в .astro файлах,
  // тому ми будемо передавати його з сторінки
  // (поки що повертаємо 'uk' як fallback)
  return "uk"; // тимчасово, оновимо в наступному кроці
}

/**
 * Перетворює 'uk' / 'en' у формат, який розуміє TMDB
 */
export function getTmdbLanguage(locale: "uk" | "en" = "uk"): string {
  return locale === "uk" ? "uk-UA" : "en-US";
}
