import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div
            className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
            aria-hidden="true"
          />
          <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
            {title}
          </h2>
          <div className="mt-6">{children}</div>
        </FadeIn>
      </div>
    </Container>
  )
}

function AssessmentPhase() {
  return (
    <Section title="The Assessment">
      <div className="space-y-6 text-base text-[#333333]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-[#003C71] mb-3">
              45-minute strategic evaluation
            </h3>
            <p>Comprehensive diagnostic of transition complexity, stakeholder dynamics, and integration patterns.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#003C71] mb-3">
              What we identify
            </h3>
            <ul className="space-y-1 text-sm">
              <li>• Primary failure pattern risk</li>
              <li>• Stakeholder complexity score</li>
              <li>• Timeline pressure points</li>
              <li>• Integration opportunities</li>
              <li>• Immediate action priorities</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-[#F5F5F5] rounded-lg p-6">
          <p className="font-medium text-[#003C71] mb-2">Strategic fit assessment</p>
          <p className="text-sm">This assessment determines fit for both parties. I evaluate if you&apos;re ready for systematic intervention. You evaluate if the methodology serves your situation.</p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="/assessment"
          className="inline-block bg-[#003C71] text-white font-medium px-8 py-4 rounded-lg hover:bg-[#002A52] transition-colors"
        >
          Request Assessment
        </a>
      </div>
    </Section>
  )
}

function ArchitecturePhase() {
  return (
    <Section title="The Architecture (If We Proceed)">
      <div className="space-y-8 text-base text-[#333333]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#003C71] mb-3">
              Week 1-4: Intelligence Phase
            </h3>
            <ul className="space-y-1 text-sm text-left">
              <li>• Map real power dynamics</li>
              <li>• Identify unwritten rules</li>
              <li>• Decode narrative forming</li>
              <li>• Establish baseline metrics</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#003C71] mb-3">
              Week 5-8: Integration Phase
            </h3>
            <ul className="space-y-1 text-sm text-left">
              <li>• Adjust leadership frequency</li>
              <li>• Build coalition before change</li>
              <li>• Create stakeholder-relevant wins</li>
              <li>• Signal change, prevent antibodies</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-[#003C71] mb-3">
              Week 9-12: Acceleration Phase
            </h3>
            <ul className="space-y-1 text-sm text-left">
              <li>• Make irreversible moves</li>
              <li>• Lock in senior team</li>
              <li>• Establish operating rhythm</li>
              <li>• Cement your narrative</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="font-medium text-[#003C71]">Measurable outcomes each phase</p>
          <p className="text-sm mt-2">This isn&apos;t coaching. It&apos;s systematic intervention.</p>
        </div>
      </div>
    </Section>
  )
}

function InvestmentPhase() {
  return (
    <Section title="The Investment">
      <div className="space-y-6 text-base text-[#333333]">
        <div className="text-center mb-6">
          <p className="text-lg font-medium text-[#003C71] mb-2">&ldquo;Matches the stakes&rdquo;</p>
          <p className="text-sm">ROI documented</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F5F5F5] rounded-lg p-6">
            <h3 className="font-semibold text-[#003C71] mb-3">No prices (creates conversation)</h3>
            <p className="text-sm">Investment determined by transition complexity, timeline urgency, and organizational stakes. Discussed during strategic assessment.</p>
          </div>
          <div className="bg-[#F5F5F5] rounded-lg p-6">
            <h3 className="font-semibold text-[#003C71] mb-3">No packages. No tiers.</h3>
            <p className="text-sm">Bespoke only. Every engagement architected for specific executive transition complexity.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <a 
          href="/assessment"
          className="inline-block border-2 border-[#003C71] text-[#003C71] font-medium px-8 py-4 rounded-lg hover:bg-[#003C71] hover:text-white transition-colors"
        >
          Discuss Your Situation
        </a>
      </div>
    </Section>
  )
}






export const metadata: Metadata = {
  title: 'Process - Executive Transition Advisory',
  description:
    'Systematic methodology for analytical buyers. Assessment, Architecture, Investment. For executives where failure isn\'t an option.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Executive Integration" title="The Methodology">
        <p>
          Systematic approach for analytical buyers who need to understand the process.
        </p>
      </PageIntro>


      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <AssessmentPhase />
        <ArchitecturePhase />
        <InvestmentPhase />
      </div>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-[#003C71] px-6 py-20 sm:px-10 sm:py-32 md:px-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Ready for Strategic Assessment?
              </h2>
              <p className="mt-6 text-lg text-white/80">
                For executives with €50M+ P&L facing complex stakeholder dynamics.
                Not coaching—systematic intervention.
              </p>
              <div className="mt-10">
                <a 
                  href="/assessment"
                  className="inline-block bg-white text-[#003C71] font-medium px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Request Strategic Assessment
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}