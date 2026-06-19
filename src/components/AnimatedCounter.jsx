import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `value` once it scrolls into view.
 * format: function(currentValue) => string, for custom display (e.g. "10K+", "4.5★")
 */
export default function AnimatedCounter({ value, format = (v) => Math.round(v), duration = 1200 }) {
  const [display, setDisplay] = useState(format(0))
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            let startTs = null

            const step = (ts) => {
              if (!startTs) startTs = ts
              const progress = Math.min((ts - startTs) / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setDisplay(format(value * eased))
              if (progress < 1) requestAnimationFrame(step)
            }
            requestAnimationFrame(step)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value, duration, format])

  return <span ref={ref}>{display}</span>
}
