import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { firstName, executiveEmail, resource, timestamp } = await request.json()
    console.log('Received notification request:', { firstName, executiveEmail, resource })
    
    // Simple email notification using a free service like EmailJS
    // You'll need to set up EmailJS and add your credentials to environment variables
    
    const emailData = {
      to_email: process.env.NOTIFICATION_EMAIL || 'francisco@example.com', // Your email
      from_name: 'Executive Transition Advisory',
      subject: `New Resource Request: ${resource}`,
      message: `
Executive Resource Request

Name: ${firstName}
Email: ${executiveEmail}
Resource: ${resource}
Timestamp: ${new Date(timestamp).toLocaleString()}

${firstName} has downloaded the diagnostic framework and may be interested in strategic assessment.

Personal follow-up recommended within 48 hours.

---
Executive Transition Advisory
      `.trim()
    }
    
    // Check if we have the required environment variables
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
    
    console.log('Environment check:', {
      hasServiceId: !!serviceId,
      hasTemplateId: !!templateId,
      hasPublicKey: !!publicKey
    })
    
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS environment variables:', {
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId, 
        hasPublicKey: !!publicKey,
        serviceIdValue: serviceId?.substring(0, 10) + '...',
        templateIdValue: templateId?.substring(0, 10) + '...',
        publicKeyValue: publicKey?.substring(0, 10) + '...'
      })
      return NextResponse.json({ 
        error: 'EmailJS not configured',
        details: 'Missing required environment variables. Check your .env.local file.'
      }, { status: 500 })
    }
    
    // Using EmailJS REST API - correct format based on their documentation
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey, // EmailJS uses 'user_id' not 'public_key'
      template_params: emailData
    }
    
    console.log('Sending to EmailJS:', payload)
    
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    })
    
    const responseText = await response.text()
    console.log('EmailJS response:', { status: response.status, body: responseText })
    
    if (response.ok) {
      return NextResponse.json({ success: true })
    } else {
      console.error('EmailJS error:', responseText)
      return NextResponse.json({ error: 'Failed to send notification', details: responseText }, { status: 500 })
    }
    
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}