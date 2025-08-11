import { type Metadata } from 'next'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { RootLayout } from '@/components/RootLayout'
import { BookingWidget } from '@/components/BookingWidget'

export const metadata: Metadata = {
  title: 'Book Assessment - Executive Transition Advisory',
  description: 'Schedule your complimentary 45-minute Executive Transition Assessment with Francisco Baptista.',
}

export default function Book() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="font-display text-4xl font-medium text-[#003C71] sm:text-5xl mb-6">
              Schedule Your Executive Transition Assessment
            </h1>
            
            <p className="text-xl text-[#333333] mb-8">
              Complimentary 45-minute strategic assessment for qualified executives.
            </p>
            
            <div className="bg-[#F5F5F5] rounded-2xl p-6 text-left max-w-lg mx-auto">
              <h3 className="text-lg font-semibold text-[#003C71] mb-4">
                What to expect:
              </h3>
              
              <ul className="space-y-2 text-[#333333] text-sm">
                <li className="flex items-start">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#003C71] flex-shrink-0 mr-3" />
                  <span>Comprehensive transition complexity analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#003C71] flex-shrink-0 mr-3" />
                  <span>Stakeholder dynamics mapping</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#003C71] flex-shrink-0 mr-3" />
                  <span>Success probability assessment</span>
                </li>
                <li className="flex items-start">
                  <div className="mt-1 h-1.5 w-1.5 rounded-full bg-[#003C71] flex-shrink-0 mr-3" />
                  <span>Next steps recommendation</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mb-24 sm:mb-32 lg:mb-40">
        <FadeIn>
          <div id="booking" className="max-w-4xl mx-auto">
            <BookingWidget />
          </div>
        </FadeIn>
      </Container>
      
      <Container className="mb-16">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm text-[#666666] space-y-2">
              <p><strong>Complete confidentiality:</strong> All discussions are protected by professional confidentiality standards.</p>
              <p><strong>No preparation required:</strong> Come ready to discuss your actual situation candidly.</p>
              <p><strong>Rescheduling:</strong> Please provide 48 hours notice for any changes.</p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}