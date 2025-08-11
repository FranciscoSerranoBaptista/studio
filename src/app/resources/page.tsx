import { Metadata } from 'next'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'

export const metadata: Metadata = {
  title: 'Resources - Executive Transition Architecture',
  description:
    'Executive diagnostic tools and confidential resources for qualified senior leaders navigating complex transitions.',
}

const resources = [
  {
    title: 'Executive Integration Diagnostic',
    description: 'Pattern Recognition Framework',
    type: 'Diagnostic Framework',
    requirement: 'Investment: Your email',
    value: 'Value: Immediate pattern clarity',
    action: 'Download Framework',
    gated: true,
    href: '#diagnostic',
    details: 'The diagnostic framework identifying which of five failure patterns threatens your transition. Based on 200+ senior executive cases.',
  },
  {
    title: 'Mutual Confidentiality Agreement', 
    description: 'Swiss-Standard Protection',
    type: 'Legal Document',
    requirement: 'Investment: None',
    value: 'Access: Immediate',
    action: 'Download NDA',
    gated: false,
    href: '/assets/Mutual-NDA.pdf',
    details: 'Bilateral NDA ensuring complete discretion for strategic discussions. Required before assessment. Protects both parties equally.',
  },
  {
    title: 'Executive Transition Case Studies',
    description: 'Real Transformation Evidence',
    type: 'Case Documentation',
    requirement: 'Investment: Your email',
    value: 'Value: See systematic methodology',
    action: 'Access Case Studies',
    gated: true,
    href: '#cases',
    details: 'Three confidential cases: German Banking MD (€2.1B P&L), Swiss Pharma EVP (12-country operation), Technology CDO (500+ engineers). Systematic patterns, precise interventions, measurable outcomes.',
  },
]

function ResourceCard({ resource }: { resource: typeof resources[0] }) {
  return (
    <FadeIn>
      <article className="flex flex-col rounded-3xl p-8 ring-1 ring-[#003C71]/10 transition hover:bg-[#F5F5F5]">
        <div className="flex flex-col flex-1">
          <h3 className="text-xl font-semibold text-[#003C71] mb-2">
            {resource.title}
          </h3>
          <p className="text-base font-medium text-[#333333] mb-4">
            {resource.description}
          </p>
          <p className="text-sm text-[#666666] flex-1 leading-relaxed">
            {resource.details}
          </p>
        </div>
        
        <div className="mt-8">
          <div className="mb-6">
            <span className="text-xs font-medium text-[#003C71] bg-[#F5F5F5] px-3 py-1 rounded">
              {resource.type}
            </span>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="text-sm font-medium text-[#333333]">
              {resource.requirement}
            </div>
            <div className="text-sm text-[#666666]">
              {resource.value}
            </div>
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
    <RootLayout>
      <PageIntro eyebrow="Executive Resources" title="Diagnostic Tools and Strategic Resources">
        <p className="text-base text-[#333333]">
          For executives evaluating transition complexity before strategic assessment.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="space-y-16">
          {/* First two resources centered */}
          <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
            {resources.slice(0, 2).map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </FadeInStagger>
          
          {/* Third resource centered */}
          <FadeInStagger className="max-w-md mx-auto">
            {resources.slice(2).map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </FadeInStagger>
        </div>
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
    </RootLayout>
  )
}