'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'
import { projects, type Project } from '@/lib/data'

const EASE = [0.22, 1, 0.36, 1] as const

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      className="card card-hover flex flex-col overflow-hidden"
    >
      {/* Accent top bar */}
      <div style={{ height: '2px', background: project.accentFrom, flexShrink: 0 }} />

      <div className="p-7 flex flex-col gap-5 flex-1">
        {/* Index + status */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-[11px] text-[#383838] tracking-widest">
            0{index + 1}
          </span>
          {project.status === 'live' ? (
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#4CAF50]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF50]" />
              Live
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-[11px] font-mono text-[#888]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#555]" />
              In Dev
            </span>
          )}
        </div>

        {/* Title + tagline */}
        <div>
          <h3 className="text-xl font-bold text-[#E4E2DD] tracking-tight">{project.name}</h3>
          <p className="text-sm text-[#606060] mt-1">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-[#606060] leading-relaxed">{project.description}</p>

        {/* Highlights */}
        <ul className="space-y-1.5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2.5 text-xs text-[#4A4A4A] leading-relaxed">
              <span className="text-[#E8622A] shrink-0 mt-0.5">—</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 text-[10px] font-mono text-[#4A4A4A] bg-[#1A1A1A] border border-[#202020] rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-5 pt-4 border-t border-[#1C1C1C]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#606060] hover:text-[#E8622A] transition-colors duration-150"
            >
              <ExternalLink className="w-3 h-3" />
              Live Site
            </a>
          )}
          {project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#606060] hover:text-[#E8622A] transition-colors duration-150"
            >
              <GitHubIcon className="w-3 h-3" />
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-24 divider">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div ref={ref} className="mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4 }}
            className="sec-label mb-5"
          >
            Projects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="text-3xl md:text-4xl font-bold text-[#E4E2DD] tracking-tight"
          >
            Production software, real users.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-[#525252] text-base"
          >
            No toy apps — every project here solves real problems for real people.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
