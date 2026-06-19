import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Information We Collect',
    content: `Our applications may collect the following types of information:

**Device Information:** Device model, operating system version, unique device identifiers, and mobile network information.

**Usage Data:** Information about how you use our applications, including features accessed, time spent, and interaction patterns.

**Crash Reports:** Diagnostic data to help us identify and fix bugs and improve app performance.

**Ad-Related Data:** Our apps may use advertising SDKs (such as AppLovin, AdMob, or Unity Ads) that collect data for personalized advertising purposes, subject to their own privacy policies.

We do not collect personally identifiable information such as your name, email address, or physical address unless you voluntarily provide it through our contact form.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `We use the collected information to:

- Operate, maintain, and improve our applications
- Analyze usage patterns to enhance user experience
- Diagnose technical issues and fix bugs
- Serve relevant advertisements through our advertising partners
- Comply with legal obligations`,
  },
  {
    title: '3. Advertising',
    content: `Our free applications are supported by advertising. We work with third-party advertising partners including AppLovin, Google AdMob, and Unity Ads. These partners may collect and use data about your device and usage to serve targeted advertisements.

You may opt out of personalized advertising through your device settings (Android: Settings > Google > Ads > Opt out of Ads Personalization).`,
  },
  {
    title: '4. Data Sharing',
    content: `We do not sell your personal information. We may share data with:

- **Service providers** who assist us in operating our apps (analytics, crash reporting)
- **Advertising partners** as described in Section 3
- **Legal authorities** when required by law

All third-party partners are required to handle your data in accordance with applicable privacy laws.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain usage and diagnostic data for up to 12 months. Advertising-related data retention is governed by our advertising partners' policies.`,
  },
  {
    title: '6. Children\'s Privacy',
    content: `Our applications are not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.`,
  },
  {
    title: '7. Your Rights',
    content: `Depending on your location, you may have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request deletion of your data
- Opt out of personalized advertising

To exercise these rights, contact us at techseekersco@gmail.com.`,
  },
  {
    title: '8. Security',
    content: `We implement industry-standard security measures to protect your data. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.`,
  },
  {
    title: '9. Changes to This Policy',
    content: `We may update this Privacy Policy periodically. We will notify users of significant changes by updating the "Last Updated" date below and, where appropriate, by providing notice within our applications.`,
  },
  {
    title: '10. Contact Us',
    content: `If you have questions about this Privacy Policy or our data practices, please contact us at:

**Tech Seekers**
Email: techseekersco@gmail.com`,
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Tech Seekers</title>
        <meta name="description" content="Tech Seekers Privacy Policy — how we collect, use, and protect your data across our Android applications." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display font-extrabold text-4xl text-white mb-3">Privacy Policy</h1>
            <p className="text-slate-500 text-sm mb-10">Last Updated: June 2025 · Effective: June 2025</p>

            <div className="glass rounded-2xl p-6 mb-8">
              <p className="text-slate-300 leading-relaxed">
                Tech Seekers (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Android mobile applications. Please read this policy carefully.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {sections.map((section, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <h2 className="font-display font-bold text-xl text-white mb-3">{section.title}</h2>
                  <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                    {section.content.split('\n').map((line, j) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return <p key={j} className="font-semibold text-slate-300 mt-3 mb-1">{line.replace(/\*\*/g, '')}</p>
                      }
                      if (line.startsWith('- ')) {
                        return <p key={j} className="ml-4 my-1">• {line.slice(2).replace(/\*\*([^*]+)\*\*/g, (_, t) => t)}</p>
                      }
                      if (line.trim() === '') return <br key={j} />
                      return <p key={j} className="mb-1">{line.replace(/\*\*([^*]+)\*\*/g, (_, t) => t)}</p>
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}
