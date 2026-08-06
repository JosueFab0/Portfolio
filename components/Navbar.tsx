'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C0C0C]/95 backdrop-blur-sm border-b border-[#1A1A1A]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleLink('#home') }}
          className="font-mono text-sm font-semibold text-[#E4E2DD] hover:text-[#E8622A] transition-colors duration-200"
        >
          JH<span className="text-[#E8622A]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-0">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="px-4 py-2 text-sm text-[#606060] hover:text-[#E4E2DD] transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="mailto:josueherrerac2@gmail.com"
            className="px-4 py-2 text-sm font-semibold text-[#0C0C0C] bg-[#E8622A] rounded-md hover:bg-[#F07040] transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block h-px w-5 bg-[#808080] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-5 bg-[#808080] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-5 bg-[#808080] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0C0C0C] border-b border-[#1A1A1A] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLink(link.href)}
                  className="text-left py-3.5 text-sm text-[#808080] hover:text-[#E4E2DD] border-b border-[#181818] last:border-0 transition-colors duration-150"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="mailto:josueherrerac2@gmail.com"
                className="mt-4 py-3 text-sm font-semibold text-center text-[#0C0C0C] bg-[#E8622A] rounded-md"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
