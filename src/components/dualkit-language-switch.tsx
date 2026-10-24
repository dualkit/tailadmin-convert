'use client'

import { useLocale } from 'next-intl'
import { Link, usePathname } from '../i18n/navigation'

const CHOICES = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
] as const

type Props = {
  /** Accessible name for the group, in the current language. */
  label?: string
  className?: string
}

/**
 * Links to the current page in English and Arabic, each named in its own language.
 * Placed in the header's user menu, so the closed header looks the same as before.
 */
export function DualkitLanguageSwitch({ label = 'Language', className = '' }: Props) {
  const pathname = usePathname()
  const locale = useLocale()
  return (
    <nav aria-label={label} className={`flex items-center gap-1 rounded-lg bg-gray-100 p-1 dark:bg-gray-900 ${className}`}>
      {CHOICES.map(({ code, label: name, dir }) => {
        const current = locale === code
        return (
          <Link
            key={code}
            href={pathname}
            locale={code}
            lang={code}
            dir={dir}
            hrefLang={code}
            aria-current={current ? 'true' : undefined}
            className={`flex-1 rounded-md px-3 py-1.5 text-center text-theme-sm font-medium transition-colors ${
              current
                ? 'bg-white text-gray-900 ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700 dark:text-white'
                : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            }`}
          >
            {name}
          </Link>
        )
      })}
    </nav>
  )
}
