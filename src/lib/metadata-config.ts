import { Metadata } from 'next'

export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  image?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  section?: string
  tags?: string[]
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://franciscobaptista.com'
const DEFAULT_IMAGE = `${BASE_URL}/francisco-baptista.jpg`

export const DEFAULT_METADATA: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Francisco Baptista - Executive Transition Architect',
    template: '%s | Francisco Baptista',
  },
  description: 'Executive Transition Architecture for Managing Directors and C-Suite executives navigating complex organizational transitions. 87% success rate vs 40% industry average.',
  keywords: [
    'executive transition',
    'managing director',
    'C-suite integration',
    'executive coaching',
    'leadership transition',
    'organizational transformation',
    'executive onboarding',
    'transition architecture',
    'board advisory',
    'P&L management',
    'Francisco Baptista',
    'executive failure prevention',
    'leadership integration',
    'strategic transition',
    'executive assessment',
  ],
  authors: [{ name: 'Francisco Baptista', url: BASE_URL }],
  creator: 'Francisco Baptista',
  publisher: 'Francisco Baptista - Executive Transition Architecture',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Francisco Baptista - Executive Transition Architect',
    description: 'Executive transitions have a 50% failure rate. The patterns are predictable. Systematic methodology for Managing Directors and C-Suite executives.',
    url: BASE_URL,
    siteName: 'Francisco Baptista - Executive Transition Architecture',
    images: [
      {
        url: DEFAULT_IMAGE,
        width: 1200,
        height: 1200,
        alt: 'Francisco Baptista - Executive Transition Architect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Baptista - Executive Transition Architect',
    description: 'Executive transitions have a 50% failure rate. The patterns are predictable.',
    creator: '@franciscobaptista',
    images: [DEFAULT_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
      'de-DE': `${BASE_URL}/de`,
      'pt-PT': `${BASE_URL}/pt`,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  category: 'Business Consulting',
}

export function generatePageMetadata(page: PageMetadata): Metadata {
  const url = page.canonical || BASE_URL
  const image = page.image || DEFAULT_IMAGE

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords?.join(', '),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: 'Francisco Baptista - Executive Transition Architecture',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: 'en_US',
      type: page.type || 'website',
      ...(page.type === 'article' && {
        publishedTime: page.publishedTime,
        modifiedTime: page.modifiedTime,
        authors: [page.author || 'Francisco Baptista'],
        section: page.section,
        tags: page.tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      creator: '@franciscobaptista',
      images: [image],
    },
  }
}

export const PAGE_METADATA: Record<string, PageMetadata> = {
  home: {
    title: 'Executive Transition Architect - Francisco Baptista',
    description: 'Executive transitions have a 50% failure rate. The patterns are predictable. Systematic methodology achieving 87% success rate for Managing Directors and C-Suite executives.',
    keywords: [
      'executive transition architect',
      'managing director transition',
      'C-suite onboarding',
      'executive failure prevention',
      'transition success rate',
      'organizational integration',
      'board-level advisory',
      '50M P&L management',
      'executive assessment',
      'transition methodology',
    ],
    canonical: BASE_URL,
  },
  about: {
    title: 'About Francisco Baptista - Executive Transition Architect',
    description: 'From Nestlé and SAP to Executive Transition Architecture. Creator of Inner Team Dynamics methodology. 100+ documented executive transformations with 87% success rate.',
    keywords: [
      'Francisco Baptista',
      'executive transition expert',
      'Nestlé experience',
      'SAP experience',
      'Inner Team Dynamics',
      'executive methodology',
      'transition architect',
      'leadership expert',
      'organizational psychology',
      'executive coach',
    ],
    canonical: `${BASE_URL}/about`,
    type: 'profile',
  },
  work: {
    title: 'Case Studies - Executive Transition Success Stories',
    description: 'Documented executive transitions: German Investment Banking MD, Swiss Technology CTO, Global Pharmaceutical VP. Real metrics, real transformations.',
    keywords: [
      'executive case studies',
      'transition success stories',
      'managing director case study',
      'CTO transition',
      'VP integration',
      'investment banking',
      'technology leadership',
      'pharmaceutical executive',
      'documented results',
      'executive testimonials',
    ],
    canonical: `${BASE_URL}/work`,
  },
  process: {
    title: 'Executive Transition Architecture Process',
    description: 'Inner Team Dynamics methodology: System Analysis, Integration Engineering, Sustainable Mastery. 90-day systematic approach for executive transitions.',
    keywords: [
      'executive transition process',
      'Inner Team Dynamics',
      'system analysis',
      'integration engineering',
      'sustainable mastery',
      'executive methodology',
      '90-day transition',
      'systematic approach',
      'transition framework',
      'executive integration',
    ],
    canonical: `${BASE_URL}/process`,
  },
  contact: {
    title: 'Strategic Assessment for Executive Transitions',
    description: '40% of executive transitions fail, costing €2.5M per failure. Request strategic assessment for Managing Directors and C-Suite executives with €50M+ P&L.',
    keywords: [
      'executive assessment',
      'strategic consultation',
      'transition assessment',
      'executive contact',
      'managing director consultation',
      'C-suite advisory',
      'transition risk assessment',
      'executive qualification',
      'strategic review',
      'executive inquiry',
    ],
    canonical: `${BASE_URL}/contact`,
  },
  resources: {
    title: 'Executive Transition Resources & Frameworks',
    description: 'Downloadable frameworks: Executive Complexity Criteria, Transition Architecture Blueprint, Inner Team Assessment. For qualified executives only.',
    keywords: [
      'executive resources',
      'transition frameworks',
      'executive tools',
      'complexity criteria',
      'transition blueprint',
      'assessment tools',
      'executive downloads',
      'leadership frameworks',
      'transition methodology',
      'executive materials',
    ],
    canonical: `${BASE_URL}/resources`,
  },
  assessment: {
    title: 'Executive Qualification Assessment',
    description: 'Determine your readiness for Executive Transition Architecture. 7-point assessment for Managing Directors and C-Suite executives.',
    keywords: [
      'executive assessment',
      'qualification criteria',
      'readiness assessment',
      'executive evaluation',
      'transition readiness',
      'leadership assessment',
      'executive qualification',
      'self-assessment',
      'transition criteria',
      'executive scoring',
    ],
    canonical: `${BASE_URL}/assessment`,
  },
}

export const ARTICLE_METADATA = {
  generateArticleMetadata: (
    title: string,
    description: string,
    slug: string,
    publishedTime: string,
    modifiedTime?: string,
    tags: string[] = [],
  ): PageMetadata => ({
    title,
    description,
    canonical: `${BASE_URL}/insights/${slug}`,
    type: 'article',
    publishedTime,
    modifiedTime: modifiedTime || publishedTime,
    author: 'Francisco Baptista',
    section: 'Executive Insights',
    tags: [...tags, 'executive transition', 'leadership', 'management'],
  }),
}

export const generateAlternateLinks = (currentPath: string) => {
  const languages = ['en', 'de', 'pt']
  return languages.map((lang) => ({
    hrefLang: lang,
    href: `${BASE_URL}/${lang}${currentPath}`,
  }))
}

export const generateBreadcrumbMetadata = (path: string) => {
  const segments = path.split('/').filter(Boolean)
  const breadcrumbs = [
    { name: 'Home', item: BASE_URL },
  ]

  let currentPath = BASE_URL
  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')
    breadcrumbs.push({
      name,
      item: currentPath,
    })
  })

  return breadcrumbs
}

