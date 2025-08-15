// JSON-LD Schema type  
export interface JsonLdSchema {
  '@context': string | string[] | Record<string, unknown>
  '@type'?: string | string[]
  '@graph'?: unknown[]
  [key: string]: unknown
}

export interface BreadcrumbItem {
  position: number
  name: string
  item?: string
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ReviewItem {
  author: string
  role?: string
  company?: string
  rating: number
  reviewBody: string
  datePublished?: string
}

export interface CaseStudyItem {
  name: string
  description: string
  industry: string
  challenge: string
  solution: string
  result: string
  duration?: string
  datePublished?: string
}

export const generateOrganizationSchema = (): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://franciscobaptista.com/#organization',
  name: 'Francisco Baptista - Executive Transition Architecture',
  alternateName: 'Executive Transition Architect',
  url: 'https://franciscobaptista.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://franciscobaptista.com/images/francisco-baptista.jpg',
    width: 1200,
    height: 1200,
  },
  image: 'https://franciscobaptista.com/images/francisco-baptista.jpg',
  description:
    'Specialized Executive Transition Adviros for Managing Directors and C-Suite executives navigating complex organizational transitions with €50M+ P&L responsibilities.',
  founder: {
    '@type': 'Person',
    '@id': 'https://franciscobaptista.com/#francisco',
    name: 'Francisco Baptista',
    jobTitle: 'Executive Transition Advisor',
    alumniOf: [
      {
        '@type': 'Organization',
        name: 'Nestlé',
      },
      {
        '@type': 'Organization',
        name: 'SAP',
      },
    ],
    knowsAbout: [
      'Executive Transitions',
      'C-Suite Integration',
      'Managing Director Onboarding',
      'Leadership Architecture',
      'Organizational Transformation',
      'Board-Level Advisory',
      'P&L Management',
      'Change Management',
      'Executive Coaching',
      'Strategic Planning',
    ],
    sameAs: [
      'https://www.linkedin.com/in/franciscobaptista-exco',
      'https://bsky.app/profile/franciscobaptista.com',
    ],
  },
  areaServed: {
    '@type': 'Place',
    name: 'Europe',
  },
  serviceArea: {
    '@type': 'AdministrativeArea',
    name: 'Global',
  },
  priceRange: '€€€€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '24',
    reviewCount: '24',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Executive Transition Services',
    itemListElement: [
      {
        '@type': 'Service',
        name: 'Executive Transition Architecture',
        description:
          'Systematic methodology for executive transitions with 87% success rate',
        provider: {
          '@type': 'Person',
          name: 'Francisco Baptista',
        },
        serviceType: 'Executive Consulting',
        areaServed: 'Global',
      },
      {
        '@type': 'Service',
        name: 'Managing Director Integration',
        description:
          'Specialized integration architecture for Managing Directors with €50M+ P&L',
        provider: {
          '@type': 'Person',
          name: 'Francisco Baptista',
        },
        serviceType: 'Executive Integration',
        areaServed: 'Global',
      },
      {
        '@type': 'Service',
        name: 'C-Suite Transition Strategy',
        description:
          'Board-level advisory for C-Suite transitions in complex organizations',
        provider: {
          '@type': 'Person',
          name: 'Francisco Baptista',
        },
        serviceType: 'Strategic Advisory',
        areaServed: 'Global',
      },
    ],
  },
  slogan:
    'Executive transitions have a 50% failure rate. The patterns are predictable.',
  foundingDate: '2020',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Executive Inquiries',
    email: 'francisco@franciscobaptista.com',
    url: 'https://franciscobaptista.com/contact',
    availableLanguage: ['English', 'German', 'Portuguese'],
  },
})

