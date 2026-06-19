import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import websites from '../data/websites.json'
import { getWebsiteImage } from '../data/websiteAssets'

export default function Websites() {
  return (
    <>
      <Helmet>
        <title>Our Websites | Tech Seekers</title>
        <meta name="description" content="Professional websites and web applications developed by Tech Seekers." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Our Work"
            title="Websites & Web Projects"
            subtitle="We design and develop modern, fast, and high-performance websites."
          />

          <div className="flex flex-col gap-8">
            {websites.map((website, i) => {
              const imageSrc = getWebsiteImage(website)

              return (
                <motion.article
                  key={website.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="glass rounded-3xl p-6 lg:p-10"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {imageSrc && (
                      <div className="w-full lg:w-1/2 flex-shrink-0">
                        <img
                          src={imageSrc}
                          alt={website.title}
                          className="rounded-2xl w-full shadow-lg border border-white/10"
                        />
                      </div>
                    )}

                    <div className="flex-1 space-y-5">
                      <div>
                        <span
                          className="text-xs font-mono font-medium px-2 py-0.5 rounded-full mb-2 inline-block"
                          style={{ color: website.color, background: `${website.color}15` }}
                        >
                          {website.category}
                        </span>
                        <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
                          {website.title}
                        </h2>
                        <p className="text-brand-400 font-medium mt-1">{website.domain}</p>
                      </div>

                      <p className="text-slate-400 text-base leading-relaxed">
                        {website.description}
                      </p>

                      {website.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {website.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium text-slate-300 bg-white/5 border border-white/10"
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
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-brand-600/30"
                      >
                        Visit Website
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
