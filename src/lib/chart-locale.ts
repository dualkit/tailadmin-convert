import { dkIntlLocale } from "./dualkit-locale";

/** The Arabic face loaded by dualkit.css, so chart labels match the page text. */
const ARABIC_CHART_FONT = "'IBM Plex Sans Arabic', sans-serif";

type Series = { name: string; data: number[] };

/**
 * Locale helpers for ApexCharts. English gets every value back unchanged, so the English
 * charts render exactly as before. Arabic charts read right to left: the first month sits at
 * the right edge, the value axis moves to the right, and month names come from Intl.
 */
export function chartLocale(locale: string) {
  const rtl = locale === "ar";
  const monthNames = (): string[] => {
    const format = new Intl.DateTimeFormat(dkIntlLocale(locale), { month: "long", timeZone: "UTC" });
    return Array.from({ length: 12 }, (_, month) => format.format(new Date(Date.UTC(2024, month, 1))));
  };
  return {
    rtl,
    /** The chart font: the app's own in English, the Arabic face in Arabic. */
    font: (english: string): string => (rtl ? ARABIC_CHART_FONT : english),
    /** Month categories: the English list as given, or Arabic names in reading order. */
    months: (english: string[]): string[] => (rtl ? [...monthNames()].reverse() : english),
    /** Any category list: reversed in Arabic so it reads from the right. */
    categories: <T,>(list: T[]): T[] => (rtl ? [...list].reverse() : list),
    /** Series data in reading order, to match `months` and `categories`. */
    series: <S extends Series>(list: S[]): S[] =>
      rtl ? list.map((s) => ({ ...s, data: [...s.data].reverse() })) : list,
    /** Options that apply to the Arabic chart only; English gets an empty object. */
    arabic: <T extends object>(options: T): Partial<T> => (rtl ? options : {}),
    /** A physical alignment flipped for Arabic. */
    start: (english: "left" | "right"): "left" | "right" =>
      rtl ? (english === "left" ? "right" : "left") : english,
  };
}
