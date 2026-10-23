import { useRef } from 'react'

// Mouse-driven 3D tilt wrapper: no new dependency, pure React + CSS.
// The outer div supplies perspective, the inner div rotates in 3D
// as the mouse moves over it and eases back flat on mouse leave.
export default function Tilt3D({ children, className = '', innerClassName = '', max = 12 }) {
  const innerRef = useRef(null)

  const onMove = (e) => {
    const el = innerRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateZ(12px)`
  }

  const onLeave = () => {
    if (innerRef.current) innerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div className={className} style={{ perspective: '1100px' }}>
      <div
        ref={innerRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={innerClassName}
        style={{ transformStyle: 'preserve-3d', transition: 'transform 0.25s ease' }}
      >
        {children}
      </div>
    </div>
  )
}
