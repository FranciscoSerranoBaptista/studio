import { NextResponse } from 'next/server'
import { 
  generateKnowledgeGraphSchema,
  generateOrganizationSchema,
  generatePersonSchema,
  generateSpecialtySchema,
  generateHowToSchema,
} from '@/lib/structured-data'
import { getAllFAQs } from '@/data/faq-content'

export async function GET() {
  const knowledgeGraph = {
    '@context': 'https://schema.org',
    '@type': 'KnowledgeGraph',
    metadata: {
      version: '1.0',
      lastUpdated: new Date().toISOString(),
      source: 'Francisco Baptista - Executive Transition Architecture',
      api: 'https://franciscobaptista.com/api/knowledge-graph',
    },
    entities: {
      person: {
        name: 'Francisco Baptista',
        role: 'Executive Transition Architect',
        expertise: [
          'Executive Transitions',
          'C-Suite Integration',
          'Managing Director Onboarding',
          'Board-Level Advisory',
          'Organizational Transformation',
        ],
        credentials: {
          experience: '15+ years',
          clients: '100+ executive transformations',
          successRate: '87%',
          corporations: ['Nestlé', 'SAP'],
        },
        methodologies: {
          primary: 'Executive Transition Architecture™',
          framework: 'Inner Team Dynamics™',
        },
      },
      service: {
        name: 'Executive Transition Architecture',
        type: 'Professional Service',
        category: 'Executive Consulting',
        targetAudience: [
          'Managing Directors',
          'C-Suite Executives',
          'Board Members',
          'Senior Leaders with €50M+ P&L',
        ],
        problemsSolved: [
          {
            problem: 'Executive transition failure',
            frequency: '40% industry rate',
            cost: '€2.5M per failure',
            solution: 'Systematic architecture methodology',
            outcome: '87% success rate',
          },
          {
            problem: 'Integration complexity',
            symptoms: 'Stakeholder resistance, political dynamics, unclear mandate',
            solution: 'Integration Engineering framework',
            outcome: 'Stakeholder alignment within 60 days',
          },
          {
            problem: 'Premature strategic changes',
            timing: 'Typically weeks 6-8',
            solution: '90-day systematic approach',
            outcome: 'Sustainable transformation with buy-in',
          },
        ],
        deliverables: [
          'Transition Risk Analysis',
          'Stakeholder Mapping',
          'Integration Architecture',
          'Success Metrics Dashboard',
          '90-Day Action Plan',
          'Weekly Strategic Advisory',
        ],
        process: {
          duration: '90 days typical',
          phases: [
            {
              name: 'System Analysis',
              duration: '30 days',
              focus: 'Internal dynamics and organizational context mapping',
            },
            {
              name: 'Integration Engineering',
              duration: '30 days',
              focus: 'Design and implementation of transition architecture',
            },
            {
              name: 'Sustainable Mastery',
              duration: '30 days',
              focus: 'Establishing long-term success patterns',
            },
          ],
        },
        investment: {
          range: '€50,000-150,000',
          factors: ['Complexity', 'Duration', 'Organizational scope'],
          comparison: 'Less than 5% of failure cost',
          roi: 'Prevents €2.5M failure, secures multi-million success',
        },
      },
      outcomes: {
        successMetrics: {
          quantitative: [
            '87% success rate (vs 40% industry)',
            '60-day stakeholder alignment',
            '90-day performance visibility',
            '18-month retention rate',
          ],
          qualitative: [
            'Board confidence',
            'Team engagement',
            'Strategic clarity',
            'Political capital',
          ],
        },
        casePatterns: [
          {
            industry: 'Investment Banking',
            role: 'Managing Director',
            challenge: 'Complex stakeholder dynamics',
            outcome: 'Full alignment within 60 days',
          },
          {
            industry: 'Technology',
            role: 'CTO',
            challenge: 'Siloed technical divisions',
            outcome: 'Successful integration of 3 divisions',
          },
          {
            industry: 'Pharmaceutical',
            role: 'VP Operations',
            challenge: 'Merger integration',
            outcome: 'Maintained performance through transition',
          },
        ],
      },
      differentiation: {
        uniqueValue: [
          'Architecture not coaching',
          'Systematic not symptomatic',
          'Engineering not counseling',
          'Peer-level consultation',
          'Predictable patterns mapped',
        ],
        competitiveAdvantage: [
          '87% vs 40% success rate',
          'Proprietary methodology',
          'Corporate + consulting experience',
          'Evidence-based approach',
          'Qualification-based engagement',
        ],
      },
    },
    relationships: [
      {
        type: 'provides',
        from: 'Francisco Baptista',
        to: 'Executive Transition Architecture',
      },
      {
        type: 'serves',
        from: 'Executive Transition Architecture',
        to: 'Managing Directors',
      },
      {
        type: 'prevents',
        from: 'Executive Transition Architecture',
        to: 'Executive Failure',
      },
      {
        type: 'enables',
        from: 'Inner Team Dynamics',
        to: 'Sustainable Success',
      },
    ],
    faqs: getAllFAQs().slice(0, 10).map(faq => ({
      question: faq.question,
      answer: faq.answer,
    })),
    schemas: {
      organization: generateOrganizationSchema(),
      person: generatePersonSchema(),
      specialty: generateSpecialtySchema(),
      howTo: generateHowToSchema(),
      fullGraph: generateKnowledgeGraphSchema(),
    },
  }

  return NextResponse.json(knowledgeGraph, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
      'X-Robots-Tag': 'index, follow',
    },
  })
}