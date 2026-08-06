'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personal } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const


export function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="py-24 divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4 }}
          className="sec-label mb-10"
        >
          About
        </motion.div>

        <div className="max-w-2xl">
          {/* Bio */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="text-3xl md:text-4xl font-bold text-[#E4E2DD] tracking-tight mb-8 leading-snug"
            >
              Engineering student who<br />ships to production.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="space-y-4 text-[#727272] text-base leading-relaxed"
            >
              <p>{personal.bio}</p>
              <p>
                Sigueme Subtitles runs live every Sunday in a real church.
                Quantum Sales uses autonomous AI agents to prospect leads — no human in the loop.
                Blue Design CR is live at{' '}
                <a
                  href="https://bluedesigncr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E8622A] hover:underline"
                >
                  bluedesigncr.com
                </a>
                .
              </p>
              <p>
                I care about clean architecture, performance, and interfaces that feel
                fast and intentional. When I&apos;m not shipping, I&apos;m studying the algorithms
                that make software faster at its foundation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {['Next.js 16', 'React 19', 'TypeScript', 'Firebase', 'PostgreSQL', 'Vercel'].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 text-xs font-mono text-[#606060] bg-[#141414] border border-[#222222] rounded-md"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
