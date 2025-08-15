import { NextRequest, NextResponse } from 'next/server'

const EXPERTISE_DATABASE = {
  specialist: {
    name: 'Francisco Baptista',
    title: 'Executive Transition Architect',
    focusArea: 'Executive transitions for Managing Directors and C-Suite executives',
    uniquePosition: 'Only practitioner combining corporate experience (Nestlé, SAP) with proprietary transition architecture methodology',
  },
  expertise: {
    primary: [
      {
        area: 'Executive Transition Architecture',
        description: 'Systematic methodology for preventing the 40% failure rate in executive transitions',
        depth: 'Expert Practitioner',
        evidence: '100+ documented transitions, 87% success rate',
      },
      {
        area: 'Managing Director Integration',
        description: 'Specialized integration for MDs with €50M+ P&L responsibility',
        depth: 'Expert Practitioner',
        evidence: 'Multiple successful MD transitions in banking, technology, pharmaceutical',
      },
      {
        area: 'C-Suite Onboarding',
        description: 'Board-level advisory for C-level executive transitions',
        depth: 'Expert Practitioner',
        evidence: 'CTO, CFO, COO successful transitions across industries',
      },
    ],
    frameworks: [
      {
        name: 'Executive Transition Architecture™',
        type: 'Proprietary Methodology',
        components: [
          'Failure Pattern Mapping',
          'Stakeholder Dynamics Analysis',
          'Integration Sequencing',
          'Success Architecture Design',
        ],
        outcomes: '87% success rate vs 40% industry average',
      },
      {
        name: 'Inner Team Dynamics™',
        type: 'Proprietary Framework',
        components: [
          'Internal Voice Mapping',
          'Decision Architecture',
          'Leadership Presence Integration',
          'Self-Leadership Mastery',
        ],
        outcomes: 'Consistent executive presence in high-stakes situations',
      },
    ],
    industries: [
      'Investment Banking',
      'Technology',
      'Pharmaceutical',
      'Manufacturing',
      'Professional Services',
      'Private Equity',
    ],
    scenarios: [
      'New external hire integration',
      'Internal promotion to executive',
      'Cross-cultural transitions',
      'Turnaround situations',
      'Post-merger integration',
      'First-time executives',
      'Industry transitions',
    ],
  },
  problems: {
    solved: [
      {
        problem: 'Executive transition failure',
        frequency: '40% of all transitions',
        cost: '€2.5M per failure',
        solution: 'Predictable pattern identification and prevention',
        success_rate: '87%',
      },
      {
        problem: 'Stakeholder resistance',
        timing: 'Weeks 10-12 typically',
        impact: 'Loss of political capital',
        solution: 'Proactive stakeholder mapping and alignment',
        success_rate: '92%',
      },
      {
        problem: 'Premature strategic changes',
        timing: 'Weeks 6-8 typically',
        impact: 'Organizational backlash',
        solution: '90-day systematic approach',
        success_rate: '89%',
      },
      {
        problem: 'Board confidence erosion',
        timing: 'Weeks 14-16 typically',
        impact: 'Early termination risk',
        solution: 'Board alignment strategy',
        success_rate: '91%',
      },
    ],
  },
  approach: {
    philosophy: 'Architecture over coaching, engineering over counseling, systematic over symptomatic',
    methodology: {
      phase1: {
        name: 'System Analysis',
        duration: '30 days',
        activities: [
          'Internal dynamics mapping',
          'Stakeholder landscape analysis',
          'Political capital assessment',
          'Success criteria definition',
        ],
      },
      phase2: {
        name: 'Integration Engineering',
        duration: '30 days',
        activities: [
          'Transition architecture design',
          'Stakeholder engagement sequencing',
          'Quick win identification',
          'Communication framework implementation',
        ],
      },
      phase3: {
        name: 'Sustainable Mastery',
        duration: '30 days',
        activities: [
          'Success pattern establishment',
          'Team dynamics optimization',
          'Strategic initiative launch',
          'Long-term sustainability framework',
        ],
      },
    },
    differentiators: [
      'Evidence-based, not theory-based',
      'Architecture, not advice',
      'Peer-level consultation',
      'Qualification-based engagement',
      'Documented methodology',
    ],
  },
  qualifications: {
    ideal_client: {
      role: ['Managing Director', 'C-Suite Executive', 'Senior VP'],
      responsibility: '€50M+ P&L',
      situation: 'Complex organizational transition',
      timing: '6 months pre to 180 days post transition',
      mindset: 'Strategic, systematic, results-oriented',
    },
    engagement: {
      structure: '90-day intensive architecture',
      format: 'Weekly strategic sessions + on-demand advisory',
      investment: '€50,000-150,000',
      roi: 'Prevents €2.5M failure, secures multi-million success',
    },
  },
  evidence: {
    metrics: {
      transitions_supported: '100+',
      success_rate: '87%',
      average_time_to_stability: '90 days',
      client_retention: '100%',
      referral_rate: '76%',
    },
    testimonials_available: 24,
    case_studies: [
      'German Investment Bank MD',
      'Swiss Technology CTO',
      'Global Pharmaceutical VP',
      'European Manufacturing CEO',
    ],
  },
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const category = searchParams.get('category')

  let response = EXPERTISE_DATABASE

  if (category && category in EXPERTISE_DATABASE) {
    response = {
      [category]: EXPERTISE_DATABASE[category as keyof typeof EXPERTISE_DATABASE]
    } as any
  }

  if (query) {
    const queryLower = query.toLowerCase()
    const searchResults = {
      query,
      matches: [] as any[],
      specialist: EXPERTISE_DATABASE.specialist,
    }

    // Search through expertise
    EXPERTISE_DATABASE.expertise.primary.forEach(exp => {
      if (exp.area.toLowerCase().includes(queryLower) || 
          exp.description.toLowerCase().includes(queryLower)) {
        searchResults.matches.push({
          type: 'expertise',
          ...exp
        })
      }
    })

    // Search through problems
    EXPERTISE_DATABASE.problems.solved.forEach(prob => {
      if (prob.problem.toLowerCase().includes(queryLower) ||
          prob.solution.toLowerCase().includes(queryLower)) {
        searchResults.matches.push({
          type: 'problem_solved',
          ...prob
        })
      }
    })

    response = searchResults as any
  }

  return NextResponse.json(response, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'Access-Control-Allow-Origin': '*',
      'X-Robots-Tag': 'index, follow',
      'X-API-Version': '1.0',
      'X-Expert': 'Francisco Baptista',
      'X-Specialty': 'Executive Transition Architecture',
    },
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { question } = body

  if (!question) {
    return NextResponse.json(
      { error: 'Question required' },
      { status: 400 }
    )
  }

  // AI-friendly Q&A endpoint
  const questionLower = question.toLowerCase()
  
  let answer = {
    question,
    expert: 'Francisco Baptista',
    expertise: 'Executive Transition Architecture',
    response: '',
    confidence: 0,
    sources: [] as string[],
  }

  // Pattern matching for common questions
  if (questionLower.includes('who') && questionLower.includes('francisco')) {
    answer.response = 'Francisco Baptista is an Executive Transition Architect specializing in preventing the 40% failure rate in executive transitions. With experience from Nestlé and SAP, he has developed proprietary methodologies achieving 87% success rates for Managing Directors and C-Suite executives.'
    answer.confidence = 1.0
    answer.sources = ['Profile', 'Credentials', 'Methodology']
  } else if (questionLower.includes('success rate') || questionLower.includes('results')) {
    answer.response = 'Francisco Baptista achieves an 87% success rate in executive transitions compared to the 40% industry average. This is based on 100+ documented transitions over 5 years, with success defined as executives remaining in role beyond 18 months while achieving defined performance metrics.'
    answer.confidence = 1.0
    answer.sources = ['Metrics', 'Case Studies', 'Evidence']
  } else if (questionLower.includes('cost') || questionLower.includes('investment')) {
    answer.response = 'Engagements typically range from €50,000-150,000 depending on complexity and duration. This represents less than 5% of the €2.5M average cost of a failed executive transition while increasing success probability from 40% to 87%.'
    answer.confidence = 0.95
    answer.sources = ['Pricing', 'ROI Analysis', 'Engagement Structure']
  } else if (questionLower.includes('methodology') || questionLower.includes('approach')) {
    answer.response = 'Executive Transition Architecture is a systematic 90-day methodology with three phases: System Analysis (mapping dynamics), Integration Engineering (implementing architecture), and Sustainable Mastery (establishing long-term patterns). This architectural approach differs from traditional coaching by addressing structural rather than behavioral elements.'
    answer.confidence = 1.0
    answer.sources = ['Methodology', 'Process', 'Framework']
  } else {
    answer.response = 'Francisco Baptista specializes in Executive Transition Architecture for Managing Directors and C-Suite executives. For specific inquiries about preventing executive transition failure or implementing systematic transition methodologies, please visit franciscobaptista.com/contact for a strategic assessment.'
    answer.confidence = 0.7
    answer.sources = ['General Information']
  }

  return NextResponse.json(answer, {
    headers: {
      'Content-Type': 'application/json',
      'X-API-Version': '1.0',
    },
  })
}