import { type Metric, onCLS, onFCP, onINP, onLCP, onTTFB } from 'web-vitals'

interface VitalMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  id: string
  navigationType: string
}

interface NetworkInformation {
  effectiveType?: string
  downlink?: number
  rtt?: number
  saveData?: boolean
}

interface NavigatorWithConnection extends Navigator {
  connection?: NetworkInformation
  mozConnection?: NetworkInformation
  webkitConnection?: NetworkInformation
}

interface PerformanceWithMemory extends Performance {
  memory?: {
    usedJSHeapSize: number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  }
}

const vitalsUrl = '/api/vitals'

function getConnectionSpeed() {
  const nav = navigator as NavigatorWithConnection
  const connection = nav.connection || nav.mozConnection || nav.webkitConnection

  if (connection) {
    return {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData,
    }
  }

  return null
}

function sendToAnalytics(metric: Metric) {
  const vitalMetric: VitalMetric = {
    name: metric.name,
    value: metric.value,
    rating: metric.rating || 'needs-improvement',
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType || 'navigate',
  }

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('[Web Vitals]', vitalMetric)
  }

  // Send to analytics endpoint
  const body = {
    metric: vitalMetric,
    page: window.location.pathname,
    userAgent: navigator.userAgent,
    connection: getConnectionSpeed(),
    timestamp: new Date().toISOString(),
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
  }

  // Use sendBeacon if available, fallback to fetch
  if (navigator.sendBeacon) {
    navigator.sendBeacon(vitalsUrl, JSON.stringify(body))
  } else {
    fetch(vitalsUrl, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
      keepalive: true,
    }).catch(console.error)
  }

  // Add structured data for AI understanding
  const performanceData = {
    '@context': 'https://schema.org',
    '@type': 'WebPageElement',
    name: 'Performance Metric',
    measurementTechnique: metric.name,
    value: metric.value,
    unitText: metric.name === 'CLS' ? 'score' : 'milliseconds',
    ratingValue: metric.rating,
  }

  // Embed performance data in page
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(performanceData)
  script.id = `performance-${metric.name}-${Date.now()}`
  document.head.appendChild(script)
}

export function reportWebVitals() {
  // Core Web Vitals
  onCLS(sendToAnalytics) // Cumulative Layout Shift
  onLCP(sendToAnalytics) // Largest Contentful Paint
  onINP(sendToAnalytics) // Interaction to Next Paint (replaces FID)

  // Additional metrics
  onFCP(sendToAnalytics) // First Contentful Paint
  onTTFB(sendToAnalytics) // Time to First Byte
}

// Performance monitoring for AI optimization
export function monitorPerformance() {
  if (typeof window === 'undefined') return

  // Monitor resource loading
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'resource') {
        const resourceEntry = entry as PerformanceResourceTiming

        // Track slow resources
        if (resourceEntry.duration > 1000) {
          console.warn('[Slow Resource]', {
            name: resourceEntry.name,
            duration: resourceEntry.duration,
            type: resourceEntry.initiatorType,
          })
        }
      }

      if (entry.entryType === 'navigation') {
        const navEntry = entry as PerformanceNavigationTiming

        // Track navigation performance
        const navigationData = {
          domContentLoaded:
            navEntry.domContentLoadedEventEnd -
            navEntry.domContentLoadedEventStart,
          domComplete: navEntry.domComplete - navEntry.domInteractive,
          loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
          totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
        }

        console.log('[Navigation Performance]', navigationData)
      }
    }
  })

  observer.observe({ entryTypes: ['resource', 'navigation'] })

  // Monitor long tasks
  if (
    'PerformanceObserver' in window &&
    PerformanceObserver.supportedEntryTypes?.includes('longtask')
  ) {
    const longTaskObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn('[Long Task]', {
          duration: entry.duration,
          startTime: entry.startTime,
          name: entry.name,
        })
      }
    })

    longTaskObserver.observe({ entryTypes: ['longtask'] })
  }
}

// Utility to measure custom metrics
export function measureCustomMetric(
  name: string,
  startMark: string,
  endMark: string,
) {
  if (typeof window === 'undefined' || !window.performance) return

  try {
    performance.measure(name, startMark, endMark)
    const measures = performance.getEntriesByName(name, 'measure')

    if (measures.length > 0) {
      const measure = measures[measures.length - 1]

      // Create a custom metric object that matches our VitalMetric interface
      const customMetric = {
        name: `custom-${name}`,
        value: measure.duration,
        delta: 0,
        id: `${name}-${Date.now()}`,
        navigationType: 'navigate',
        rating:
          measure.duration < 100
            ? 'good'
            : measure.duration < 300
              ? 'needs-improvement'
              : 'poor',
        entries: [], // Add entries property for compatibility
      }
      
      // Send as unknown first, then cast to Metric for type safety
      sendToAnalytics(customMetric as unknown as Metric)
    }
  } catch (error) {
    console.error('[Performance Measurement Error]', error)
  }
}

// Export performance utilities for AI optimization
export const performanceUtils = {
  markStart: (name: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark(`${name}-start`)
    }
  },

  markEnd: (name: string) => {
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark(`${name}-end`)
      measureCustomMetric(name, `${name}-start`, `${name}-end`)
    }
  },

  getMetrics: () => {
    if (typeof window === 'undefined' || !window.performance) return null

    const navigation = performance.getEntriesByType(
      'navigation',
    )[0] as PerformanceNavigationTiming
    const paint = performance.getEntriesByType('paint')

    return {
      navigation: navigation
        ? {
            fetchStart: navigation.fetchStart,
            domContentLoaded: navigation.domContentLoadedEventEnd,
            loadComplete: navigation.loadEventEnd,
          }
        : null,
      paint: paint.map((p) => ({
        name: p.name,
        startTime: p.startTime,
      })),
      memory: (() => {
        const perfWithMemory = performance as PerformanceWithMemory
        if (perfWithMemory.memory) {
          return {
            usedJSHeapSize: perfWithMemory.memory.usedJSHeapSize,
            totalJSHeapSize: perfWithMemory.memory.totalJSHeapSize,
            jsHeapSizeLimit: perfWithMemory.memory.jsHeapSizeLimit,
          }
        }
        return null
      })(),
    }
  },
}
