import { Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Resources - Executive Transition Architecture',
  description:
    'Executive diagnostic tools and confidential resources for qualified senior leaders navigating complex transitions.',
}

const resources = [
  {
    title: 'Executive Integration Diagnostic',
    description: 'Identify your failure patterns',
    type: 'PDF Framework',
    requirement: 'Email required',
    action: 'Download Diagnostic',
    gated: true,
    href: '#diagnostic',
    details: '15-minute assessment revealing the three patterns that derail 40% of executive transitions. Used by 200+ senior leaders across 15 countries.',
  },
  {
    title: 'Mutual Confidentiality Agreement', 
    description: 'For strategic conversations',
    type: 'Legal Document',
    requirement: 'Direct download',
    action: 'Download NDA',
    gated: false,
    href: '/assets/Mutual-NDA.pdf',
    details: 'Swiss-standard mutual confidentiality agreement for executive transition discussions. Required for all strategic assessments.',
  },
  {
    title: 'Integration Architecture Case Studies',
    description: 'Anonymous transformation deep dives',
    type: 'Strategic Analysis',
    requirement: 'Email required',
    action: 'Access Case Studies',
    gated: true,
    href: '#cases',
    details: 'Three documented transitions: German Investment Banking MD, Swiss Pharmaceutical EVP, Technology CDO. 100+ hours of systematic intervention.',
  },
]

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  return (
    <FadeIn>
      <article className="flex flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50">
        <div className="flex flex-col flex-1">
          <h3 className="mt-6 text-base font-semibold text-neutral-950">
            {resource.title}
          </h3>
          <p className="mt-2 text-sm text-neutral-600 flex-1">
            {resource.description}
          </p>
          <p className="mt-4 text-xs text-neutral-500">
            {resource.details}
          </p>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-neutral-950 bg-neutral-100 px-2 py-1 rounded">
              {resource.type}
            </span>
            <span className={`text-xs ${resource.gated ? 'text-amber-600' : 'text-green-600'}`}>
              {resource.requirement}
            </span>
          </div>
          
          <Button 
            href={resource.href} 
            variant="outline" 
            className="w-full"
            aria-label={`${resource.action} - ${resource.title}`}
          >
            {resource.action}
          </Button>
        </div>
      </article>
    </FadeIn>
  )
}

export default function Resources() {
  return (
    <>
      <PageIntro eyebrow="Executive Resources" title="Diagnostic Tools and Strategic Resources">
        <div className="space-y-6 text-base text-neutral-600">
          <p>
            For executives not ready for strategic assessment: diagnostic frameworks, 
            confidentiality agreements, and documented transformation case studies.
          </p>
          <p className="text-sm font-medium text-neutral-950">
            Quality over quantity. Three resources maximum.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {resources.map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </FadeInStagger>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-neutral-950 px-6 py-20 sm:px-10 sm:py-32 md:px-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Ready for Strategic Assessment?
              </h2>
              <p className="mt-6 text-lg text-neutral-300">
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
    </>
  )
}