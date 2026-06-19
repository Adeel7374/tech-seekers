import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: 'By downloading, installing, or using any application published by Tech Seekers, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our applications.',
  },
  {
    title: '2. License to Use',
    content: 'Tech Seekers grants you a limited, non-exclusive, non-transferable, revocable license to install and use our applications on devices you own or control, solely for your personal, non-commercial purposes.',
  },
  {
    title: '3. Prohibited Uses',
    content: `You may not:
- Copy, modify, distribute, or reverse-engineer our applications
- Use our apps for unlawful purposes
- Attempt to gain unauthorized access to any systems
- Use our apps to infringe on intellectual property rights
- Transmit spam, malware, or malicious code through our services`,
  },
  {
    title: '4. Intellectual Property',
    content: 'All content in our applications — including code, design, graphics, and branding — is owned by Tech Seekers and protected by copyright law. Unauthorized reproduction is prohibited.',
  },
  {
    title: '5. Third-Party Services',
    content: 'Our applications may include third-party services such as advertising networks (AppLovin, AdMob, Unity Ads) and analytics providers. Your use of these services is subject to their respective terms and policies.',
  },
  {
    title: '6. Advertisements',
    content: 'Some of our applications display advertisements from third-party ad networks to support free access. We are not responsible for the content of third-party advertisements.',
  },
  {
    title: '7. Disclaimer of Warranties',
    content: 'Our applications are provided "as is" without warranties of any kind, express or implied. We do not warrant that our apps will be error-free, uninterrupted, or meet your specific requirements.',
  },
  {
    title: '8. Limitation of Liability',
    content: 'To the maximum extent permitted by law, Tech Seekers shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our applications.',
  },
  {
    title: '9. Updates and Termination',
    content: 'We may update our applications and these terms at any time. We reserve the right to terminate or suspend access to our applications at our sole discretion without notice.',
  },
  {
    title: '10. Governing Law',
    content: 'These terms are governed by applicable law. Any disputes shall be resolved through binding arbitration or in courts of competent jurisdiction.',
  },
  {
    title: '11. Contact',
    content: 'For questions about these Terms, contact us at techseekersco@gmail.com.',
  },
]

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | Tech Seekers</title>
        <meta name="description" content="Tech Seekers Terms and Conditions governing the use of our mobile applications." />
      </Helmet>

      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display font-extrabold text-4xl text-white mb-3">Terms & Conditions</h1>
            <p className="text-slate-500 text-sm mb-10">Last Updated: June 2025</p>

            <div className="glass rounded-2xl p-6 mb-8">
              <p className="text-slate-300 leading-relaxed">
                These Terms and Conditions govern your use of mobile applications published by Tech Seekers. By using our apps, you agree to these terms.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {sections.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                >
                  <h2 className="font-display font-bold text-xl text-white mb-3">{s.title}</h2>
                  <div className="text-slate-400 text-sm leading-relaxed">
                    {s.content.split('\n').map((line, j) => {
                      if (line.startsWith('- ')) return <p key={j} className="ml-4 my-1">• {line.slice(2)}</p>
                      if (line.trim() === '') return <br key={j} />
                      return <p key={j}>{line}</p>
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
