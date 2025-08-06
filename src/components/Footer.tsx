import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'Services',
    links: [
      { title: 'Executive Coaching', href: '/process' },
      { title: 'Inner Team Dynamics™', href: '/process' },
      { title: 'Leadership Development', href: '/work' },
      {
        title: (
          <>
            View Case Studies <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '/work',
      },
    ],
  },
  {
    title: 'About',
    links: [
      { title: 'Francisco Baptista', href: '/about' },
      { title: 'Methodology', href: '/process' },
      { title: 'Insights', href: '/blog' },
      { title: 'Book Discovery Call', href: '/contact' },
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
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-brand-navy">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
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

function CoachingCallToAction() {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-brand-navy">
        Ready to Transform Your Leadership?
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Discover your Inner Team Dynamics™ and unlock your full executive potential.
      </p>
      <div className="mt-6">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-2xl bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy-800"
        >
          Book Discovery Call
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
            <CoachingCallToAction />
          </div>
        </div>
        <div className="mt-24 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <p className="text-sm text-neutral-700">
            © Francisco Baptista Executive Coaching {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  )
}
