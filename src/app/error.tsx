'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log to error reporting service
    console.error('System Exception:', {
      message: error.message,
      digest: error.digest,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    })
  }, [error])

  return (
    <RootLayout>
      <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
        <FadeIn className="flex max-w-2xl flex-col items-center text-center">
          <p className="font-display text-6xl font-light text-neutral-950 sm:text-7xl">
            500
          </p>

          <h1 className="mt-6 font-display text-3xl font-semibold text-neutral-950 sm:text-4xl">
            Systematic Exception Detected
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-neutral-700">
            Our systems have encountered an unexpected complexity requiring
            architectural intervention.
          </p>

          <div className="mt-6 max-w-xl rounded-lg bg-neutral-50 p-6">
            <p className="text-base leading-relaxed text-neutral-600">
              In executive transitions, we prepare for 87% of scenarios through
              systematic methodology. In technology, edge cases occasionally
              emerge. Our engineering team has been alerted and is implementing
              corrective measures.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center rounded-md bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
            >
              Reinitialize System
            </button>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:border-neutral-400"
            >
              Return to Advisory
            </Link>
          </div>

          <div className="mt-12 rounded-md border border-neutral-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                  Exception Reference
                </p>
                <p className="mt-1 font-mono text-sm text-neutral-950">
                  {error.digest ||
                    `EXEC-${Date.now().toString(36).toUpperCase()}`}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase">
                  Timestamp
                </p>
                <p className="mt-1 font-mono text-sm text-neutral-950">
                  {new Date().toLocaleTimeString('en-US', {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-neutral-200 pt-8">
            <p className="text-sm text-neutral-600">
              Persistent issues indicate systematic challenges.
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              <a
                href="/contact"
                className="font-semibold text-neutral-700 transition hover:text-neutral-950"
              >
                Contact our advisory team
              </a>{' '}
              if intervention is required.
            </p>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <details className="mt-8 w-full max-w-xl">
              <summary className="cursor-pointer text-xs text-neutral-500 transition hover:text-neutral-700">
                Technical Details (Development Only)
              </summary>
              <pre className="mt-4 overflow-auto rounded bg-neutral-100 p-4 text-left text-xs">
                {error.stack || error.message}
              </pre>
            </details>
          )}
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
