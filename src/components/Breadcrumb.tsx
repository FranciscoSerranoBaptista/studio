import Link from 'next/link'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline'
import Script from 'next/script'

export interface BreadcrumbItem {
  name: string
  href?: string
  current?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  schema?: boolean
}

export default function Breadcrumb({ items, className = '', schema = true }: BreadcrumbProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://franciscobaptista.com',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.href ? `https://franciscobaptista.com${item.href}` : undefined,
      })),
    ],
  }

  return (
    <nav
      className={`flex ${className}`}
      aria-label="Breadcrumb"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      {schema && (
        <Script
          id="breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
          strategy="afterInteractive"
        />
      )}

      <ol role="list" className="flex items-center space-x-2">
        {/* Home Link */}
        <li itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
          <div>
            <Link
              href="/"
              className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
              itemProp="item"
              aria-label="Go to homepage"
            >
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only" itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </div>
        </li>

        {/* Breadcrumb Items */}
        {items.map((item, index) => (
          <li
            key={item.name}
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-300"
                aria-hidden="true"
              />
              {item.current ? (
                <span
                  className="ml-2 text-sm font-medium text-gray-900"
                  aria-current="page"
                  itemProp="name"
                >
                  {item.name}
                </span>
              ) : item.href ? (
                <Link
                  href={item.href}
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              ) : (
                <span className="ml-2 text-sm font-medium text-gray-500" itemProp="name">
                  {item.name}
                </span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </div>
          </li>
        ))}
      </ol>

      {/* Hidden semantic content for AI */}
      <div className="sr-only" aria-hidden="true">
        <p>
          Navigation path: Home
          {items.map((item) => ` > ${item.name}`).join('')}
        </p>
      </div>
    </nav>
  )
}

// Utility function to generate breadcrumb items from pathname
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumbs: BreadcrumbItem[] = []

  const nameMap: Record<string, string> = {
    about: 'About Francisco',
    work: 'Case Studies',
    process: 'Methodology',
    contact: 'Strategic Assessment',
    assessment: 'Executive Assessment',
    resources: 'Executive Resources',
    book: 'Book Consultation',
    'booking-confirmed': 'Booking Confirmed',
  }

  segments.forEach((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join('/')}`
    const isLast = index === segments.length - 1
    const name = nameMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

    breadcrumbs.push({
      name,
      href: isLast ? undefined : href,
      current: isLast,
    })
  })

  return breadcrumbs
}