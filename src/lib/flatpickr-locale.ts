import { Arabic } from "flatpickr/dist/l10n/ar";
import type { CustomLocale } from "flatpickr/dist/types/locale";

/**
 * Flatpickr options for the app locale. English returns nothing, so the English pickers keep
 * their defaults. Arabic uses flatpickr's Arabic names, keeps the app's Sunday week start
 * (the week start is a regional choice left to the product), and a date format that spells
 * the month, because flatpickr's Arabic short months are digits.
 */
export function flatpickrLocale(locale: string): { locale?: CustomLocale; dateFormat?: string } {
  if (locale !== "ar") return {};
  return { locale: { ...Arabic, firstDayOfWeek: 0 }, dateFormat: "j F" };
}
