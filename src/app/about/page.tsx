import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { RootLayout } from '@/components/RootLayout'
import imageFranciscoBaptista from '@/images/francisco-baptista.jpg'

function TheJourney() {
  return (
    <>
      <SectionIntro
        eyebrow="From Physics to People"
        title="I started where many executives do—believing intelligence and technical expertise were enough."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          With a physics degree and roles at SAP, I built my career on logic, systems, and data. I became Managing Director in Brazil, climbed the corporate ladder, and checked all the traditional success boxes.
        </p>
        <p className="mt-6 font-medium">
          But something was missing.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-3xl">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              The Corporate Years: Learning What Leadership Really Means
            </h3>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                At Nestlé, I held roles from Head of HR Systems to CIO Staff Office, managing global projects and navigating complex stakeholder dynamics. I learned to exercise &quot;soft power projection&quot;—influencing without authority, communicating across cultures, solving escalations that others couldn&apos;t touch.
              </p>
              <p className="font-medium text-neutral-950">
                Then came the wake-up call.
              </p>
              <p>
                Leading the Nestlé Continuous Excellence program, implementing change across hundreds of technical minds, I hit a wall. The processes were perfect. The training was comprehensive. But the transformation wasn&apos;t happening.
              </p>
              <p className="font-medium text-neutral-950">
                The breakthrough: People don&apos;t resist change—they resist being changed. The magic happens when you help them change themselves from the inside out.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

function CoachingDiscovery() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="The Coaching Discovery"
        title="Fourteen years ago, a colleague looked at me and said, 'Francisco, you need a coach. Go change yourself.'"
        invert
      >
        <p>
          That week, I found my first coach. That same week, I decided to become one.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-3xl space-y-6 text-base text-white/80">
            <p>
              I invested 100,000 Swiss francs in training, studying with master coaches, learning the depth work that creates real transformation. I discovered the inner landscape where authentic leadership lives—and how to help others navigate it.
            </p>
            <p className="text-lg font-medium text-white">
              What emerged wasn&apos;t another coaching methodology. It was Inner Team Dynamics™—a systematic approach that honors both the strategic mind executives trust and the inner wisdom they need to access.
            </p>
            <p>
              I learned to help leaders work with their internal &quot;crew&quot;—the perfectionist, the people-pleaser, the critic, the driver—not by eliminating these parts, but by bringing them into conscious collaboration under skilled leadership.
            </p>
            <p className="text-lg font-medium text-white">
              This is what I&apos;d been searching for: leadership development that actually develops leaders.
            </p>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}

function AIEnhancement() {
  return (
    <>
      <SectionIntro
        eyebrow="The AI Enhancement"
        title="Future-Ready Leadership"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          My recent MIT certification in "Making AI Work: Machine Intelligence for Business and Society" added a powerful dimension. We now use AI not to replace human insight, but to illuminate patterns, accelerate self-awareness, and help leaders see their blind spots with unprecedented clarity.
        </p>
        <p className="mt-6 font-medium">
          This isn&apos;t about technology replacing human leadership. It&apos;s about technology amplifying human wisdom.
        </p>
      </SectionIntro>
    </>
  )
}

function TheWorkToday() {
  return (
    <>
      <SectionIntro
        eyebrow="The Work Today"
        title="What Drives Me"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Every morning, I wake up knowing I get to do the work I was meant to do: helping leaders who are ready to go deeper, who know that surface-level fixes aren&apos;t enough, who want to lead from authentic presence rather than borrowed authority.
        </p>
        <p className="mt-6 font-medium">
          These are leaders who understand that their greatest competitive advantage isn&apos;t out there—it&apos;s in there.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-3xl">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              The Results That Matter
            </h3>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Over 200 executives across 15+ countries have discovered what happens when you align inner clarity with outer strategy. They make decisions from centeredness, not reactivity. They influence through authentic presence, not positional power. They create sustainable impact because they&apos;re leading from their core, not their conditioning.
              </p>
              <p className="font-medium text-neutral-950">
                This is leadership that lasts because it comes from within.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </>
  )
}

function PersonalSide() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="The Personal Side"
        title="Why Switzerland"
        invert
      >
        <p>
          Based near Geneva for over a decade, I&apos;ve found the perfect intersection of international business sophistication and Alpine groundedness. My clients span from Zurich boardrooms to London financial centers, from Silicon Valley startups to traditional European corporations.
        </p>
        <p className="mt-6 font-medium">
          Swiss precision meets global perspective—exactly what today&apos;s leaders need.
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
          <div className="lg:col-span-2 grid grid-cols-1 gap-8">
            <FadeIn>
              <div className="space-y-6 text-base text-white/80">
                <h3 className="font-display text-xl font-semibold text-white">
                  Languages and Cultures
                </h3>
                <p>
                  Fluent in English, German, and French, I work seamlessly across European, American, and global business cultures. My Portuguese roots, German education, and Swiss base create a unique cultural intelligence that serves leaders navigating today&apos;s interconnected world.
                </p>
                <p className="font-medium text-white">
                  Leadership speaks all languages, but it requires cultural fluency to be truly effective.
                </p>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="space-y-6 text-base text-white/80">
                <h3 className="font-display text-xl font-semibold text-white">
                  The Continuous Journey
                </h3>
                <p>
                  The work never stops evolving. Each executive I work with teaches me something new about the intersection of strategy and soul, systems and self-awareness, AI and authentic intelligence.
                </p>
                <p className="font-medium text-white">
                  I&apos;m not just coaching transformation—I&apos;m living it.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TheInvitation() {
  return (
    <>
      <SectionIntro
        eyebrow="The Invitation"
        title="If You're Ready"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          You've built your career on expertise, results, and strategic thinking. This work requires the same rigor—applied to your inner landscape.
        </p>
        <div className="mt-8 space-y-4 text-lg">
          <p>You don&apos;t need to be fixed. You need to be awakened.</p>
          <p>You don&apos;t need new strategies. You need deeper access to your inner strategist.</p>
          <p>You don&apos;t need more information. You need transformation.</p>
        </div>
        <p className="mt-8 text-xl font-medium">
          The question isn&apos;t whether you&apos;re capable of this level of leadership. The question is whether you&apos;re ready to claim it.
        </p>
      </SectionIntro>
    </>
  )
}

export const metadata: Metadata = {
  title: 'About Francisco Baptista - Executive Coach & Leadership Transformation',
  description:
    'From physicist to executive coach: Francisco\'s journey from corporate leadership at Nestlé and SAP to creating Inner Team Dynamics™, helping 200+ executives across 15+ countries transform authentic leadership.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro 
        eyebrow="About Francisco" 
        title="The moment I realized people, not processes, create transformation changed everything."
      >
        <p>
          For years, I believed in the corporate playbook: better systems, smarter processes, more efficient structures. I was wrong. The breakthrough came during my role as Program Director at Nestlé, implementing Lean Six Sigma across 800 developers. The data was perfect, the methodology was sound—but nothing was changing.
        </p>
        <p className="mt-6 font-medium">
          That's when I discovered what really drives transformation: the inner dynamics of human leadership.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="200+" label="Executives Coached" />
          <StatListItem value="15+" label="Countries" />
          <StatListItem value="14" label="Years in Executive Coaching" />
        </StatList>
      </Container>

      <TheJourney />

      <CoachingDiscovery />

      <AIEnhancement />

      <TheWorkToday />

      <PersonalSide />

      <TheInvitation />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <blockquote className="text-xl italic text-neutral-600">
              "The moment you stop trying to be the leader you think you should be and start being the leader you actually are, everything changes. That's where the work begins."
            </blockquote>
            <p className="mt-6 font-medium text-neutral-950">— Francisco Baptista</p>
          </div>
        </FadeIn>
      </Container>

      <ContactSection />
    </RootLayout>
  )
}
