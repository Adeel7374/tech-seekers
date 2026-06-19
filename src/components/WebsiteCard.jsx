import { motion } from 'framer-motion'
import { getWebsiteImage } from '../data/websiteAssets'

export default function WebsiteCard({ website, index = 0 }) {
  const imageSrc = getWebsiteImage(website)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="glass rounded-2xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1"
      style={{ '--glow': `${website.color}26` }}
      onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 20px 40px ${website.color}26`)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
    >
      {imageSrc && (
        <div className="p-4 pb-0">
          <img
            src={imageSrc}
            alt={website.title || website.name}
            className="w-full h-auto rounded-xl border border-white/10 bg-surface2"
          />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div>
          <span
            className="text-xs font-mono font-medium px-2 py-0.5 rounded-full mb-2 inline-block"
            style={{ color: website.color, background: `${website.color}15` }}
          >
            {website.category}
          </span>
          <h3 className="font-display font-bold text-white text-lg leading-tight">
            {website.title || website.name}
          </h3>
          <p className="text-brand-400 text-sm mt-1">{website.domain}</p>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed flex-1">{website.shortDesc || website.description}</p>

        {website.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {website.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs text-slate-400 bg-white/5 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/5 hover:bg-brand-600 border border-white/10 hover:border-brand-500 text-sm font-medium text-white transition-all duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Visit Website
        </a>
      </div>
    </motion.div>
  )
}