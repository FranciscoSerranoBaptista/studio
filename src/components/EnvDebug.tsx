'use client'

import { env } from '@/env'

export function EnvDebug() {
  // Only show in development or when explicitly enabled
  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-lg text-xs max-w-md z-50 font-mono">
      <h3 className="font-bold mb-2">🔧 Env Debug</h3>
      <div className="space-y-1">
        <div>NODE_ENV: <span className="text-green-400">{process.env.NODE_ENV}</span></div>
        <div>Service ID: <span className={process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? 'text-green-400' : 'text-red-400'}>
          {process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ? '✓ Present' : '✗ Missing'}
        </span></div>
        <div>Template ID: <span className={process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? 'text-green-400' : 'text-red-400'}>
          {process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ? '✓ Present' : '✗ Missing'}
        </span></div>
        <div>Public Key: <span className={process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? 'text-green-400' : 'text-red-400'}>
          {process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? '✓ Present' : '✗ Missing'}
        </span></div>
        <div>Notification Email: <span className={process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL ? 'text-green-400' : 'text-red-400'}>
          {process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL ? '✓ Present' : '✗ Missing'}
        </span></div>
        <hr className="my-2 border-gray-600" />
        <div className="text-gray-400">T3 Env Values:</div>
        <div>Service: <span className="text-blue-400">{env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'undefined'}</span></div>
        <div>Email: <span className="text-blue-400">{env.NEXT_PUBLIC_NOTIFICATION_EMAIL || 'undefined'}</span></div>
      </div>
      <button 
        onClick={() => {
          console.log('Full Environment Debug:', {
            allEnvVars: Object.keys(process.env),
            emailjsVars: Object.keys(process.env).filter(key => key.includes('EMAILJS')),
            t3EnvValues: {
              serviceId: env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
              templateId: env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
              publicKey: env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
              notificationEmail: env.NEXT_PUBLIC_NOTIFICATION_EMAIL
            }
          })
        }}
        className="mt-2 bg-blue-600 hover:bg-blue-700 px-2 py-1 rounded text-xs"
      >
        Log Full Debug
      </button>
    </div>
  )
}