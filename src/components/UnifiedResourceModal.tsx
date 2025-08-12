'use client'

import { useState, useCallback, useEffect } from 'react'
import { Button } from '@/components/Button'
import { env } from '@/env'

// Comprehensive resource type definition
export interface ResourceData {
  title: string
  description: string
  href: string
  details: string
  type?: string
  filename?: string // Optional custom filename
  requiresEmail?: boolean // Some resources might be free without email
  customSuccessMessage?: string
  customButtonText?: string
}

// Modal configuration options
export interface ModalConfig {
  autoCloseDelay?: number // Auto close after success (0 = no auto close)
  allowSkipEmail?: boolean // Allow download without email for free resources
  customStyling?: 'default' | 'diagnostic' | 'premium'
  showResourceType?: boolean
  compactMode?: boolean
}

// Email template customization
export interface EmailConfig {
  templateType?: 'diagnostic' | 'case_study' | 'document' | 'generic'
  customSubjectPrefix?: string
  customMessage?: string
  priority?: 'normal' | 'high'
}

interface UnifiedResourceModalProps {
  isOpen: boolean
  onClose: () => void
  resource: ResourceData
  config?: ModalConfig
  emailConfig?: EmailConfig
  onDownloadStart?: (resource: ResourceData) => void
  onDownloadComplete?: (resource: ResourceData, emailSent: boolean) => void
  onEmailSuccess?: (resource: ResourceData, emailData: Record<string, unknown>) => void
  onEmailFailure?: (resource: ResourceData, error: Error | unknown) => void
}

// Note: Default configurations are handled in the individual wrapper components

