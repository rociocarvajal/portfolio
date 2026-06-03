"use client"

import { useEffect, useState, useCallback } from "react"

export function useActiveSection(sectionIds: string[]): string {
  const [activeSection, setActiveSection] = useState<string>(
    sectionIds[0] || ""
  )

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    },
    []
  )

  useEffect(() => {
    if (sectionIds.length === 0) return

    // Configurar Intersection Observer
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )

    // Observar todas las secciones
    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [sectionIds, handleIntersection])

  return activeSection
}
