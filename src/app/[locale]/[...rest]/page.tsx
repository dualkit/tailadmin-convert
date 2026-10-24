import { notFound } from 'next/navigation'

/** Every path no other route matches shows the not-found page, inside the [locale] layout. */
export default function CatchAll() {
  notFound()
}
