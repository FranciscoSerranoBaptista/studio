'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

interface DiagnosticModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Validation
    if (!firstName.trim()) {
      alert('Please enter your first name')
      setIsSubmitting(false)
      return
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address')
      setIsSubmitting(false)
      return
    }
    
    try {
      console.log('Sending notification for:', firstName, email)
      
      // Send email notification using EmailJS directly from client
      const emailData = {
        to_email: process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL || 'francisco@example.com',
        from_name: 'Executive Transition Advisory',
        subject: 'New Resource Request: Executive Integration Diagnostic',
        firstName: firstName.trim(),
        executiveEmail: email,
        resource: 'Executive Integration Diagnostic',
        timestamp: new Date().toLocaleString(),
        message: `${firstName.trim()} has downloaded the diagnostic framework and may be interested in strategic assessment. Personal follow-up recommended within 48 hours.`
      }
      
      const payload = {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: emailData
      }
      
      console.log('Sending to EmailJS from client:', {
        hasServiceId: !!payload.service_id,
        hasTemplateId: !!payload.template_id,
        hasUserId: !!payload.user_id
      })
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      
      console.log('EmailJS response status:', response.status)
      const responseText = await response.text()
      console.log('EmailJS response:', responseText)
      
      // Log environment variables for debugging
      console.log('EmailJS Environment Check:', {
        hasServiceId: !!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        hasTemplateId: !!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        hasPublicKey: !!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      })
      
      if (response.ok) {
        console.log('Email notification sent successfully')
        setIsSubmitted(true)
        // Trigger download
        const link = document.createElement('a')
        link.href = '/assets/The%20Executive%20Transition%20Failure%20TaxonomyTM.pdf'
        link.download = 'Executive-Integration-Diagnostic.pdf'
        link.target = '_blank' // Opens in new tab as fallback
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        
        // Close modal after brief delay
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
          setFirstName('')
          setEmail('')
        }, 2000)
      } else {
        console.error('EmailJS Error Details:', {
          status: response.status,
          statusText: response.statusText,
          responseBody: responseText
        })
        throw new Error(`EmailJS Error ${response.status}: ${responseText}`)
      }
    } catch (error) {
      console.error('Error sending notification:', error)
      // Still allow download even if notification fails
      setIsSubmitted(true)
      const link = document.createElement('a')
      link.href = '/assets/The%20Executive%20Transition%20Failure%20TaxonomyTM.pdf'
      link.download = 'Executive-Integration-Diagnostic.pdf'
      link.target = '_blank'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setTimeout(() => {
        onClose()
        setIsSubmitted(false)
        setFirstName('')
        setEmail('')
      }, 2000)
    }
    
    setIsSubmitting(false)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
        
        <div className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-[#666666] hover:text-[#333333] transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!isSubmitted ? (
            <>
              <h3 className="text-xl font-semibold text-[#003C71] mb-2">
                Executive Integration Diagnostic
              </h3>
              <p className="text-sm text-[#666666] mb-6">
                Immediate access to pattern recognition framework. Your email ensures delivery and updates.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#333333] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    required
                    className="w-full px-4 py-3 border border-[#CCCCCC] rounded-lg focus:ring-2 focus:ring-[#003C71] focus:border-transparent outline-none transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                    Executive Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john.doe@company.com"
                    required
                    className="w-full px-4 py-3 border border-[#CCCCCC] rounded-lg focus:ring-2 focus:ring-[#003C71] focus:border-transparent outline-none transition-colors"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? 'Processing...' : 'Download Framework'}
                  </Button>
                </div>
              </form>

              <p className="text-xs text-[#666666] mt-4 text-center">
                No newsletter. No spam. Framework delivery only.
              </p>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#004225] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#003C71] mb-2">
                Download Starting
              </h3>
              <p className="text-sm text-[#666666]">
                Executive Integration Diagnostic is downloading now.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}