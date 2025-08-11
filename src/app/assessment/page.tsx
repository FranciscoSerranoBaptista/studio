import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { StrategicAssessmentForm } from '@/components/StrategicAssessmentForm'

export const metadata: Metadata = {
  title: 'Strategic Assessment - Executive Transition Architecture',
  description: 'Qualification and strategic assessment request for senior executives navigating high-stakes transitions.',
}

const qualificationCriteria = [
  '€50M+ P&L responsibility',
  '100+ person organizations', 
  'Board/ExCo reporting relationships',
  'First 18 months or significant expansion'
]

export default function Assessment() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-medium text-[#003C71] sm:text-5xl">
              Strategic Assessment
            </h1>
            <p className="mt-6 text-xl text-[#333333]">
              Qualification confirmation for executive transition architecture.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <div className="lg:order-last">
              <h2 className="font-display text-lg font-semibold text-[#003C71]">
                Assessment Criteria
              </h2>
              <p className="mt-4 text-base text-[#333333]">
                This assessment is for executives with:
              </p>
              
              <ul className="mt-6 space-y-4">
                {qualificationCriteria.map((criterion) => (
                  <li key={criterion} className="flex items-start">
                    <div className="mt-1 h-2 w-2 rounded-full bg-[#003C71] flex-shrink-0" />
                    <span className="ml-3 text-base text-[#333333]">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-[#F5F5F5] p-6">
                <h3 className="text-base font-semibold text-[#003C71]">
                  Not sure if you qualify?
                </h3>
                <p className="mt-2 text-base text-[#333333]">
                  Consider the Executive Integration Diagnostic first. 
                  Available in our resources section.
                </p>
                <a 
                  href="/resources" 
                  className="mt-3 inline-flex text-base font-medium text-[#003C71] hover:text-[#002A52]"
                >
                  Access Diagnostic →
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-base font-semibold text-[#003C71]">
                  Next Steps
                </h3>
                <p className="mt-2 text-base text-[#333333]">
                  Qualified executives receive response within 48 hours. 
                  Assessment scheduling for qualified candidates only.
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