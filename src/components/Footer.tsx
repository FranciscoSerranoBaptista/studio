import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Navigation',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Resources', href: '/resources' },
      { title: 'Assessment', href: '/assessment' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
]

function Navigation() {
  return (
    <nav>
      <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-[#003C71]">
              {section.title}
            </div>
            <ul className="mt-4 text-sm text-[#333333]">
              {section.links.map((link) => (
                <li key={link.href} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-brand-navy"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function AssessmentCallToAction() {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-[#003C71]">
        Francisco Baptista
      </h2>
      <p className="mt-2 text-xs text-[#333333]">
        Executive Transition Advisor
      </p>
      <p className="mt-4 text-sm text-[#333333]">
        200+ executives. 87% success rate. Systematic intervention for
        high-stakes transitions.
      </p>
      <div className="mt-6">
        <Link
          href="/assessment"
          className="inline-flex items-center rounded-lg bg-[#003C71] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#002A52]"
        >
          Request Assessment
          <ArrowIcon className="ml-2 w-4" />
        </Link>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <AssessmentCallToAction />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-[#666666]">
            © {new Date().getFullYear()} Francisco Baptista | Executive
            Transition Advisor
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
