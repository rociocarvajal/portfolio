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
    // Si el scroll está cerca del top, siempre es home
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection(sectionIds[0])
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionIds])

  useEffect(() => {
    if (sectionIds.length === 0) return

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    })

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds, handleIntersection])

  return activeSection
}