import type { Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { RootLayout } from '@/components/RootLayout'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { AbstractFaces } from '@/components/illustrations/AbstractFaces'
import { SelfAndParts } from '@/components/illustrations/SelfAndParts'
import { Dialogue } from '@/components/illustrations/Dialogue'
import { Council } from '@/components/illustrations/Council'
import { AbstractDark } from '@/components/illustrations/AbstractDark'
import { ThinkingFastSlow } from '@/components/illustrations/ThinkingFastSlow'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import facilitationEngagement from '@/images/facilitation/B62F6935-F94C-4F20-A34E-A3BDEA8541E6_1_105_c.jpeg'
import facilitationNetworking from '@/images/facilitation/E47A1627-9EBD-4D9F-BCC2-C8C34706D0EE_1_105_c.jpeg'
import { loadCaseStudies } from '@/lib/mdx'

function Clients() {
  const sectors = [
    'Banking & Financial Services',
    'Pharmaceutical & Healthcare',
    'Technology & Software',
    'Government & Public Sector',
    'Manufacturing & Industrial',
    'Consulting & Professional Services',
  ]

  return (
    <div className="mt-24 rounded-4xl bg-brand-navy py-20 sm:mt-32 sm:py-32 lg:mt-56 relative overflow-hidden">
      {/* Background abstract pattern */}
      <div className="absolute inset-0 -z-10">
        <AbstractDark 
          className="absolute -top-64 -right-64 w-[200rem] opacity-[0.08] pointer-events-none" 
          orangeColor="rgb(254,80,0)"
          blueColor="rgb(0,114,206)"
          whiteColor="rgba(255,255,255,0.15)"
        />
      </div>
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trusted by 200+ executives across 15+ countries
          </h2>
          <div className="h-px flex-auto bg-brand-blue/30" />
        </FadeIn>
        <FadeInStagger faster>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-3">
            {sectors.map((sector) => (
              <li key={sector}>
                <FadeIn>
                  <div className="py-4 text-center text-sm font-medium text-white">
                    {sector}
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CredibilitySection() {
  const credentials = [
    {
      title: '200+ Executives Coached',
      description:
        'Across banking, pharma, tech, and government sectors worldwide',
    },
    {
      title: 'Corporate Experience',
      description: "At Nestlé, SAP, KPMG—I've sat in similar seats",
    },
    {
      title: 'MIT-Certified',
      description: 'In AI for business applications and leadership development',
    },
    {
      title: 'Multilingual Capabilities',
      description: 'Sessions conducted in English, German, and French',
    },
    {
      title: 'Swiss-Based',
      description: 'With global reach and deep cultural understanding',
    },
    {
      title: 'Inner Team Dynamics™',
      description:
        'Creator of this proprietary leadership transformation method',
    },
  ]

  return (
    <>
      <SectionIntro
        eyebrow="Why This Works"
        title="Proven experience with executives who face what you face"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          My approach isn't theoretical. It&apos;s built from years of corporate
          experience, advanced certifications, and real transformation with
          leaders just like you.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {credentials.map((credential) => (
            <FadeIn key={credential.title} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-brand-blue/10 transition hover:bg-brand-blue-50/50 sm:p-8">
                <h3 className="font-display text-xl font-semibold text-brand-navy">
                  {credential.title}
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {credential.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="The Challenge"
        title="You already know this intuitively:"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          The complexity you're facing daily demands something deeper than
          traditional approaches. Quick fixes and surface-level strategies leave
          you feeling more reactive, not less.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={facilitationEngagement}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
                alt="Francisco Baptista facilitating an energetic group coaching session with executives raising their hands in engagement"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Decision-Making Under Pressure">
              You respond from centeredness, not reactivity, even in the most
              challenging moments.
            </ListItem>
            <ListItem title="Authentic Executive Presence">
              Your team follows you because they feel your genuine confidence
              and clarity, not because they have to.
            </ListItem>
            <ListItem title="Systemic Impact">
              You don't just manage change—you architect transformation that
              aligns with your deepest values.
            </ListItem>
            <ListItem title="Sustainable Performance">
              You lead with energy and enthusiasm instead of burnout and
              overwhelm.
            </ListItem>
          </List>
        </div>
      </Container>

      <SectionIntro
        eyebrow="The Method"
        title="Inner Team Dynamics™ + AI-Enhanced Insights"
        className="mt-24 sm:mt-32"
      >
        <p>
          My approach combines proven depth work with cutting-edge AI insights
          from my MIT certification in "Making AI Work: Machine Intelligence for
          Business and Society."
        </p>
        <p className="mt-4">
          We leverage AI not to replace your human intelligence, but to
          illuminate patterns you've never noticed, unlock potential you didn't
          know existed, and accelerate your path to self-mastery with
          unprecedented clarity.
        </p>
        <p className="mt-4 font-medium">
          This isn't about fixing what&apos;s broken. It&apos;s about awakening what&apos;s
          already there.
        </p>
      </SectionIntro>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Executive Coach Francisco Baptista helps 200+ leaders across 15+ countries awaken authentic leadership through Inner Team Dynamics™. MIT-certified AI-enhanced coaching for C-Suite transformation.',
  title: 'Francisco Baptista - Senior Executive Coach | Inner Team Dynamics™',
}

export default async function Home() {
  const caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <RootLayout>
      {/* Hero Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <AbstractFaces 
          className="absolute -top-32 -right-96 w-[120rem] opacity-[0.03] pointer-events-none" 
          orangeColor="rgb(254,80,0)"
          blueColor="rgb(0,114,206)" 
          navyColor="rgb(0,60,113)"
        />
      </div>
      
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-brand-navy sm:text-7xl">
            The leaders you trust are questioning everything they know about
            leadership.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            You're navigating complexity that makes the old playbooks
            irrelevant. The surface-level strategies aren't cutting it anymore.
            You need leadership that comes from authentic strength, unshakeable
            presence, and inner clarity.
          </p>
          <p className="mt-6 text-xl font-medium text-brand-navy">
            I'm Francisco Baptista. For 200+ executives across 15+
            countries—from C-Suite appointments under intense scrutiny to
            seasoned leaders wrestling with systemic transformation—I help you
            awaken the leader within.
          </p>
        </FadeIn>

        <FadeIn className="mt-16 max-w-3xl">
          <h2 className="font-display text-3xl font-medium tracking-tight text-brand-navy sm:text-4xl">
            Your greatest leadership asset isn't out there. It&apos;s in there.
          </h2>
          <p className="mt-6 text-lg text-neutral-600">
            You have an inner "Leader"—your core of wisdom, calm, and courage.
            But like any executive team, your inner world also has a "Crew": the
            perfectionist, the people-pleaser, the critic, the driver.
          </p>
          <p className="mt-4 text-lg text-neutral-600">
            When these parts work in harmony under conscious leadership, you
            become unstoppable. When they're in conflict, you feel scattered,
            reactive, and inauthentic.
          </p>
          <p className="mt-4 text-lg font-medium text-brand-navy">
            This is <strong className="text-brand-orange">Inner Team Dynamics™</strong>—and it changes
            everything.
          </p>
        </FadeIn>
      </Container>

      <Clients />


      <CredibilitySection />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: 'Benedikt Glatzl, Former Product Leader, Google & JTI',
          logo: logoPhobiaDark,
        }}
      >
        Francisco bridges the gap between vision and execution through deeper
        work on leadership and team dynamics. The transformation is both
        immediate and lasting.
      </Testimonial>

      <SectionIntro
        eyebrow="Francisco in Action"
        title="Transforming leaders across diverse contexts"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From intimate coaching circles to large-scale organizational workshops, Francisco creates the conditions for authentic transformation and breakthrough insights.
        </p>
      </SectionIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="aspect-square overflow-hidden rounded-3xl bg-neutral-100">
              <img
                src={facilitationEngagement}
                alt="Francisco Baptista facilitating an energetic group coaching session with executives raising their hands in engagement"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="font-display text-lg font-semibold text-neutral-950">
                Executive Team Engagement
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Creating breakthrough moments where teams move from resistance to genuine alignment and enthusiasm.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="aspect-square overflow-hidden rounded-3xl bg-neutral-100">
              <img
                src={facilitationNetworking}
                alt="Francisco engaging with participants in a modern professional development venue"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h3 className="font-display text-lg font-semibold text-neutral-950">
                Professional Development
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                Facilitating environments where executives connect authentically and learn from each other's challenges.
              </p>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Services />


      <ContactSection />
    </RootLayout>
  )
}