export function UnifiedResourceModal({
  isOpen,
  onClose,
  resource,
  config = {},
  emailConfig = {},
  onDownloadStart,
  onDownloadComplete,
  onEmailSuccess,
  onEmailFailure
}: UnifiedResourceModalProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Merge config with defaults based on resource type
  const effectiveConfig = {
    autoCloseDelay: 0,
    allowSkipEmail: !resource.requiresEmail,
    customStyling: 'default' as const,
    showResourceType: true,
    compactMode: false,
    ...config
  }

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setFirstName('')
      setEmail('')
      setIsSubmitted(false)
      setEmailSent(false)
      setError(null)
      setIsSubmitting(false)
    }
  }, [isOpen])

  // Generate proper filename from resource
  const generateFilename = useCallback((resource: ResourceData): string => {
    if (resource.filename) return resource.filename
    
    // Extract from href if available
    if (resource.href) {
      const urlFilename = resource.href.split('/').pop()
      if (urlFilename && urlFilename !== '#modal') {
        return decodeURIComponent(urlFilename.replace(/%20/g, ' '))
      }
    }
    
    // Generate from title
    const cleanTitle = resource.title
      .replace(/[^a-zA-Z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
    
    // Determine extension based on resource type or default to PDF
    const extension = resource.type?.toLowerCase().includes('document') ? '.docx' : '.pdf'
    return `${cleanTitle}${extension}`
  }, [])

  // Email template generation
  const generateEmailData = useCallback((firstName: string, email: string) => {
    const { templateType = 'generic', customSubjectPrefix, customMessage, priority = 'normal' } = emailConfig
    
    const subjectMap = {
      diagnostic: 'New Diagnostic Framework Request',
      case_study: 'New Case Study Download',
      document: 'New Document Download',
      generic: 'New Resource Request'
    }
    
    const subject = customSubjectPrefix 
      ? `${customSubjectPrefix}: ${resource.title}`
      : `${subjectMap[templateType]}: ${resource.title}`

    const followUpMap = {
      diagnostic: 'Strategic assessment consultation recommended within 24-48 hours.',
      case_study: 'Executive may benefit from similar transformation guidance.',
      document: 'Standard follow-up protocols apply.',
      generic: 'Personal follow-up recommended within 48 hours.'
    }

    const baseMessage = customMessage || 
      `${firstName.trim()} has downloaded ${resource.title} and may be interested in strategic assessment. ${followUpMap[templateType]}`

    return {
      // EmailJS template variables (matching your existing template structure)
      to_email: env.NEXT_PUBLIC_NOTIFICATION_EMAIL,
      from_name: 'Executive Transition Advisory',
      subject,
      
      // Map our data to template variables
      executive_name: firstName.trim(),
      executive_email: email,
      executive_title: 'Not Provided', 
      executive_organization: 'Not Provided',
      executive_phone: 'Not Provided',
      
      // Resource-specific data
      transition_context: `Resource Download: ${resource.title}`,
      urgency_timeline: 'Immediate (Resource Download)',
      stakes_question: 'Resource download indicates potential interest in strategic assessment',
      valuable_assessment: baseMessage,
      
      // Complexity indicators (defaults for resource downloads)
      pl_responsibility: 'To be determined',
      team_size_direct: 'To be determined', 
      team_size_total: 'To be determined',
      geographic_scope: 'To be determined',
      matrix_complexity: 'To be determined',
      
      booking_reminder: 'Follow up within 48 hours for strategic assessment discussion',
      timestamp: new Date().toLocaleString(),
      
      // Legacy fields for backward compatibility
      firstName: firstName.trim(),
      executiveEmail: email,
      resource: resource.title,
      resourceType: resource.type || 'Unknown',
      priority,
      message: baseMessage
    }
  }, [resource, emailConfig])

  // Robust download trigger
  const triggerDownload = useCallback((resource: ResourceData) => {
    try {
      onDownloadStart?.(resource)
      
      const link = document.createElement('a')
      link.href = resource.href
      link.download = generateFilename(resource)
      link.target = '_blank' // Fallback for browsers that don't support download
      link.rel = 'noopener noreferrer'
      
      // Add to DOM temporarily for click
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      console.log(`Download triggered for: ${resource.title}`)
    } catch (error) {
      console.error('Download trigger failed:', error)
      // Fallback: open in new window
      window.open(resource.href, '_blank', 'noopener,noreferrer')
    }
  }, [generateFilename, onDownloadStart])

  // Validation functions
  const validateForm = useCallback(() => {
    setError(null)
    
    if (!firstName.trim()) {
      setError('Please enter your first name')
      return false
    }
    
    if (firstName.trim().length < 2) {
      setError('First name must be at least 2 characters')
      return false
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address')
      return false
    }
    
    return true
  }, [firstName, email])

  // Send email notification
  const sendEmailNotification = useCallback(async (): Promise<boolean> => {
    try {
      // COMPREHENSIVE DEBUG LOGGING
      console.group('🔍 EMAIL DEBUG - START')
      
      // Check environment variables at runtime
      console.log('Environment Variables Check:', {
        NODE_ENV: process.env.NODE_ENV,
        hasServiceId: !!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        hasTemplateId: !!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        hasPublicKey: !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        hasNotificationEmail: !!process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL,
        serviceIdValue: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'MISSING',
        templateIdValue: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'MISSING',
        publicKeyValue: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'MISSING',
        notificationEmail: process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL || 'MISSING'
      })
      
      // Check T3 Env values
      console.log('T3 Env Values Check:', {
        envServiceId: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        envTemplateId: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        envPublicKey: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        envNotificationEmail: env.NEXT_PUBLIC_NOTIFICATION_EMAIL
      })
      
      const emailData = generateEmailData(firstName, email)
      console.log('Generated Email Data:', emailData)
      
      const payload = {
        service_id: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: emailData
      }
      
      console.log('EmailJS Payload:', {
        service_id: payload.service_id,
        template_id: payload.template_id,
        user_id: payload.user_id ? `${payload.user_id.substring(0, 8)}...` : 'MISSING',
        templateParamsCount: Object.keys(payload.template_params).length
      })
      
      console.log('Sending email notification:', {
        resource: resource.title,
        recipient: emailData.executiveEmail,
        timestamp: new Date().toISOString()
      })
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      
      console.log('EmailJS Response Status:', response.status)
      const responseText = await response.text()
      console.log('EmailJS Response Body:', responseText)
      
      if (response.ok) {
        console.log('✅ Email notification sent successfully!')
        console.groupEnd()
        onEmailSuccess?.(resource, emailData)
        return true
      } else {
        console.error('❌ EmailJS Error Details:', {
          status: response.status,
          statusText: response.statusText,
          responseBody: responseText,
          requestPayload: {
            service_id: payload.service_id,
            template_id: payload.template_id,
            user_id: payload.user_id ? 'PRESENT' : 'MISSING'
          }
        })
        console.groupEnd()
        throw new Error(`EmailJS Error ${response.status}: ${responseText}`)
      }
    } catch (error) {
      console.error('💥 Email notification failed:', error)
      console.error('Error details:', {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined
      })
      console.groupEnd()
      onEmailFailure?.(resource, error)
      return false
    }
  }, [firstName, email, resource, generateEmailData, onEmailSuccess, onEmailFailure])

  // Main form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      // Try to send email notification first
      let emailSuccess = false
      if (resource.requiresEmail !== false) {
        emailSuccess = await sendEmailNotification()
        setEmailSent(emailSuccess)
      }
      
      // Always trigger download (even if email fails)
      triggerDownload(resource)
      
      // Mark as completed
      setIsSubmitted(true)
      onDownloadComplete?.(resource, emailSuccess)
      
      // Auto-close if configured
      if (effectiveConfig.autoCloseDelay > 0) {
        setTimeout(() => {
          handleClose()
        }, effectiveConfig.autoCloseDelay)
      }
      
    } catch (error) {
      console.error('Submission error:', error)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle skip email (for free resources)
  const handleSkipEmail = () => {
    triggerDownload(resource)
    setIsSubmitted(true)
    onDownloadComplete?.(resource, false)
    
    if (effectiveConfig.autoCloseDelay > 0) {
      setTimeout(handleClose, effectiveConfig.autoCloseDelay)
    }
  }

  // Close handler with state reset
  const handleClose = () => {
    setFirstName('')
    setEmail('')
    setIsSubmitted(false)
    setEmailSent(false)
    setError(null)
    setIsSubmitting(false)
    onClose()
  }

  // Don't render if not open
  if (!isOpen) return null

  // Dynamic styling based on config
  const stylingClasses = {
    default: {
      overlay: 'fixed inset-0 z-50 overflow-y-auto',
      container: 'flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0',
      backdrop: 'fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity',
      modal: 'relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6'
    },
    diagnostic: {
      overlay: 'fixed inset-0 z-50 overflow-y-auto',
      container: 'flex min-h-full items-center justify-center p-4',
      backdrop: 'fixed inset-0 bg-black bg-opacity-25',
      modal: 'relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all'
    },
    premium: {
      overlay: 'fixed inset-0 z-50 overflow-y-auto',
      container: 'flex min-h-full items-center justify-center p-4',
      backdrop: 'fixed inset-0 bg-neutral-900 bg-opacity-50 backdrop-blur-sm',
      modal: 'relative w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-8 text-left shadow-2xl transition-all border border-neutral-200'
    }
  }

  const styles = stylingClasses[effectiveConfig.customStyling]

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.backdrop} onClick={handleClose} />
        
        <div className={styles.modal}>
          {/* Close button for diagnostic style */}
          {effectiveConfig.customStyling === 'diagnostic' && (
            <div className="absolute top-4 right-4">
              <button
                onClick={handleClose}
                className="text-[#666666] hover:text-[#333333] transition-colors"
              >
                <span className="sr-only">Close</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {isSubmitted ? (
            // Success state
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium text-neutral-900">
                {resource.customSuccessMessage || 'Download Started'}
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                Your download should begin automatically. If not, please check your downloads folder.
                {emailSent && (
                  <span className="block mt-2 text-green-600 font-medium">
                    Email notification sent successfully.
                  </span>
                )}
              </p>
              {effectiveConfig.autoCloseDelay === 0 && (
                <Button onClick={handleClose}>
                  Close
                </Button>
              )}
            </div>
          ) : (
            // Form state
            <>
              <div className="mb-4">
                <h3 className={`text-lg font-medium ${effectiveConfig.customStyling === 'diagnostic' ? 'text-[#003C71]' : 'text-neutral-900'}`}>
                  {resource.customButtonText ? `${resource.customButtonText} ${resource.title}` : `Access ${resource.title}`}
                </h3>
                <p className={`mt-2 text-sm ${effectiveConfig.customStyling === 'diagnostic' ? 'text-[#666666]' : 'text-neutral-600'}`}>
                  {resource.details}
                </p>
                {effectiveConfig.showResourceType && resource.type && (
                  <span className="mt-3 inline-block rounded bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                    {resource.type}
                  </span>
                )}
              </div>

              {error && (
                <div className="mb-4 rounded-md bg-red-50 p-3 border border-red-200">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-sm font-medium ${effectiveConfig.customStyling === 'diagnostic' ? 'text-[#333333]' : 'text-neutral-700'} mb-2`}>
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-colors ${
                      effectiveConfig.customStyling === 'diagnostic' 
                        ? 'border-[#CCCCCC] focus:ring-[#003C71]' 
                        : 'border-neutral-300 focus:ring-[#003C71] focus:border-[#003C71]'
                    }`}
                    placeholder="Your first name"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium ${effectiveConfig.customStyling === 'diagnostic' ? 'text-[#333333]' : 'text-neutral-700'} mb-2`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent outline-none transition-colors ${
                      effectiveConfig.customStyling === 'diagnostic' 
                        ? 'border-[#CCCCCC] focus:ring-[#003C71]' 
                        : 'border-neutral-300 focus:ring-[#003C71] focus:border-[#003C71]'
                    }`}
                    placeholder="your.email@company.com"
                    required={resource.requiresEmail !== false}
                    disabled={isSubmitting}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    onClick={handleClose}
                    invert={effectiveConfig.customStyling !== 'diagnostic'}
                    className="flex-1 justify-center"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 justify-center"
                  >
                    {isSubmitting ? 'Processing...' : (resource.customButtonText || 'Download Resource')}
                  </Button>
                </div>

                {effectiveConfig.allowSkipEmail && resource.requiresEmail !== true && (
                  <div className="pt-2 text-center">
                    <button
                      type="button"
                      onClick={handleSkipEmail}
                      className="text-sm text-neutral-500 hover:text-neutral-700 underline"
                      disabled={isSubmitting}
                    >
                      Download without email
                    </button>
                  </div>
                )}
              </form>

              {effectiveConfig.customStyling === 'diagnostic' && (
                <p className="text-xs text-[#666666] mt-4 text-center">
                  No newsletter. No spam. Framework delivery only.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}