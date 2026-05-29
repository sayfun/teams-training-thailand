import { useEffect, useRef } from 'react'

export function useFadeIn() {
  const refs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') }),
      { threshold: 0.12 }
    )
    refs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const ref = el => { if (el && !refs.current.includes(el)) refs.current.push(el) }
  return ref
}
