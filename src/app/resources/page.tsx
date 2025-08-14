import { Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { ResourcesClient } from '@/components/ResourcesClient'
import { EnvDebug } from '@/components/EnvDebug'
import { EmailTestButton } from '@/components/EmailTestButton'

export const metadata: Metadata = {
  title: 'Resources - Executive Transition Advisory',
  description:
    'Executive diagnostic tools and confidential resources for qualified senior leaders navigating complex transitions.',
}


export default function Resources() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Risk Assessment Tools" title="Identify Your Exposure Level">
        <p className="text-base text-[#333333]">
          Quick diagnostics reveal risk patterns. Full architecture reserved for qualified executives.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ResourcesClient />
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs text-[#666666] space-y-1">
              <p>Note: These simplified tools identify symptoms, not solutions.</p>
              <p>The complete Executive Transition Architecture™ (200+ intervention protocols)</p>
              <p>is proprietary IP revealed during Strategic Assessment.</p>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-[#003C71] px-6 py-20 sm:px-10 sm:py-32 md:px-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Risk Scanner Shows Red Flags?
              </h2>
              <p className="mt-6 text-lg text-white/80">
                These tools reveal symptoms. The intervention architecture that prevents 
                €2.5M failures is reserved for Strategic Assessment participants.
              </p>
              <div className="mt-10">
                <Button href="/assessment" invert>
                  Request Strategic Assessment
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
      
      <EnvDebug />
      <EmailTestButton />
    </RootLayout>
  )
}