export const generatePersonSchema = (): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://franciscobaptista.com/#francisco',
  name: 'Francisco Baptista',
  givenName: 'Francisco',
  familyName: 'Baptista',
  jobTitle: 'Executive Transition Advisor',
  description:
    'Executive Transition Architect specializing in complex organizational transitions for Managing Directors and C-Suite executives.',
  url: 'https://franciscobaptista.com',
  image: 'https://franciscobaptista.com/images/francisco-baptista.jpg',
  sameAs: [
    'https://www.linkedin.com/in/franciscobaptista',
    'https://bsky.app/profile/franciscobaptista.com',
  ],
  alumniOf: [
    {
      '@type': 'Organization',
      name: 'Nestlé',
    },
    {
      '@type': 'Organization',
      name: 'SAP',
    },
  ],
  worksFor: {
    '@type': 'Organization',
    '@id': 'https://franciscobaptista.com/#organization',
    name: 'Francisco Baptista - Executive Transition Architecture',
  },
  knowsAbout: [
    {
      '@type': 'Thing',
      name: 'Executive Transitions',
      description:
        'Systematic methodology for navigating executive role transitions',
    },
    {
      '@type': 'Thing',
      name: 'C-Suite Integration',
      description: 'Integration architecture for C-level executives',
    },
    {
      '@type': 'Thing',
      name: 'Managing Director Onboarding',
      description:
        'Specialized onboarding for MDs with significant P&L responsibility',
    },
    {
      '@type': 'Thing',
      name: 'Leadership Architecture',
      description:
        'Structural approach to leadership development and integration',
    },
    {
      '@type': 'Thing',
      name: 'Inner Team Dynamics',
      description: 'Proprietary methodology for executive self-leadership',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Executive Coaching Certification',
      credentialCategory: 'Professional Certification',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Organizational Psychology',
      credentialCategory: 'Advanced Degree',
    },
  ],
})

export const generateWebsiteSchema = (): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://franciscobaptista.com/#website',
  url: 'https://franciscobaptista.com',
  name: 'Francisco Baptista - Executive Transition Architecture',
  description:
    'Executive Transition Architecture for Managing Directors and C-Suite executives',
  publisher: {
    '@id': 'https://franciscobaptista.com/#organization',
  },
  // Removed SearchAction as search endpoint doesn't exist
  inLanguage: 'en-US',
})

export const generateBreadcrumbSchema = (items: BreadcrumbItem[]): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item) => ({
    '@type': 'ListItem',
    position: item.position,
    name: item.name,
    item: item.item,
  })),
})

export const generateFAQSchema = (items: FAQItem[]): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})

export const generateServiceSchema = (
  name: string,
  description: string,
  features: string[],
  price?: string,
): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  provider: {
    '@id': 'https://franciscobaptista.com/#francisco',
  },
  serviceType: 'Executive Consulting',
  areaServed: 'Global',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: `${name} Features`,
    itemListElement: features.map((feature, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: feature,
      },
      position: index + 1,
    })),
  },
  offers: price
    ? {
        '@type': 'Offer',
        priceRange: price,
        priceCurrency: 'EUR',
      }
    : undefined,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '24',
  },
})

export const generateArticleSchema = (
  title: string,
  description: string,
  datePublished: string,
  dateModified?: string,
  imageUrl?: string,
): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  author: {
    '@id': 'https://franciscobaptista.com/#francisco',
  },
  publisher: {
    '@id': 'https://franciscobaptista.com/#organization',
  },
  datePublished,
  dateModified: dateModified || datePublished,
  image: imageUrl || 'https://franciscobaptista.com/francisco-baptista.jpg',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://franciscobaptista.com',
  },
})

export const generateCaseStudySchema = (caseStudy: CaseStudyItem): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Case',
  name: caseStudy.name,
  description: caseStudy.description,
  about: {
    '@type': 'Thing',
    name: caseStudy.industry,
  },
  potentialAction: {
    '@type': 'SolvAction',
    name: 'Executive Transition Solution',
    result: {
      '@type': 'Thing',
      description: caseStudy.result,
    },
  },
  contributor: {
    '@id': 'https://franciscobaptista.com/#francisco',
  },
  datePublished: caseStudy.datePublished,
  text: `Challenge: ${caseStudy.challenge}. Solution: ${caseStudy.solution}. Result: ${caseStudy.result}`,
})

export const generateReviewSchema = (reviews: ReviewItem[]): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Executive Transition Architecture Services',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: reviews.length.toString(),
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author,
      jobTitle: review.role,
      worksFor: review.company
        ? {
            '@type': 'Organization',
            name: review.company,
          }
        : undefined,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  })),
})

export const generateHowToSchema = (): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Executive Transition Architecture Process',
  description: 'Systematic methodology for successful executive transitions',
  // image: 'https://franciscobaptista.com/process-diagram.png', // Add when diagram exists
  totalTime: 'P90D',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'EUR',
    value: '50000-150000',
  },
  supply: [
    {
      '@type': 'HowToSupply',
      name: 'Executive Assessment',
    },
    {
      '@type': 'HowToSupply',
      name: 'Stakeholder Mapping',
    },
    {
      '@type': 'HowToSupply',
      name: 'Integration Plan',
    },
  ],
  tool: [
    {
      '@type': 'HowToTool',
      name: 'Inner Team Dynamics Framework',
    },
    {
      '@type': 'HowToTool',
      name: 'Executive Integration Architecture',
    },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'System Analysis',
      text: 'Map internal dynamics and organizational context',
      url: 'https://franciscobaptista.com/process',
    },
    {
      '@type': 'HowToStep',
      name: 'Integration Engineering',
      text: 'Design and implement transition architecture',
      url: 'https://franciscobaptista.com/process',
    },
    {
      '@type': 'HowToStep',
      name: 'Sustainable Mastery',
      text: 'Establish long-term success patterns',
      url: 'https://franciscobaptista.com/process',
    },
  ],
  performTime: 'P90D',
  yield: 'Successful executive transition with 87% success rate',
})

