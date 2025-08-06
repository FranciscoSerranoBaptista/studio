import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'

const transformationCases = [
  {
    id: "perfectionist-executive",
    client: "Senior Executive, Pharmaceutical Industry",
    challenge: "Perfectionism creating decision delays and team frustration", 
    transformation: "From Analysis Paralysis to Centered Decision-Making",
    description: "This executive came to coaching after receiving feedback about being 'too thorough' in strategic decisions. Despite brilliant analytical capabilities, the pursuit of perfect solutions was creating bottlenecks in execution.",
    keyInsight: "The perfectionist part was still trying to prove worthiness through flawless performance.",
    results: [
      "Significantly faster strategic decisions without compromising quality",
      "Improved team satisfaction as execution accelerated", 
      "\"I finally understand the difference between excellence and perfection\"",
      "Continued effectiveness in leading complex strategic initiatives"
    ],
    impact: "Learning to leverage analytical strengths without being paralyzed by them."
  },
  {
    id: "conflict-avoidant-leader", 
    client: "Senior Executive, International Banking",
    challenge: "Difficulty addressing performance issues while maintaining relationships",
    transformation: "From People-Pleasing to Compassionate Authority",
    description: "This leader was well-liked by their team but struggled to have difficult conversations about performance issues. High performers were becoming frustrated while underperformers remained unclear about expectations.",
    keyInsight: "Avoiding difficult conversations wasn&apos;t protecting relationships—it was undermining them. True care sometimes requires challenging conversations.",
    results: [
      "Noticeable improvement in overall team effectiveness",
      "High-performing team members who had been considering leaving decided to stay",
      "\"I now have difficult conversations from strength, not fear\"",
      "Significant advancement in leadership responsibilities"
    ],
    impact: "Learning to lead with both strength and heart, rather than choosing between them."
  },
  {
    id: "intensely-driven-executive",
    client: "Commercial Director, German Technology Company", 
    challenge: "High performance overshadowed by stakeholder feedback about excessive intensity",
    transformation: "From Reactive Intensity to Conscious Leadership",
    description: "This executive delivered excellent business results but received consistent feedback about being 'too intense' in leadership meetings. The challenge wasn&apos;t competence—it was the one-dimensional leadership presence creating resistance.",
    keyInsight: "Effective leadership requires different qualities for different moments, like conducting an orchestra rather than playing one instrument loudly.",
    results: [
      "Improved feedback in leadership effectiveness reviews",
      "Colleagues began actively seeking input rather than bracing for intensity", 
      "\"I now notice which part of me is driving, and I can choose consciously\"",
      "Selected for expanded strategic responsibilities"
    ],
    impact: "Learning to lead with the full spectrum of executive presence rather than just drive and determination."
  },
  {
    id: "analytical-executive",
    client: "Research Director, Multinational Pharma Concern",
    challenge: "High performance in all areas except self-care and sustainable leadership practices", 
    transformation: "From Serenity Seeking to Sustainable Leadership",
    description: "This executive was exceptionally competent technically but struggling with work-life integration and sustainable leadership. They could optimize systems and lead projects brilliantly but felt scattered when it came to personal well-being.",
    keyInsight: "Complex systems can&apos;t be controlled—they can only be nudged. This applied to both organizational leadership and personal development.",
    results: [
      "Team members reported feeling more calm and focused around him",
      "Developed sustainable practices for energy management",
      "Moved from over-analysis to intuitive wisdom combined with data",
      "\"I finally found the serenity that makes leadership attractive to others\""
    ],
    impact: "Finding the centered place from which wise leadership emerges.",
    testimonial: "Francisco helped me understand that the goal isn&apos;t to control complex systems—it&apos;s to find the centered place from which wise leadership emerges."
  }
]

