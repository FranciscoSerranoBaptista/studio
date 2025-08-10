'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'

interface AssessmentFormData {
  // Essential Information
  name: string
  title: string
  organization: string
  linkedinProfile: string
  email: string
  phone: string
  
  // Qualification Accelerators
  transitionContext: string[]
  plResponsibility: string
  teamSizeDirect: string
  teamSizeTotal: string
  geographicScope: string
  matrixComplexity: string
  urgencyTimeline: string
  
  // Strategic Questions
  stakesQuestion: string
  valuableAssessment: string
}

const transitionContextOptions = [
  { value: 'new-role', label: 'New to role (&lt; 6 months)' },
  { value: 'expanding-scope', label: 'Expanding scope/promotion' },
  { value: 'transformation', label: 'Transformation mandate' },
  { value: 'succession', label: 'Succession preparation' },
  { value: 'performance', label: 'Performance acceleration' }
]

const urgencyOptions = [
  { value: 'immediate', label: 'Immediate (< 30 days)' },
  { value: 'quarter', label: 'Quarter ahead (30-90 days)' },
  { value: 'strategic', label: 'Strategic planning (90+ days)' }
]

const matrixOptions = [
  { value: '1', label: '1 - Simple reporting structure' },
  { value: '2', label: '2 - Some cross-functional dependencies' },
  { value: '3', label: '3 - Multiple stakeholder groups' },
  { value: '4', label: '4 - Complex matrix with competing priorities' },
  { value: '5', label: '5 - Highly complex multi-dimensional matrix' }
]

