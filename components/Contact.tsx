'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { personal } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'josueherrerac2@gmail.com',
    href: 'mailto:josueherrerac2@gmail.com',
    note: 'Best way to reach me',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/JosueFab0',
    href: 'https://github.com/JosueFab0',
    note: 'See my code',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Costa Rica · GMT-6',
    href: null,
    note: 'Available remotely',
  },
]

export function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="py-24 divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="sec-label mb-5"
        >
          Contact
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#E4E2DD] tracking-tight leading-tight mb-4">
              Let&apos;s build something<br />
              <span className="text-[#E8622A]">together.</span>
            </h2>
            <p className="text-[#525252] text-base max-w-md leading-relaxed">
              Open to full-time roles, freelance projects, and interesting collaborations.
              Based in Costa Rica — available remotely worldwide.
            </p>
          </motion.div>

          <motion.a
            href={`mailto:${personal.email}`}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex items-center gap-2 px-7 py-4 bg-[#E8622A] text-[#0C0C0C] font-semibold text-sm rounded-md hover:bg-[#F07040] active:scale-95 transition-all duration-200 self-start md:self-end whitespace-nowrap"
          >
            Send an email
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </div>

        {/* Contact rows */}
        <div className="border-t border-[#181818]">
          {contactLinks.map(({ icon: Icon, label, value, href, note }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: EASE }}
              className="border-b border-[#181818]"
            >
              {href ? (
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-5 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 flex items-center justify-center text-[#484848] group-hover:text-[#E8622A] transition-colors duration-150">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-[#404040] uppercase tracking-widest mb-0.5">{note}</p>
                      <p className="text-sm text-[#C0C0C0] group-hover:text-[#E4E2DD] transition-colors duration-150">{value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#383838] group-hover:text-[#E8622A] transition-colors duration-150" />
                </a>
              ) : (
                <div className="flex items-center gap-4 py-5">
                  <div className="w-8 h-8 flex items-center justify-center text-[#484848]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[#404040] uppercase tracking-widest mb-0.5">{note}</p>
                    <p className="text-sm text-[#606060]">{value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
