'use client'

import { useState, useEffect } from 'react'

// Navigation Arrows Component
export function SectionNavigationArrows() {
  const [currentSection, setCurrentSection] = useState('')

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getCurrentSectionIndex = () => {
    const sections = ['problem', 'solution', 'evidence', 'qualify', 'begin']
    const current = sections.find(section => {
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

  // Update current section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['problem', 'solution', 'evidence', 'qualify', 'begin']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 300 && rect.bottom >= 300
        }
        return false
      })
      setCurrentSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentIndex = getCurrentSectionIndex()
  const canGoUp = currentIndex > 0
  const canGoDown = currentIndex < 4 && currentIndex >= 0

  return (
    <>
      {/* Previous Section Button (Up) */}
      {canGoUp && (
        <button
          onClick={navigateUp}
          className="fixed top-6 left-6 z-40 bg-brand-navy text-white rounded-full p-3 shadow-lg hover:bg-brand-navy/90 hover:shadow-xl transition-all duration-300 group"
          aria-label="Previous section"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
          <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-brand-navy text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Previous section
          </div>
        </button>
      )}

      {/* Next Section Button (Down) */}
      {canGoDown && (
        <button
          onClick={navigateDown}
          className="fixed bottom-6 left-6 z-40 bg-brand-orange text-white rounded-full p-3 shadow-lg hover:bg-brand-orange/90 hover:shadow-xl transition-all duration-300 group"
          aria-label="Next section"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <div className="absolute left-12 top-1/2 -translate-y-1/2 bg-brand-orange text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Next section
          </div>
        </button>
      )}
    </>
  )
}