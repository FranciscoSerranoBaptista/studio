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
        eyebrow="ABOUT"
        title="I prevent executive failure in high-stakes transitions."
      >
        <p>
          Not through coaching. Through systematic diagnosis and architectural intervention.
        </p>
      </PageIntro>

      {/* THE PRACTICE */}
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
                THE PRACTICE
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-[#003C71]">200+</div>
                  <div className="text-base text-[#333333]">senior executives navigated successfully</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-[#003C71]">15</div>
                  <div className="text-base text-[#333333]">countries of operational complexity</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-[#003C71]">87%</div>
                  <div className="text-base text-[#333333]">success rate versus 40% industry average</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-xl font-semibold text-[#003C71]">12 years</div>
                  <div className="text-base text-[#333333]">of singular focus on transition architecture</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>

      {/* THE REALITY */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-[#003C71] mb-8">
              THE REALITY
            </h2>
            <div className="space-y-4 text-lg text-[#333333]">
              <p>
                Every day, brilliant executives fail. Not from incompetence, but from integration blindness.
              </p>
              <p>
                They can&apos;t see the patterns. The organization won&apos;t tell them. By day 100, it&apos;s too late.
              </p>
              <p>
                I diagnose what others can&apos;t see. I architect what others can&apos;t build.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* THE DIFFERENCE */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-[#003C71] mb-8">
              THE DIFFERENCE
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-[#003C71] mb-4">
                  Why Systematic Diagnosis Over Coaching Support
                </h3>
                <div className="space-y-3 text-[#333333]">
                  <p>
                    Coaches help you find answers. I diagnose what&apos;s happening based on documented patterns from 200+ transitions.
                  </p>
                  <p>
                    Others support your journey. I identify your failure trajectory and architect course corrections.
                  </p>
                  <p>
                    It&apos;s the difference between therapy and surgery. Both have value. Only one saves you when time is critical.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#003C71] mb-4">
                  Why 100 Days Matter
                </h3>
                <div className="space-y-3 text-[#333333]">
                  <p><strong>Day 30:</strong> They&apos;re forming opinions</p>
                  <p><strong>Day 60:</strong> They&apos;re making decisions</p>
                  <p><strong>Day 90:</strong> The verdict is set</p>
                  <p>
                    Your first 100 days are unrepeatable. What happens in this window determines the next 1,000.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#003C71] mb-4">
                  Why Methodology Works
                </h3>
                <div className="space-y-3 text-[#333333]">
                  <p>
                    Executive Integration Architecture™ identifies and integrates competing internal forces that create external friction.
                  </p>
                  <p>Not mystical. Systematic.</p>
                  <p>Not theoretical. Proven.</p>
                  <p>Not generic. Specific to your pattern.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* THE QUALIFICATION */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-[#003C71] mb-8">
              THE QUALIFICATION
            </h2>
            <div className="space-y-4 text-[#333333]">
              <p className="text-lg mb-6">
                I work exclusively with executives managing:
              </p>
              <ul className="space-y-3 text-lg">
                <li>• €50M+ P&L responsibility</li>
                <li>• Significant scope expansion</li>
                <li>• Cross-functional complexity</li>
                <li>• Board-level exposure</li>
              </ul>
              <p className="text-lg mt-6">
                This isn&apos;t elitism. It&apos;s specialization. Your challenges require specific expertise.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* THE INVESTMENT */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-[#003C71] mb-8">
              THE INVESTMENT
            </h2>
            <div className="space-y-4 text-lg text-[#333333]">
              <p>The cost of executive failure: €2.5 million.</p>
              <p>The investment in prevention: Proportional to the stakes.</p>
              <p>This isn&apos;t an expense. It&apos;s insurance on your trajectory.</p>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* THE PROCESS */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-[#003C71] mb-8">
              THE PROCESS
            </h2>
            <div className="space-y-4 text-[#333333]">
              <p><strong>Step 1:</strong> 90-minute Strategic Assessment (mutual evaluation)</p>
              <p><strong>Step 2:</strong> Pattern diagnosis and risk identification</p>
              <p><strong>Step 3:</strong> 90-day architectural intervention (if we proceed)</p>
              <p><strong>Step 4:</strong> Measurable integration success</p>
              <p className="text-lg mt-6">
                No packages. No templates. Architecture specific to your situation.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* THE PERSON */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-medium text-[#003C71] mb-8">
              THE PERSON
            </h2>
            <div className="space-y-4 text-lg text-[#333333]">
              <p>Francisco Baptista. Portuguese precision meets Swiss methodology.</p>
              <p>MIT Sloan Executive Education. Hogan Assessment Certification. IFS Practitioner.</p>
              <p>Based in Lausanne. Working globally. Three executives per quarter maximum.</p>
            </div>
          </div>
        </FadeIn>
      </Container>

      {/* THE DECISION */}
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <div className="rounded-3xl bg-[#003C71] px-6 py-20 sm:px-10 sm:py-32 md:px-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl font-medium text-white mb-8">
                THE DECISION
              </h2>
              <div className="space-y-6 text-lg text-white/90 mb-10">
                <p>
                  If you&apos;ve read this far, you recognize yourself in these patterns.
                </p>
                <p>
                  The question isn&apos;t whether you need intervention.
                </p>
                <p>
                  It&apos;s whether you&apos;ll get it before day 100.
                </p>
              </div>
              <div className="mt-10">
                <a 
                  href="/assessment"
                  className="inline-block bg-white text-[#003C71] font-semibold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg"
                >
                  Request Strategic Assessment
                </a>
                <p className="text-sm text-white/70 mt-4">
                  Qualified executives only. The assessment itself will change your trajectory.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
