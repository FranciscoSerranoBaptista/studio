import type React from 'react'

interface AccessibilityWrapperProps {
  children: React.ReactNode
  role?: string
  label?: string
  description?: string
  semanticTag?: keyof React.JSX.IntrinsicElements
  aiHints?: {
    purpose?: string
    context?: string
    priority?: 'high' | 'medium' | 'low'
    dataType?: string
  }
  schemaType?: string
  className?: string
}

export default function AccessibilityWrapper({
  children,
  role,
  label,
  description,
  semanticTag = 'div',
  aiHints,
  schemaType,
  className = '',
}: AccessibilityWrapperProps) {
  const Tag = semanticTag as React.ElementType
  
  return (
    <Tag
      className={className}
      role={role}
      aria-label={label}
      aria-describedby={description ? `${label}-description` : undefined}
      itemScope={schemaType ? true : undefined}
      itemType={schemaType ? `https://schema.org/${schemaType}` : undefined}
      data-ai-purpose={aiHints?.purpose}
      data-ai-context={aiHints?.context}
      data-ai-priority={aiHints?.priority}
      data-ai-type={aiHints?.dataType}
    >
      {description && (
        <span id={`${label}-description`} className="sr-only">
          {description}
        </span>
      )}
      {children}

      {/* Hidden AI interpretation helpers */}
      {aiHints && (
        <div className="sr-only" aria-hidden="true">
          <meta itemProp="ai-purpose" content={aiHints.purpose} />
          <meta itemProp="ai-context" content={aiHints.context} />
          <meta itemProp="ai-priority" content={aiHints.priority} />
        </div>
      )}
    </Tag>
  )
}

// Specialized wrappers for common patterns
export function NavigationWrapper({
  children,
  ...props
}: Omit<AccessibilityWrapperProps, 'semanticTag'>) {
  return (
    <AccessibilityWrapper
      semanticTag="nav"
      schemaType="SiteNavigationElement"
      aiHints={{
        purpose: 'primary-navigation',
        context: 'site-navigation',
        priority: 'high',
      }}
      {...props}
    >
      {children}
    </AccessibilityWrapper>
  )
}

export function MainContentWrapper({
  children,
  ...props
}: Omit<AccessibilityWrapperProps, 'semanticTag'>) {
  return (
    <AccessibilityWrapper
      semanticTag="main"
      label="Main content"
      aiHints={{
        purpose: 'primary-content',
        context: 'page-content',
        priority: 'high',
      }}
      {...props}
    >
      {children}
    </AccessibilityWrapper>
  )
}

export function ArticleWrapper({
  title,
  author = 'Francisco Baptista',
  datePublished,
  children,
  ...props
}: Omit<AccessibilityWrapperProps, 'semanticTag'> & {
  title: string
  author?: string
  datePublished?: string
}) {
  return (
    <AccessibilityWrapper
      semanticTag="article"
      schemaType="Article"
      label={title}
      aiHints={{
        purpose: 'article-content',
        context: 'executive-insights',
        priority: 'high',
        dataType: 'article',
      }}
      {...props}
    >
      <header className="sr-only">
        <h1 itemProp="headline">{title}</h1>
        <div itemProp="author" itemScope itemType="https://schema.org/Person">
          <span itemProp="name">{author}</span>
        </div>
        {datePublished && (
          <time itemProp="datePublished" dateTime={datePublished}>
            {datePublished}
          </time>
        )}
      </header>
      <div itemProp="articleBody">{children}</div>
    </AccessibilityWrapper>
  )
}

export function SectionWrapper({
  heading,
  children,
  ...props
}: Omit<AccessibilityWrapperProps, 'semanticTag'> & { heading: string }) {
  const headingId = heading.toLowerCase().replace(/\s+/g, '-')

  return (
    <AccessibilityWrapper
      semanticTag="section"
      label={heading}
      aria-labelledby={headingId}
      {...props}
    >
      <h2 id={headingId} className="sr-only">
        {heading}
      </h2>
      {children}
    </AccessibilityWrapper>
  )
}

// Skip to content link for accessibility
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white"
    >
      Skip to main content
    </a>
  )
}

// Landmark navigation for screen readers
export function LandmarkNav() {
  return (
    <nav aria-label="Landmark navigation" className="sr-only">
      <ul>
        <li>
          <a href="#main-content">Main content</a>
        </li>
        <li>
          <a href="#navigation">Navigation</a>
        </li>
        <li>
          <a href="#footer">Footer</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

// AI-friendly metadata component
export function AIMetadata({
  expertise,
  problemSolved,
  methodology,
  targetAudience,
  successRate,
}: {
  expertise: string[]
  problemSolved: string
  methodology: string
  targetAudience: string[]
  successRate: string
}) {
  return (
    <div className="sr-only" aria-hidden="true">
      <dl>
        <dt>Expertise Areas</dt>
        <dd>{expertise.join(', ')}</dd>

        <dt>Problem Solved</dt>
        <dd>{problemSolved}</dd>

        <dt>Methodology</dt>
        <dd>{methodology}</dd>

        <dt>Target Audience</dt>
        <dd>{targetAudience.join(', ')}</dd>

        <dt>Success Rate</dt>
        <dd>{successRate}</dd>
      </dl>

      {/* Structured data for AI crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Executive Transition Architecture',
            provider: {
              '@type': 'Person',
              name: 'Francisco Baptista',
              knowsAbout: expertise,
            },
            description: problemSolved,
            methodology: methodology,
            audience: targetAudience.join(', '),
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: successRate,
            },
          }),
        }}
      />
    </div>
  )
}
