'use client'

import { env } from '@/env'

export function EmailTestButton() {
  // Only show in development
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  const testEmail = async () => {
    console.group('🧪 EMAIL TEST - START')
    
    try {
      const payload = {
        service_id: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: {
          to_email: env.NEXT_PUBLIC_NOTIFICATION_EMAIL,
          from_name: 'Executive Transition Advisory - TEST',
          subject: 'Email Configuration Test',
          firstName: 'Test',
          executiveEmail: 'test@example.com',
          resource: 'Email Configuration Test',
          resourceType: 'Test',
          timestamp: new Date().toLocaleString(),
          priority: 'normal',
          message: 'This is a test email to verify EmailJS configuration is working properly.'
        }
      }

      console.log('Test payload:', payload)

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      console.log('Response status:', response.status)
      const responseText = await response.text()
      console.log('Response body:', responseText)

      if (response.ok) {
        console.log('✅ Test email sent successfully!')
        alert('Test email sent successfully! Check your inbox.')
      } else {
        console.error('❌ Test email failed:', responseText)
        alert(`Test email failed: ${response.status} - ${responseText}`)
      }
    } catch (error) {
      console.error('💥 Test email error:', error)
      alert(`Test email error: ${error}`)
    }
    
    console.groupEnd()
  }

  return (
    <button
      onClick={testEmail}
      className="fixed bottom-20 right-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium z-50"
    >
      🧪 Test Email
    </button>
  )
}