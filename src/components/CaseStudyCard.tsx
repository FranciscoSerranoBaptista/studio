import Script from 'next/script'

export interface CaseStudy {
  id: string
  title: string
  role: string
  industry: string
  company?: string
  challenge: string
  solution: string
  outcome: string
  metrics?: {
    label: string
    value: string
  }[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  duration?: string
  dateCompleted?: string
  tags?: string[]
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy
  detailed?: boolean
  schema?: boolean
  className?: string
}

export default function CaseStudyCard({
  caseStudy,
  detailed = false,
  schema = true,
  className = '',
}: CaseStudyCardProps) {
  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Case',
    '@id': `https://franciscobaptista.com/work#${caseStudy.id}`,
    name: caseStudy.title,
    description: `${caseStudy.role} in ${caseStudy.industry}: ${caseStudy.challenge}`,
    about: {
      '@type': 'Thing',
      name: caseStudy.industry,
      description: caseStudy.role,
    },
    potentialAction: {
      '@type': 'SolvAction',
      name: 'Executive Transition Solution',
      result: {
        '@type': 'Thing',
        description: caseStudy.outcome,
      },
    },
    contributor: {
      '@type': 'Person',
      name: 'Francisco Baptista',
      jobTitle: 'Executive Transition Architect',
    },
    datePublished: caseStudy.dateCompleted,
    hasPart: caseStudy.metrics?.map((metric) => ({
      '@type': 'QuantitativeValue',
      name: metric.label,
      value: metric.value,
    })),
    review: caseStudy.testimonial
      ? {
          '@type': 'Review',
          author: {
            '@type': 'Person',
            name: caseStudy.testimonial.author,
            jobTitle: caseStudy.testimonial.role,
          },
          reviewBody: caseStudy.testimonial.quote,
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
        }
      : undefined,
  }

  return (
    <article
      className={`rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 ${className}`}
      itemScope
      itemType="https://schema.org/Case"
      itemProp="hasPart"
    >
      {schema && (
        <Script
          id={`case-study-schema-${caseStudy.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(caseStudySchema),
          }}
          strategy="afterInteractive"
        />
      )}

      {/* Header */}
      <header className="border-b border-gray-200 pb-4">
        <div className="flex items-start justify-between">
          <div>
            <h3
              className="text-lg font-semibold text-gray-900"
              itemProp="name"
            >
              {caseStudy.title}
            </h3>
            <div className="mt-1 flex items-center gap-x-2 text-sm text-gray-600">
              <span itemProp="about">{caseStudy.role}</span>
              <span className="text-gray-400">•</span>
              <span>{caseStudy.industry}</span>
              {caseStudy.company && (
                <>
                  <span className="text-gray-400">•</span>
                  <span>{caseStudy.company}</span>
                </>
              )}
            </div>
          </div>
          {caseStudy.duration && (
            <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              {caseStudy.duration}
            </span>
          )}
        </div>
      </header>

      {/* Challenge */}
      <section className="mt-6">
        <h4 className="text-sm font-semibold text-gray-900">Challenge</h4>
        <p className="mt-2 text-sm text-gray-600" itemProp="description">
          {caseStudy.challenge}
        </p>
      </section>

      {/* Solution */}
      <section className="mt-4">
        <h4 className="text-sm font-semibold text-gray-900">Solution</h4>
        <p className="mt-2 text-sm text-gray-600">
          {caseStudy.solution}
        </p>
      </section>

      {/* Outcome */}
      <section className="mt-4">
        <h4 className="text-sm font-semibold text-gray-900">Outcome</h4>
        <p
          className="mt-2 text-sm text-gray-600"
          itemProp="potentialAction"
          itemScope
          itemType="https://schema.org/SolvAction"
        >
          <span itemProp="result">{caseStudy.outcome}</span>
        </p>
      </section>

      {/* Metrics */}
      {caseStudy.metrics && caseStudy.metrics.length > 0 && (
        <section className="mt-6">
          <h4 className="text-sm font-semibold text-gray-900">Key Metrics</h4>
          <dl className="mt-3 grid grid-cols-2 gap-4">
            {caseStudy.metrics.map((metric, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-50 px-3 py-2"
                itemProp="hasPart"
                itemScope
                itemType="https://schema.org/QuantitativeValue"
              >
                <dt className="text-xs text-gray-500" itemProp="name">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-gray-900" itemProp="value">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {/* Testimonial */}
      {caseStudy.testimonial && detailed && (
        <blockquote
          className="mt-6 border-l-4 border-blue-600 pl-4"
          itemProp="review"
          itemScope
          itemType="https://schema.org/Review"
        >
          <p className="text-sm italic text-gray-600" itemProp="reviewBody">
            "{caseStudy.testimonial.quote}"
          </p>
          <footer
            className="mt-2"
            itemProp="author"
            itemScope
            itemType="https://schema.org/Person"
          >
            <p className="text-sm text-gray-900">
              <span className="font-semibold" itemProp="name">
                {caseStudy.testimonial.author}
              </span>
              {' — '}
              <span className="text-gray-600" itemProp="jobTitle">
                {caseStudy.testimonial.role}
              </span>
            </p>
          </footer>
          <meta itemProp="reviewRating" content="5" />
        </blockquote>
      )}

      {/* Tags */}
      {caseStudy.tags && caseStudy.tags.length > 0 && (
        <footer className="mt-6">
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                itemProp="keywords"
              >
                {tag}
              </span>
            ))}
          </div>
        </footer>
      )}

      {/* Hidden metadata for AI */}
      <div className="sr-only" aria-hidden="true">
        <meta itemProp="contributor" content="Francisco Baptista" />
        <meta itemProp="datePublished" content={caseStudy.dateCompleted} />
        <p>
          Executive transition case study: {caseStudy.role} in {caseStudy.industry}.
          Challenge: {caseStudy.challenge}. 
          Solution: {caseStudy.solution}. 
          Outcome: {caseStudy.outcome}.
        </p>
      </div>
    </article>
  )
}