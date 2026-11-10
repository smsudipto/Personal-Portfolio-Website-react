import { useEffect, useState } from 'react'

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean)

    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: 0,
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

export default useActiveSection
