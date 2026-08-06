'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

function ExperienceEntry({
  exp,
  index,
}: {
  exp: (typeof experiences)[number]
  index: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
      className="relative pl-10 md:pl-14"
    >
      {/* Dot */}
      <div className="absolute left-3 md:left-5 top-2 w-2 h-2 rounded-full bg-[#E8622A] border-2 border-[#0C0C0C] ring-1 ring-[#E8622A]/30" />

      {/* Content */}
      <div className="card card-hover p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base font-bold text-[#E4E2DD]">{exp.role}</h3>
            <p className="text-[#E8622A] text-sm mt-0.5">{exp.company}</p>
          </div>
          <span className="font-mono text-[11px] text-[#484848] bg-[#1A1A1A] border border-[#222] px-3 py-1.5 rounded self-start whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <p className="text-[#606060] text-sm leading-relaxed mb-4">{exp.description}</p>

        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-mono text-[#606060] bg-[#1A1A1A] border border-[#222] rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function Timeline() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="py-24 divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div ref={ref} className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="sec-label mb-5"
          >
            Experience
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="text-3xl md:text-4xl font-bold text-[#E4E2DD] tracking-tight"
          >
            Where I&apos;ve built things.
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[#202020]"
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <ExperienceEntry key={exp.role} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
