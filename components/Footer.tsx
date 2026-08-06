'use client'

import { Mail } from 'lucide-react'
import { GitHubIcon } from '@/components/ui/GitHubIcon'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="divider py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-mono text-sm font-semibold text-[#303030]">
          JH<span className="text-[#E8622A]">.</span>
        </span>

        <p className="font-mono text-xs text-[#303030]">
          © {year} Josue Herrera · Next.js · TypeScript · Tailwind
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/JosueFab0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#383838] hover:text-[#E4E2DD] transition-colors duration-150"
          >
            <GitHubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:josueherrerac2@gmail.com"
            aria-label="Email"
            className="text-[#383838] hover:text-[#E4E2DD] transition-colors duration-150"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
