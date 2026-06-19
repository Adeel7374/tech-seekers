import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import SectionHeader from '../components/SectionHeader'
import AppCard from '../components/AppCard'
import WebsiteCard from '../components/WebsiteCard'
import ParticleField from '../components/ParticleField'
import OrbitalShowcase from '../components/OrbitalShowcase'
import AnimatedCounter from '../components/AnimatedCounter'
import apps from '../data/apps.json'
import websites from '../data/websites.json'
import { getAppIcon } from '../data/appAssets'

const stats = [
  { value: 5, format: (v) => `${Math.round(v)}+`, label: 'Published Apps' },
  { value: 90000, format: (v) => `${(v / 1000).toFixed(0)}K+`, label: 'Total Installs' },
  { value: 4.5, format: (v) => `${v.toFixed(1)}★`, label: 'Avg. Rating' },
  { value: 2, format: (v) => `${Math.round(v)}+`, label: 'Years Active' },
]

const orbitApps = apps.slice(0, 4).map((a) => ({ iconSrc: getAppIcon(a), color: a.color }))

const techs = [
  { name: 'Flutter', icon: '🐦' },
  { name: 'Dart', icon: '🎯' },
  { name: 'Android', icon: '🤖' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'React', icon: '⚛️' },
  { name: 'React Native', icon: '📲' },
  { name: 'SQLite', icon: '🗄️' },
]

const reasons = [
  {
    icon: '🚀',
    title: 'Launched & Live',
    desc: 'Every app we build is published and active on Google Play, not just prototypes.',
  },
  {
    icon: '🎨',
    title: 'Design-First',
    desc: 'Clean, intuitive UX is non-negotiable. Users love apps that feel effortless.',
  },
  {
    icon: '🔒',
    title: 'Privacy Compliant',
    desc: 'All apps follow Google Play policies and data protection best practices.',
  },
  {
    icon: '📊',
    title: 'Data Driven',
    desc: 'We iterate based on user reviews, crash reports, and analytics.',
  },
]

export default function Home() {
  const featuredApps = apps.slice(0, 3)

  return (
    <>
      <Helmet>
        <title>Tech Seekers | Mobile App Development Company</title>
        <meta name="description" content="Tech Seekers develops innovative Android and Flutter applications focused on productivity, utility, and digital solutions." />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-16 w-[400px] h-[400px] bg-brand-600/25 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -right-10 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[90px]" />
          <div className="absolute top-1/2 right-32 -translate-y-1/2 w-[200px] h-[200px] bg-purple-500/20 rounded-full blur-[80px]" />
        </div>

        {/* Particle network */}
        <ParticleField count={45} />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="grid lg:grid-cols-[1.3fr_auto] items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 font-mono text-xs font-medium text-accent uppercase tracking-widest mb-6 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Active Google Play Developer
              </span>

              <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] mb-6">
                Building High-Quality{' '}
                <span className="gradient-text">Mobile Applications</span>
              </h1>

              <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
                Tech Seekers develops Android applications that help users solve everyday problems through innovative and user-friendly mobile experiences.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/apps"
                  className="px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-brand-600/30"
                >
                  View Our Apps
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl glass hover:bg-white/10 text-white font-semibold text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Orbital showcase - desktop only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block relative z-10"
            >
              <OrbitalShowcase apps={orbitApps} size={240} />
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 relative z-10"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-xl p-4 text-center card-hover">
                <div className="font-display font-bold text-2xl text-white mb-1">
                  <AnimatedCounter value={s.value} format={s.format} />
                </div>
                <div className="text-slate-400 text-xs">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-20 bg-surface2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Published Applications"
            title="Apps Live on Google Play"
            subtitle="Real applications actively developed and maintained by Tech Seekers, available to users worldwide."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredApps.map((app, i) => (
              <AppCard key={app.id} app={app} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/apps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-500/40 hover:border-brand-500 text-brand-400 hover:text-white hover:bg-brand-600 text-sm font-semibold transition-all"
            >
              View All Apps →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Websites */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Web Projects"
            title="Our Websites"
            subtitle="Web applications and tools we've built to help users make smarter financial decisions."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((website, i) => (
              <WebsiteCard key={website.id} website={website} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/websites"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-500/40 hover:border-brand-500 text-brand-400 hover:text-white hover:bg-brand-600 text-sm font-semibold transition-all"
            >
              View All Websites →
            </Link>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-surface2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Tech Stack"
            title="Technologies We Use"
            subtitle="Modern tools and frameworks that power every application we ship."
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techs.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass rounded-xl p-4 flex items-center gap-3 card-hover"
              >
                <span className="text-2xl">{t.icon}</span>
                <span className="font-medium text-slate-200 text-sm">{t.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Why Tech Seekers"
            title="What Sets Us Apart"
            subtitle="We're not just developers — we're users who build the apps we wish existed."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex gap-4"
              >
                <div className="text-3xl flex-shrink-0">{r.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-600/20 to-accent/10 pointer-events-none" />
            <div className="relative">
              <h2 className="font-display font-bold text-3xl text-white mb-4">Have a project in mind?</h2>
              <p className="text-slate-400 mb-6">Let&apos;s talk about building your next mobile application.</p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-colors shadow-lg shadow-brand-600/30"
              >
                Start a Conversation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
