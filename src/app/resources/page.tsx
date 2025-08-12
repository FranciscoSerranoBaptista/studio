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
      <PageIntro eyebrow="Executive Resources" title="Diagnostic Tools and Strategic Resources">
        <p className="text-base text-[#333333]">
          For executives evaluating transition complexity before strategic assessment.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <ResourcesClient />
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs text-[#666666] space-y-1">
              <p>Note: Resources updated quarterly based on emerging patterns.</p>
              <p>No newsletter. No spam. No coaching.</p>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-[#003C71] px-6 py-20 sm:px-10 sm:py-32 md:px-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Ready for Strategic Assessment?
              </h2>
              <p className="mt-6 text-lg text-white/80">
                If you meet executive criteria (€50M+ P&L, 100+ team, board exposure), 
                bypass resources and request direct assessment.
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