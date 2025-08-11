'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { DiagnosticModal } from '@/components/DiagnosticModal'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

const resources = [
  {
    title: 'Executive Integration Diagnostic',
    description: 'Pattern Recognition Framework',
    type: 'Diagnostic Framework',
    requirement: 'Investment: Your email',
    value: 'Value: Immediate pattern clarity',
    action: 'Download Framework',
    gated: true,
    href: '#modal',
    details:
      'The diagnostic framework identifying which of five failure patterns threatens your transition. Based on 200+ senior executive cases.',
  },
  {
    title: 'Mutual Confidentiality Agreement',
    description: 'Swiss-Standard Protection',
    type: 'Legal Document',
    requirement: 'Investment: None',
    value: 'Access: Immediate',
    action: 'Download NDA',
    gated: false,
    href: '/assets/Mutual-Confidentiality-Agreement-Executive-Assessment.docx',
    details:
      'Bilateral NDA ensuring complete discretion for strategic discussions. Required before assessment. Protects both parties equally.',
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
    details:
      'Three confidential cases: German Banking MD (€2.1B P&L), Swiss Pharma EVP (12-country operation), Technology CDO (500+ engineers). Systematic patterns, precise interventions, measurable outcomes.',
  },
]

function ResourceCard({
  resource,
  onDiagnosticClick,
}: {
  resource: (typeof resources)[0]
  onDiagnosticClick?: () => void
}) {
  return (
    <FadeIn>
      <article className="flex flex-col rounded-3xl p-8 ring-1 ring-[#003C71]/10 transition hover:bg-[#F5F5F5]">
        <div className="flex flex-1 flex-col">
          <h3 className="mb-2 text-xl font-semibold text-[#003C71]">
            {resource.title}
          </h3>
          <p className="mb-4 text-base font-medium text-[#333333]">
            {resource.description}
          </p>
          <p className="flex-1 text-sm leading-relaxed text-[#666666]">
            {resource.details}
          </p>
        </div>

        <div className="mt-8">
          <div className="mb-6">
            <span className="rounded bg-[#F5F5F5] px-3 py-1 text-xs font-medium text-[#003C71]">
              {resource.type}
            </span>
          </div>

          <div className="mb-6 space-y-2">
            <div className="text-sm font-medium text-[#333333]">
              {resource.requirement}
            </div>
            <div className="text-sm text-[#666666]">{resource.value}</div>
          </div>

          {resource.title === 'Executive Integration Diagnostic' ? (
            <Button
              onClick={onDiagnosticClick}
              variant="outline"
              className="w-full"
              aria-label={`${resource.action} - ${resource.title}`}
            >
              {resource.action}
            </Button>
          ) : (
            <Button
              href={resource.href}
              variant="outline"
              className="w-full"
              aria-label={`${resource.action} - ${resource.title}`}
            >
              {resource.action}
            </Button>
          )}
        </div>
      </article>
    </FadeIn>
  )
}

export function ResourcesClient() {
  const [isDiagnosticModalOpen, setIsDiagnosticModalOpen] = useState(false)

  return (
    <>
      <div className="space-y-16">
        {/* First two resources centered */}
        <FadeInStagger className="mx-auto grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-2">
          {resources.slice(0, 2).map((resource) => (
            <ResourceCard
              key={resource.title}
              resource={resource}
              onDiagnosticClick={() => setIsDiagnosticModalOpen(true)}
            />
          ))}
        </FadeInStagger>

        {/* Third resource centered */}
        <FadeInStagger className="mx-auto max-w-md">
          {resources.slice(2).map((resource) => (
            <ResourceCard key={resource.title} resource={resource} />
          ))}
        </FadeInStagger>
      </div>

      <DiagnosticModal
        isOpen={isDiagnosticModalOpen}
        onClose={() => setIsDiagnosticModalOpen(false)}
      />
    </>
  )
}
