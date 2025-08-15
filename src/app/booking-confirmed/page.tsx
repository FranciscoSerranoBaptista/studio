'use client'

import { useId } from 'react'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'

export default function BookingConfirmed() {
  const successIconId = useId()
  const confidentialityIconId = useId()
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            {/* Success Indicator */}
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#004225] to-[#003C71] shadow-lg">
              <svg
                className="h-10 w-10 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                aria-labelledby={successIconId}
              >
                <title id={successIconId}>
                  Booking confirmed checkmark
                </title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h1 className="mb-6 font-display text-4xl font-medium text-[#003C71] sm:text-5xl">
              Executive Transition Assessment Confirmed
            </h1>

            <p className="mb-4 text-xl leading-relaxed text-[#333333]">
              Your Executive Transition Assessment is scheduled. A calendar
              invitation with secure video link will arrive within 15 minutes.
            </p>

            <p className="text-base text-[#666666]">
              <span className="font-semibold">Duration:</span> 90 minutes of
              focused strategic dialogue
            </p>
          </div>
        </FadeIn>
      </Container>

      {/* Strategic Context Section */}
      <Container className="mt-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-gradient-to-br from-[#F8F8F8] to-[#F5F5F5] p-10 shadow-sm">
              <h2 className="mb-8 text-2xl font-semibold text-[#003C71]">
                What We'll Accomplish Together
              </h2>

              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 font-semibold text-[#003C71]">
                    Systematic Analysis
                  </h3>
                  <ul className="space-y-3 text-[#333333]">
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#003C71]" />
                      <span className="text-sm">
                        Map your transition complexity and stakeholder dynamics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#003C71]" />
                      <span className="text-sm">
                        Identify critical success factors and failure patterns
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#003C71]" />
                      <span className="text-sm">
                        Assess organizational readiness and resistance points
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-4 font-semibold text-[#003C71]">
                    Strategic Deliverables
                  </h3>
                  <ul className="space-y-3 text-[#333333]">
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#003C71]" />
                      <span className="text-sm">
                        Transition Risk Analysis with specific vulnerabilities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#003C71]" />
                      <span className="text-sm">
                        Preliminary 90-day architecture recommendations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mt-1.5 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#003C71]" />
                      <span className="text-sm">
                        Clear go/no-go decision framework for engagement
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Preparation Guidance */}
      <Container className="mt-16">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-10">
              <h2 className="mb-8 text-2xl font-semibold text-[#003C71]">
                Optimal Preparation
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F5F5F5]">
                    <span className="text-lg font-bold text-[#003C71]">1</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[#003C71]">
                      Reflect on Your Context
                    </h3>
                    <p className="text-sm leading-relaxed text-[#333333]">
                      Consider your stakeholder landscape, organizational
                      dynamics, and the specific complexities you're navigating.
                      What keeps you strategically alert at 3am?
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F5F5F5]">
                    <span className="text-lg font-bold text-[#003C71]">2</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[#003C71]">
                      Embrace Candor
                    </h3>
                    <p className="text-sm leading-relaxed text-[#333333]">
                      Our conversation operates under strict confidentiality.
                      The value of our assessment correlates directly with the
                      transparency of our dialogue. Surface realities, not
                      presentations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#F5F5F5]">
                    <span className="text-lg font-bold text-[#003C71]">3</span>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-[#003C71]">
                      Define Success
                    </h3>
                    <p className="text-sm leading-relaxed text-[#333333]">
                      What does exceptional look like in your context? Beyond
                      survival, what would constitute a transition that enhances
                      your executive trajectory?
                    </p>
                  </div>
                </div>
              </div>

              {/* Confidentiality Notice */}
              <div className="mt-10 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] p-6">
                <div className="flex items-start">
                  <svg
                    className="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-[#003C71]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-labelledby={confidentialityIconId}
                  >
                    <title id={confidentialityIconId}>
                      Confidentiality lock icon
                    </title>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                    />
                  </svg>
                  <div>
                    <h4 className="mb-2 font-semibold text-[#003C71]">
                      Complete Confidentiality
                    </h4>
                    <p className="text-sm leading-relaxed text-[#666666]">
                      This assessment operates under strict mutual
                      confidentiality. Our conversation exists outside
                      organizational boundaries, enabling the candid strategic
                      dialogue essential for accurate assessment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Context & Credibility */}
      <Container className="mt-16">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h3 className="mb-3 text-lg font-semibold text-[#003C71]">
                You're in Distinguished Company
              </h3>
              <p className="leading-relaxed text-[#666666]">
                Over 200 Managing Directors and C-Suite executives have
                undertaken this assessment.
                <br />
                87% of those who engaged achieved successful transitions, versus
                the 40% industry average.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Logistics & Next Steps */}
      <Container className="mt-16">
        <FadeIn>
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 font-semibold text-[#003C71]">
                    Meeting Logistics
                  </h4>
                  <ul className="space-y-2 text-sm text-[#333333]">
                    <li>
                      • Secure video conference link in calendar invitation
                    </li>
                    <li>• 90-minute dedicated strategic dialogue</li>
                    <li>• Camera preferred for optimal engagement</li>
                    <li>• Ensure private, uninterrupted environment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-4 font-semibold text-[#003C71]">
                    Rescheduling Policy
                  </h4>
                  <ul className="space-y-2 text-sm text-[#333333]">
                    <li>• 48-hour notice required for changes</li>
                    <li>• Use calendar link to reschedule</li>
                    <li>
                      • Emergency changes: francisco@franciscobaptista.com
                    </li>
                    <li>• One reschedule permitted per assessment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 border-t border-[#E5E5E5] pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-[#003C71]">
                      Francisco Baptista
                    </p>
                    <p className="text-sm text-[#666666]">
                      Executive Transition Advisor
                    </p>
                    <p className="mt-1 text-xs text-[#999999]">
                      Geneva, Switzerland
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#666666]">Direct inquiries:</p>
                    <a
                      href="mailto:francisco@franciscobaptista.com"
                      className="text-sm text-[#003C71] hover:underline"
                    >
                      francisco@franciscobaptista.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* Action Buttons */}
      <Container className="mt-16 mb-24">
        <FadeIn>
          <div className="text-center">
            <p className="mb-8 text-[#666666]">
              Prepare for our strategic dialogue by reviewing:
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button href="/methodology">Our Methodology</Button>
              <Button href="/process">Advisory Process</Button>
              <Button href="/faq">Common Questions</Button>
            </div>

            <div className="mt-12">
              <a
                href="/"
                className="text-sm text-[#666666] transition hover:text-[#003C71]"
              >
                Return to Homepage →
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
