'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

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
    id: 'mutual-nda',
    title: 'Mutual NDA Template',
    description: 'Standard confidentiality agreement for strategic executive conversations. Swiss and US legal frameworks.',
    type: 'pdf',
    icon: '🔒',
    downloadUrl: '/resources/mutual-nda-template.pdf'
  },
  {
    id: 'complexity-criteria',
    title: 'Executive Complexity Assessment',
    description: 'Complete diagnostic framework for evaluating transition complexity and qualification criteria.',
    type: 'pdf', 
    icon: '📊',
    downloadUrl: '/resources/executive-complexity-assessment.pdf'
  },
  {
    id: 'employer-expense',
    title: 'Employer Investment Framework',
    description: 'ROI analysis and expense justification template for executive development investments.',
    type: 'docx',
    icon: '💼',
    downloadUrl: '/resources/employer-investment-framework.docx'
  },
  {
    id: 'transition-survival-guide',
    title: 'Executive Transition Survival Guide',
    description: '7 failure patterns in the first 100 days, stakeholder alignment framework, and self-assessment tools.',
    type: 'guide',
    icon: '🎯',
    downloadUrl: '/resources/executive-transition-survival-guide.pdf'
  },
  {
    id: 'failure-patterns',
    title: 'The Five Patterns of Executive Failure',
    description: 'Research-based analysis of predictable failure modes in senior leadership transitions.',
    type: 'pdf',
    icon: '⚠️',
    downloadUrl: '/resources/five-patterns-executive-failure.pdf'
  },
  {
    id: 'stakeholder-mapping',
    title: 'Stakeholder Power Dynamics Framework',
    description: 'Systematic approach to mapping influence networks and political capital in complex organizations.',
    type: 'pdf',
    icon: '🗺️',
    downloadUrl: '/resources/stakeholder-power-dynamics-framework.pdf'
  }
]

export function ExecutiveResources() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null)
  const [downloadRequested, setDownloadRequested] = useState<string[]>([])

  const handleDownloadRequest = (resourceId: string) => {
    // In a real implementation, this would capture lead information
    // and provide the actual download link
    setDownloadRequested(prev => [...prev, resourceId])
    
    // Simulate download or redirect to gated content
    // For now, we'll just show a success message
  }

  return (
    <FadeIn>
      <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-neutral-950/5">
        <div className="mb-8">
          <h3 className="font-display text-2xl font-semibold text-brand-navy mb-4">
            Executive Resources & Downloads
          </h3>
          <p className="text-neutral-600">
            Professional frameworks and templates for senior executives navigating complex transitions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className="border border-neutral-200 rounded-2xl p-6 hover:border-brand-blue transition-colors cursor-pointer"
              onClick={() => setSelectedResource(selectedResource === resource.id ? null : resource.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{resource.icon}</span>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-neutral-950">
                      {resource.title}
                    </h4>
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 uppercase tracking-wider">
                      {resource.type}
                    </span>
                  </div>
                </div>
                <button className="text-neutral-400 hover:text-brand-navy">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              <p className="text-neutral-600 text-sm mb-4">
                {resource.description}
              </p>

              {selectedResource === resource.id && (
                <div className="border-t border-neutral-200 pt-4 mt-4">
                  {downloadRequested.includes(resource.id) ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-green-800 font-medium">Download initiated</span>
                      </div>
                      <p className="text-green-700 text-sm mt-1">
                        Check your downloads folder or contact us if you don't receive the file.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-neutral-500">
                        This resource is available to qualified executives and strategic assessment participants.
                      </p>
                      <div className="flex space-x-3">
                        <Button
                          onClick={() => handleDownloadRequest(resource.id)}
                          className="text-sm px-4 py-2"
                        >
                          Request Download
                        </Button>
                        <button className="text-sm text-brand-navy hover:text-brand-navy-800 underline">
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

        <div className="mt-8 p-6 bg-brand-navy/5 rounded-2xl">
          <h4 className="font-display text-lg font-semibold text-brand-navy mb-3">
            Access Additional Resources
          </h4>
          <p className="text-neutral-600 mb-4">
            Full resource library access is provided to executives participating in Strategic Assessments or ongoing engagements.
          </p>
          <div className="flex space-x-4">
            <Button href="/contact" className="text-sm">
              Schedule Strategic Assessment
            </Button>
            <button className="text-sm text-brand-navy hover:text-brand-navy-800 underline">
              Request Resource Access
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}