'use client'

import { useEffect } from 'react'
import { reportWebVitals, monitorPerformance } from '@/lib/web-vitals'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Start web vitals reporting
    reportWebVitals()
    
    // Start performance monitoring
    monitorPerformance()
    
    // Log initial page load performance
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (perfData) {
          console.log('[Page Load Performance]', {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.fetchStart,
            fullyLoaded: perfData.loadEventEnd - perfData.fetchStart,
            timeToFirstByte: perfData.responseStart - perfData.fetchStart,
          })
        }
      })
    }
  }, [])

  return null
}