import { useEffect, useRef } from 'react'

// Large eye illustration whose pupil follows the pointer.
export default function EyeArt() {
  const pupil = useRef(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      if (pupil.current) pupil.current.style.transform = `translate(${x * 26}px, ${y * 18}px)`
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label="Illustration of an eye" className="w-full max-w-lg">
      <defs><clipPath id="lid"><path d="M10 130C70 40 140 12 200 12s130 28 190 118c-60 90-130 118-190 118S70 220 10 130z" /></clipPath></defs>
      <path d="M10 130C70 40 140 12 200 12s130 28 190 118c-60 90-130 118-190 118S70 220 10 130z" fill="#fff" stroke="#0A2E2A" strokeWidth="5" />
      <g clipPath="url(#lid)">
        <g ref={pupil} style={{ transition: 'transform .12s ease-out' }}>
          <circle cx="200" cy="130" r="78" fill="#14806E" />
          <circle cx="200" cy="130" r="62" fill="none" stroke="#0E6354" strokeWidth="4" strokeDasharray="3 9" />
          <circle cx="200" cy="130" r="36" fill="#0A2E2A" />
          <circle cx="222" cy="108" r="12" fill="#fff" opacity=".9" />
        </g>
      </g>
    </svg>
  )
}
