import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { CONTACT_EMAIL, GOOGLE_PLAY_DEV, openMailClient } from '../data/appAssets'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    openMailClient({
      subject: form.subject || `New inquiry from ${form.name}`,
      body: `${form.message}\n\nFrom: ${form.name} <${form.email}>`,
    })
    setSent(true)
  }

  return (
    <>
      <Helmet>
        <title>Contact | Tech Seekers</title>
        <meta name="description" content="Get in touch with Tech Seekers for app development inquiries, support, or business questions." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Contact Tech Seekers"
            subtitle="Questions about our apps, support requests, or collaboration inquiries — we read every message."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Info cards */}
            <div className="flex flex-col gap-4">
              {[
                { icon: '📧', label: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: '💬', label: 'Support', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                { icon: '🤖', label: 'Google Play', value: 'TechSeekers', href: GOOGLE_PLAY_DEV },
                { icon: '🌐', label: 'Website', value: 'getmortgagecalc.com', href: 'https://www.getmortgagecalc.com/' },
              ].map(info => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  onClick={(e) => {
                    if (info.href.startsWith('mailto:')) {
                      e.preventDefault()
                      openMailClient()
                    }
                  }}
                  {...(info.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-5 flex items-start gap-4 card-hover cursor-pointer"
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <div className="text-slate-500 text-xs mb-0.5">{info.label}</div>
                    <div className="text-white text-sm font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}

              <div className="glass rounded-xl p-5 mt-2">
                <p className="text-slate-400 text-sm leading-relaxed">
                  <span className="text-white font-medium">Response time:</span> We typically reply within 1–2 business days.
                </p>
              </div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 glass rounded-2xl p-8"
            >
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display font-bold text-white text-xl mb-2">Opening your email client…</h3>
                  <p className="text-slate-400 mb-4">Your message draft is ready to send to {CONTACT_EMAIL}.</p>
                  <button
                    type="button"
                    onClick={() =>
                      openMailClient({
                        subject: form.subject || `New inquiry from ${form.name}`,
                        body: `${form.message}\n\nFrom: ${form.name} <${form.email}>`,
                      })
                    }
                    className="text-brand-400 hover:text-brand-300 text-sm font-medium underline underline-offset-4"
                  >
                    Didn&apos;t open? Click here to email us
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-slate-400 text-xs mb-2">Your Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-brand-500 transition-colors placeholder:text-slate-600"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs mb-2">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-brand-500 transition-colors placeholder:text-slate-600"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-2">Subject</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-brand-500 transition-colors placeholder:text-slate-600"
                      placeholder="App support / Business inquiry"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-xs mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-brand-500 transition-colors resize-none placeholder:text-slate-600"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
