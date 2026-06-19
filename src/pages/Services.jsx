import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'

const services = [
  {
    icon: '📱',
    title: 'Mobile App Development',
    desc: 'End-to-end Android application development from concept to Google Play submission. We handle architecture, UI, APIs, and testing.',
    tags: ['Android', 'Flutter', 'React Native', 'Kotlin'],
  },
  {
    icon: '🐦',
    title: 'Flutter Development',
    desc: 'Cross-platform apps built with Flutter that run natively on Android and iOS with a single codebase and pixel-perfect UI.',
    tags: ['Flutter', 'Dart', 'Cross-Platform'],
  },
  {
    icon: '🤖',
    title: 'Android Development',
    desc: 'Native Android development using modern Jetpack components, Material You design, and best practices for performance.',
    tags: ['Jetpack', 'Compose', 'Material'],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Clean, modern interface design that prioritizes usability. We prototype, test, and iterate before a single line of code is written.',
    tags: ['Figma', 'Material 3', 'Prototyping'],
  },
  {
    icon: '🔗',
    title: 'API Integration',
    desc: 'Seamless integration with RESTful APIs, Firebase services, payment gateways, and third-party SDKs.',
    tags: ['REST', 'Firebase', 'OAuth'],
  },
  {
    icon: '🔧',
    title: 'App Maintenance',
    desc: 'Ongoing support, bug fixes, OS compatibility updates, and performance optimization to keep your app running smoothly.',
    tags: ['Support', 'Updates', 'Monitoring'],
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Tech Seekers</title>
        <meta name="description" content="Tech Seekers offers mobile app development, Flutter development, UI/UX design, API integration, and app maintenance services." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="What We Offer"
            title="Our Services"
            subtitle="From initial concept through deployment and maintenance, we cover the full mobile app lifecycle."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="glass rounded-2xl p-6 card-hover flex flex-col gap-4"
              >
                <div className="text-3xl">{s.icon}</div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-brand-500/15 text-brand-400 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
