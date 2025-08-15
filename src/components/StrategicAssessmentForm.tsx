'use client'

import { useState } from 'react'
import { FadeIn } from '@/components/FadeIn'

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
  { value: 'new-role', label: 'New to role (< 6 months)' },
  { value: 'expanding-scope', label: 'Expanding scope/promotion' },
  { value: 'transformation', label: 'Transformation mandate' },
  { value: 'succession', label: 'Succession preparation' },
  { value: 'performance', label: 'Performance acceleration' },
]

const urgencyOptions = [
  { value: 'immediate', label: 'Immediate (< 30 days)' },
  { value: 'quarter', label: 'Quarter ahead (30-90 days)' },
  { value: 'strategic', label: 'Strategic planning (90+ days)' },
]

const matrixOptions = [
  { value: '1', label: '1 - Simple reporting structure' },
  { value: '2', label: '2 - Some cross-functional dependencies' },
  { value: '3', label: '3 - Multiple stakeholder groups' },
  { value: '4', label: '4 - Complex matrix with competing priorities' },
  { value: '5', label: '5 - Highly complex multi-dimensional matrix' },
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
    valuableAssessment: '',
  })

  const [currentSection, setCurrentSection] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sections = [
    {
      title: 'Essential Information',
      description: 'Basic executive profile and contact details',
    },
    {
      title: 'Qualification Accelerators',
      description: 'Organizational context and complexity factors',
    },
    {
      title: 'Strategic Context',
      description: 'Critical assessment questions and success criteria',
    },
  ]

  const handleInputChange = (
    field: keyof AssessmentFormData,
    value: string | string[],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleCheckboxChange = (
    field: keyof AssessmentFormData,
    value: string,
    checked: boolean,
  ) => {
    const currentValues = formData[field] as string[]
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v) => v !== value)
    handleInputChange(field, newValues)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      console.log('Sending strategic assessment:', formData)
      
      // Format data for EmailJS template
      const emailData = {
        to_email: process.env.NEXT_PUBLIC_NOTIFICATION_EMAIL || 'francisco@example.com',
        from_name: 'Executive Transition Advisory',
        subject: `🎯 Strategic Assessment Request - ${formData.name}`,
        
        // Executive Details
        executive_name: formData.name,
        executive_title: formData.title,
        executive_organization: formData.organization,
        executive_email: formData.email,
        executive_phone: formData.phone || 'Not provided',
        
        // Transition Context
        transition_context: Array.isArray(formData.transitionContext) 
          ? formData.transitionContext.join(', ') 
          : formData.transitionContext,
        urgency_timeline: formData.urgencyTimeline,
        
        // Strategic Questions
        stakes_question: formData.stakesQuestion,
        valuable_assessment: formData.valuableAssessment,
        
        // Complexity Indicators
        pl_responsibility: formData.plResponsibility || 'Not provided',
        team_size_direct: formData.teamSizeDirect || 'Not provided',
        team_size_total: formData.teamSizeTotal || 'Not provided',
        geographic_scope: formData.geographicScope || 'Not provided',
        matrix_complexity: formData.matrixComplexity || 'Not provided',
        
        // Metadata
        timestamp: new Date().toLocaleString(),
        booking_reminder: 'Reply with booking link for qualified executives'
      }
      
      const payload = {
        service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        template_params: emailData
      }
      
      console.log('Sending to EmailJS:', {
        hasServiceId: !!payload.service_id,
        hasTemplateId: !!payload.template_id,
        hasUserId: !!payload.user_id
      })
      
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      
      console.log('EmailJS response status:', response.status)
      
      if (!response.ok) {
        throw new Error(`EmailJS failed with status: ${response.status}`)
      }
      
      console.log('Strategic assessment submitted successfully')
      setSubmitted(true)
      
    } catch (error) {
      console.error('Error submitting strategic assessment:', error)
      alert('There was an error submitting your assessment. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isCurrentSectionValid = () => {
    switch (currentSection) {
      case 0:
        return (
          formData.name &&
          formData.title &&
          formData.organization &&
          formData.email
        )
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
        <div className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-neutral-950/5">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-8 w-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-labelledby="success-checkmark-title"
            >
              <title id="success-checkmark-title">Success checkmark</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h3 className="mb-4 font-display text-2xl font-semibold text-brand-navy">
            Strategic Evaluation Initiated
          </h3>

          <div className="mx-auto max-w-2xl space-y-4 text-left">
            <div className="rounded-lg border border-brand-blue-200 bg-brand-blue-50 p-6">
              <h4 className="mb-4 font-display text-lg font-semibold text-brand-navy">
                Next Steps:
              </h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                <li className="flex items-start">
                  <span className="mr-2 font-medium text-brand-navy">•</span>
                  Assessment scheduling link sent upon acceptance
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-medium text-brand-navy">•</span>
                  Mutual NDA for signature
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-medium text-brand-navy">•</span>
                  Pre-assessment strategic questionnaire
                </li>
                <li className="flex items-start">
                  <span className="mr-2 font-medium text-brand-navy">•</span>
                  Reading: &ldquo;Executive Transition Failure Taxonomy&rdquo;
                </li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-sm text-neutral-600">
                <strong>Strategic evaluation initiated.</strong>
                <br />
                We evaluate mutual fit based on complexity requirements, transition stakes, and systematic intervention scope.
                <br />
                <span className="mt-2 block italic">
                  Response within 48 hours with strategic fit assessment and next steps.
                </span>
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    )
  }

  return (
    <FadeIn>
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-neutral-950/5"
      >
        <div className="mb-8">
          <h3 className="mb-2 font-display text-2xl font-semibold text-brand-navy">
            Request Strategic Assessment
          </h3>
          <p className="text-neutral-600">
            45-minute diagnostic session for senior executives navigating
            high-stakes transitions
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            {sections.map((section, index) => (
              <div
                key={section.title}
                className={`flex items-center ${index < sections.length - 1 ? 'flex-1' : ''}`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium ${
                    currentSection >= index
                      ? 'border-brand-navy bg-brand-navy text-white'
                      : 'border-neutral-300 text-neutral-300'
                  }`}
                >
                  {index + 1}
                </div>
                <div className="ml-3">
                  <div
                    className={`text-sm font-medium ${
                      currentSection >= index
                        ? 'text-brand-navy'
                        : 'text-neutral-400'
                    }`}
                  >
                    {section.title}
                  </div>
                </div>
                {index < sections.length - 1 && (
                  <div
                    className={`ml-4 h-px flex-1 ${
                      currentSection > index
                        ? 'bg-brand-navy'
                        : 'bg-neutral-300'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-neutral-500">
            {sections[currentSection].description}
          </p>
        </div>

        {/* Section Content */}
        {currentSection === 0 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-neutral-700">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="title" className="mb-2 block text-sm font-medium text-neutral-700">
                  Title *
                </label>
                <input
                  id="title"
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="organization" className="mb-2 block text-sm font-medium text-neutral-700">
                Organization *
              </label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) =>
                  handleInputChange('organization', e.target.value)
                }
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-neutral-700">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-neutral-700">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div>
              <label htmlFor="linkedin" className="mb-2 block text-sm font-medium text-neutral-700">
                LinkedIn Profile
              </label>
              <input
                id="linkedin"
                type="url"
                value={formData.linkedinProfile}
                onChange={(e) =>
                  handleInputChange('linkedinProfile', e.target.value)
                }
                placeholder="https://linkedin.com/in/..."
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>
        )}

        {currentSection === 1 && (
          <div className="space-y-6">
            <fieldset>
              <legend className="mb-4 block text-sm font-medium text-neutral-700">
                Current Transition Context (Select all that apply) *
              </legend>
              <div className="space-y-3">
                {transitionContextOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.transitionContext.includes(
                        option.value,
                      )}
                      onChange={(e) =>
                        handleCheckboxChange(
                          'transitionContext',
                          option.value,
                          e.target.checked,
                        )
                      }
                      className="mr-3 rounded"
                    />
                    <span className="text-neutral-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="plResponsibility" className="mb-2 block text-sm font-medium text-neutral-700">
                  P&L Responsibility (€/CHF)
                </label>
                <input
                  id="plResponsibility"
                  type="text"
                  value={formData.plResponsibility}
                  onChange={(e) =>
                    handleInputChange('plResponsibility', e.target.value)
                  }
                  placeholder="e.g. €100M"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                />
              </div>

              <div>
                <label htmlFor="geographicScope" className="mb-2 block text-sm font-medium text-neutral-700">
                  Geographic Scope
                </label>
                <input
                  id="geographicScope"
                  type="text"
                  value={formData.geographicScope}
                  onChange={(e) =>
                    handleInputChange('geographicScope', e.target.value)
                  }
                  placeholder="e.g. EMEA, Global, Switzerland"
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="teamSizeDirect" className="mb-2 block text-sm font-medium text-neutral-700">
                  Team Size (Direct Reports)
                </label>
                <input
                  id="teamSizeDirect"
                  type="number"
                  value={formData.teamSizeDirect}
                  onChange={(e) =>
                    handleInputChange('teamSizeDirect', e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                />
              </div>

              <div>
                <label htmlFor="teamSizeTotal" className="mb-2 block text-sm font-medium text-neutral-700">
                  Total Team Size (Including Indirect)
                </label>
                <input
                  id="teamSizeTotal"
                  type="number"
                  value={formData.teamSizeTotal}
                  onChange={(e) =>
                    handleInputChange('teamSizeTotal', e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="matrixComplexity" className="mb-2 block text-sm font-medium text-neutral-700">
                  Matrix Complexity
                </label>
                <select
                  id="matrixComplexity"
                  value={formData.matrixComplexity}
                  onChange={(e) =>
                    handleInputChange('matrixComplexity', e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
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
                <label htmlFor="urgencyTimeline" className="mb-2 block text-sm font-medium text-neutral-700">
                  Urgency Timeline *
                </label>
                <select
                  id="urgencyTimeline"
                  value={formData.urgencyTimeline}
                  onChange={(e) =>
                    handleInputChange('urgencyTimeline', e.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
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
              <label htmlFor="stakesQuestion" className="mb-2 block text-sm font-medium text-neutral-700">
                What&apos;s at stake if this transition doesn&apos;t succeed? *
              </label>
              <p className="mb-3 text-xs text-neutral-500">
                This question helps us understand your real motivation and the
                true cost of failure.
              </p>
              <textarea
                id="stakesQuestion"
                value={formData.stakesQuestion}
                onChange={(e) =>
                  handleInputChange('stakesQuestion', e.target.value)
                }
                rows={4}
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                placeholder="Consider organizational impact, career implications, team consequences..."
                required
              />
            </div>

            <div>
              <label htmlFor="valuableAssessment" className="mb-2 block text-sm font-medium text-neutral-700">
                What would need to be true for you to consider this assessment
                the most valuable 45 minutes of your quarter? *
              </label>
              <p className="mb-3 text-xs text-neutral-500">
                This helps us tailor the assessment to deliver maximum strategic
                value.
              </p>
              <textarea
                id="valuableAssessment"
                value={formData.valuableAssessment}
                onChange={(e) =>
                  handleInputChange('valuableAssessment', e.target.value)
                }
                rows={4}
                className="w-full rounded-lg border border-neutral-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-brand-blue"
                placeholder="What insights, strategies, or breakthroughs would make this invaluable?"
                required
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex justify-between border-t border-neutral-200 pt-6">
          <button
            type="button"
            onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
            disabled={currentSection === 0}
            className="px-6 py-2 text-neutral-600 disabled:cursor-not-allowed disabled:text-neutral-400"
          >
            Previous
          </button>

          {currentSection < sections.length - 1 ? (
            <button
              type="button"
              onClick={() => setCurrentSection(currentSection + 1)}
              disabled={!isCurrentSectionValid()}
              className="rounded-lg bg-brand-navy px-6 py-2 text-white transition-colors disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isCurrentSectionValid() || isSubmitting}
              className="rounded-lg bg-brand-navy px-8 py-2 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Assessment Request'}
            </button>
          )}
        </div>
      </form>
    </FadeIn>
  )
}
