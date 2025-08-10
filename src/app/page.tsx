import type { Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { AbstractFaces } from '@/components/illustrations/AbstractFaces'

// Screen 1: The Hook
function ScreenOne() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16">
      <Container>
        <FadeIn className="text-center">
          <h1 className="font-display text-6xl font-medium tracking-tight text-[#003C71] sm:text-8xl mb-8">
            40% of executive transitions fail.
          </h1>
          <p className="text-2xl font-medium text-[#003C71] mb-12">
            Yours doesn&apos;t have to.
          </p>
          <a 
            href="#qualify" 
            className="inline-block bg-[#003C71] text-white font-medium px-8 py-4 rounded-lg text-lg hover:bg-[#002A52] transition-colors"
          >
            See If You Qualify
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 2: The Timeline
function ScreenTwo() {
  return (
    <section className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <div className="space-y-8 text-xl text-[#333333] mb-12">
            <p><strong className="text-[#003C71]">Day 30:</strong> They&apos;re forming opinions</p>
            <p><strong className="text-[#003C71]">Day 60:</strong> They&apos;re making decisions</p>
            <p><strong className="text-[#003C71]">Day 90:</strong> The verdict is set</p>
          </div>
          <a 
            href="#evidence" 
            className="inline-block border-2 border-[#003C71] text-[#003C71] font-medium px-8 py-4 rounded-lg hover:bg-[#003C71] hover:text-white transition-colors"
          >
            Understand Your Timeline
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 3: The Proof  
function ScreenThree() {
  return (
    <section id="evidence" className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <FadeIn className="text-center max-w-4xl mx-auto">
          <blockquote className="mb-8">
            <p className="text-3xl text-[#333333] mb-6">
              &ldquo;My eye stopped twitching. The sleep disorders stopped.<br/>
              But more importantly, I stopped creating my own resistance.&rdquo;
            </p>
            <cite className="text-[#003C71] font-medium not-italic text-lg">
              — Technology Executive, Month 3 of transition
            </cite>
          </blockquote>

          <div className="text-center mb-12">
            <span className="text-4xl font-bold text-[#004225]">87%</span>
            <span className="text-lg text-[#333333] ml-2">success metric</span>
          </div>

          <a 
            href="/work" 
            className="inline-block border-2 border-[#003C71] text-[#003C71] font-medium px-8 py-4 rounded-lg hover:bg-[#003C71] hover:text-white transition-colors"
          >
            See More Evidence
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 4: The Qualification
function ScreenFour() {
  return (
    <section id="qualify" className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <div className="space-y-6 text-xl text-[#333333] mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-start">
              <span className="mr-4 text-[#003C71]">□</span>
              <span>€50M+ P&L responsibility</span>
            </div>
            <div className="flex items-center justify-start">
              <span className="mr-4 text-[#003C71]">□</span>
              <span>100+ team</span>
            </div>
            <div className="flex items-center justify-start">
              <span className="mr-4 text-[#003C71]">□</span>
              <span>Board exposure</span>
            </div>
          </div>
          
          <p className="text-lg text-[#666666] mb-12">
            Not everyone qualifies
          </p>
          
          <a 
            href="#begin" 
            className="inline-block bg-[#003C71] text-white font-medium px-8 py-4 rounded-lg hover:bg-[#002A52] transition-colors"
          >
            Check Your Eligibility
          </a>
        </FadeIn>
      </Container>
    </section>
  )
}

// Screen 5: The Close
function ScreenFive() {
  return (
    <section id="begin" className="min-h-screen flex items-center justify-center py-16">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto">
          <h2 className="font-display text-5xl font-medium text-[#003C71] mb-8">
            First 100 days are unrepeatable
          </h2>
          
          <div className="mb-12">
            <p className="text-2xl text-[#003C71] mb-2">Francisco Baptista</p>
            <p className="text-lg text-[#333333] mb-1">200+ Executives</p>
          </div>
          
          <a 
            href="/assessment" 
            className="inline-block bg-[#003C71] text-white font-medium px-12 py-4 rounded-lg text-xl hover:bg-[#002A52] transition-colors"
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
      
    </RootLayout>
  )
}