/** The Intl locale for an app locale: Arabic uses the UAE region with Latin digits, anything else is unchanged. */
export function dkIntlLocale(locale: string): string {
  return locale === 'ar' ? 'ar-AE-u-nu-latn' : locale
}
