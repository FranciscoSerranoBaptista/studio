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
          <h1 className="sm:text-8xl mb-8 font-display text-6xl font-medium tracking-tight text-[#003C71]">
            40% of executive transitions fail.
          </h1>
          <p className="mb-12 text-2xl font-medium text-[#003C71]">
            Yours doesn&apos;t have to.
          </p>
          <a
            href={`#${qualifyId}`}
            className="inline-block rounded-lg bg-[#003C71] px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-[#002A52]"
          >
            Evaluate Strategic Fit
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 2: The Timeline
function ScreenTwo({ evidenceId }: { evidenceId: string }) {
  return (
    <section className="flex min-h-screen items-center justify-center py-16">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 font-display text-4xl font-medium text-[#003C71]">
            The timeline already started
          </h2>
          <div className="mb-12 space-y-6 text-xl text-[#333333]">
            <p>
              <strong className="text-[#003C71]">Day 30:</strong> They&apos;re
              forming opinions
            </p>
            <p>
              <strong className="text-[#003C71]">Day 60:</strong> They&apos;re
              making decisions
            </p>
            <p>
              <strong className="text-[#003C71]">Day 90:</strong> The verdict is
              set
            </p>
          </div>
          <p className="mb-8 text-lg text-[#666666]">
            Your stakeholders form irreversible judgments by Day 90. Every day
            without systematic intervention reduces your probability of success.
          </p>
          <a
            href={`#${evidenceId}`}
            className="inline-block rounded-lg border-2 border-[#003C71] px-8 py-4 font-medium text-[#003C71] transition-colors hover:bg-[#003C71] hover:text-white"
          >
            Understand Your Timeline
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 3: The Proof
function ScreenThree({ evidenceId }: { evidenceId: string }) {
  return (
    <section
      id={evidenceId}
      className="flex min-h-screen items-center justify-center py-16"
    >
      <Container>
        <FadeIn className="mx-auto max-w-4xl text-center">
          <blockquote className="mb-8">
            <p className="mb-6 text-3xl text-[#333333]">
              &ldquo;My eye stopped twitching. The sleep disorders stopped.
              <br />
              But more importantly, I stopped creating my own resistance.&rdquo;
            </p>
            <cite className="text-lg font-medium text-[#003C71] not-italic">
              — Technology Executive, Month 3 of transition
            </cite>
          </blockquote>

          <div className="mb-12 text-center">
            <span className="text-4xl font-bold text-[#004225]">87%</span>
            <span className="ml-2 text-lg text-[#333333]">success metric</span>
          </div>

          <a
            href="/work"
            className="inline-block rounded-lg border-2 border-[#003C71] px-8 py-4 font-medium text-[#003C71] transition-colors hover:bg-[#003C71] hover:text-white"
          >
            See More Evidence
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
          <h2 className="mb-8 font-display text-4xl font-medium text-[#003C71]">
            This is for you if:
          </h2>
          <div className="mx-auto mb-8 max-w-2xl space-y-4 text-left text-lg text-[#333333]">
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">✓</span>
              <span>€50M+ P&L responsibility</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">✓</span>
              <span>100+ team members</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">✓</span>
              <span>Board/ExCo exposure</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-xl text-[#003C71]">✓</span>
              <span>First 18 months or major expansion</span>
            </div>
          </div>

          <p className="mb-8 text-lg text-[#666666]">
            Not everyone qualifies. The stakes must justify systematic
            intervention.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/resources"
              className="inline-block rounded-lg border-2 border-[#003C71] px-6 py-3 font-medium text-[#003C71] transition-colors hover:bg-[#003C71] hover:text-white"
            >
              Not sure? Get Diagnostic Resources
            </a>
            <a
              href={`#${beginId}`}
              className="inline-block rounded-lg bg-[#003C71] px-6 py-3 font-medium text-white transition-colors hover:bg-[#002A52]"
            >
              Ready? Check Your Eligibility
            </a>
          </div>
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
          <h2 className="mb-8 font-display text-5xl font-medium text-[#003C71]">
            Your stakeholders are forming permanent judgments
          </h2>

          <p className="mb-12 text-xl text-[#333333]">
            Every day without systematic intervention reduces your probability
            of success. Architecture ensures the narrative serves your
            objectives.
          </p>

          <div className="mb-12">
            <p className="mb-2 text-2xl text-[#003C71]">Francisco Baptista</p>
            <p className="mb-1 text-lg text-[#333333]">
              Executive Transition Advisor
            </p>
            <p className="text-lg text-[#333333]">
              200+ Senior Leaders | 87% Success Rate
            </p>
          </div>

          <a
            href="/assessment"
            className="inline-block rounded-lg bg-[#003C71] px-12 py-4 text-xl font-medium text-white transition-colors hover:bg-[#002A52]"
          >
            Request Strategic Assessment
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
    'Executive Transition Architecture',
    'Systematic methodology preventing the 40% failure rate in executive transitions',
    [
      'Transition Risk Analysis',
      'Stakeholder Mapping',
      'Integration Engineering',
      '90-Day Action Plan',
      'Weekly Strategic Advisory',
    ],
    '€€€€',
  )

  const articleSchema = generateArticleSchema(
    'Executive Transitions Have a 40% Failure Rate - The Patterns Are Predictable',
    'Systematic methodology for preventing executive transition failure. From 40% industry failure rate to 87% success rate through Executive Transition Architecture.',
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
            content="Francisco Baptista - Executive Transition Architect"
          />
          <meta
            itemProp="description"
            content="Executive transitions have a 40% failure rate. Systematic methodology achieving 87% success rate."
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
            title="Executive Transition Questions"
            subtitle="Critical insights for Managing Directors and C-Suite executives"
            faqs={selectedFAQs}
            className="bg-white"
          />
        </main>
      </RootLayout>
    </>
  )
}
