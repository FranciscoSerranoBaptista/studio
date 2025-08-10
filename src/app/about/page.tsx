import type { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import imageFranciscoBaptista from '@/images/francisco-baptista.jpg'









export const metadata: Metadata = {
  title: 'About - Executive Transition Architect',
  description:
    'Francisco Baptista prevents executive failure. 200+ executives, 87% success rate. Authority without journey language.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Executive Transition Architect"
        title="I prevent executive failure."
      >
        <p>
          200+ senior executives. 15 countries. 87% success rate.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FadeIn>
            <div className="text-center">
              <Image
                src={imageFranciscoBaptista}
                alt="Francisco Baptista"
                className="aspect-square rounded-2xl object-cover mx-auto w-48"
              />
            </div>
          </FadeIn>
          
          <FadeIn className="lg:col-span-2">
            <div className="space-y-6">
              <p className="text-lg text-[#333333]">
                I prevent executive failure in high-stakes transitions.
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm text-[#666666]">
                <div>200+ executives</div>
                <div>87% success rate</div>
                <div>12 years singular focus</div>
                <div>MIT, Hogan, IFS credentials</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-medium text-[#003C71] mb-8">
              The Difference
            </h2>
            
            <div className="space-y-8 text-[#333333]">
              <div>
                <h3 className="text-lg font-semibold text-[#003C71] mb-3">
                  Why architecture not coaching
                </h3>
                <p>
                  Coaches help you find answers. I tell you what's happening based on 200+ patterns.
                  Coaches support. I architect. It's the difference between therapy and surgery.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#003C71] mb-3">
                  Why 100 days matter
                </h3>
                <p>
                  Day 30: They're forming opinions. Day 60: They're making decisions. 
                  Day 90: The verdict is set. Your first 100 days are unrepeatable.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#003C71] mb-3">
                  Why methodology works
                </h3>
                <p>
                  Executive Integration Architecture™ identifies and integrates competing 
                  internal forces that create external friction. Systematic, not mystical.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-[#003C71] px-6 py-20 sm:px-10 sm:py-32 md:px-20">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-medium text-white sm:text-4xl">
                Learn the Process
              </h2>
              <p className="mt-6 text-lg text-white/80">
                For analytical buyers who need to understand the methodology 
                before strategic assessment.
              </p>
              <div className="mt-10">
                <a 
                  href="/process"
                  className="inline-block bg-white text-[#003C71] font-medium px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Learn the Process
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
