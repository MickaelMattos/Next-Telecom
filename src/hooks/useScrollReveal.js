// src/hooks/useScrollReveal.js
import { useEffect, useRef } from 'react'

/**
 * Adiciona a classe 'visible' nos elementos com .reveal, .reveal-left,
 * .reveal-right ou .reveal-scale conforme entram na viewport.
 */
export function useScrollReveal() {
  useEffect(() => {
    const selectors = '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    const els = document.querySelectorAll(selectors)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/**
 * Ref version: usa em componentes que montam dinamicamente.
 */
export function useRevealRef() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
