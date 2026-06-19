import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const values = [
  { icon: '🎯', title: 'User-Centered', desc: 'Every decision starts with how real users interact with the product.' },
  { icon: '⚡', title: 'Performance', desc: 'Lightweight, fast apps that work smoothly across Android device tiers.' },
  { icon: '🔐', title: 'Privacy', desc: 'We collect minimal data and are fully transparent about what we do and why.' },
  { icon: '🌍', title: 'Accessibility', desc: 'Apps designed to be usable by everyone, regardless of ability or device.' },
]

const buildCategories = [
  { name: 'Utility Apps', icon: '🔧' },
  { name: 'Productivity Tools', icon: '📋' },
  { name: 'Finance Apps', icon: '💰' },
  { name: 'Mobile Solutions', icon: '📱' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Tech Seekers</title>
        <meta name="description" content="Learn about Tech Seekers — a software development company specializing in Android and Flutter mobile applications." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-20"
          >
            <span className="inline-block font-mono text-xs font-medium text-accent uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
              Who We Are
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white mb-6 leading-tight">
              A team that ships <span className="gradient-text">real apps</span> for real people
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed">
              Tech Seekers is a software development company specializing in Android and cross-platform mobile applications. We focus on building tools that solve genuine everyday problems — not just apps that fill a portfolio.
            </p>
          </motion.div>

          {/* Mission */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h2 className="font-display font-bold text-2xl text-white mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed">
                To create reliable, user-friendly applications that improve everyday digital experiences. We believe great software should be accessible to everyone, which is why our apps are free to download and built with usability at their core.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h2 className="font-display font-bold text-2xl text-white mb-4">What We Build</h2>
              <div className="grid grid-cols-2 gap-3">
                {buildCategories.map(cat => (
                  <div key={cat.name} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span>{cat.icon}</span> {cat.name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <SectionHeader
            eyebrow="Our Values"
            title="What Guides Our Work"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-display font-bold text-white mb-2">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
