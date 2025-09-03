import type { Metadata } from 'next'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import imageFranciscoBaptista from '@/images/personal/Francisco022.jpg'









export const metadata: Metadata = {
  title: 'About - Francisco Baptista',
  description:
    'I work with senior leaders who are brilliant at their jobs and exhausted by the performance. Inner shifts. Outer victories.',
}

export default function About() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="ABOUT"
        title="I'm Francisco."
      >
        <p>
          After 12 years working with 200+ senior executives, I noticed something:
        </p>
        <p>
          The ones who succeeded weren&apos;t smarter. They weren&apos;t more strategic. They weren&apos;t better connected.
        </p>
        <p>
          They were willing to stop pretending.
        </p>
      </PageIntro>

      {/* THE WORK */}
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
            <div className="space-y-6">
              <div className="space-y-4 text-lg text-[#333333]">
                <p>
                  My work exists in the space between therapy and consulting.
                </p>
                <p>
                  Where inner dynamics meet outer demands.
                </p>
                <p>
                  Where personal patterns create professional problems.
                </p>
                <p>
                  I don&apos;t help executives get better at being who they&apos;re not.
                </p>
                <p className="text-[#003C71] font-medium">
                  I help them integrate who they actually are.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* THE CONTEXT */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-[#003C71] mb-8">
              Currently working with 30 leaders
            </h2>
            <div className="space-y-4 text-lg text-[#333333]">
              <p>
                Across tech, pharma, finance, and media.
              </p>
              <p>
                All came by choice, not assignment.
              </p>
              <p>
                Most came through referrals from those who finally stopped performing their lives.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* THE CLOSE */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-[#003C71] px-6 py-20 sm:px-10 sm:py-32 md:px-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="space-y-6 text-lg text-white/90 mb-10">
                <p>
                  If you&apos;re ready to stop performing and start integrating,
                </p>
                <p>
                  If you&apos;re done with quick fixes and ready for real work,
                </p>
                <p>
                  If you choose depth over comfort,
                </p>
                <p className="text-xl font-medium text-white">
                  Let&apos;s talk.
                </p>
              </div>
              <div className="mt-10">
                <a 
                  href="/contact"
                  className="inline-block bg-white text-[#003C71] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg"
                >
                  Apply to work together
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
