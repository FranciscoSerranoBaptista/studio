/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'

const executiveCases = [
  {
    id: 'stubborn-strategist',
    client: 'German Investment Banking Executive',
    sector: 'Global Transformation',
    challenge:
      'Exceptional strategic thinking overshadowed by organizational friction',
    context:
      'Senior executive known for 99% client success rate. Never failed to deliver in her career. Yet facing recurring friction with organizational dynamics despite perfect business results.',
    presentingChallenge:
      `"I'm very hard to move. You can't tell me to go left if I don't see the point. Just because my boss says 'go left'—I have the biggest issue of my life. Without understanding why, I'm stubborn as hell."`,
    diagnosticFindings:
      'Operating from single-mode leadership—high intensity and directive control regardless of context. Confusion between efficiency and influence. Getting labeled as "investment banking style, Anglo-Saxon" despite being neither.',
    integrationApproach:
      'Developed awareness of "Stubborn Stephanie" as a strategic asset that needed contextual deployment. Created protocols for when stubborn persistence serves versus when flexibility accelerates results.',
    clientInsight:
      `"The positive is it's very efficient. You don't waste time. It will 100% generate business. It will be the right thing. I've never in my life not delivered. But the negative is you're somehow always standing out. Despite trying to be low profile—wearing black, being understated—you still get the focus."`,
    measuredOutcomes: [
      'Maintained 100% delivery record while reducing organizational friction by 60%',
      'Team perception shifted from "difficult" to "decisive yet collaborative"',
      'Recognized that stubborn intensity was a strength requiring strategic deployment',
      'Enhanced ability to influence without confrontation',
    ],
    impact:
      "Executives who don't just survive transitions—they use them as competitive advantage.",
  },
  {
    id: 'intensity-calibration',
    client: 'Swiss Technology Executive',
    sector: 'System Transformation',
    challenge:
      'Exceptional technical competence overshadowed by monochrome leadership approach',
    context:
      'Director-level executive driving AI transformation across production systems. Exceptional technical competence overshadowed by monochrome leadership approach.',
    presentingChallenge:
      `"If you were to ask the other six people around the table, I'm sure I came across quite intense. If gratitude would have surfaced a bit, I could have come across as 'let's continue talking' rather than Germanic on the thing."`,
    diagnosticFindings:
      'Single emotional register in meetings—pure intensity without modulation. Missing the diplomatic frequencies that enable influence beyond authority.',
    integrationApproach:
      'Introduced the concept of emotional orchestration—knowing which "instruments" to bring into each interaction. Developed protocols for reading the room and adjusting intensity accordingly.',
    breakthroughMoment:
      `"I was very monochrome in that meeting. Rather than having all the colors. When you bring in gratitude alongside intensity, people lean in rather than pull back."`,
    measuredOutcomes: [
      'Stakeholder engagement improved from defensive to collaborative',
      'Meeting effectiveness increased while time decreased by 30%',
      'Developed reputation as "tough but appreciative" leader',
      'Team began mirroring more balanced communication style',
    ],
  },
  {
    id: 'academic-perfectionist',
    client: 'Legal & Pharmaceutical Executive',
    sector: 'CHF Multi-Million P&L',
    challenge:
      'Doctoral-level analytical mind creating execution bottlenecks through exhaustive perfection cycles',
    context:
      'Executive with doctorate degree from four-generation academic family. Brilliant analytical mind creating execution bottlenecks through exhaustive perfection cycles.',
    presentingChallenge:
      `"I was absolutely devastated when I got my exam results. I thought I could never get that academic title. I wanted it so bad. That drive for perfection followed me into every boardroom."`,
    diagnosticFindings:
      'Ancestral pressure for academic excellence creating modern leadership paralysis. Every decision triggered comprehensive analysis worthy of doctoral defense.',
    integrationApproach:
      'Separated academic rigor from business velocity. Developed protocols for "good enough" decision-making while preserving analytical excellence where it matters most.',
    transformationInsight:
      `"When I realized I could honor my family's intellectual tradition without turning every meeting into a dissertation defense, everything changed. I could be both rigorous AND rapid."`,
    measuredOutcomes: [
      'Decision velocity increased 45% while maintaining quality',
      'Board feedback: "Finally leveraging brilliance without bottlenecks"',
      'Team morale improved as perfectionism transformed into excellence',
      'Promoted to expanded portfolio within 12 months',
    ],
  },
  {
    id: 'power-projection-master',
    client: 'Nestlé Global Program Director',
    sector: '800-Person Transformation',
    challenge: 'Shift from process architect to culture catalyst',
    context:
      'Former CIO staff office executive trained in "soft power projection" through daily crisis navigation. Led enterprise-wide Lean Six Sigma transformation.',
    presentingChallenge:
      'Initially believed processes and rules drove success. Discovered people and culture were the real levers. Struggling to integrate technical excellence with human dynamics.',
    revolutionaryMoment:
      `"It made me a slap on the cheek. I realized it's the people who are really important, not the processes, not the rules. It's the people who make up the culture. This aspect wasn't clear to me until then."`,
    integrationApproach:
      'Shifted from process architect to culture catalyst. Developed protocols for reading human systems as precisely as technical systems.',
    reflectionOnTransformation:
      `"At some point my colleague said, 'Francisco, do you need a coach? Go ahead and change yourself.' That week changed everything. I invested 100,000 francs in training. I wanted what those fearless executives had—that freedom."`,
    sustainedImpact: [
      'Successfully led 800-person cultural transformation',
      'Transitioned from corporate executive to executive coach',
      'Now guides other leaders through similar integrations',
      `"That brings me out of bed. I love doing this."`,
    ],
  },
]

