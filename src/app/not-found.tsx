import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export default function NotFound() {
  return (
    <RootLayout>
      <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
        <FadeIn className="flex max-w-2xl flex-col items-center text-center">
          <p className="font-display text-6xl font-light text-neutral-950 sm:text-7xl">
            404
          </p>

          <h1 className="mt-6 font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Uncharted Territory
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-neutral-600">
          In executive transitions, venturing into unknown territory without a
          map leads to predictable outcomes. This page, however, simply doesn't
          exist.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Return to Strategy
          </Link>

          <Link
            href="/advisory"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-400"
          >
            Explore Advisory Services
          </Link>
        </div>

        <div className="mt-12 border-t border-neutral-200 pt-8">
          <p className="text-sm text-neutral-600">
            Lost in transition? That's precisely the pattern we prevent.
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            <Link
              href="/contact"
              className="font-semibold text-neutral-700 transition hover:text-neutral-950"
            >
              Let's discuss
            </Link>{' '}
            your executive navigation needs.
          </p>
        </div>
      </FadeIn>
    </Container>
    </RootLayout>
  )
}
