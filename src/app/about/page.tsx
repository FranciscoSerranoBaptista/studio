import type { Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { AbstractFaces } from '@/components/illustrations/AbstractFaces'
import imageFranciscoBaptista from '@/images/francisco-baptista.jpg'

function CorporateFoundation() {
  return (
    <>
      <SectionIntro
        eyebrow="Corporate Foundation"
        title="The Systematic Years"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Physics. Systems engineering. Organizational psychology. After two
          decades in senior corporate roles, I discovered that executive
          excellence emerges at the intersection of systematic thinking and
          human dynamics.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="space-y-12">
          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Nestlé Global | Program Director, Continuous Excellence
              </h3>
              <p className="mb-4 text-neutral-600">
                Led Lean Six Sigma implementation across 800 developers.
                Discovered that perfect processes fail without addressing the
                human architecture of change. This insight fundamentally shifted
                my approach from process optimization to leadership integration.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Nestlé Corporate | Head of HR Systems & CIO Staff Office
              </h3>
              <p className="mb-4 text-neutral-600">
                Managed global technology initiatives while navigating complex
                stakeholder matrices. Developed what I now call &ldquo;influence
                architecture&rdquo;—the ability to drive transformation through
                relationships rather than reporting lines.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                SAP | Managing Director, Brazil
              </h3>
              <p className="mb-4 text-neutral-600">
                Built and scaled operations in emerging markets. Learned that
                cultural intelligence and systematic thinking must operate in
                tandem for sustainable growth.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-12">
          <div className="rounded-4xl bg-brand-navy/5 p-8 lg:p-12">
            <p className="text-center text-lg text-neutral-600">
              This wasn&apos;t just climbing the corporate ladder. Each role
              revealed patterns in how exceptional leaders operate differently
              from merely competent ones. The difference wasn't strategy or
              intelligence—it was{' '}
              <strong className="text-brand-navy">internal integration</strong>.
            </p>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

function TransitionToAdvisory() {
  return (
    <div className="mt-24 rounded-4xl bg-brand-navy py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="The Transition to Executive Advisory"
        title="From Doing to Developing"
        invert
      >
        <p>
          Fourteen years ago, after investing 100,000 Swiss francs in advanced
          coaching certifications and depth psychology training, I made a
          deliberate shift. Not because corporate success wasn&apos;t
          satisfying, but because I&apos;d discovered something more valuable:
          the systematic methodology for developing exceptional executive
          capability.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-3xl space-y-6 text-base text-white/80">
            <p>
              The framework that emerged—
              <strong className="text-brand-orange">
                Inner Team Dynamics™
              </strong>
              —synthesizes organizational psychology with executive pragmatism.
              It treats leadership development as an engineering challenge
              rather than a personal growth journey.
            </p>
            <p className="text-lg font-medium text-white">
              This approach resonates with executives because it honors their
              analytical sophistication while addressing the human complexities
              they face daily.
            </p>
            <p>
              My work with 200+ senior leaders across 15 countries isn&apos;t
              theoretical. It&apos;s built from navigating the same corridors,
              facing the same boards, and solving the same complex human
              challenges that define executive success.
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function IntellectualCapital() {
  return (
    <>
      <SectionIntro
        eyebrow="Intellectual Capital"
        title="Methodologies and Frameworks"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          My approach synthesizes proven methodologies with cutting-edge
          insights, creating systematic frameworks for executive development.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Executive Transition Architecture™
              </h3>
              <p className="text-neutral-600">
                Seven-phase methodology for navigating senior role transitions.
                Developed through analysis of 200+ executive transitions,
                identifying predictable failure patterns and engineering
                systematic solutions.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Inner Team Dynamics™
              </h3>
              <p className="text-neutral-600">
                Integration framework that maps internal leadership
                architecture. Based on organizational psychology principles
                applied to individual executive development.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                MIT Certification: AI for Business Applications
              </h3>
              <p className="text-neutral-600">
                "Making AI Work: Machine Intelligence for Business and Society"
                - Integrating artificial intelligence into leadership
                development and strategic decision-making frameworks.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-4 font-display text-xl font-semibold text-brand-navy">
                Continuous Research
              </h3>
              <p className="text-neutral-600">
                Published frameworks on executive transition patterns,
                stakeholder dynamics, and leadership integration. Regular
                contributor to executive development forums in Geneva and
                Zurich.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  )
}

function ClientEngagementProfile() {
  return (
    <>
      <SectionIntro
        eyebrow="Client Engagement Profile"
        title="Who I Serve"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          I accept a limited number of executive clients annually—those facing
          genuine complexity who recognize that technical competence alone
          won&apos;t navigate the challenges ahead.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <FadeIn>
            <div className="lg:col-span-1">
              <Image
                src={imageFranciscoBaptista}
                alt="Francisco Baptista"
                className="aspect-square rounded-2xl object-cover"
              />
            </div>
          </FadeIn>
          <div className="space-y-8 lg:col-span-2">
            <FadeIn>
              <div>
                <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                  Sector Experience
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-neutral-600">
                  <div>Banking & Financial Services</div>
                  <div>Pharmaceutical & Healthcare</div>
                  <div>Technology & Software</div>
                  <div>Government & Public Sector</div>
                  <div>Manufacturing & Industrial</div>
                  <div>Professional Services</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                  Geographic Reach
                </h3>
                <p className="mb-2 text-neutral-600">
                  Based near Geneva, Switzerland. Serving executives across
                  Europe, with concentrations in:
                </p>
                <div className="text-sm text-neutral-600">
                  Switzerland | Germany | France | UK | Singapore
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                  Language Capabilities
                </h3>
                <div className="text-neutral-600">
                  English | German | French | Portuguese
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h3 className="mb-4 font-display text-xl font-semibold text-neutral-950">
                  Typical Engagements
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Managing Directors navigating first 100 days</li>
                  <li>• C-Suite executives facing complex transitions</li>
                  <li>• Technical leaders ascending to general management</li>
                  <li>• Senior executives managing cultural complexity</li>
                  <li>• Board members developing executive presence</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </>
  )
}

function TheApproach() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="The Approach"
        title="What Distinguishes This Work"
        invert
      >
        <p>
          My approach differs fundamentally from traditional executive coaching
          by focusing on integration rather than addition, systems rather than
          symptoms.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn>
            <div className="text-center">
              <h3 className="mb-4 font-display text-lg font-semibold text-white">
                Systematic Rather Than Supportive
              </h3>
              <p className="text-sm text-white/80">
                While others offer coaching support, I provide architectural
                frameworks. Every tool, every session, every intervention is
                designed to build sustainable executive capability, not provide
                temporary relief.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center">
              <h3 className="mb-4 font-display text-lg font-semibold text-white">
                Integration Rather Than Addition
              </h3>
              <p className="text-sm text-white/80">
                Most leadership development adds tools and techniques. This work
                integrates what already exists—aligning internal dynamics with
                external demands for authentic, sustainable performance.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="text-center">
              <h3 className="mb-4 font-display text-lg font-semibold text-white">
                Measurable Rather Than Aspirational
              </h3>
              <p className="text-sm text-white/80">
                Success is measured in decision velocity, stakeholder feedback,
                team performance metrics, and sustained energy levels. Not
                feelings or intentions, but observable outcomes.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

function ProfessionalPhilosophy() {
  return (
    <>
      <SectionIntro
        eyebrow="Professional Philosophy"
        title="The Core Premise"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Executive excellence isn&apos;t about becoming someone different.
          It&apos;s about integrating who you are with what the role demands.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-6 text-lg text-neutral-600">
              <p>
                After two decades in corporate leadership and fourteen years
                developing senior executives, one pattern is clear: the leaders
                who sustain excellence are those who achieve internal coherence.
                They don&apos;t perform leadership—they embody it.
              </p>
              <p>
                This requires systematic work, not motivational messaging. It
                demands intellectual rigor applied to human complexity. It needs
                someone who has navigated both the boardroom and the inner
                landscape of executive psychology.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

function CurrentFocus() {
  return (
    <>
      <SectionIntro
        eyebrow="Current Focus"
        title="The Intersection of Technology and Leadership"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          My recent MIT certification in AI applications represents the next
          evolution. Not replacing human judgment with algorithms, but
          augmenting executive capability with technological precision.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-3 font-display text-lg font-semibold text-brand-navy">
                AI-Enhanced Pattern Recognition
              </h3>
              <p className="text-sm text-neutral-600">
                Using artificial intelligence to identify leadership patterns
                and blind spots with unprecedented precision.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-3 font-display text-lg font-semibold text-brand-navy">
                Systematic Decision-Making
              </h3>
              <p className="text-sm text-neutral-600">
                Frameworks that combine human wisdom with machine intelligence
                for complex executive decisions.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-3 font-display text-lg font-semibold text-brand-navy">
                Integration of Human & Machine Intelligence
              </h3>
              <p className="text-sm text-neutral-600">
                Augmenting executive capability without replacing the
                irreplaceable elements of human leadership.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl bg-white p-8 ring-1 ring-brand-blue/10">
              <h3 className="mb-3 font-display text-lg font-semibold text-brand-navy">
                Future-Ready Leadership Frameworks
              </h3>
              <p className="text-sm text-neutral-600">
                Preparing executives for leadership challenges that don&apos;t
                yet exist but will inevitably emerge.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>
    </>
  )
}

function ProfessionalBackground() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-50 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <Container>
        <FadeIn>
          <h2 className="mb-16 text-center font-display text-2xl font-semibold text-neutral-950">
            Professional Background
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <FadeIn>
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-brand-navy">
                Education & Certification
              </h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Physics Degree | Technical University</li>
                <li>• MIT Certification | AI for Business Applications</li>
                <li>• Advanced Coaching Certifications | ICF Accredited</li>
                <li>• Organizational Psychology | Specialized Training</li>
                <li>• Investment: 100,000+ CHF in continuous development</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h3 className="font-semibant mb-4 font-display text-lg text-brand-navy">
                Corporate Experience
              </h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• 20+ years in senior corporate roles</li>
                <li>• P&L responsibility exceeding €100M</li>
                <li>• Teams of 500+ across multiple geographies</li>
                <li>• Board and C-suite stakeholder management</li>
                <li>• Cross-cultural leadership across 4 continents</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn>
            <div>
              <h3 className="mb-4 font-display text-lg font-semibold text-brand-navy">
                Advisory Practice
              </h3>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• 14 years executive advisory</li>
                <li>• 200+ senior leader engagements</li>
                <li>• 15+ countries served</li>
                <li>• 3 primary languages</li>
                <li>• Published frameworks and methodologies</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title:
    'Francisco Baptista - Executive Transition Architect | Leadership Integration Specialist',
  description:
    'Former Nestlé & SAP executive. Physics to executive advisory. 14 years developing 200+ senior leaders across 15+ countries through systematic Executive Transition Architecture and Inner Team Dynamics™.',
}

export default function About() {
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
        eyebrow="The Evolution of Executive Expertise"
        title="Physics. Systems engineering. Organizational psychology."
      >
        <p>
          After two decades in senior corporate roles, I discovered that
          executive excellence emerges at the intersection of systematic
          thinking and human dynamics. My work with 200+ senior leaders across
          15 countries isn&apos;t theoretical. It&apos;s built from navigating
          the same corridors, facing the same boards, and solving the same
          complex human challenges that define executive success.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="200+" label="Senior Leaders Coached" />
          <StatListItem value="15+" label="Countries Served" />
          <StatListItem value="14" label="Years Executive Advisory" />
          <StatListItem value="20+" label="Years Corporate Leadership" />
        </StatList>
      </Container>

      <CorporateFoundation />

      <TransitionToAdvisory />

      <IntellectualCapital />

      <ClientEngagementProfile />

      <TheApproach />

      <ProfessionalPhilosophy />

      <CurrentFocus />

      <ProfessionalBackground />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="text-xl text-neutral-600 italic">
              "Excellence in executive leadership isn&apos;t about accumulating
              more tools. It&apos;s about integrating what&apos;s already there
              into coherent, sustainable mastery."
            </blockquote>
            <p className="mt-6 font-medium text-neutral-950">
              — Francisco Baptista
            </p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