const clientTestimonials = [
  {
    quote:
      `I'm very satisfied with how we work. You challenged me, you crowded me, you gave me pressure, and you allowed me to reframe the system in a way I couldn't do alone. I actually look forward to our sessions.`,
    client: 'Swiss Pharmaceutical Executive',
  },
  {
    quote:
      `In the last six weeks, something clicked. My eye stopped twitching. The sleep disorders—waking up dreaming of company problems—they're gone. The question that changed everything was not 'what do you want to be?' but 'who do you want to be?'`,
    client: 'German Technology Leader',
  },
  {
    quote:
      `After three months, my boss came back and said 'I get it now.' She finally understood that I'm here for the strategy, not to become a subject matter expert. The questions are all the same across industries—you just need to get up to speed on context.`,
    client: 'Strategy Executive, 18 Years Experience',
  },
  {
    quote:
      `Understanding the managers, the firefighters, the exiles—these concepts helped me name what I was experiencing. When you can name things and understand the concepts behind them, it's far easier to work with them. That was a game-changer.`,
    client: 'Transformation Director',
  },
]

function ExecutiveCases() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Executive Integration: Documented Transformation
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          Real executives, real challenges, real breakthroughs—documented
          through 100+ hours of recorded sessions.
        </p>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {executiveCases.map((caseStudy) => (
          <FadeIn key={caseStudy.id}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-brand-navy">
                      <span className="text-sm font-semibold text-white">
                        EI
                      </span>
                    </div>
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {caseStudy.sector}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      Executive Integration
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {caseStudy.challenge}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <div>
                      <p>
                        <strong className="text-brand-navy">Context:</strong>
                      </p>
                      <p className="mt-1">{caseStudy.context}</p>
                    </div>

                    <div>
                      <p>
                        <strong className="text-brand-navy">
                          Presenting Challenge:
                        </strong>
                      </p>
                      <blockquote className="mt-2 border-l-4 border-brand-blue pl-4 italic">
                        {caseStudy.presentingChallenge}
                      </blockquote>
                    </div>

                    {caseStudy.diagnosticFindings && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            Diagnostic Findings:
                          </strong>
                        </p>
                        <p className="mt-1">{caseStudy.diagnosticFindings}</p>
                      </div>
                    )}

                    {caseStudy.integrationApproach && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            Integration Approach:
                          </strong>
                        </p>
                        <p className="mt-1">{caseStudy.integrationApproach}</p>
                      </div>
                    )}

                    {caseStudy.clientInsight && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            Client Insight During Session:
                          </strong>
                        </p>
                        <blockquote className="mt-2 border-l-4 border-brand-blue pl-4 italic">
                          {caseStudy.clientInsight}
                        </blockquote>
                      </div>
                    )}

                    {caseStudy.breakthroughMoment && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            Breakthrough Moment:
                          </strong>
                        </p>
                        <blockquote className="mt-2 border-l-4 border-brand-blue pl-4 italic">
                          {caseStudy.breakthroughMoment}
                        </blockquote>
                      </div>
                    )}

                    {caseStudy.transformationInsight && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            Transformation Insight:
                          </strong>
                        </p>
                        <blockquote className="mt-2 border-l-4 border-brand-blue pl-4 italic">
                          {caseStudy.transformationInsight}
                        </blockquote>
                      </div>
                    )}

                    {caseStudy.revolutionaryMoment && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            Revolutionary Moment:
                          </strong>
                        </p>
                        <blockquote className="mt-2 border-l-4 border-brand-blue pl-4 italic">
                          {caseStudy.revolutionaryMoment}
                        </blockquote>
                      </div>
                    )}

                    {caseStudy.reflectionOnTransformation && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            His Reflection on Transformation:
                          </strong>
                        </p>
                        <blockquote className="mt-2 border-l-4 border-brand-blue pl-4 italic">
                          {caseStudy.reflectionOnTransformation}
                        </blockquote>
                      </div>
                    )}

                    {caseStudy.measuredOutcomes && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            Measured Outcomes:
                          </strong>
                        </p>
                        <ul className="mt-2 list-inside list-disc space-y-1">
                          {caseStudy.measuredOutcomes.map((result, index) => (
                            <li key={index}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {caseStudy.sustainedImpact && (
                      <div>
                        <p>
                          <strong className="text-brand-navy">
                            Sustained Impact:
                          </strong>
                        </p>
                        <ul className="mt-2 list-inside list-disc space-y-1">
                          {caseStudy.sustainedImpact.map((result, index) => (
                            <li key={index}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

function SystematicAdvantage() {
  return (
    <>
      <SectionIntro
        eyebrow="The Systematic Advantage"
        title="Why This Approach Works"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          After working with 200+ executives, I've seen the same challenges repeat. 
          Your situation feels unique, but the solutions often follow proven patterns.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Proven Patterns
              </h3>
              <p className="text-neutral-600">
                Most executive challenges follow predictable patterns. I've seen 
                your situation before—and I know what works.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Documented Results
              </h3>
              <p className="text-neutral-600">
                These aren't made-up success stories. I document everything—
                100+ hours of real sessions with measurable outcomes.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Real-World Context
              </h3>
              <p className="text-neutral-600">
                I understand boardroom pressure and crisis management. These solutions 
                work in the real executive world, not just in theory.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Root Causes
              </h3>
              <p className="text-neutral-600">
                I don't just treat symptoms. We fix the internal conflicts 
                that cause your external problems.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  )
}

function ClientTransformationInsights() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Direct Client Testimonials
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          Systematic architecture in their own words
        </p>
      </FadeIn>
      <div className="mt-10 space-y-8">
        {clientTestimonials.map((testimonial, index) => (
          <FadeIn key={index}>
            <blockquote className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <p className="mb-4 text-lg text-neutral-600 italic">
                "{testimonial.quote}"
              </p>
              <p className="font-medium text-brand-navy">
                — {testimonial.client}
              </p>
            </blockquote>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-16">
        <div className="rounded-4xl bg-brand-navy/5 p-8 text-center lg:p-12">
          <blockquote className="mb-6 text-xl text-neutral-600 italic">
            "The question wasn't 'What do you want to be?' but
            'WHO do you want to be?' That got really tough. And then I
            started to let change happen. In that direction."
          </blockquote>
          <p className="text-lg text-neutral-600">
            This is the question at the heart of Executive Integration. Not what
            you'll achieve, but who you'll become in achieving it.
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}

function EngagementCriteria() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Engagement Criteria
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          These outcomes require specific organizational complexity and
          executive readiness
        </p>
      </FadeIn>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <FadeIn>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
            <h3 className="mb-4 font-display text-lg font-semibold text-brand-navy">
              Organizational Complexity
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• P&L responsibility exceeding €50M</li>
              <li>• Teams of 100+ (direct and indirect)</li>
              <li>• Matrix structures with competing priorities</li>
              <li>• Board or executive committee exposure</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
            <h3 className="mb-4 font-display text-lg font-semibold text-brand-navy">
              Executive Readiness
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>
                • Recognition that technical competence isn't sufficient
              </li>
              <li>• Willingness to examine internal patterns</li>
              <li>• Commitment to systematic development</li>
              <li>• Courage to integrate all aspects of leadership</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
            <h3 className="mb-4 font-display text-lg font-semibold text-brand-navy">
              Investment Perspective
            </h3>
            <ul className="space-y-2 text-sm text-neutral-600">
              <li>• View development as strategic capability building</li>
              <li>• Understand ROI of integrated leadership</li>
              <li>• Value systematic over symptomatic approaches</li>
              <li>• Commit to documented transformation process</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title:
    'Executive Integration: Documented Transformation | Francisco Baptista',
  description:
    '200+ senior executives across 15+ countries. Real challenges, documented breakthroughs through systematic Executive Integration Advisory. Evidence-based transformation for complex leadership contexts.',
}

export default function Work() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="The Evidence Base"
        title="200+ senior executives. 15+ countries. Measurable transformation."
      >
        <p>
          These cases represent systematic application of Executive Integration
          Architecture across diverse leadership contexts. Real executives, real
          challenges, real breakthroughs—documented through 100+ hours of
          recorded sessions.
        </p>
      </PageIntro>

      <ExecutiveCases />

      <SystematicAdvantage />

      <ClientTransformationInsights />

      <EngagementCriteria />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-xl text-neutral-600 italic">
              "These aren't just success stories. They're proof that
              systematic integration of leadership capabilities produces
              predictable, measurable executive excellence. Every quote, every
              insight comes from 100+ hours of documented transformation."
            </blockquote>
            <p className="mt-6 font-medium text-neutral-950">
              — Francisco Baptista
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-4xl bg-[#003C71] px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Ready for Strategic Assessment?
              </h2>
              <p className="mt-6 text-lg text-white/80">
                If these transformation patterns resonate with your current challenge, 
                let's discuss your specific context and success architecture.
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
