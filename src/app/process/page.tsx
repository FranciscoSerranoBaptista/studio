import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import facilitationWorkshop from '@/images/facilitation/841FFB1B-12DF-4E36-9DF3-8DE5D3CB24E8_4_5005_c.jpeg'
import facilitationIntimateSession from '@/images/facilitation/DF06065B-A68B-4F1A-93C9-501419B70235_1_105_c.jpeg'
import facilitationCoFacilitation from '@/images/facilitation/5E27BC4B-FCCA-43A9-9030-360D4F52A5F6_1_105_c.jpeg'
import { RootLayout } from '@/components/RootLayout'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-135 flex-none lg:w-180">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-148 lg:flex-none lg:group-even/section:order-first">
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
      </div>
    </Container>
  )
}

function Discovery() {
  return (
    <Section title="Discovery & Assessment" image={{ src: facilitationCoFacilitation, alt: "Francisco Baptista co-facilitating a professional development session, demonstrating collaborative leadership approaches" }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p className="font-semibold text-neutral-950 text-lg">
          "Meeting Your Inner Team"
        </p>
        <p>
          We begin with your <strong className="font-semibold text-neutral-950">Executive Discovery Call</strong>—a confidential exploration of your leadership challenges and introduction to the Inner Team Dynamics™ framework. This isn&apos;t a sales conversation; it&apos;s a professional consultation to assess fit and desired outcomes.
        </p>
        <p>
          The <strong className="font-semibold text-neutral-950">Deep Dive Session</strong> follows with complete Inner Team mapping using AI-enhanced pattern recognition. We identify your dominant "instruments" and their triggers, understanding how internal dynamics show up in your external leadership situations.
        </p>
        <p>
          You'll discover which parts of you are overused (leading to burnout), which are underused (missing opportunities), and how internal conflicts create external leadership challenges.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What's included
      </h3>
      <TagList className="mt-4">
        <TagListItem>Executive Discovery Call (30 min)</TagListItem>
        <TagListItem>Deep Dive Session (60-75 min)</TagListItem>
        <TagListItem>AI-Enhanced Pattern Recognition</TagListItem>
        <TagListItem>Complete Inner Team Mapping</TagListItem>
        <TagListItem>Trigger Identification</TagListItem>
        <TagListItem>Leadership Challenge Assessment</TagListItem>
      </TagList>
    </Section>
  )
}

function Integration() {
  return (
    <Section title="Integration & Practice" image={{ src: facilitationWorkshop, shape: 1, alt: "Overhead view of Francisco's group facilitation workshop showing participants engaged in collaborative learning in a beautiful wooden venue" }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p className="font-semibold text-neutral-950 text-lg">
          "Conducting Your Orchestra"
        </p>
        <p>
          Using <strong className="font-semibold text-neutral-950">Parts Dialogue Work</strong>, you&apos;ll have direct conversations with different aspects of yourself through guided visualization and somatic techniques. You'll literally hear what your inner perfectionist, critic, or people-pleaser needs and fears.
        </p>
        <p>
          We use <strong className="font-semibold text-neutral-950">AI-Enhanced Pattern Recognition</strong> to identify patterns you can&apos;t see from inside your own system. The technology illuminates blind spots and accelerates self-awareness with unprecedented clarity.
        </p>
        <p>
          Between sessions, you&apos;ll practice conscious leadership in live situations—board meetings, difficult conversations, strategic decisions—with ongoing support and debrief.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Senior Executive', role: 'Fortune 500 Technology Company' }}
        className="mt-12"
      >
        Decision-making became clearer within the first month. My team noticed the shift in my presence before I even told them I was doing this work.
      </Blockquote>
    </Section>
  )
}

function Leadership() {
  return (
    <Section title="Leadership Integration" image={{ src: facilitationIntimateSession, shape: 2, alt: "Francisco facilitating an intimate coaching circle with executives in a cozy, supportive environment" }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p className="font-semibold text-neutral-950 text-lg">
          "Mastery & Sustainability"
        </p>
        <p>
          Learn <strong className="font-semibold text-neutral-950">Advanced Situational Conducting</strong>—consciously choosing which part of you leads in different contexts. Bring forward the strategist for board presentations, the empathetic leader for difficult conversations, the decisive executive for crisis moments.
        </p>
        <p>
          Apply Inner Team Dynamics™ principles to your actual team dynamics, organizational challenges, and stakeholder relationships. Develop <strong className="font-semibold text-neutral-950">self-coaching mastery</strong> using the framework for future challenges.
        </p>
        <p>
          The result: authentic executive presence that others feel and follow, sustainable high performance without burnout, and the ability to navigate complexity with calm confidence.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        What you achieve
      </h3>
      <List className="mt-8">
        <ListItem title="Authentic Executive Presence">
          Your team follows you because they feel your genuine confidence and clarity, not because they have to.
        </ListItem>
        <ListItem title="Sustainable Performance">
          Lead with energy and enthusiasm instead of burnout and overwhelm.
        </ListItem>
        <ListItem title="Systematic Growth">
          A proven framework for continued leadership development and challenge navigation.
        </ListItem>
      </List>
    </Section>
  )
}

function WhatMakesDifferent() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="What makes this different"
        title="Executive-specific transformation that actually works"
      >
        <p>
          Most leadership development focuses on external skills. Inner Team Dynamics™ works with the internal operating system that drives those behaviors. It&apos;s the difference between managing symptoms and transforming root causes.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Executive-Specific">
            Developed specifically for senior leaders who need practical, results-oriented transformation. No life coaching fluff—this is leadership development for executives who think systemically.
          </GridListItem>
          <GridListItem title="AI-Enhanced">
            MIT-certified approach combining proven depth work with cutting-edge AI pattern recognition. Technology amplifies human wisdom rather than replacing it.
          </GridListItem>
          <GridListItem title="Somatic Integration">
            We work with your whole system—mind, emotions, and body. Real transformation happens when all levels are aligned, not just intellectual understanding.
          </GridListItem>
          <GridListItem title="Practical Application">
            Every insight gets tested in your real-world leadership contexts. This isn&apos;t therapy—it&apos;s high-performance leadership development.
          </GridListItem>
          <GridListItem title="Measurable Results">
            You'll see concrete changes in decision-making speed, team engagement, stakeholder relationships, and your own energy levels within the first few sessions.
          </GridListItem>
          <GridListItem title="Proven Framework">
            Inner Team Dynamics™ is a systematic, repeatable methodology that you can use independently after our work together. You become your own best coach.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Inner Team Dynamics™ Process | Executive Leadership Transformation',
  description:
    'Discover how Inner Team Dynamics™ transforms executives through systematic leadership archaeology. 3-phase process: Discovery & Assessment, Integration & Practice, Leadership Integration.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Inner Team Dynamics™" title="You've built your career on systems, strategy, and results. This work applies the same rigor to your inner landscape.">
        <p>
          Most leadership development focuses on external skills—communication, delegation, decision-making frameworks. But the executives who truly transform understand that lasting change happens from the inside out.
        </p>
        <p className="mt-6 font-medium">
          Inner Team Dynamics™ is systematic leadership archaeology: we uncover and integrate the parts of you that drive authentic presence, clear decision-making, and sustainable impact.
        </p>
      </PageIntro>

      <SectionIntro
        eyebrow="The Executive Paradox"
        title="You know how to lead teams, but struggle to lead your inner 'crew.'"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          One part of you pushes for perfection while another seeks approval. The strategist in you analyzes every angle while the action-taker wants to move fast. The confident leader you present publicly sometimes battles the inner critic who questions every decision.
        </p>
        <p className="mt-6 font-medium">
          Sound familiar? This isn&apos;t weakness—it&apos;s human complexity. We take a different approach.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-3xl">
            <h3 className="font-display text-2xl font-semibold text-neutral-950">
              Your Inner Orchestra
            </h3>
            <div className="mt-6 space-y-6 text-base text-neutral-600">
              <p>
                Think of your internal world like an orchestra. You have multiple instruments (parts of your personality), each with its own role, tempo, and way of seeing the world:
              </p>
              <ul className="space-y-2 ml-4">
                <li><strong>The Strategist</strong> - analytical, cautious, seeks all information</li>
                <li><strong>The Driver</strong> - action-oriented, impatient, results-focused</li>
                <li><strong>The Perfectionist</strong> - detail-oriented, never quite satisfied</li>
                <li><strong>The People-Pleaser</strong> - relationship-focused, avoids conflict</li>
                <li><strong>The Critic</strong> - protective, points out flaws, fears failure</li>
                <li><strong>The Leader</strong> - your centered self, wise, calm, authentic</li>
              </ul>
              <p className="font-medium text-neutral-950">
                The goal isn&apos;t to eliminate any instrument. It&apos;s to develop conscious conducting.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discovery />
        <Integration />
        <Leadership />
      </div>

      <WhatMakesDifferent />

      <ContactSection />
    </RootLayout>
  )
}
