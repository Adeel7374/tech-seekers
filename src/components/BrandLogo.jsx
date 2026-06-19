import { Link } from 'react-router-dom'
import logo from '../assets/tech-seekers.png'

export default function BrandLogo({ to = '/', className = '', size = 'md' }) {
  const iconSize = size === 'sm' ? 'h-8 w-8' : 'h-10 w-10'
  const textSize = size === 'sm' ? 'text-base' : 'text-lg'
  const tagSize = size === 'sm' ? 'text-[9px]' : 'text-[10px]'

  const content = (
    <>
      <div
        className={`${iconSize} rounded-xl overflow-hidden flex-shrink-0 ring-1 ring-cyan-400/25 shadow-[0_0_20px_rgba(34,211,238,0.15)]`}
      >
        <img
          src={logo}
          alt=""
          aria-hidden="true"
          className={`${iconSize} w-[200%] max-w-none object-cover object-left`}
        />
      </div>

      <div className="flex flex-col justify-center min-w-0">
        <span className={`font-display font-extrabold ${textSize} tracking-tight leading-none`}>
          <span className="text-white">Tech</span>
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
            Seekers
          </span>
        </span>
        <span
          className={`${tagSize} uppercase tracking-[0.22em] text-cyan-400/50 font-mono mt-1 leading-none`}
        >
          Mobile Apps
        </span>
      </div>
    </>
  )

  const sharedClass = `flex items-center gap-3 group hover:opacity-90 transition-opacity ${className}`

  if (to) {
    return (
      <Link to={to} className={sharedClass}>
        {content}
      </Link>
    )
  }

  return <div className={sharedClass}>{content}</div>
}
