import type { Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { AbstractFaces } from '@/components/illustrations/AbstractFaces'

// Screen 1: Problem/Promise
function ScreenOne() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <Container>
        <FadeIn className="text-center">
          <h1 className="font-display text-6xl font-medium tracking-tight text-brand-navy sm:text-8xl mb-8">
            40% of executive transitions fail.
          </h1>
          <p className="text-2xl font-medium text-brand-navy mb-4">
            Yours doesn&apos;t have to.
          </p>
          <p className="text-xl text-neutral-600 mb-12">
            I prevent executive failure through systematic architecture.<br/>
            200+ successes. 87% success rate.
          </p>
          <a 
            href="#qualify" 
            className="inline-block bg-brand-orange text-white font-medium px-8 py-4 rounded-lg text-lg hover:bg-brand-orange/90 transition-colors"
          >
            See If You Qualify
          </a>
        </FadeIn>
        <div className="text-center mt-16">
          <div className="text-neutral-400 text-sm mb-2">↓</div>
        </div>
      </Container>
    </section>
  )
}

// Screen 2: Timeline/Urgency
function ScreenTwo() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl font-medium text-brand-navy mb-12">
            The Timeline Already Started
          </h2>
          <div className="space-y-6 text-xl text-neutral-600 mb-12">
            <p><strong className="text-brand-navy">Day 30:</strong> They&apos;re forming opinions</p>
            <p><strong className="text-brand-navy">Day 60:</strong> They&apos;re making decisions</p>
            <p><strong className="text-brand-navy">Day 90:</strong> The verdict is set</p>
          </div>
          <p className="text-2xl font-medium text-brand-navy mb-12">
            Architecture beats hope.
          </p>
          <div className="flex gap-4 justify-center">
            <a 
              href="#evidence" 
              className="inline-block border border-brand-navy text-brand-navy font-medium px-6 py-3 rounded-lg hover:bg-brand-navy hover:text-white transition-colors"
            >
              Continue Reading
            </a>
            <a 
              href="#begin" 
              className="inline-block bg-brand-orange text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Request Assessment
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 3: Social Proof
function ScreenThree() {
  return (
    <section id="evidence" className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <FadeIn className="text-center max-w-4xl mx-auto">
          <blockquote className="mb-12">
            <p className="text-3xl italic text-neutral-600 mb-6">
              &ldquo;You challenged me, crowded me, gave me pressure.
              I actually look forward to our sessions.&rdquo;
            </p>
            <cite className="text-brand-navy font-medium not-italic text-lg">
              — Swiss Pharmaceutical Executive
            </cite>
          </blockquote>

          <blockquote className="mb-12">
            <p className="text-3xl italic text-neutral-600 mb-6">
              &ldquo;My eye stopped twitching. The sleep disorders stopped.&rdquo;
            </p>
            <cite className="text-brand-navy font-medium not-italic text-lg">
              — Technology Director, Month 3
            </cite>
          </blockquote>

          <div className="flex gap-4 justify-center">
            <a 
              href="/work" 
              className="inline-block border border-brand-navy text-brand-navy font-medium px-6 py-3 rounded-lg hover:bg-brand-navy hover:text-white transition-colors"
            >
              More Evidence
            </a>
            <a 
              href="#begin" 
              className="inline-block bg-brand-orange text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Request Assessment
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 4: Qualification
function ScreenFour() {
  return (
    <section id="qualify" className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl font-medium text-brand-navy mb-12">
            This Is For You If:
          </h2>
          
          <div className="space-y-4 text-xl text-neutral-600 mb-12 text-left max-w-2xl mx-auto">
            <div className="flex items-start">
              <span className="mr-4 text-2xl text-brand-navy">✓</span>
              <span>€50M+ P&L responsibility</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-2xl text-brand-navy">✓</span>
              <span>First 18 months or major expansion</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-2xl text-brand-navy">✓</span>
              <span>Board-level accountability</span>
            </div>
            <div className="flex items-start">
              <span className="mr-4 text-2xl text-brand-navy">✓</span>
              <span>The stakes justify intervention</span>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center">
            <a 
              href="/about" 
              className="inline-block border border-brand-navy text-brand-navy font-medium px-6 py-3 rounded-lg hover:bg-brand-navy hover:text-white transition-colors"
            >
              Not sure? Take 2-Minute Assessment
            </a>
            <a 
              href="#begin" 
              className="inline-block bg-brand-orange text-white font-medium px-6 py-3 rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Ready? Request Strategic Assessment
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 5: Final Authority
function ScreenFive() {
  return (
    <section id="begin" className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl font-medium text-brand-navy mb-8">
            Your First 100 Days Are Unrepeatable
          </h2>
          
          <p className="text-xl text-neutral-600 mb-12">
            Every day without architecture is a day 
            your narrative is being written without you.
          </p>
          
          <div className="mb-12">
            <p className="text-lg text-brand-navy mb-2">Francisco Baptista</p>
            <p className="text-lg text-neutral-600 mb-2">Executive Transition Architect</p>
            <p className="text-lg text-neutral-600">200+ Senior Leaders | 87% Success Rate</p>
          </div>
          
          <a 
            href="/contact" 
            className="inline-block bg-brand-orange text-white font-medium px-12 py-4 rounded-lg text-xl hover:bg-brand-orange/90 transition-colors"
          >
            Request Strategic Assessment
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

export const metadata: Metadata = {
  description:
    'Executive Transition Architect Francisco Baptista. Former Nestlé & SAP executive. 200+ senior leaders across 15+ countries. Systematic architecture for Managing Directors, Technical Leaders, and Senior Executives navigating complex transitions.',
  title:
    'Francisco Baptista - Executive Transition Architect | Systematic Success Architecture',
}

export default function Home() {
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

      <ScreenOne />
      <ScreenTwo />
      <ScreenThree />
      <ScreenFour />
      <ScreenFive />
      
      <ContactSection />
    </RootLayout>
  )
}