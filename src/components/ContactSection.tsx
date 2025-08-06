import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Ready to architect your most powerful leadership future?
            </h2>
            <p className="mt-6 text-lg text-white/80">
              <strong>Start with an Executive Discovery Call</strong><br/>
              30 minutes | Completely Confidential | No cost
            </p>
            <p className="mt-4 text-base text-white/60">
              This isn't a sales conversation. It's your space to share what you're really facing—not the corporate version, but the actual challenge. Together we'll explore your single most impactful leadership opportunity.
            </p>
            <div className="mt-8 flex">
              <Button href="/contact" invert>
                Book Your Discovery Call
              </Button>
            </div>
            <p className="mt-6 text-sm text-white/60 italic">
              Three partnership spots available this quarter.
            </p>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Based near Geneva, Switzerland | Global Executive Practice
              </h3>
              <p className="mt-2 text-sm text-white/60">
                English | German | French
              </p>
              <p className="mt-4 text-sm text-white/60 italic">
                Your transformation doesn't require you to become someone else. It requires you to become fully yourself.
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
