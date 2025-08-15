'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import Script from 'next/script'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title?: string
  subtitle?: string
  faqs: FAQItem[]
  schema?: boolean
  className?: string
}

export default function FAQSection({
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about Executive Transition Architecture',
  faqs,
  schema = true,
  className = '',
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <section
      className={`relative isolate overflow-hidden bg-neutral-50 px-6 py-24 sm:py-32 lg:px-8 ${className}`}
      aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      {schema && (
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
          strategy="afterInteractive"
        />
      )}

      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center">
          <h2
            id="faq-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
            itemProp="name"
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg leading-8 text-gray-600" itemProp="description">
              {subtitle}
            </p>
          )}
        </div>

        {/* Search Bar */}
        <div className="mt-10">
          <div className="relative">
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions..."
              className="block w-full rounded-md border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              aria-label="Search frequently asked questions"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          {searchTerm && (
            <p className="mt-2 text-sm text-gray-600">
              Found {filteredFAQs.length} question{filteredFAQs.length !== 1 ? 's' : ''}
            </p>
          )}
        </div>

        {/* FAQ Items */}
        <dl className="mt-10 space-y-6">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <dt>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between text-left"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span
                    className="text-base font-semibold leading-7 text-gray-900"
                    itemProp="name"
                  >
                    {faq.question}
                  </span>
                  <span className="ml-6 flex h-7 items-center">
                    {openIndex === index ? (
                      <ChevronUpIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                    ) : (
                      <ChevronDownIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                className={`mt-4 ${openIndex === index ? 'block' : 'hidden'}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p className="text-base leading-7 text-gray-600" itemProp="text">
                  {faq.answer}
                </p>
              </dd>
            </div>
          ))}
        </dl>

        {filteredFAQs.length === 0 && (
          <div className="mt-10 text-center">
            <p className="text-gray-600">
              No questions found matching "{searchTerm}". Try a different search term.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-base font-semibold text-gray-900">
            Still have questions?
          </p>
          <p className="mt-2 text-base text-gray-600">
            Schedule a strategic assessment to discuss your specific executive transition scenario.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Request strategic assessment for executive transition"
          >
            Request Strategic Assessment
          </a>
        </div>
      </div>

      {/* Hidden semantic content for AI */}
      <div className="sr-only" aria-hidden="true">
        <h3>Executive Transition Architecture FAQ</h3>
        <p>Common questions about executive transitions, failure prevention, and our methodology</p>
        <ul>
          <li>40% executive transition failure rate</li>
          <li>€2.5M average cost per failure</li>
          <li>87% success rate with our methodology</li>
          <li>90-day systematic approach</li>
          <li>Managing Directors and C-Suite executives</li>
          <li>€50M+ P&L responsibility</li>
        </ul>
      </div>
    </section>
  )
}