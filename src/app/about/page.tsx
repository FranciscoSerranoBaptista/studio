import type { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import imageFranciscoBaptista from '@/images/personal/Francisco022.jpg'









export const metadata: Metadata = {
  title: 'About - Executive Transition Advisor',
  description:
    'Francisco Baptista prevents executive failure. 200+ executives, 87% success rate. Authority without journey language.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Executive Transition Advisor"
        title="I architect executive success."
      >
        <p>
          200+ senior executives. 15 countries. 87% success rate.
        </p>
      </PageIntro>

      <Container className="mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <FadeIn>
            <div className="flex justify-center lg:justify-start">
              <Image
                src={imageFranciscoBaptista}
                alt="Francisco Baptista"
                className="rounded-2xl object-cover w-80 h-80"
              />
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="space-y-8">
              <h2 className="text-2xl font-medium text-[#003C71]">
                I architect systematic success in high-stakes transitions.
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xl font-semibold text-[#003C71]">200+</div>
                  <div className="text-base text-[#333333]">executives</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#003C71]">87%</div>
                  <div className="text-base text-[#333333]">success rate</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#003C71]">12 years</div>
                  <div className="text-base text-[#333333]">singular focus</div>
                </div>
                <div>
                  <div className="text-xl font-semibold text-[#003C71]">MIT, Hogan, IFS</div>
                  <div className="text-base text-[#333333]">credentials</div>
                </div>
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
                  Why systematic diagnosis over coaching support
                </h3>
                <p>
                  Coaches help you find answers. I diagnose what&apos;s happening based on 200+ documented patterns.
                  Others support. I diagnose and architect solutions. It&apos;s the difference between therapy and surgery.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-[#003C71] mb-3">
                  Why 100 days matter
                </h3>
                <p>
                  Day 30: They&apos;re forming opinions. Day 60: They&apos;re making decisions. 
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
