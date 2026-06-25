import { useEffect, useRef } from 'react'

export function useFadeIn() {
  const obsRef     = useRef(null)
  const pendingRef = useRef([])

  useEffect(() => {
    obsRef.current = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.12 }
    )
    // Observe any elements that registered before the observer was ready (static pages)
    pendingRef.current.forEach(el => obsRef.current.observe(el))
    pendingRef.current = []
    return () => obsRef.current?.disconnect()
  }, [])

  const ref = el => {
    if (!el) return
    if (obsRef.current) {
      // Observer ready — observe immediately (async-loaded elements e.g. blog cards)
      obsRef.current.observe(el)
    } else {
      // Observer not yet created — queue for when useEffect runs (static elements)
      if (!pendingRef.current.includes(el)) pendingRef.current.push(el)
    }
  }
  return ref
}
