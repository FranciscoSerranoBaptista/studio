'use client'

import { UnifiedResourceModal, type ResourceData, type ModalConfig, type EmailConfig } from '@/components/UnifiedResourceModal'

interface DiagnosticModalProps {
  isOpen: boolean
  onClose: () => void
}

// Define the diagnostic resource
const diagnosticResource: ResourceData = {
  title: 'Executive Integration Diagnostic',
  description: 'Pattern Recognition Framework',
  details: 'Immediate access to pattern recognition framework. Your email ensures delivery and updates.',
  href: '/assets/The%20Executive%20Transition%20Failure%20TaxonomyTM.pdf',
  filename: 'Executive-Integration-Diagnostic.pdf',
  type: 'Diagnostic Framework',
  requiresEmail: true,
  customSuccessMessage: 'Download Starting',
  customButtonText: 'Download Framework'
}

// Configure for diagnostic-specific behavior
const diagnosticConfig: ModalConfig = {
  autoCloseDelay: 2000,
  customStyling: 'diagnostic',
  showResourceType: false,
  compactMode: false,
  allowSkipEmail: false
}

// Email template for diagnostic
const diagnosticEmailConfig: EmailConfig = {
  templateType: 'diagnostic',
  priority: 'high',
  customMessage: undefined // Use default diagnostic message
}

export function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  const handleDownloadStart = (resource: ResourceData) => {
    console.log('Diagnostic download starting:', resource.title)
  }

  const handleDownloadComplete = (resource: ResourceData, emailSent: boolean) => {
    console.log('Diagnostic download completed:', { 
      resource: resource.title, 
      emailNotificationSent: emailSent 
    })
  }

  const handleEmailSuccess = (resource: ResourceData, emailData: Record<string, unknown>) => {
    console.log('Diagnostic email notification sent successfully:', emailData.executiveEmail)
  }

  const handleEmailFailure = (resource: ResourceData, error: Error | unknown) => {
    console.warn('Diagnostic email notification failed:', error instanceof Error ? error.message : String(error))
  }

  return (
    <UnifiedResourceModal
      isOpen={isOpen}
      onClose={onClose}
      resource={diagnosticResource}
      config={diagnosticConfig}
      emailConfig={diagnosticEmailConfig}
      onDownloadStart={handleDownloadStart}
      onDownloadComplete={handleDownloadComplete}
      onEmailSuccess={handleEmailSuccess}
      onEmailFailure={handleEmailFailure}
    />
  )
}