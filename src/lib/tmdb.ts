// src/lib/tmdb.ts

/**
 * Повертає 'uk' або 'en' на основі того, що передали з .astro сторінки
 */
export function getCurrentLocale(
  localeFromPage: string | undefined,
): "uk" | "en" {
  const locale = localeFromPage?.toLowerCase();

  if (locale === "en") return "en";
  return "uk"; // fallback на українську (наша defaultLocale)
}

/**
 * Перетворює 'uk' / 'en' у формат TMDB (uk-UA / en-US)
 */
export function getTmdbLanguage(locale: "uk" | "en" = "uk"): string {
  return locale === "uk" ? "uk-UA" : "en-US";
}
