'use client'

import { useEffect, useState } from 'react'
import { FadeIn } from '@/components/FadeIn'

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
        prefill?: Record<string, string | number | boolean>
        utm?: Record<string, string | number | boolean>
      }) => void
    }
  }
}

export function BookingWidget() {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setMounted(true)
    
    // Load Calendly script
    const loadCalendlyScript = () => {
      // Check if script is already loaded
      if (document.getElementById('calendly-script')) {
        initializeCalendly()
        return
      }

      const script = document.createElement('script')
      script.id = 'calendly-script'
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.type = 'text/javascript'
      script.onload = () => {
        initializeCalendly()
      }
      
      document.head.appendChild(script)
    }

    const initializeCalendly = () => {
      const parentElement = document.getElementById('calendly-container')
      if (parentElement && window.Calendly) {
        // Clear any existing content
        parentElement.innerHTML = ''
        
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/fbaptista/executive-transition-assessment',
          parentElement: parentElement,
          prefill: {},
          utm: {}
        })
        
        setIsLoading(false)
      }
    }

    loadCalendlyScript()
  }, [])

  // Don't render on server side to avoid hydration mismatch
  if (!mounted) {
    return (
      <FadeIn>
        <div className="rounded-3xl bg-white/50 p-8 shadow-sm ring-1 ring-neutral-950/5">
          <div className="flex items-center justify-center h-96 text-neutral-500">
            <div className="text-center">
              <div className="animate-pulse">Loading booking calendar...</div>
            </div>
          </div>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <div className="rounded-3xl bg-white/50 p-8 shadow-sm ring-1 ring-neutral-950/5">
        {isLoading && (
          <div className="flex items-center justify-center h-96 text-neutral-500">
            <div className="text-center">
              <div className="animate-pulse">Loading Executive Assessment calendar...</div>
            </div>
          </div>
        )}
        <div 
          id="calendly-container"
          style={{
            minWidth: '320px',
            minHeight: '580px'
          }}
        />
      </div>
    </FadeIn>
  )
}