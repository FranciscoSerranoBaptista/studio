'use client'

import { UnifiedResourceModal, type ResourceData, type ModalConfig } from '@/components/UnifiedResourceModal'

interface DocumentModalProps {
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

export function DocumentModal({ isOpen, onClose, resource }: DocumentModalProps) {
  // Convert the resource to the unified format for free documents
  const unifiedResource: ResourceData = {
    title: resource.title,
    description: resource.description,
    href: resource.href,
    details: resource.details,
    type: resource.type,
    requiresEmail: false, // Documents like NDA don't require email
    customButtonText: 'Download Document'
  }

  // Configure for document behavior (compact, no email required)
  const documentConfig: ModalConfig = {
    autoCloseDelay: 1000, // Quick auto-close
    customStyling: 'default',
    showResourceType: true,
    compactMode: true,
    allowSkipEmail: true
  }

  const handleDownloadStart = (resource: ResourceData) => {
    console.log('Document download starting:', resource.title)
  }

  const handleDownloadComplete = (resource: ResourceData, emailSent: boolean) => {
    console.log('Document download completed:', { 
      resource: resource.title, 
      noEmailRequired: !emailSent 
    })
  }

  return (
    <UnifiedResourceModal
      isOpen={isOpen}
      onClose={onClose}
      resource={unifiedResource}
      config={documentConfig}
      onDownloadStart={handleDownloadStart}
      onDownloadComplete={handleDownloadComplete}
    />
  )
}