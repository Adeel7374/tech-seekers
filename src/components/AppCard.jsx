import { motion } from 'framer-motion'
import { getAppIcon, getAppScreenshots } from '../data/appAssets'

export default function AppCard({ app, index = 0, showScreenshots = false }) {
  const iconSrc = getAppIcon(app)
  const screenshots = getAppScreenshots(app)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="glass rounded-2xl p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1"
      style={{ '--glow': `${app.color}26` }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px ${app.color}26`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 overflow-hidden"
          style={{ background: `${app.color}20`, border: `1px solid ${app.color}40` }}
        >
          {iconSrc ? (
            <img src={iconSrc} alt={`${app.name} icon`} className="w-full h-full object-cover" />
          ) : (
            app.icon
          )}
        </div>
        <div className="flex-1 min-w-0">
          <span
            className="text-xs font-mono font-medium px-2 py-0.5 rounded-full mb-1 inline-block"
            style={{ color: app.color, background: `${app.color}15` }}
          >
            {app.category}
          </span>
          <h3 className="font-display font-bold text-white text-lg leading-tight">{app.name}</h3>
        </div>
      </div>

      <p className="text-slate-400 text-sm leading-relaxed flex-1">{app.description}</p>

      {showScreenshots && screenshots.length > 0 && (
        <div className="grid grid-cols-3 gap-2 items-start">
          {screenshots.map((src, i) => (
            <div
              key={i}
              className="rounded-lg border border-white/10 bg-surface2 overflow-hidden"
            >
              <img
                src={src}
                alt={`Screenshot ${i + 1} of ${app.name}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      )}

      {(app.rating || app.downloads) && (
        <div className="flex items-center gap-4 text-xs text-slate-500">
          {app.rating && (
            <span className="flex items-center gap-1">
              <span className="text-yellow-400">★</span> {app.rating}
            </span>
          )}
          {app.downloads && <span>{app.downloads} installs</span>}
        </div>
      )}

      <a
        href={app.playStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-brand-600 border border-white/10 hover:border-brand-500 text-sm font-medium text-white transition-all duration-200"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.3.17.64.24.99.19l13.2-12-3.32-3.32L3.18 23.76zm16.32-10.53L16.96 11.5l-3.32 3.32 3.32 3.32 2.54-1.44c.72-.41.72-1.49 0-1.91zM3.01.24C2.71.09 2.37.06 2.07.2L15.34 13.5l3.32-3.32L3.01.24zm-.85.82C2.06.76 2 1.03 2 1.33v21.33c0 .3.06.57.16.81L15.34 10.5 2.16 1.06z" />
        </svg>
        View on Google Play
      </a>
    </motion.div>
  )
}
