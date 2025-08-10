import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
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
    <>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl font-medium text-neutral-950 sm:text-5xl">
              Strategic Assessment
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Qualification confirmation for executive transition architecture.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-12 sm:mt-16 lg:mt-20">
        <FadeIn>
          <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
            <div className="lg:order-last">
              <h2 className="font-display text-base font-semibold text-neutral-950">
                Assessment Criteria
              </h2>
              <p className="mt-4 text-sm text-neutral-600">
                This assessment is for executives with:
              </p>
              
              <ul className="mt-6 space-y-4">
                {qualificationCriteria.map((criterion) => (
                  <li key={criterion} className="flex items-start">
                    <div className="mt-1 h-2 w-2 rounded-full bg-neutral-950 flex-shrink-0" />
                    <span className="ml-3 text-sm text-neutral-600">
                      {criterion}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-neutral-50 p-6">
                <h3 className="text-sm font-semibold text-neutral-950">
                  Not sure if you qualify?
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  Consider the 2-minute Executive Integration Diagnostic first. 
                  Available in our resources section.
                </p>
                <a 
                  href="/resources" 
                  className="mt-3 inline-flex text-sm font-medium text-neutral-950 hover:text-neutral-700"
                >
                  Access Diagnostic →
                </a>
              </div>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-neutral-950">
                  Next Steps
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
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
    </>
  )
}