import { type Metadata } from 'next'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { BookingWidget } from '@/components/BookingWidget'

function DiscoveryCallDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-2xl font-semibold text-brand-navy">
        Executive Discovery Call
      </h2>
      <p className="mt-6 text-lg text-neutral-600">
        30 minutes | Completely Confidential | No cost
      </p>
      
      <div className="mt-8 space-y-6">
        <div>
          <h3 className="font-display text-base font-semibold text-brand-navy">
            What to expect:
          </h3>
          <ul className="mt-3 space-y-2 text-base text-neutral-600">
            <li>• Share what you&apos;re really facing—not the corporate version</li>
            <li>• Explore your single most impactful leadership opportunity</li>
            <li>• Understand how Inner Team Dynamics™ applies to your situation</li>
            <li>• Determine if we&apos;re a good fit for transformation work</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-display text-base font-semibold text-brand-navy">
            This isn&apos;t a sales conversation
          </h3>
          <p className="mt-2 text-base text-neutral-600">
            It&apos;s your space to gain clarity on your leadership challenges and explore what authentic transformation looks like for you.
          </p>
        </div>
        
        <div className="border-t border-neutral-200 pt-6">
          <p className="text-sm text-neutral-500 italic">
            Three partnership spots available this quarter
          </p>
        </div>
      </div>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Book Your Executive Discovery Call | Francisco Baptista',
  description: 'Schedule a confidential 30-minute Discovery Call to explore your most impactful leadership opportunity. No cost, no sales conversation—just clarity.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro 
        eyebrow="Ready to Transform?" 
        title="Book Your Executive Discovery Call"
      >
        <p>
          This isn&apos;t a sales conversation. It&apos;s your space to share what you&apos;re really facing—not the corporate version, but the actual challenge. Together we&apos;ll explore your single most impactful leadership opportunity.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <BookingWidget />
          <DiscoveryCallDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
