'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { personal } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Available pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex items-center gap-2.5 mb-14"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E8622A] opacity-70" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E8622A]" />
          </span>
          <span className="font-mono text-[11px] tracking-[0.15em] text-[#505050] uppercase">
            Available for work
          </span>
        </motion.div>

        {/* Name — massive, editorial, left-aligned */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-bold leading-none tracking-tighter text-[#E4E2DD] select-none"
            style={{ fontSize: 'clamp(68px, 14vw, 172px)' }}
          >
            JOSUE
          </motion.p>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.p
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.18, ease: EASE }}
            className="font-bold leading-none tracking-tighter select-none"
            style={{ fontSize: 'clamp(68px, 14vw, 172px)' }}
          >
            <span className="text-[#E4E2DD]">HERRERA</span>
            <span className="text-[#E8622A]">.</span>
          </motion.p>
        </div>

        {/* Bottom row — role + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-[#1C1C1C]"
        >
          <div className="max-w-lg">
            <p className="text-lg md:text-xl font-medium text-[#E4E2DD] mb-2">
              Full Stack Developer
            </p>
            <p className="text-[#585858] text-base leading-relaxed">
              Systems Engineering student · Founder of Quantum Sites<br />
              Building production software from Costa Rica.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 shrink-0">
            <button
              onClick={scrollToProjects}
              className="px-6 py-3 text-sm font-semibold text-[#0C0C0C] bg-[#E8622A] rounded-md hover:bg-[#F07040] active:scale-95 transition-all duration-200"
            >
              View Projects
            </button>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#808080] border border-[#252525] rounded-md hover:border-[#3A3A3A] hover:text-[#E4E2DD] active:scale-95 transition-all duration-200"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[#808080] border border-[#252525] rounded-md hover:border-[#3A3A3A] hover:text-[#E4E2DD] active:scale-95 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center gap-3 text-[#383838]"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
