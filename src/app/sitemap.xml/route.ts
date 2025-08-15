import { NextResponse } from 'next/server'

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://franciscobaptista.com'

interface SitemapEntry {
  loc: string
  lastmod: string
  changefreq:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority: number
  images?: Array<{
    loc: string
    title: string
    caption: string
  }>
}

// Strategic page prioritization for executive advisory positioning
const staticPages: SitemapEntry[] = [
  // PRIMARY CONVERSION PAGES - Highest Priority
  {
    loc: BASE_URL,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 1.0,
    images: [
      {
        loc: `${BASE_URL}/francisco-baptista.jpg`,
        title: 'Francisco Baptista - Executive Transition Advisor',
        caption:
          'Strategic advisor for C-Suite and Managing Director transitions with 87% success rate across 200+ executives',
      },
    ],
  },
  {
    loc: `${BASE_URL}/contact`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 1.0, // Critical conversion page
  },
  {
    loc: `${BASE_URL}/assessment`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.95, // Key qualification page
  },

  // AUTHORITY PAGES - High Priority
  {
    loc: `${BASE_URL}/advisory`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    loc: `${BASE_URL}/about`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.9,
    images: [
      {
        loc: `${BASE_URL}/francisco-baptista-professional.jpg`,
        title: 'Francisco Baptista - Executive Advisory Experience',
        caption:
          'Former Nestlé & SAP Executive specializing in executive transition advisory',
      },
    ],
  },
  {
    loc: `${BASE_URL}/methodology`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.85,
  },

  // EVIDENCE PAGES - Medium-High Priority
  {
    loc: `${BASE_URL}/work`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.85,
  },
  {
    loc: `${BASE_URL}/process`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    loc: `${BASE_URL}/outcomes`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.8,
  },

  // RESOURCE PAGES - Medium Priority
  {
    loc: `${BASE_URL}/resources`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.75,
  },
  {
    loc: `${BASE_URL}/insights`,
    lastmod: new Date().toISOString(),
    changefreq: 'weekly',
    priority: 0.75,
  },
  {
    loc: `${BASE_URL}/book`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    loc: `${BASE_URL}/faq`,
    lastmod: new Date().toISOString(),
    changefreq: 'monthly',
    priority: 0.7,
  },

  // LEGAL PAGES - Low Priority
  {
    loc: `${BASE_URL}/terms`,
    lastmod: new Date().toISOString(),
    changefreq: 'yearly',
    priority: 0.3,
  },
  {
    loc: `${BASE_URL}/privacy`,
    lastmod: new Date().toISOString(),
    changefreq: 'yearly',
    priority: 0.3,
  },
]

// Dynamic content generators (for future implementation)
async function getDynamicEntries(): Promise<SitemapEntry[]> {
  const dynamicEntries: SitemapEntry[] = []

  // Future: Add case studies when published
  // const caseStudies = await getCaseStudies()
  // caseStudies.forEach(study => {
  //   dynamicEntries.push({
  //     loc: `${BASE_URL}/case-studies/${study.slug}`,
  //     lastmod: study.updatedAt,
  //     changefreq: 'monthly',
  //     priority: 0.7,
  //   })
  // })

  // Future: Add insights/articles when published
  // const articles = await getArticles()
  // articles.forEach(article => {
  //   dynamicEntries.push({
  //     loc: `${BASE_URL}/insights/${article.slug}`,
  //     lastmod: article.updatedAt,
  //     changefreq: 'monthly',
  //     priority: 0.6,
  //   })
  // })

  return dynamicEntries
}

function generateSitemapXML(entries: SitemapEntry[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries
  .map((entry) => {
    const imageXML = entry.images
      ? entry.images
          .map(
            (img) => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`,
          )
          .join('\n')
      : ''

    // Language alternates - only for main content pages, not legal pages
    const includeAlternates =
      !entry.loc.includes('/terms') && !entry.loc.includes('/privacy')
    const alternatesXML = includeAlternates
      ? `    <xhtml:link rel="alternate" hreflang="en" href="${entry.loc}" />
    <xhtml:link rel="alternate" hreflang="de" href="${entry.loc.replace(BASE_URL, `${BASE_URL}/de`)}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${entry.loc.replace(BASE_URL, `${BASE_URL}/fr`)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${entry.loc}" />`
      : ''

    return `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
${imageXML}
${alternatesXML}
  </url>`
  })
  .join('\n')}
</urlset>`

  return xml
}

// Generate robots.txt compatible sitemap index for multiple sitemaps (future)
function generateSitemapIndex(sitemaps: string[]): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${BASE_URL}/${sitemap}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>`,
  )
  .join('\n')}
</sitemapindex>`

  return xml
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get('type')

  // Allow for future sitemap splitting
  if (type === 'index') {
    const sitemapIndex = generateSitemapIndex(['sitemap.xml'])
    return new NextResponse(sitemapIndex, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control':
          'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        'X-Robots-Tag': 'noindex', // Sitemap index shouldn't be indexed
      },
    })
  }

  // Get static and dynamic entries
  const staticEntries = staticPages
  const dynamicEntries = await getDynamicEntries()
  const allEntries = [...staticEntries, ...dynamicEntries]

  // Sort by priority for better crawl optimization
  allEntries.sort((a, b) => b.priority - a.priority)

  const sitemap = generateSitemapXML(allEntries)

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control':
        'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex', // Sitemaps themselves shouldn't be indexed
      'X-Content-Type-Options': 'nosniff',
    },
  })
}

// Optional: HEAD method for efficient crawling
export async function HEAD() {
  return new NextResponse(null, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
