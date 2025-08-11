'use client'

// Navigation Arrows Component
export function SectionNavigationArrows() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getCurrentSectionIndex = () => {
    const sections = ['problem', 'solution', 'evidence', 'qualify', 'begin']
    const current = sections.find((section) => {
      const element = document.getElementById(section)
      if (element) {
        const rect = element.getBoundingClientRect()
        return rect.top <= 300 && rect.bottom >= 300
      }
      return false
    })
    return current ? sections.indexOf(current) : -1
  }

  const navigateUp = () => {
    const sections = ['problem', 'solution', 'evidence', 'qualify', 'begin']
    const currentIndex = getCurrentSectionIndex()

    if (currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1])
    }
  }

  const navigateDown = () => {
    const sections = ['problem', 'solution', 'evidence', 'qualify', 'begin']
    const currentIndex = getCurrentSectionIndex()

    if (currentIndex < sections.length - 1 && currentIndex >= 0) {
      scrollToSection(sections[currentIndex + 1])
    }
  }

  const currentIndex = getCurrentSectionIndex()
  const canGoUp = currentIndex > 0
  const canGoDown = currentIndex < 4 && currentIndex >= 0

  return (
    <>
      {/* Previous Section Button (Up) */}
      {canGoUp && (
        <button
          type="button"
          onClick={navigateUp}
          className="group fixed top-6 left-6 z-40 rounded-full bg-brand-navy p-3 text-white shadow-lg transition-all duration-300 hover:bg-brand-navy/90 hover:shadow-xl"
          aria-label="Previous section"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
          <div className="pointer-events-none absolute top-1/2 left-12 -translate-y-1/2 rounded bg-brand-navy px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
            Previous section
          </div>
        </button>
      )}

      {/* Next Section Button (Down) */}
      {canGoDown && (
        <button
          type="button"
          onClick={navigateDown}
          className="group fixed bottom-6 left-6 z-40 rounded-full bg-brand-navy p-3 text-white shadow-lg transition-all duration-300 hover:bg-brand-navy/90 hover:shadow-xl"
          aria-label="Next section"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div className="pointer-events-none absolute top-1/2 left-12 -translate-y-1/2 rounded bg-brand-navy px-2 py-1 text-sm whitespace-nowrap text-white opacity-0 transition-opacity group-hover:opacity-100">
            Next section
          </div>
        </button>
      )}
    </>
  )
}