export const SEO_CONTENT_MARKERS = {
  mainContent: 'main-content',
  navigation: 'navigation',
  header: 'header',
  footer: 'footer',
  article: 'article',
  aside: 'aside',
  breadcrumb: 'breadcrumb',
  searchForm: 'search-form',
}

export const SEMANTIC_TAGS = {
  execTitle: 'Executive Transition Architect',
  methodology: 'Executive Transition Architecture™',
  framework: 'Inner Team Dynamics™',
  targetAudience: ['Managing Directors', 'C-Suite Executives', 'Board Members'],
  problemSpace: ['Executive Transition Failure', 'Integration Complexity', 'Stakeholder Management'],
  solutionSpace: ['Systematic Methodology', 'Predictable Patterns', '87% Success Rate'],
  expertise: [
    'Executive Transitions',
    'C-Suite Integration',
    'Managing Director Onboarding',
    'Board-Level Advisory',
    'P&L Management €50M+',
    'Cross-Cultural Leadership',
    'Organizational Transformation',
    'Strategic Planning',
    'Change Management',
    'Executive Coaching',
  ],
  credentials: [
    'Nestlé Corporation',
    'SAP Global',
    '100+ Executive Transformations',
    '24+ Client Testimonials',
    '87% Success Rate',
    'Published Methodology',
  ],
}

export const META_DESCRIPTIONS = {
  shortForm: 'Executive transitions fail 40% of the time. Francisco Baptista: 87% success rate.',
  mediumForm: 'Executive Transition Architecture for Managing Directors and C-Suite executives. Systematic methodology preventing the 40% failure rate.',
  longForm: 'Francisco Baptista - Executive Transition Architect. Specialized methodology for Managing Directors and C-Suite executives navigating complex organizational transitions. From 40% industry failure rate to 87% success rate through systematic architecture.',
  value: 'Transform executive transition risk from 40% failure (€2.5M cost) to 87% success through proven Executive Transition Architecture.',
}

export const RICH_SNIPPETS = {
  rating: {
    value: 5,
    count: 24,
    bestRating: 5,
    worstRating: 1,
  },
  priceRange: '€€€€',
  servingArea: 'Global (Europe Focus)',
  languages: ['English', 'German', 'Portuguese'],
  availability: 'By Assessment',
  duration: '90 days typical engagement',
  resultMetric: '87% success rate',
}

export const AI_OPTIMIZATION_TAGS = [
  'executive:transition:architect',
  'managing:director:integration',
  'csuite:onboarding:expert',
  'transition:failure:prevention',
  'organizational:transformation:specialist',
  'board:advisory:consultant',
  'pnl:management:50m',
  'inner:team:dynamics:creator',
  'executive:assessment:methodology',
  'systematic:transition:framework',
]