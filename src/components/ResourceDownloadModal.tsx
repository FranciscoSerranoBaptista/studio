'use client'

import { UnifiedResourceModal, type ResourceData, type ModalConfig, type EmailConfig } from '@/components/UnifiedResourceModal'

interface ResourceDownloadModalProps {
  isOpen: boolean
  onClose: () => void
  resource: {
    title: string
    description: string
    href: string
    details: string
    type?: string
  }
}

export function ResourceDownloadModal({ isOpen, onClose, resource }: ResourceDownloadModalProps) {
  // Convert the resource to the unified format
  const unifiedResource: ResourceData = {
    title: resource.title,
    description: resource.description,
    href: resource.href,
    details: resource.details,
    type: resource.type,
    requiresEmail: true, // All case studies require email
    customButtonText: 'Download Case Study'
  }

  // Configure for case study behavior
  const caseStudyConfig: ModalConfig = {
    autoCloseDelay: 0, // Don't auto-close
    customStyling: 'default',
    showResourceType: true,
    compactMode: false,
    allowSkipEmail: false
  }

  // Email template for case studies
  const caseStudyEmailConfig: EmailConfig = {
    templateType: 'case_study',
    priority: 'normal'
  }

  const handleDownloadStart = (resource: ResourceData) => {
    console.log('Case study download starting:', resource.title)
  }

  const handleDownloadComplete = (resource: ResourceData, emailSent: boolean) => {
    console.log('Case study download completed:', { 
      resource: resource.title, 
      emailNotificationSent: emailSent 
    })
  }

  const handleEmailSuccess = (resource: ResourceData, emailData: Record<string, unknown>) => {
    console.log('Case study email notification sent successfully:', emailData.executiveEmail)
  }

  const handleEmailFailure = (resource: ResourceData, error: Error | unknown) => {
    console.warn('Case study email notification failed:', error instanceof Error ? error.message : String(error))
  }

  return (
    <UnifiedResourceModal
      isOpen={isOpen}
      onClose={onClose}
      resource={unifiedResource}
      config={caseStudyConfig}
      emailConfig={caseStudyEmailConfig}
      onDownloadStart={handleDownloadStart}
      onDownloadComplete={handleDownloadComplete}
      onEmailSuccess={handleEmailSuccess}
      onEmailFailure={handleEmailFailure}
    />
  )
}