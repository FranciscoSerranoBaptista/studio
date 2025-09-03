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

function TheProcess() {
  return (
    <Section title="How it works">
      <div className="space-y-8 text-lg text-[#333333] max-w-2xl mx-auto text-center">
        <p>We meet.</p>
        <p>We go deeper than you expected.</p>
        <p>You see patterns you couldn't see alone.</p>
        <p>We work with what emerges.</p>
      </div>
      
      <div className="mt-12 text-center">
        <a 
          href="/assessment"
          className="inline-block bg-[#003C71] text-white font-medium px-8 py-4 rounded-lg hover:bg-[#002A52] transition-colors"
        >
          Apply to work together
        </a>
      </div>
    </Section>
  )
}

function TheWork() {
  return (
    <Section title="What to expect">
      <div className="space-y-6 text-base text-[#333333] max-w-3xl mx-auto">
        <div className="space-y-4">
          <p>No frameworks to memorize.</p>
          <p>No homework you won't do.</p>
          <p>No pretending this is easy.</p>
          <p>Just real work with real results.</p>
        </div>
        
        <div className="bg-[#F5F5F5] rounded-lg p-6 mt-8">
          <p className="font-medium text-[#003C71] mb-2">Sessions by application only.</p>
          <p className="text-sm">This isn't for everyone. The work requires readiness and commitment to look at what you haven't wanted to see.</p>
        </div>
      </div>
    </Section>
  )
}






export const metadata: Metadata = {
  title: 'How This Works - Francisco Baptista',
  description:
    'Simple and clear: We meet. We go deeper than you expected. You see patterns you couldn\'t see alone. We work with what emerges.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro eyebrow="HOW WE WORK" title="Simple and clear">
        <p>
          No frameworks to memorize. No homework you won't do. No pretending this is easy.
        </p>
        <p>
          Just real work with real results.
        </p>
      </PageIntro>


      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <TheProcess />
        <TheWork />
      </div>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-[#003C71] px-6 py-20 sm:px-10 sm:py-32 md:px-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Ready for real work?
              </h2>
              <div className="mt-6 space-y-4 text-lg text-white/90">
                <p>First, ask yourself:</p>
                <div className="space-y-2 text-base">
                  <p>• Am I choosing this or is my company?</p>
                  <p>• Am I ready to see what I haven't wanted to see?</p>
                  <p>• Will I show up consistently even when uncomfortable?</p>
                </div>
                <p>If yes to all three:</p>
              </div>
              <div className="mt-10">
                <a 
                  href="/assessment"
                  className="inline-block bg-white text-[#003C71] font-medium px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Apply to work together
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}