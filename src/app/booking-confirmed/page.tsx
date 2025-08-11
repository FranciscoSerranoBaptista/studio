import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { Button } from '@/components/Button'

export const metadata: Metadata = {
  title: 'Assessment Confirmed - Executive Transition Advisory',
  description: 'Your Executive Assessment is confirmed. Next steps and preparation guidance.',
}

export default function BookingConfirmed() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto mb-8 bg-[#004225] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            
            <h1 className="font-display text-4xl font-medium text-[#003C71] sm:text-5xl mb-6">
              Your Executive Transition Assessment is confirmed.
            </h1>
            
            <p className="text-xl text-[#333333] mb-12">
              You&apos;ll receive a calendar invitation with our video meeting link shortly.
            </p>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#F5F5F5] rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-[#003C71] mb-6">
                To maximize our time together:
              </h2>
              
              <ul className="space-y-4 text-[#333333]">
                <li className="flex items-start">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#003C71] flex-shrink-0 mr-4" />
                  <span>Be prepared to discuss your actual situation candidly</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#003C71] flex-shrink-0 mr-4" />
                  <span>No preparation needed beyond reflection on your current challenges</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[#003C71] flex-shrink-0 mr-4" />
                  <span>This conversation is completely confidential</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-[#CCCCCC]">
                <p className="text-[#666666] text-sm mb-4">
                  If you need to reschedule, please provide 48 hours notice.
                </p>
                
                <div className="text-[#333333]">
                  <p className="font-medium">Francisco Baptista</p>
                  <p className="text-sm text-[#666666]">Executive Transition Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <FadeIn>
          <div className="text-center">
            <div className="space-y-4 text-sm text-[#666666] mb-8">
              <p>Questions before our meeting?</p>
              <p>Contact us directly or review our process.</p>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button href="/process">
                Review Process
              </Button>
              <Button href="/">
                Return Home
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}