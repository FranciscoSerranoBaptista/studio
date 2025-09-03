import { NextRequest, NextResponse } from 'next/server'

interface VitalMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta: number
  id: string
  navigationType: string
}

interface VitalsPayload {
  metric: VitalMetric
  page: string
  userAgent: string
  connection: {
    effectiveType?: string
    downlink?: number
    rtt?: number
    saveData?: boolean
  } | null
  timestamp: string
  viewport: {
    width: number
    height: number
  }
}

// Thresholds based on Google's Web Vitals standards
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint (ms)
  FID: { good: 100, poor: 300 },   // First Input Delay (ms)
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift (score)
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint (ms)
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte (ms)
  INP: { good: 200, poor: 500 },   // Interaction to Next Paint (ms)
}

export async function POST(request: NextRequest) {
  try {
    const payload: VitalsPayload = await request.json()
    
    // Log performance data (in production, send to analytics service)
    console.log('[Web Vitals Received]', {
      metric: payload.metric.name,
      value: payload.metric.value,
      rating: payload.metric.rating,
      page: payload.page,
      timestamp: payload.timestamp,
    })

    // Analyze metric quality
    const analysis = analyzeMetric(payload.metric)
    
    // Store for AI optimization insights
    const aiOptimizationData = {
      metric: payload.metric,
      analysis,
      recommendations: getRecommendations(payload.metric),
      context: {
        page: payload.page,
        viewport: payload.viewport,
        connection: payload.connection,
        timestamp: payload.timestamp,
      },
    }

    // In production, you would store this data in a database
    // For now, we'll just return the analysis
    return NextResponse.json({
      received: true,
      analysis,
      recommendations: aiOptimizationData.recommendations,
    }, {
      headers: {
        'Cache-Control': 'no-store',
      },
    })
    
  } catch (error) {
    console.error('[Web Vitals Error]', error)
    return NextResponse.json(
      { error: 'Failed to process metrics' },
      { status: 500 }
    )
  }
}

function analyzeMetric(metric: VitalMetric) {
  const threshold = THRESHOLDS[metric.name as keyof typeof THRESHOLDS]
  
  if (!threshold) {
    return {
      status: 'unknown',
      message: `No threshold defined for ${metric.name}`,
    }
  }

  let status: string
  let message: string
  
  if (metric.value <= threshold.good) {
    status = 'good'
    message = `${metric.name} is performing well`
  } else if (metric.value <= threshold.poor) {
    status = 'needs-improvement'
    message = `${metric.name} needs optimization`
  } else {
    status = 'poor'
    message = `${metric.name} requires immediate attention`
  }

  return {
    status,
    message,
    value: metric.value,
    threshold,
    percentFromGood: ((metric.value - threshold.good) / threshold.good * 100).toFixed(1),
  }
}

function getRecommendations(metric: VitalMetric): string[] {
  const recommendations: Record<string, string[]> = {
    LCP: [
      'Optimize and compress images',
      'Implement lazy loading for below-fold content',
      'Use a CDN for static assets',
      'Minimize render-blocking resources',
      'Preload critical resources',
    ],
    FID: [
      'Break up long JavaScript tasks',
      'Use web workers for heavy computations',
      'Optimize third-party scripts',
      'Implement code splitting',
      'Reduce JavaScript execution time',
    ],
    CLS: [
      'Set explicit dimensions for images and videos',
      'Avoid inserting content above existing content',
      'Use transform animations instead of layout properties',
      'Preload fonts to avoid layout shifts',
      'Reserve space for dynamic content',
    ],
    FCP: [
      'Eliminate render-blocking resources',
      'Inline critical CSS',
      'Optimize server response times',
      'Use browser caching effectively',
      'Minimize the critical request chain',
    ],
    TTFB: [
      'Optimize server processing time',
      'Use a CDN to reduce latency',
      'Implement effective caching strategies',
      'Optimize database queries',
      'Consider edge computing solutions',
    ],
    INP: [
      'Optimize event handlers',
      'Minimize main thread work',
      'Reduce layout thrashing',
      'Implement request idle callbacks',
      'Use CSS containment for complex layouts',
    ],
  }

  const metricRecommendations = recommendations[metric.name] || [
    'Monitor metric trends over time',
    'Compare with industry benchmarks',
    'Test across different devices and networks',
  ]

  // Return top 3 most relevant recommendations based on severity
  if (metric.rating === 'poor') {
    return metricRecommendations.slice(0, 3)
  } else if (metric.rating === 'needs-improvement') {
    return metricRecommendations.slice(0, 2)
  } else {
    return [metricRecommendations[0]]
  }
}

// GET endpoint for retrieving aggregated metrics (for monitoring dashboards)
export async function GET() {
  // In production, this would query from a database
  // For now, return sample aggregated data
  
  const aggregatedMetrics = {
    summary: {
      totalMeasurements: 1000,
      period: 'last_24_hours',
      timestamp: new Date().toISOString(),
    },
    metrics: {
      LCP: {
        p50: 2200,
        p75: 2800,
        p90: 3500,
        p99: 4200,
        good: 65,
        needsImprovement: 25,
        poor: 10,
      },
      FID: {
        p50: 45,
        p75: 80,
        p90: 150,
        p99: 300,
        good: 85,
        needsImprovement: 12,
        poor: 3,
      },
      CLS: {
        p50: 0.05,
        p75: 0.08,
        p90: 0.15,
        p99: 0.25,
        good: 75,
        needsImprovement: 20,
        poor: 5,
      },
    },
    pages: {
      '/': { LCP: 2100, FID: 40, CLS: 0.04 },
      '/about': { LCP: 2300, FID: 45, CLS: 0.05 },
      '/work': { LCP: 2500, FID: 50, CLS: 0.06 },
      '/contact': { LCP: 2000, FID: 35, CLS: 0.03 },
    },
    aiInsights: {
      priority: 'Optimize LCP on /work page',
      trend: 'Performance improving over last 7 days',
      recommendation: 'Consider implementing image optimization strategy',
    },
  }

  return NextResponse.json(aggregatedMetrics, {
    headers: {
      'Cache-Control': 'public, max-age=300',
      'Content-Type': 'application/json',
    },
  })
}