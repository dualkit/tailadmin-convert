'use client'

import { useLocale } from 'next-intl'
import { Link, usePathname } from '../i18n/navigation'

const CHOICES = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
] as const

/** Links to the current page in English and Arabic. Not placed by convert: add it where the app keeps its navigation. */
export function DualkitLanguageSwitch() {
  const pathname = usePathname()
  const locale = useLocale()
  return (
    <nav aria-label="Language">
      {CHOICES.map(({ code, label }) => (
        <Link key={code} href={pathname} locale={code} lang={code} aria-current={locale === code ? 'true' : undefined}>
          {label}
        </Link>
      ))}
    </nav>
  )
}