export function StrategicAssessmentForm() {
  const [formData, setFormData] = useState<AssessmentFormData>({
    name: '',
    title: '',
    organization: '',
    linkedinProfile: '',
    email: '',
    phone: '',
    transitionContext: [],
    plResponsibility: '',
    teamSizeDirect: '',
    teamSizeTotal: '',
    geographicScope: '',
    matrixComplexity: '',
    urgencyTimeline: '',
    stakesQuestion: '',
    valuableAssessment: ''
  })

  const [currentSection, setCurrentSection] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const sections = [
    {
      title: 'Essential Information',
      description: 'Basic executive profile and contact details'
    },
    {
      title: 'Qualification Accelerators',
      description: 'Organizational context and complexity factors'
    },
    {
      title: 'Strategic Context',
      description: 'Critical assessment questions and success criteria'
    }
  ]

  const handleInputChange = (field: keyof AssessmentFormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCheckboxChange = (field: keyof AssessmentFormData, value: string, checked: boolean) => {
    const currentValues = formData[field] as string[]
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter(v => v !== value)
    handleInputChange(field, newValues)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here would be the actual form submission logic
    console.log('Strategic Assessment Request:', formData)
    setSubmitted(true)
  }

  const isCurrentSectionValid = () => {
    switch (currentSection) {
      case 0:
        return formData.name && formData.title && formData.organization && formData.email
      case 1:
        return formData.transitionContext.length > 0 && formData.urgencyTimeline
      case 2:
        return formData.stakesQuestion && formData.valuableAssessment
      default:
        return false
    }
  }

  if (submitted) {
    return (
      <FadeIn>
        <div className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-neutral-950/5 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h3 className="font-display text-2xl font-semibold text-brand-navy mb-4">
            Assessment Request Submitted
          </h3>
          
          <div className="space-y-4 text-left max-w-2xl mx-auto">
            <div className="bg-brand-blue-50 border border-brand-blue-200 rounded-lg p-6">
              <h4 className="font-display text-lg font-semibold text-brand-navy mb-4">
                Next Steps:
              </h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="font-medium text-brand-navy mr-2">•</span>
                  Assessment scheduling link (3-5 business days)
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-brand-navy mr-2">•</span>
                  Mutual NDA for signature
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-brand-navy mr-2">•</span>
                  Pre-assessment strategic questionnaire
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-brand-navy mr-2">•</span>
                  Reading: &ldquo;The Five Patterns of Executive Failure&rdquo;
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-neutral-500 italic">
                Applications are reviewed within 48 hours.<br/>
                Not all applications are accepted.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm ring-1 ring-neutral-950/5">
        <div className="mb-8">
          <h3 className="font-display text-2xl font-semibold text-brand-navy mb-2">
            Request Strategic Assessment
          </h3>
          <p className="text-neutral-600">
            90-minute diagnostic session for senior executives navigating high-stakes transitions
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {sections.map((section, index) => (
              <div 
                key={index}
                className={`flex items-center ${index < sections.length - 1 ? 'flex-1' : ''}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                  currentSection >= index 
                    ? 'bg-brand-navy border-brand-navy text-white' 
                    : 'border-neutral-300 text-neutral-300'
                }`}>
                  {index + 1}
                </div>
                <div className="ml-3">
                  <div className={`text-sm font-medium ${
                    currentSection >= index ? 'text-brand-navy' : 'text-neutral-400'
                  }`}>
                    {section.title}
                  </div>
                </div>
                {index < sections.length - 1 && (
                  <div className={`flex-1 h-px ml-4 ${
                    currentSection > index ? 'bg-brand-navy' : 'bg-neutral-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-500">{sections[currentSection].description}</p>
        </div>

        {/* Section Content */}
        {currentSection === 0 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Organization *
              </label>
              <input
                type="text"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                LinkedIn Profile
              </label>
              <input
                type="url"
                value={formData.linkedinProfile}
                onChange={(e) => handleInputChange('linkedinProfile', e.target.value)}
                placeholder="https://linkedin.com/in/..."
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
              />
            </div>
          </div>
        )}

        {currentSection === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-4">
                Current Transition Context (Select all that apply) *
              </label>
              <div className="space-y-3">
                {transitionContextOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.transitionContext.includes(option.value)}
                      onChange={(e) => handleCheckboxChange('transitionContext', option.value, e.target.checked)}
                      className="mr-3 rounded"
                    />
                    <span className="text-neutral-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  P&L Responsibility (€/CHF)
                </label>
                <input
                  type="text"
                  value={formData.plResponsibility}
                  onChange={(e) => handleInputChange('plResponsibility', e.target.value)}
                  placeholder="e.g. €100M"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Geographic Scope
                </label>
                <input
                  type="text"
                  value={formData.geographicScope}
                  onChange={(e) => handleInputChange('geographicScope', e.target.value)}
                  placeholder="e.g. EMEA, Global, Switzerland"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Team Size (Direct Reports)
                </label>
                <input
                  type="number"
                  value={formData.teamSizeDirect}
                  onChange={(e) => handleInputChange('teamSizeDirect', e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Total Team Size (Including Indirect)
                </label>
                <input
                  type="number"
                  value={formData.teamSizeTotal}
                  onChange={(e) => handleInputChange('teamSizeTotal', e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Matrix Complexity
                </label>
                <select
                  value={formData.matrixComplexity}
                  onChange={(e) => handleInputChange('matrixComplexity', e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                >
                  <option value="">Select complexity level...</option>
                  {matrixOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Urgency Timeline *
                </label>
                <select
                  value={formData.urgencyTimeline}
                  onChange={(e) => handleInputChange('urgencyTimeline', e.target.value)}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  required
                >
                  <option value="">Select timeline...</option>
                  {urgencyOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {currentSection === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                What&apos;s at stake if this transition doesn&apos;t succeed? *
              </label>
              <p className="text-xs text-neutral-500 mb-3">
                This question helps us understand your real motivation and the true cost of failure.
              </p>
              <textarea
                value={formData.stakesQuestion}
                onChange={(e) => handleInputChange('stakesQuestion', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="Consider organizational impact, career implications, team consequences..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                What would need to be true for you to consider this assessment the most valuable 90 minutes of your quarter? *
              </label>
              <p className="text-xs text-neutral-500 mb-3">
                This helps us tailor the assessment to deliver maximum strategic value.
              </p>
              <textarea
                value={formData.valuableAssessment}
                onChange={(e) => handleInputChange('valuableAssessment', e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                placeholder="What insights, strategies, or breakthroughs would make this invaluable?"
                required
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-neutral-200">
          <button
            type="button"
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="px-6 py-2 text-neutral-600 disabled:text-neutral-400 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {currentSection < sections.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentSection(currentSection + 1)}
              disabled={!isCurrentSectionValid()}
              className="px-6 py-2 bg-brand-navy text-white rounded-lg disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isCurrentSectionValid()}
              className="px-8 py-2 bg-brand-orange text-white rounded-lg disabled:bg-neutral-300 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Submit Assessment Request
            </button>
          )}
        </div>
      </form>
    </FadeIn>
  )
}