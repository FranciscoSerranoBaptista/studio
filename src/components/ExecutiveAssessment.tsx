'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

interface AssessmentData {
  roleLevel: string
  plResponsibility: string
  teamSize: string
  transitionType: string
  complexity: string[]
  timeframe: string
  primaryChallenge: string
}

interface AssessmentResult {
  score: number
  qualification: 'qualified' | 'not-qualified' | 'borderline'
  recommendation: string
  nextSteps: string[]
}

export function ExecutiveAssessment() {
  const [currentStep, setCurrentStep] = useState(0)
  const [assessmentData, setAssessmentData] = useState<AssessmentData>({
    roleLevel: '',
    plResponsibility: '',
    teamSize: '',
    transitionType: '',
    complexity: [],
    timeframe: '',
    primaryChallenge: ''
  })
  const [result, setResult] = useState<AssessmentResult | null>(null)

  const questions = [
    {
      id: 'roleLevel',
      title: 'Current Role Level',
      type: 'radio' as const,
      options: [
        { value: 'c-suite', label: 'C-Suite (CEO, CFO, CTO, etc.)', points: 10 },
        { value: 'svp-evp', label: 'Senior/Executive Vice President', points: 8 },
        { value: 'managing-director', label: 'Managing Director', points: 9 },
        { value: 'division-head', label: 'Division/Business Unit Head', points: 7 },
        { value: 'director', label: 'Director Level', points: 5 },
        { value: 'other', label: 'Other Senior Role', points: 3 }
      ]
    },
    {
      id: 'plResponsibility',
      title: 'P&L Responsibility',
      type: 'radio' as const,
      options: [
        { value: 'over-500m', label: 'Over €500M', points: 10 },
        { value: '100-500m', label: '€100-500M', points: 8 },
        { value: '50-100m', label: '€50-100M', points: 6 },
        { value: '10-50m', label: '€10-50M', points: 4 },
        { value: 'under-10m', label: 'Under €10M', points: 2 },
        { value: 'no-pl', label: 'No direct P&L responsibility', points: 0 }
      ]
    },
    {
      id: 'teamSize',
      title: 'Team Size (Direct & Indirect Reports)',
      type: 'radio' as const,
      options: [
        { value: 'over-1000', label: 'Over 1,000 people', points: 10 },
        { value: '500-1000', label: '500-1,000 people', points: 8 },
        { value: '100-500', label: '100-500 people', points: 6 },
        { value: '50-100', label: '50-100 people', points: 4 },
        { value: '10-50', label: '10-50 people', points: 2 },
        { value: 'under-10', label: 'Under 10 people', points: 0 }
      ]
    },
    {
      id: 'transitionType',
      title: 'Type of Executive Transition',
      type: 'radio' as const,
      options: [
        { value: 'new-organization', label: 'New organization/company', points: 8 },
        { value: 'promotion-internal', label: 'Promotion within current organization', points: 6 },
        { value: 'role-expansion', label: 'Significant role expansion', points: 7 },
        { value: 'turnaround', label: 'Turnaround/crisis situation', points: 10 },
        { value: 'transformation', label: 'Leading major transformation', points: 9 },
        { value: 'new-market', label: 'Entering new market/geography', points: 8 }
      ]
    },
    {
      id: 'complexity',
      title: 'Complexity Factors (Select all that apply)',
      type: 'checkbox' as const,
      options: [
        { value: 'matrix-reporting', label: 'Matrix reporting structures', points: 2 },
        { value: 'multiple-stakeholders', label: 'Multiple competing stakeholder groups', points: 3 },
        { value: 'board-exposure', label: 'Regular board/executive committee exposure', points: 3 },
        { value: 'cross-cultural', label: 'Cross-cultural team management', points: 2 },
        { value: 'regulatory', label: 'Heavy regulatory environment', points: 2 },
        { value: 'public-company', label: 'Public company/investor relations', points: 3 },
        { value: 'merger', label: 'M&A integration responsibilities', points: 4 },
        { value: 'digital-transformation', label: 'Leading digital transformation', points: 3 }
      ]
    },
    {
      id: 'timeframe',
      title: 'Transition Timeline',
      type: 'radio' as const,
      options: [
        { value: 'already-started', label: 'Already started (first 90 days)', points: 8 },
        { value: 'within-month', label: 'Starting within 1 month', points: 10 },
        { value: '1-3-months', label: '1-3 months', points: 8 },
        { value: '3-6-months', label: '3-6 months', points: 6 },
        { value: 'over-6-months', label: 'Over 6 months', points: 3 },
        { value: 'exploring', label: 'Just exploring options', points: 1 }
      ]
    },
    {
      id: 'primaryChallenge',
      title: 'Primary Challenge You\'re Facing',
      type: 'radio' as const,
      options: [
        { value: 'stakeholder-dynamics', label: 'Complex stakeholder dynamics', points: 5 },
        { value: 'cultural-integration', label: 'Cultural integration challenges', points: 4 },
        { value: 'team-performance', label: 'Inherited team performance issues', points: 4 },
        { value: 'strategic-execution', label: 'Strategy execution at scale', points: 5 },
        { value: 'change-resistance', label: 'Organizational change resistance', points: 4 },
        { value: 'personal-effectiveness', label: 'Personal leadership effectiveness', points: 3 },
        { value: 'decision-making', label: 'Decision-making under complexity', points: 4 },
        { value: 'executive-presence', label: 'Executive presence and influence', points: 3 }
      ]
    }
  ]

  const calculateResult = (data: AssessmentData): AssessmentResult => {
    let totalScore = 0
    
    // Calculate base score from single-select questions
    const singleSelectQuestions = questions.filter(q => q.type === 'radio')
    singleSelectQuestions.forEach(question => {
      const selectedValue = data[question.id as keyof AssessmentData] as string
      const option = question.options.find(opt => opt.value === selectedValue)
      if (option) totalScore += option.points
    })
    
    // Add complexity factors
    const complexityPoints = data.complexity.reduce((sum, factor) => {
      const complexityQuestion = questions.find(q => q.id === 'complexity')!
      const option = complexityQuestion.options.find(opt => opt.value === factor)
      return sum + (option ? option.points : 0)
    }, 0)
    totalScore += complexityPoints
    
    // Determine qualification
    let qualification: AssessmentResult['qualification']
    let recommendation: string
    let nextSteps: string[]
    
    if (totalScore >= 45) {
      qualification = 'qualified'
      recommendation = 'You meet the criteria for Executive Transition Architecture. Your complexity score indicates significant benefit from systematic transition engineering.'
      nextSteps = [
        'Schedule your complimentary 90-minute Strategic Assessment',
        'Receive comprehensive transition complexity analysis',
        'Develop preliminary stakeholder navigation strategy',
        'Determine optimal engagement structure for your situation'
      ]
    } else if (totalScore >= 30) {
      qualification = 'borderline'
      recommendation = 'You have moderate complexity that could benefit from executive coaching. A strategic conversation would help determine the best approach.'
      nextSteps = [
        'Schedule a 30-minute qualification call',
        'Discuss your specific transition challenges',
        'Explore alternative support structures',
        'Consider targeted executive coaching interventions'
      ]
    } else {
      qualification = 'not-qualified'
      recommendation = 'Based on your current situation, you may not require the full Executive Transition Architecture. However, strategic guidance could still be valuable.'
      nextSteps = [
        'Consider executive coaching for specific challenges',
        'Explore peer advisory groups in your region',
        'Review our published frameworks and resources',
        'Reconnect when your complexity increases'
      ]
    }
    
    return {
      score: totalScore,
      qualification,
      recommendation,
      nextSteps
    }
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      const result = calculateResult(assessmentData)
      setResult(result)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (questionId: string, value: string | string[]) => {
    setAssessmentData(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const isStepComplete = () => {
    const currentQuestion = questions[currentStep]
    const currentValue = assessmentData[currentQuestion.id as keyof AssessmentData]
    
    if (currentQuestion.type === 'checkbox') {
      return Array.isArray(currentValue) && currentValue.length > 0
    }
    return currentValue && currentValue !== ''
  }

  if (result) {
    return (
      <FadeIn>
        <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-neutral-950/5">
          <div className="text-center mb-8">
            <h3 className="font-display text-2xl font-semibold text-brand-navy">
              Executive Complexity Assessment
            </h3>
            <div className="mt-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-brand-blue-50 text-brand-navy font-medium">
                Complexity Score: {result.score}/70
              </span>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl ${
              result.qualification === 'qualified' ? 'bg-green-50 border border-green-200' :
              result.qualification === 'borderline' ? 'bg-yellow-50 border border-yellow-200' :
              'bg-neutral-50 border border-neutral-200'
            }`}>
              <h4 className="font-display text-lg font-semibold text-neutral-950 mb-3">
                Assessment Result
              </h4>
              <p className="text-neutral-600">{result.recommendation}</p>
            </div>
            
            <div>
              <h4 className="font-display text-lg font-semibold text-neutral-950 mb-4">
                Recommended Next Steps
              </h4>
              <ul className="space-y-3">
                {result.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-neutral-600">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {result.qualification === 'qualified' && (
              <div className="mt-8 text-center">
                <Button href="#booking" className="inline-flex">
                  Schedule Strategic Assessment
                </Button>
                <p className="mt-3 text-sm text-neutral-500">
                  Complimentary 90-minute session • Complete confidentiality • NDA provided
                </p>
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    )
  }

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <FadeIn>
      <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-neutral-950/5">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-display text-xl font-semibold text-brand-navy">
              Executive Complexity Assessment
            </h3>
            <span className="text-sm text-neutral-500">
              {currentStep + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-neutral-200 rounded-full h-2">
            <div 
              className="bg-brand-blue h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <div className="mb-8">
          <h4 className="font-display text-lg font-medium text-neutral-950 mb-4">
            {currentQuestion.title}
          </h4>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option) => (
              <label key={option.value} className="flex items-center p-3 rounded-lg border border-neutral-200 hover:border-brand-blue cursor-pointer transition-colors">
                <input
                  type={currentQuestion.type}
                  name={currentQuestion.id}
                  value={option.value}
                  checked={
                    currentQuestion.type === 'radio' 
                      ? assessmentData[currentQuestion.id as keyof AssessmentData] === option.value
                      : (assessmentData[currentQuestion.id as keyof AssessmentData] as string[])?.includes(option.value)
                  }
                  onChange={(e) => {
                    if (currentQuestion.type === 'radio') {
                      handleInputChange(currentQuestion.id, e.target.value)
                    } else {
                      const currentValues = assessmentData[currentQuestion.id as keyof AssessmentData] as string[] || []
                      const newValues = e.target.checked
                        ? [...currentValues, option.value]
                        : currentValues.filter(v => v !== option.value)
                      handleInputChange(currentQuestion.id, newValues)
                    }
                  }}
                  className="mr-3"
                />
                <span className="text-neutral-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="px-6 py-2 text-neutral-600 disabled:text-neutral-400 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!isStepComplete()}
            className="px-6 py-2 bg-brand-navy text-white rounded-lg disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors"
          >
            {currentStep === questions.length - 1 ? 'Complete Assessment' : 'Next'}
          </button>
        </div>
      </div>
    </FadeIn>
  )
}