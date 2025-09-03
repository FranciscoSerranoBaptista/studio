import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { StrategicAssessmentForm } from '@/components/StrategicAssessmentForm'

export const metadata: Metadata = {
  title: 'Apply to Work Together - Francisco Baptista',
  description: 'Application for senior leaders ready for inner work. If you choose depth over comfort, let\'s talk.',
}

const readinessCriteria = [
  'Are successful but sense something\'s off',
  'Ready to examine what\'s really running the show',
  'Willing to be uncomfortable for the sake of growth',
  'Done with quick fixes and tactical patches',
  'Choose depth over comfort'
]

const notReadyCriteria = [
  'Want validation that they\'re fine as-is',
  'Need strategies without self-examination',
  'Believe the problem is everyone else',
  'Think vulnerability is weakness',
  'Are here because their company sent them'
]

export default function Assessment() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-medium text-[#003C71] sm:text-5xl">
              Apply to work together
            </h1>
            <p className="mt-6 text-xl text-[#333333]">
              Ready for real work? First, ask yourself the questions below.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <div className="lg:order-last">
              <div className="mb-8">
                <h2 className="font-display text-lg font-semibold text-[#003C71]">
                  This work is for senior leaders who:
                </h2>
                <ul className="mt-6 space-y-4">
                  {readinessCriteria.map((criterion) => (
                    <li key={criterion} className="flex items-start">
                      <div className="mt-1 h-2 w-2 rounded-full bg-[#003C71] flex-shrink-0" />
                      <span className="ml-3 text-base text-[#333333]">
                        {criterion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="font-display text-lg font-semibold text-[#003C71]">
                  This work is NOT for those who:
                </h2>
                <ul className="mt-6 space-y-4">
                  {notReadyCriteria.map((criterion) => (
                    <li key={criterion} className="flex items-start">
                      <div className="mt-1 h-2 w-2 text-[#666666] flex-shrink-0">×</div>
                      <span className="ml-3 text-base text-[#666666]">
                        {criterion}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-2xl bg-[#F5F5F5] p-6">
                <h3 className="text-base font-semibold text-[#003C71]">
                  Three questions to ask yourself:
                </h3>
                <div className="mt-4 space-y-3 text-base text-[#333333]">
                  <p>• Am I choosing this or is my company?</p>
                  <p>• Am I ready to see what I haven't wanted to see?</p>
                  <p>• Will I show up consistently even when uncomfortable?</p>
                </div>
                <p className="mt-4 text-sm text-[#666666]">
                  If yes to all three, continue with the application.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-base font-semibold text-[#003C71]">
                  What happens next
                </h3>
                <div className="mt-2 space-y-2 text-base text-[#333333]">
                  <p>We meet.</p>
                  <p>We go deeper than you expected.</p>
                  <p>You see patterns you couldn't see alone.</p>
                  <p>We work with what emerges.</p>
                </div>
                <p className="mt-4 text-sm text-[#666666]">
                  Sessions by application only.
                </p>
              </div>
            </div>

            <div>
              <StrategicAssessmentForm />
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}