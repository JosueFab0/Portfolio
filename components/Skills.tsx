'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skillCategories } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="py-24 divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div ref={ref} className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="sec-label mb-5"
          >
            Skills
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="text-3xl md:text-4xl font-bold text-[#E4E2DD] tracking-tight"
          >
            Tech I use in production.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-[#525252] text-base"
          >
            Every technology listed appears in deployed code. No padded résumé.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + catIdx * 0.05, ease: EASE }}
              className="card card-hover p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#E8622A] mb-4">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1.5 text-xs text-[#707070] bg-[#1A1A1A] border border-[#202020] rounded-md hover:text-[#E4E2DD] hover:border-[#2E2E2E] transition-colors duration-150 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