function TransformationCases() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Executive Transformation Case Studies
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          All names and identifying details have been changed to protect client confidentiality.
        </p>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {transformationCases.map((caseStudy) => (
          <FadeIn key={caseStudy.id}>
            <article>
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-neutral-950">
                      <span className="text-sm font-semibold text-white">IT</span>
                    </div>
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {caseStudy.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      Inner Team Dynamics™
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      6-month engagement
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {caseStudy.transformation}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p><strong>Challenge:</strong> {caseStudy.challenge}</p>
                    <p>{caseStudy.description}</p>
                    <p><strong>Key Insight:</strong> {caseStudy.keyInsight}</p>
                    <div>
                      <strong>Results:</strong>
                      <ul className="mt-2 list-disc list-inside space-y-1">
                        {caseStudy.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    </div>
                    <p><strong>Impact:</strong> {caseStudy.impact}</p>
                  </div>
                  {caseStudy.testimonial && (
                    <Blockquote
                      author={{ name: caseStudy.client, role: 'Executive Coaching Client' }}
                      className="mt-12"
                    >
                      {caseStudy.testimonial}
                    </Blockquote>
                  )}
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

function TransformationPatterns() {
  return (
    <>
      <SectionIntro
        eyebrow="Common Transformation Patterns"
        title="What emerges consistently across executive transformation"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          This work consistently produces transformation that colleagues, teams, and stakeholders notice.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="space-y-16">
          <FadeIn>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div>
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  Months 1-2: Discovery & Awareness
                </h3>
                <ul className="mt-4 list-disc list-inside space-y-2 text-base text-neutral-600">
                  <li>Clients identify their dominant leadership "parts"</li>
                  <li>Recognition of internal conflicts affecting external performance</li>
                  <li>Initial shifts in self-awareness during live leadership situations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  Months 3-4: Integration & Practice
                </h3>
                <ul className="mt-4 list-disc list-inside space-y-2 text-base text-neutral-600">
                  <li>Development of conscious choice in leadership moments</li>
                  <li>Improved stakeholder relationships and team dynamics</li>
                  <li>Increased energy as internal conflicts decrease</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-neutral-950">
                  Months 5-6: Mastery & Sustainability
                </h3>
                <ul className="mt-4 list-disc list-inside space-y-2 text-base text-neutral-600">
                  <li>Authentic executive presence that others notice and follow</li>
                  <li>Ability to self-coach through future challenges</li>
                  <li>Sustainable high performance without burnout</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  )
}

function MeasurableOutcomes() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Measurable Outcomes
        </h2>
        <p className="mt-4 text-base text-neutral-600">
          Transformation that leaders, teams, and organizations notice
        </p>
      </FadeIn>
      <div className="mt-10">
        <StatList>
          <StatListItem value="100%" label="Report faster, more confident decision-making" />
          <StatListItem value="95%" label="Experience improved stakeholder relationships" />
          <StatListItem value="90%" label="Advance in leadership responsibilities" />
          <StatListItem value="85%" label="Maintain improvements without ongoing coaching" />
        </StatList>
      </div>
      
      <FadeIn className="mt-16">
        <div className="space-y-8">
          <div>
            <h3 className="font-display text-lg font-semibold text-neutral-950">
              Decision-Making Clarity
            </h3>
            <p className="mt-2 text-base text-neutral-600">
              Executives report faster, more confident strategic decisions without compromising quality.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-neutral-950">
              Leadership Presence
            </h3>
            <p className="mt-2 text-base text-neutral-600">
              Teams and stakeholders notice improved executive presence and authenticity.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-neutral-950">
              Sustainable Performance
            </h3>
            <p className="mt-2 text-base text-neutral-600">
              Long-term maintenance of improvements without ongoing coaching dependency.
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Executive Transformation Case Studies | Inner Team Dynamics™',
  description:
    'Real transformation stories from 200+ executives. See how Inner Team Dynamics™ helped leaders overcome perfectionism, conflict avoidance, and reactive intensity to achieve authentic executive presence.',
}

export default function Work() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="The Work"
        title="The proof isn&apos;t in the methodology. It&apos;s in the transformation."
      >
        <p>
          For 200+ executives across 15+ countries, Inner Team Dynamics™ has created lasting shifts in leadership presence, decision-making clarity, and sustainable impact. Here's how real leaders transformed their most pressing challenges into their greatest strengths.
        </p>
        <p className="mt-6 text-sm italic text-neutral-500">
          All names and identifying details have been changed to protect client confidentiality.
        </p>
      </PageIntro>

      <TransformationCases />

      <TransformationPatterns />

      <MeasurableOutcomes />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="text-xl italic text-neutral-600">
              "The moment you stop trying to be the leader you think you should be and start being the leader you actually are, everything changes. These stories show what that looks like in practice."
            </blockquote>
            <p className="mt-6 font-medium text-neutral-950">— Francisco Baptista</p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
