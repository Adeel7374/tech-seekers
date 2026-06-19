import { useEffect, useRef } from 'react'
import logo from '../assets/tech-seekers.png'

const defaultOrbitApps = [
  { icon: '💰', color: '#22d3ee' },
  { icon: '✅', color: '#a855f7' },
  { icon: '📱', color: '#f59e0b' },
  { icon: '⏱️', color: '#ef4444' },
]

export default function OrbitalShowcase({ apps = defaultOrbitApps, size = 220 }) {
  const dotsRef = useRef([])
  const wrapRef = useRef(null)

  useEffect(() => {
    let angle = 0
    let frameId
    const radius = size * 0.39
    const center = size / 2

    const animate = () => {
      angle += 0.008
      dotsRef.current.forEach((el, i) => {
        if (!el) return
        const phase = (Math.PI * 2 * i) / apps.length
        const a = angle + phase
        const x = center + radius * Math.cos(a) - 15
        const y = center + radius * Math.sin(a) - 15
        el.style.transform = `translate(${x}px, ${y}px)`
      })
      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [apps.length, size])

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Orbit rings */}
      <div className="absolute inset-0 rounded-full border border-white/[0.06]" />
      <div className="absolute rounded-full border border-white/[0.06]" style={{ inset: size * 0.09 }} />
      <div className="absolute rounded-full border border-white/[0.06]" style={{ inset: size * 0.18 }} />

      {/* Center logo */}
      <div
        className="absolute z-10 flex items-center justify-center rounded-2xl overflow-hidden shadow-lg"
        style={{
          width: size * 0.24,
          height: size * 0.24,
          top: '50%',
          left: '50%',
          marginTop: -(size * 0.12),
          marginLeft: -(size * 0.12),
          boxShadow: '0 0 30px rgba(99,102,241,0.4)',
        }}
      >
        <img src={logo} alt="Tech Seekers" className="w-full h-full object-contain" />
      </div>

      {/* Orbiting dots */}
      {apps.map((app, i) => (
        <div
          key={i}
          ref={(el) => (dotsRef.current[i] = el)}
          className="absolute flex items-center justify-center rounded-xl text-sm overflow-hidden"
          style={{
            width: 30,
            height: 30,
            top: 0,
            left: 0,
            background: `${app.color}26`,
            border: `1px solid ${app.color}4d`,
          }}
        >
          {app.iconSrc ? (
            <img src={app.iconSrc} alt="" className="w-full h-full object-cover" />
          ) : (
            app.icon
          )}
        </div>
      ))}
    </div>
  )
}