// Event schema removed - no events currently
// Uncomment and update if events are added later
/*
export const generateEventSchema = (
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  location: string,
  isOnline: boolean = false,
): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': isOnline ? 'OnlineEvent' : 'Event',
  name,
  description,
  startDate,
  endDate,
  location: isOnline
    ? {
        '@type': 'VirtualLocation',
        url: 'https://franciscobaptista.com/events',
      }
    : {
        '@type': 'Place',
        name: location,
        address: location,
      },
  organizer: {
    '@id': 'https://franciscobaptista.com/#francisco',
  },
  performer: {
    '@id': 'https://franciscobaptista.com/#francisco',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://franciscobaptista.com/contact',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
})
*/

export const generateSpecialtySchema = (): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Specialty',
  name: 'Executive Transition Architecture',
  description:
    'Specialized methodology for managing complex executive transitions with predictable success patterns',
  associatedAnatomy: {
    '@type': 'Thing',
    name: 'Organizational Leadership Structure',
  },
  relatedCondition: [
    {
      '@type': 'MedicalCondition',
      name: 'Executive Transition Failure',
      description:
        '40% of executive transitions fail, costing €2.5M per failure',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Integration Complexity',
      description: 'Complex stakeholder dynamics and organizational resistance',
    },
  ],
  relatedTherapy: {
    '@type': 'MedicalTherapy',
    name: 'Inner Team Dynamics Methodology',
    description:
      'Proprietary framework for executive self-leadership and integration',
  },
})

// Course schema removed - no courses currently
// Uncomment and update if courses are added later
/*
export const generateCourseSchema = (): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Executive Transition Mastery',
  description: 'Comprehensive program for mastering executive transitions',
  provider: {
    '@id': 'https://franciscobaptista.com/#organization',
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'blended',
    instructor: {
      '@id': 'https://franciscobaptista.com/#francisco',
    },
    courseWorkload: 'P90D',
  },
  teaches: [
    'Executive self-awareness',
    'Stakeholder management',
    'Organizational navigation',
    'Strategic communication',
    'Leadership presence',
  ],
  educationalLevel: 'Executive',
  occupationalCategory: 'C-Suite and Managing Directors',
})
*/

// Removed generateSearchActionSchema as search endpoint doesn't exist
// If you add search functionality later, uncomment and update:
// export const generateSearchActionSchema = () => ({...})

export const generateKnowledgeGraphSchema = (): JsonLdSchema => ({
  '@context': 'https://schema.org',
  '@graph': [
    generateOrganizationSchema(),
    generatePersonSchema(),
    generateWebsiteSchema(),
    generateSpecialtySchema(),
    // generateCourseSchema(), // Commented out - no courses currently
    {
      '@type': 'ItemList',
      name: 'Executive Transition Expertise Areas',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Managing Director Transitions',
          description:
            'Specialized support for MDs with €50M+ P&L responsibility',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'C-Suite Integration',
          description: 'Board-level advisory for C-level executive transitions',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Technical Leadership',
          description: 'CTO/CPO transitions in complex technical organizations',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Cross-Cultural Transitions',
          description: 'International executive transitions across cultures',
        },
      ],
    },
    {
      '@type': 'DataFeed',
      name: 'Executive Transition Insights',
      dataFeedElement: [
        {
          '@type': 'DataFeedItem',
          item: {
            '@type': 'Article',
            headline: '40% of Executive Transitions Fail',
            description:
              'Analysis of executive transition failure patterns and prevention strategies',
          },
        },
        {
          '@type': 'DataFeedItem',
          item: {
            '@type': 'Article',
            headline: 'The Architecture of Executive Success',
            description:
              'Systematic approach to engineering successful transitions',
          },
        },
      ],
    },
  ],
})

export const combineSchemas = (...schemas: (JsonLdSchema | null | undefined)[]) => {
  return schemas.filter(Boolean) as JsonLdSchema[]
}
