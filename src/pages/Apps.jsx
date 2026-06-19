import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import AppCard from '../components/AppCard'
import apps from '../data/apps.json'
import { GOOGLE_PLAY_DEV } from '../data/appAssets'

const categories = ['All', ...new Set(apps.map(a => a.category))]

export default function Apps() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? apps : apps.filter(a => a.category === active)

  return (
    <>
      <Helmet>
        <title>Our Apps | Tech Seekers</title>
        <meta name="description" content="Browse all Android applications published by Tech Seekers on Google Play Store." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Google Play Portfolio"
            title="Our Published Applications"
            subtitle="Every app listed here is live on Google Play, actively maintained, and built with real users in mind."
          />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  active === cat
                    ? 'bg-brand-600 text-white'
                    : 'glass text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Apps grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((app, i) => (
              <AppCard key={app.id} app={app} index={i} showScreenshots />
            ))}
          </motion.div>

          {/* Play Store CTA */}
          <div className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-lg mx-auto">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="font-display font-bold text-white text-xl mb-2">Find us on Google Play</h3>
              <p className="text-slate-400 text-sm mb-5">All our apps are available for free on the Google Play Store.</p>
              <a
                href={GOOGLE_PLAY_DEV}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors"
              >
                Visit Google Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
