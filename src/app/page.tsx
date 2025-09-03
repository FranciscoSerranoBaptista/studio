'use client'

import { useId } from 'react'
import Script from 'next/script'

import { Container } from '@/components/Container'
import FAQSection from '@/components/FAQSection'
import { FadeIn } from '@/components/FadeIn'
import { AbstractFaces } from '@/components/illustrations/AbstractFaces'
import { RootLayout } from '@/components/RootLayout'
import { EXECUTIVE_FAQ } from '@/data/faq-content'
import {
  generateArticleSchema,
  generateServiceSchema,
} from '@/lib/structured-data'

// Screen 1: The Hook
function ScreenOne({ qualifyId }: { qualifyId: string }) {
  return (
    <section className="flex min-h-screen items-center justify-center pt-24 pb-16">
      <Container>
        <FadeIn immediate className="text-center">
          <h1 className="sm:text-7xl mb-8 font-display text-5xl font-medium tracking-tight text-[#003C71]">
            Inner shifts. Outer victories.
          </h1>
          <p className="mb-6 text-xl text-[#333333] max-w-2xl mx-auto">
            I work with senior leaders who are brilliant at their jobs<br/>
            and exhausted by the performance.
          </p>
          <p className="mb-12 text-xl text-[#333333] max-w-2xl mx-auto">
            If you're tired of pretending everything's under control,<br/>
            we should talk.
          </p>
          <a
            href={`#${qualifyId}`}
            className="inline-block rounded-lg bg-[#003C71] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#002A52]"
          >
            See if we're a fit
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 2: The Problem
function ScreenTwo({ evidenceId }: { evidenceId: string }) {
  return (
    <section className="flex min-h-screen items-center justify-center py-16">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 font-display text-4xl font-medium text-[#003C71]">
            You know the feeling.
          </h2>
          <div className="mb-12 space-y-6 text-xl text-[#333333] text-left max-w-2xl mx-auto">
            <p>
              Walking into executive meetings over-prepared but under-confident.
            </p>
            <p>
              Managing down brilliantly while avoiding difficult conversations with peers.
            </p>
            <p>
              Success on paper while something essential dies inside.
            </p>
          </div>
          <div className="mb-8 space-y-4 text-lg text-[#333333] max-w-2xl mx-auto">
            <p>This isn't about competence.<br/>
            You're already competent.</p>
            <p>It's about the parts of you at war with each other.<br/>
            The performer vs. the person.<br/>
            The achiever vs. the human.<br/>
            The expert vs. the learner.</p>
          </div>
          <a
            href={`#${evidenceId}`}
            className="inline-block rounded-lg border-2 border-[#003C71] px-8 py-4 font-medium text-[#003C71] transition-colors hover:bg-[#003C71] hover:text-white"
          >
            How we work with this
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 3: The Approach
function ScreenThree({ evidenceId }: { evidenceId: string }) {
  return (
    <section
      id={evidenceId}
      className="flex min-h-screen items-center justify-center py-16"
    >
      <Container>
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 font-display text-4xl font-medium text-[#003C71]">
            We don't work on your leadership.<br/>
            We work on your relationship with yourself.
          </h2>

          <div className="mb-12 space-y-6 text-lg text-[#333333] max-w-2xl mx-auto">
            <p>
              When the inner critics quiet down,<br/>
              confidence isn't performed anymore.
            </p>
            <p>
              When the perfectionist relaxes,<br/>
              excellence flows without exhaustion.
            </p>
            <p>
              When all parts of you align,<br/>
              the external naturally follows.
            </p>
          </div>

          <p className="mb-8 text-xl font-medium text-[#003C71]">
            Inner shifts. Outer victories.<br/>
            That's the only sequence that works.
          </p>

          <a
            href="/about"
            className="inline-block rounded-lg border-2 border-[#003C71] px-8 py-4 font-medium text-[#003C71] transition-colors hover:bg-[#003C71] hover:text-white"
          >
            How this works
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 4: The Qualification
function ScreenFour({ qualifyId, beginId }: { qualifyId: string; beginId: string }) {
  return (
    <section
      id={qualifyId}
      className="flex min-h-screen items-center justify-center py-16"
    >
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 font-display text-4xl font-medium text-[#003C71]">
            This work is for senior leaders who:
          </h2>
          <div className="mx-auto mb-12 max-w-2xl space-y-4 text-left text-lg text-[#333333]">
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">•</span>
              <span>Are successful but sense something's off</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">•</span>
              <span>Ready to examine what's really running the show</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">•</span>
              <span>Willing to be uncomfortable for the sake of growth</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">•</span>
              <span>Done with quick fixes and tactical patches</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">•</span>
              <span>Choose depth over comfort</span>
            </div>
          </div>

          <h3 className="mb-8 font-display text-2xl font-medium text-[#003C71]">
            This work is NOT for those who:
          </h3>
          <div className="mx-auto mb-12 max-w-2xl space-y-4 text-left text-lg text-[#666666]">
            <div className="flex items-start">
              <span className="mr-4 text-xl">×</span>
              <span>Want validation that they're fine as-is</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl">×</span>
              <span>Need strategies without self-examination</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl">×</span>
              <span>Believe the problem is everyone else</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl">×</span>
              <span>Think vulnerability is weakness</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl">×</span>
              <span>Are here because their company sent them</span>
            </div>
          </div>

          <a
            href={`#${beginId}`}
            className="inline-block rounded-lg bg-[#003C71] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#002A52]"
          >
            Ready for real work?
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 5: The Close
function ScreenFive({ beginId }: { beginId: string }) {
  return (
    <section
      id={beginId}
      className="flex min-h-screen items-center justify-center py-16"
    >
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="mb-12 font-display text-4xl font-medium text-[#003C71]">
            Ready for real work?
          </h2>

          <div className="mb-12 space-y-6 text-lg text-[#333333] text-left max-w-2xl mx-auto">
            <p>First, ask yourself:</p>
            <div className="ml-6 space-y-3">
              <p>• Am I choosing this or is my company?</p>
              <p>• Am I ready to see what I haven't wanted to see?</p>
              <p>• Will I show up consistently even when uncomfortable?</p>
            </div>
            <p className="text-center mt-8">If yes to all three:</p>
          </div>

          <div className="mb-12">
            <p className="mb-4 text-xl text-[#003C71]">Simple and clear:</p>
            <div className="space-y-2 text-lg text-[#333333] max-w-xl mx-auto">
              <p>We meet.</p>
              <p>We go deeper than you expected.</p>
              <p>You see patterns you couldn't see alone.</p>
              <p>We work with what emerges.</p>
            </div>
            <p className="mt-8 text-sm text-[#666666]">Sessions by application only.</p>
          </div>

          <a
            href="/contact"
            className="inline-block rounded-lg bg-[#003C71] px-12 py-4 text-xl font-medium text-white transition-colors hover:bg-[#002A52]"
          >
            Apply to work together
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

export default function Home() {
  // Generate unique IDs for sections
  const evidenceId = useId()
  const qualifyId = useId()
  const beginId = useId()
  const serviceSchemaId = useId()
  const articleSchemaId = useId()
  
  // Select top FAQs for landing page
  const selectedFAQs = [
    EXECUTIVE_FAQ[0].questions[0], // Why do 40% fail?
    EXECUTIVE_FAQ[0].questions[1], // What makes executive transitions different?
    EXECUTIVE_FAQ[1].questions[0], // What is Executive Transition Architecture?
    EXECUTIVE_FAQ[2].questions[0], // Who qualifies?
    EXECUTIVE_FAQ[2].questions[2], // What investment is required?
    EXECUTIVE_FAQ[3].questions[0], // What happens in Strategic Assessment?
  ]

  const serviceSchema = generateServiceSchema(
    'Inner Shifts. Outer Victories.',
    'Work with senior leaders on the relationship with themselves to create authentic leadership',
    [
      'Inner Work Sessions',
      'Leadership Integration',
      'Authentic Performance',
      'Self-Relationship Coaching',
      'Executive Transformation',
    ],
    '€€€€',
  )

  const articleSchema = generateArticleSchema(
    'Inner Shifts. Outer Victories - Leadership Through Self-Integration',
    'Work with senior leaders who are brilliant at their jobs and exhausted by the performance. Real work on the relationship with yourself.',
    new Date().toISOString(),
  )

  return (
    <>
      <Script
        id={serviceSchemaId}
        type="application/ld+json"
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML for SEO */
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
        strategy="afterInteractive"
      />
      <Script
        id={articleSchemaId}
        type="application/ld+json"
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data requires dangerouslySetInnerHTML for SEO */
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
        strategy="afterInteractive"
      />

      <RootLayout>
        {/* Semantic HTML5 Structure */}
        <main itemScope itemType="https://schema.org/WebPage">
          <meta
            itemProp="name"
            content="Francisco Baptista - Inner Shifts. Outer Victories."
          />
          <meta
            itemProp="description"
            content="Work with senior leaders who are brilliant at their jobs and exhausted by the performance."
          />

          {/* Unified Background Pattern */}
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <AbstractFaces
              className="pointer-events-none absolute -top-64 -left-32 w-[200rem] opacity-[0.015]"
              orangeColor="rgb(254,80,0)"
              blueColor="rgb(0,114,206)"
              navyColor="rgb(0,60,113)"
            />
          </div>

          <ScreenOne qualifyId={qualifyId} />
          <ScreenTwo evidenceId={evidenceId} />
          <ScreenThree evidenceId={evidenceId} />
          <ScreenFour qualifyId={qualifyId} beginId={beginId} />
          <ScreenFive beginId={beginId} />

          {/* FAQ Section */}
          <FAQSection
            title="Working Together"
            subtitle="Questions from senior leaders considering inner work"
            faqs={selectedFAQs}
            className="bg-white"
          />
        </main>
      </RootLayout>
    </>
  )
}
