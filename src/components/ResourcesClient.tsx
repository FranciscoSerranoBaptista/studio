'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { DiagnosticModal } from '@/components/DiagnosticModal'
import { ResourceDownloadModal } from '@/components/ResourceDownloadModal'
import { DocumentModal } from '@/components/DocumentModal'
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
    title: 'Global Professional Services Case Study',
    description: 'Managing Director Transformation',
    type: 'Executive Case Study',
    requirement: 'Investment: Your email',
    value: 'Value: Stakeholder alignment methodology',
    action: 'Download Case Study',
    gated: true,
    href: '/assets/Executive%20Case%20Study%20-%20Global%20Professional%20Services.pdf',
    details:
      'How a Managing Director navigated complex stakeholder dynamics while scaling operations across multiple markets. Documented transformation process and measurable outcomes.',
  },
  {
    title: 'Manufacturing Leadership Case Study',
    description: 'Operational Excellence Integration',
    type: 'Executive Case Study',
    requirement: 'Investment: Your email', 
    value: 'Value: Change management framework',
    action: 'Download Case Study',
    gated: true,
    href: '/assets/Executive%20Case%20Study%20-%20Manufacturing.pdf',
    details:
      'Executive leading major operational transformation while managing legacy systems and cultural resistance. Systematic approach to integration and team alignment.',
  },
  {
    title: 'Technology ScaleUp Case Study',
    description: 'Growth Leadership Architecture',
    type: 'Executive Case Study',
    requirement: 'Investment: Your email',
    value: 'Value: Scaling methodology insights',
    action: 'Download Case Study', 
    gated: true,
    href: '/assets/Executive%20Case%20Study%20-%20Technology%20ScaleUp.pdf',
    details:
      'CTO navigating hypergrowth challenges while building high-performance engineering culture. Evidence-based approach to leadership scalability and team dynamics.',
  },
]

function ResourceCard({
  resource,
  onDiagnosticClick,
  onResourceClick,
  onDocumentClick,
}: {
  resource: (typeof resources)[0]
  onDiagnosticClick?: () => void
  onResourceClick?: () => void
  onDocumentClick?: () => void
}) {
  return (
    <FadeIn>
      <article className="flex flex-col h-full rounded-3xl p-8 ring-1 ring-[#003C71]/10 transition hover:bg-[#F5F5F5]">
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
              className="w-full"
              aria-label={`${resource.action} - ${resource.title}`}
            >
              {resource.action}
            </Button>
          ) : resource.title === 'Mutual Confidentiality Agreement' ? (
            <Button
              onClick={onDocumentClick}
              className="w-full"
              aria-label={`${resource.action} - ${resource.title}`}
            >
              {resource.action}
            </Button>
          ) : resource.gated ? (
            <Button
              onClick={onResourceClick}
              className="w-full"
              aria-label={`${resource.action} - ${resource.title}`}
            >
              {resource.action}
            </Button>
          ) : (
            <Button
              href={resource.href}
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
  const [selectedResource, setSelectedResource] = useState<(typeof resources)[0] | null>(null)
  const [selectedDocument, setSelectedDocument] = useState<(typeof resources)[0] | null>(null)

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
              onResourceClick={() => setSelectedResource(resource)}
              onDocumentClick={() => setSelectedDocument(resource)}
            />
          ))}
        </FadeInStagger>

        {/* Three case studies in grid */}
        <FadeInStagger className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
          {resources.slice(2).map((resource) => (
            <ResourceCard 
              key={resource.title} 
              resource={resource}
              onResourceClick={() => setSelectedResource(resource)}
              onDocumentClick={() => setSelectedDocument(resource)}
            />
          ))}
        </FadeInStagger>
      </div>

      <DiagnosticModal
        isOpen={isDiagnosticModalOpen}
        onClose={() => setIsDiagnosticModalOpen(false)}
      />
      
      {selectedResource && (
        <ResourceDownloadModal
          isOpen={!!selectedResource}
          onClose={() => setSelectedResource(null)}
          resource={selectedResource}
        />
      )}
      
      {selectedDocument && (
        <DocumentModal
          isOpen={!!selectedDocument}
          onClose={() => setSelectedDocument(null)}
          resource={selectedDocument}
        />
      )}
    </>
  )
}
