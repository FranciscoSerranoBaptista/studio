import type { Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { AbstractFaces } from '@/components/illustrations/AbstractFaces'

function TheStakes() {
  return (
    <FadeIn>
      <div className="mb-16 text-center">
        <div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-950/5">
          <div className="mb-8 grid grid-cols-2 gap-8">
            <div>
              <div className="mb-2 text-5xl font-bold text-brand-orange">
                87%
              </div>
              <div className="text-neutral-600">Success with architecture</div>
            </div>
            <div>
              <div className="mb-2 text-5xl font-bold text-neutral-400">
                40%
              </div>
              <div className="text-neutral-600">Success without</div>
            </div>
          </div>
          <div className="text-lg font-medium text-brand-navy">
            47% - The difference systematic preparation makes
          </div>
          <p className="mt-6 text-neutral-600">
            Every day without architecture accumulates risk.
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

function BinaryChoice() {
  return (
    <FadeIn>
      <div className="mb-8 text-center">
        <h2 className="mb-4 font-display text-3xl font-semibold text-brand-navy">
          Two Options:
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-brand-navy p-8 text-white">
          <div className="mb-2 text-sm font-medium tracking-wide text-brand-orange uppercase">
            QUALIFIED EXECUTIVES
          </div>
          <h3 className="mb-4 font-display text-xl font-semibold">
            Request Strategic Assessment
          </h3>
          <div className="mb-6 text-sm text-neutral-200">
            €50M+ P&L | 100+ team | Board exposure
          </div>
          <div className="mb-6 text-neutral-300">
            90 minutes. Confidential. Complimentary.
          </div>
          <Button
            href="#assessment-form"
            className="w-full bg-brand-orange text-white hover:bg-brand-orange/90"
          >
            Request Strategic Assessment
          </Button>
        </div>

        <div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-950/5">
          <div className="mb-2 text-sm font-medium tracking-wide text-brand-navy uppercase">
            EVALUATING READINESS
          </div>
          <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
            Download Diagnostic Framework
          </h3>
          <div className="mb-6 text-sm text-neutral-600">
            Not sure you meet criteria?
          </div>
          <div className="mb-6 text-neutral-600">
            Identify your transition risks independently.
          </div>
          <Button href="#framework" invert className="w-full">
            Download Framework
          </Button>
        </div>
      </div>
    </FadeIn>
  )
}

function WhatYouGet() {
  return (
    <FadeIn>
      <div className="mb-8 text-center">
        <h2 className="mb-4 font-display text-3xl font-semibold text-brand-navy">
          Your 90-Minute Assessment Delivers:
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/5">
          <div className="mb-4 flex items-center">
            <span className="mr-3 text-2xl">🎯</span>
            <h3 className="font-display text-lg font-semibold text-brand-navy">
              Transition Risk Score
            </h3>
          </div>
          <p className="text-neutral-600">
            Quantified complexity across 5 dimensions
          </p>
        </div>

        <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/5">
          <div className="mb-4 flex items-center">
            <span className="mr-3 text-2xl">🗺️</span>
            <h3 className="font-display text-lg font-semibold text-brand-navy">
              Stakeholder Power Map
            </h3>
          </div>
          <p className="text-neutral-600">Hidden dynamics made visible</p>
        </div>

        <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/5">
          <div className="mb-4 flex items-center">
            <span className="mr-3 text-2xl">⚠️</span>
            <h3 className="font-display text-lg font-semibold text-brand-navy">
              Failure Pattern Analysis
            </h3>
          </div>
          <p className="text-neutral-600">Your specific vulnerability points</p>
        </div>

        <div className="rounded-3xl bg-white p-6 ring-1 ring-neutral-950/5">
          <div className="mb-4 flex items-center">
            <span className="mr-3 text-2xl">📈</span>
            <h3 className="font-display text-lg font-semibold text-brand-navy">
              100-Day Architecture
            </h3>
          </div>
          <p className="text-neutral-600">Sequenced roadmap for acceleration</p>
        </div>
      </div>
    </FadeIn>
  )
}

function StreamlinedForm() {
  return (
    <FadeIn>
      <div
        id="assessment-form"
        className="rounded-3xl bg-white p-8 ring-1 ring-neutral-950/5"
      >
        <h2 className="mb-6 font-display text-2xl font-semibold text-brand-navy">
          Request Strategic Assessment
        </h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Title
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                required
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Organization
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-neutral-700">
                LinkedIn
              </label>
              <input
                type="url"
                placeholder="https://linkedin.com/in/..."
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-neutral-700">
              Transition Context:
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="context"
                  value="new-role"
                  className="mr-3"
                />
                <span className="text-neutral-600">
                  New role (&lt; 6 months)
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="context"
                  value="expanded-scope"
                  className="mr-3"
                />
                <span className="text-neutral-600">Expanded scope</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="context"
                  value="transformation"
                  className="mr-3"
                />
                <span className="text-neutral-600">Transformation mandate</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="context"
                  value="succession"
                  className="mr-3"
                />
                <span className="text-neutral-600">Succession preparation</span>
              </label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              What&apos;s at stake if this transition fails?
            </label>
            <textarea
              rows={4}
              className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
              placeholder="Consider organizational impact, career implications, team consequences..."
              required
            />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full bg-brand-orange text-white">
              Submit Request
            </Button>
            <p className="mt-3 text-center text-xs text-neutral-500">
              Note: Qualified executives receive response within 48 hours.
            </p>
          </div>
        </form>
      </div>
    </FadeIn>
  )
}

function Qualification() {
  return (
    <FadeIn>
      <div className="mb-8 text-center">
        <h2 className="mb-4 font-display text-3xl font-semibold text-brand-navy">
          This Assessment is For:
        </h2>
      </div>

      <div className="rounded-3xl bg-white p-8 ring-1 ring-neutral-950/5">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <ul className="space-y-3 text-neutral-600">
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                Senior executives (MD level and above)
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                Complex transitions (€50M+ P&L or equivalent)
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                High stakes (board visibility, transformation mandates)
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-green-600">✓</span>
                First 18 months or significant expansion
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-neutral-50 p-6">
            <p className="mb-4 text-sm text-neutral-600">
              <strong className="text-brand-navy">Not a fit?</strong>
            </p>
            <p className="text-sm text-neutral-600">
              Download our framework for self-assessment.
            </p>
            <Button href="#framework" invert className="mt-4">
              Download Framework
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

function TestimonialsAndResources() {
  return (
    <FadeIn>
      <div className="rounded-3xl bg-neutral-50 p-8">
        <div className="mb-8 text-center">
          <h2 className="mb-4 font-display text-2xl font-semibold text-brand-navy">
            Recent Assessments:
          </h2>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <blockquote className="text-sm text-neutral-600">
            &ldquo;Three blind spots identified. Career saved.&rdquo;
            <cite className="mt-2 block text-xs font-medium text-neutral-500">
              Swiss Pharmaceutical EVP
            </cite>
          </blockquote>

          <blockquote className="text-sm text-neutral-600">
            &ldquo;Stakeholder mapping worth months of trial.&rdquo;
            <cite className="mt-2 block text-xs font-medium text-neutral-500">
              German Manufacturing CEO
            </cite>
          </blockquote>

          <blockquote className="text-sm text-neutral-600">
            &ldquo;First diagnosis of what was actually happening.&rdquo;
            <cite className="mt-2 block text-xs font-medium text-neutral-500">
              Financial Services MD
            </cite>
          </blockquote>
        </div>

        <div className="border-t border-neutral-200 pt-8" id="framework">
          <div className="text-center">
            <h3 className="mb-4 font-display text-lg font-semibold text-brand-navy">
              Additional Resources
            </h3>
            <p className="mb-6 text-neutral-600">
              Available after Strategic Assessment:
            </p>
            <div className="grid grid-cols-1 gap-4 text-sm text-neutral-600 md:grid-cols-3">
              <div>• Mutual NDA Template</div>
              <div>• Stakeholder Mapping Framework</div>
              <div>• 100-Day Architecture Template</div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Executive Transition Risk Assessment | Strategic Assessment Protocol',
  description:
    '40% of executive transitions fail. Cost: €2.5M per failure. This 90-minute assessment identifies your specific risk factors and delivers actionable architecture for success.',
}

export default function Contact() {
  return (
    <RootLayout>
      {/* Unified Background Pattern */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <AbstractFaces
          className="pointer-events-none absolute -top-64 -left-32 w-[200rem] opacity-[0.015]"
          orangeColor="rgb(254,80,0)"
          blueColor="rgb(0,114,206)"
          navyColor="rgb(0,60,113)"
        />
      </div>
      <PageIntro
        eyebrow="Executive Transition Risk Assessment"
        title="40% of executive transitions fail. Cost: €2.5M per failure. Cause: Not competence. Architecture."
      >
        <p className="text-lg text-neutral-700">
          This assessment identifies your specific risk factors.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <TheStakes />
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <BinaryChoice />
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <WhatYouGet />
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <Qualification />
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <StreamlinedForm />
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <TestimonialsAndResources />
      </Container>
    </RootLayout>
  )
}
