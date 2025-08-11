'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

interface ResourceDownloadModalProps {
  isOpen: boolean
  onClose: () => void
  resource: {
    title: string
    description: string
    href: string
    details: string
  }
}

export function ResourceDownloadModal({ isOpen, onClose, resource }: ResourceDownloadModalProps) {
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
      console.log('Sending resource request for:', firstName, email, resource.title)
      
      // Send email notification using EmailJS
      const emailData = {
        to_email: process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL || 'francisco@example.com',
        from_name: 'Executive Transition Advisory',
        subject: `Resource Download: ${resource.title}`,
        firstName: firstName.trim(),
        executiveEmail: email,
        resource: resource.title,
        resourceDescription: resource.description,
        timestamp: new Date().toLocaleString(),
        message: `${firstName.trim()} has requested access to "${resource.title}". Follow-up recommended within 48 hours.`
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
      
      if (response.ok) {
        setIsSubmitted(true)
        // Trigger download after successful email collection
        const link = document.createElement('a')
        link.href = resource.href
        link.download = resource.title
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        throw new Error(`EmailJS failed with status: ${response.status}`)
      }
      
    } catch (error) {
      console.error('Error sending notification:', error)
      alert('There was an error processing your request. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFirstName('')
    setEmail('')
    setIsSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div 
          className="fixed inset-0 bg-neutral-500 bg-opacity-75 transition-opacity" 
          onClick={handleClose}
        />
        
        <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          {isSubmitted ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium text-neutral-900">
                Download Started
              </h3>
              <p className="mb-4 text-sm text-neutral-600">
                Your download should begin automatically. If not, please check your downloads folder.
              </p>
              <Button onClick={handleClose}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-neutral-900">
                  Access {resource.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600">
                  {resource.details}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-[#003C71] focus:outline-none focus:ring-1 focus:ring-[#003C71]"
                    placeholder="Your first name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-neutral-300 px-3 py-2 shadow-sm focus:border-[#003C71] focus:outline-none focus:ring-1 focus:ring-[#003C71]"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <Button
                    type="button"
                    onClick={handleClose}
                    invert
                    className="flex-1 justify-center"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 justify-center items-center"
                  >
                    {isSubmitting ? 'Processing...' : 'Download Resource'}
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}