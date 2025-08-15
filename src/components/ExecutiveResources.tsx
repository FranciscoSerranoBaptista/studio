'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

interface ResourceDownload {
  id: string
  title: string
  description: string
  type: 'pdf' | 'docx' | 'guide'
  icon: string
  downloadUrl?: string
}

const resources: ResourceDownload[] = [
  {
    id: 'risk-scanner',
    title: 'Executive Transition Risk Scanner™',
    description:
      'Quick diagnostic: Identify your exposure to the 5 fatal patterns. Takes 3 minutes. Reveals risk level without intervention architecture.',
    type: 'pdf',
    icon: '🎯',
    downloadUrl: '/assets/executive-transition-risk-scanner.pdf',
  },
  {
    id: 'mutual-nda',
    title: 'Mutual NDA Template',
    description:
      'Standard confidentiality agreement for strategic executive conversations. Swiss and US legal frameworks.',
    type: 'pdf',
    icon: '🔒',
    downloadUrl: '/assets/Mutual-Confidentiality-Agreement-Executive-Assessment.docx',
  },
  {
    id: 'employer-expense',
    title: 'Employer Investment Framework',
    description:
      'ROI analysis template: €2.5M failure cost vs. €45K intervention investment. Board-ready justification.',
    type: 'docx',
    icon: '💼',
    downloadUrl: '/assets/employer-investment-framework.docx',
  },
  {
    id: 'case-study-investment-bank',
    title: 'Case Study: German Investment Banking MD',
    description:
      'How systematic architecture prevented Week 7 isolation trap. Names redacted, patterns revealed.',
    type: 'pdf',
    icon: '📈',
    downloadUrl: '/assets/Executive Case Study - Global Professional Services.pdf',
  },
  {
    id: 'board-presentation',
    title: 'Board Presentation Template',
    description:
      'Executive transition risk framework for board discussions. Positions architecture as risk mitigation.',
    type: 'pdf',
    icon: '📊',
    downloadUrl: '/assets/board-presentation-template.pdf',
  },
]

export function ExecutiveResources() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null)
  const [downloadRequested, setDownloadRequested] = useState<string[]>([])

  const handleDownloadRequest = (resourceId: string) => {
    // In a real implementation, this would capture lead information
    // and provide the actual download link
    setDownloadRequested((prev) => [...prev, resourceId])

    // Simulate download or redirect to gated content
    // For now, we'll just show a success message
  }

  return (
    <FadeIn>
      <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-950/5">
        <div className="mb-8">
          <h3 className="mb-4 font-display text-2xl font-semibold text-brand-navy">
            Strategic Resources Library
          </h3>
          <p className="text-neutral-600">
            Curated tools for risk assessment. Full diagnostic architecture revealed during Strategic Assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-brand-blue"
            >
              <button
                type="button"
                className="cursor-pointer w-full text-left"
                onClick={() =>
                  setSelectedResource(
                    selectedResource === resource.id ? null : resource.id,
                  )
                }
                aria-expanded={selectedResource === resource.id}
                aria-controls={`resource-content-${resource.id}`}
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center">
                    <span className="mr-3 text-2xl">{resource.icon}</span>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-neutral-950">
                        {resource.title}
                      </h4>
                      <span className="inline-flex items-center rounded-full bg-neutral-100 px-2 py-1 text-xs font-medium tracking-wider text-neutral-600 uppercase">
                        {resource.type}
                      </span>
                    </div>
                  </div>
                  <div className="text-neutral-400 hover:text-brand-navy transition-transform duration-200" 
                       style={{ transform: selectedResource === resource.id ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-labelledby="expand-icon-title"
                    >
                      <title id="expand-icon-title">Expand/Collapse</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                <p className="mb-4 text-sm text-neutral-600">
                  {resource.description}
                </p>
              </button>

              {selectedResource === resource.id && (
                <div className="mt-4 border-t border-neutral-200 pt-4">
                  {downloadRequested.includes(resource.id) ? (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                      <div className="flex items-center">
                        <svg
                          className="mr-2 h-5 w-5 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-labelledby="checkmark-icon-title"
                        >
                          <title id="checkmark-icon-title">Success checkmark</title>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="font-medium text-green-800">
                          Download initiated
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-green-700">
                        Check your downloads folder or contact us if you
                        don&apos;t receive the file.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-neutral-500">
                        Access granted to executives preparing for Strategic Assessment.
                        Full methodology reserved for engagement participants.
                      </p>
                      <div className="flex space-x-3">
                        <Button
                          onClick={() => handleDownloadRequest(resource.id)}
                          className="px-4 py-2 text-sm"
                        >
                          Request Download
                        </Button>
                        <button type="button" className="text-sm text-brand-navy underline hover:text-brand-navy-800">
                          Preview Sample
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-brand-navy/5 p-6">
          <h4 className="mb-3 font-display text-lg font-semibold text-brand-navy">
            Proprietary Methodology Access
          </h4>
          <p className="mb-4 text-neutral-600">
            The complete Executive Transition Architecture™ including intervention protocols,
            stakeholder matrices, and pattern interruption sequences is revealed progressively during Strategic Assessment.
          </p>
          <div className="flex space-x-4">
            <Button href="/assessment" className="text-sm">
              Schedule Strategic Assessment
            </Button>
            <button type="button" className="text-sm text-brand-navy underline hover:text-brand-navy-800">
              Request Resource Access
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
