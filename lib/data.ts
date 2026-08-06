export const personal = {
  name: 'Josue Herrera',
  title: 'Full Stack Developer',
  roles: ['Systems Engineering Student', 'Quantum Sites Founder'],
  location: 'Costa Rica',
  email: 'josueherrerac2@gmail.com',
  github: 'https://github.com/JosueFab0',
  available: true,
  bio: "I'm a Systems Engineering student who doesn't wait to graduate to ship. I run Quantum Sites, a web agency building sites and AI automations for local businesses, while applying the same production standards to every personal project. Every piece of software on this portfolio is deployed and used by real people.",
}

export type ProjectStatus = 'live' | 'development'

export interface Project {
  id: string
  name: string
  tagline: string
  description: string
  status: ProjectStatus
  liveUrl: string | null
  githubUrl: string
  tech: string[]
  highlights: string[]
  gradient: string
  accentFrom: string
  accentTo: string
}

export const projects: Project[] = [
  {
    id: 'apostello',
    name: 'Apostello',
    tagline: 'Real-time church presentation software',
    description:
      'A live operator dashboard for church services. Control songs, Bible verses (NTV / NVI / RV60), PPTX slides, and YouTube — all synced in real time to an external screen via Firestore.',
    status: 'live',
    liveUrl: 'https://siguemesubtitles.web.app',
    githubUrl: '#',
    tech: ['React 19', 'Firebase', 'Vite 6', 'Zustand', 'Tailwind CSS'],
    highlights: [
      'Real-time Firestore onSnapshot syncing across windows',
      'PPTX rendering with slide navigation (pptxviewjs + jszip)',
      'YouTube, audio, and video media management',
      'BroadcastChannel API for cross-window media sync',
      'Resizable split panels with keyboard navigation',
      'CI/CD via GitHub Actions → Firebase Hosting',
      'i18n: English & Spanish',
    ],
    gradient: 'from-cyan-950/80 to-blue-950/80',
    accentFrom: '#22d3ee',
    accentTo: '#3b82f6',
  },
  {
    id: 'quantum-sales',
    name: 'Quantum Sales',
    tagline: 'AI-powered SaaS CRM for sales automation',
    description:
      'A multi-tenant SaaS platform where AI employees autonomously search Google Maps for leads, scrape and score company websites, draft personalized cold emails, and send them — without human input.',
    status: 'development',
    liveUrl: null,
    githubUrl: '#',
    tech: ['Next.js 16', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Clerk', 'Stripe', 'Vercel AI SDK', 'Groq', 'BullMQ'],
    highlights: [
      'AI tools: Google Maps search → website analysis → lead scoring → email',
      'Multi-tenant workspaces with RBAC (owner / admin / member)',
      'Stripe + PayPal billing with free / pro plan limits',
      'Upstash Redis rate limiting, audit logs, app logs',
      'BullMQ background job queue',
      'Cheerio web scraping with SEO + tech stack detection',
    ],
    gradient: 'from-violet-950/80 to-purple-950/80',
    accentFrom: '#a78bfa',
    accentTo: '#7c3aed',
  },
  {
    id: 'blue-design-cr',
    name: 'Blue Design CR',
    tagline: 'Client site for a Costa Rican neon sign studio',
    description:
      'Production website for a neon LED sign company. Built with a custom retro design system, WebGL neon shader, animated neon cursor, and CSP nonces on every request.',
    status: 'live',
    liveUrl: 'https://bluedesigncr.com',
    githubUrl: 'https://github.com/JosueFab0/bluedesigncr-website',
    tech: ['Next.js 16', 'TypeScript', 'Three.js', 'Framer Motion', 'Tailwind CSS 4', 'Upstash Redis', 'Resend', 'Zod'],
    highlights: [
      'Three.js WebGL shader: neon glow + chromatic aberration',
      'Custom neon cursor effect (auto-disabled on touch)',
      'CSP with per-request nonces — zero unsafe-inline for scripts',
      'CSRF protection + Upstash rate limiting on contact API',
      '33-photo project carousel optimized for Core Web Vitals',
      'prefers-reduced-motion support throughout',
    ],
    gradient: 'from-sky-950/80 to-indigo-950/80',
    accentFrom: '#38bdf8',
    accentTo: '#6366f1',
  },
  {
    id: 'quantum-sites-web',
    name: 'Quantum Sites',
    tagline: 'Marketing website for my web agency',
    description:
      'The official site for Quantum Sites — the agency I founded. Includes a rate-limited contact form, Resend email delivery, Vercel Analytics, and full SEO with sitemap + Open Graph.',
    status: 'live',
    liveUrl: null,
    githubUrl: '#',
    tech: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Upstash Redis', 'Resend', 'Vercel Analytics', 'Zod'],
    highlights: [
      'Rate-limited contact form via Upstash Redis',
      'Email delivery via Resend with Zod validation',
      'Vercel Analytics for real traffic insights',
      'Sitemap + Open Graph + structured metadata',
    ],
    gradient: 'from-emerald-950/80 to-teal-950/80',
    accentFrom: '#34d399',
    accentTo: '#0d9488',
  },
]

export interface SkillCategory {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  { label: 'Languages', skills: ['TypeScript', 'JavaScript', 'C++'] },
  { label: 'Frontend', skills: ['React 19', 'Next.js 16', 'Vite 6', 'Tailwind CSS 4', 'Framer Motion', 'Three.js'] },
  { label: 'State & Data', skills: ['Zustand', 'TanStack Query', 'React Hook Form', 'Zod v4'] },
  { label: 'Backend', skills: ['Node.js', 'Drizzle ORM', 'BullMQ', 'Resend', 'Cheerio'] },
  { label: 'Databases', skills: ['PostgreSQL', 'Firebase Firestore', 'Supabase'] },
  { label: 'Cloud & Hosting', skills: ['Vercel', 'Firebase Hosting', 'Upstash Redis', 'Firebase Storage'] },
  { label: 'Auth', skills: ['Clerk', 'Firebase Auth'] },
  { label: 'AI / APIs', skills: ['Vercel AI SDK', 'Groq', 'OpenAI', 'Stripe', 'Serper API'] },
  { label: 'Security', skills: ['CSP + Nonces', 'CSRF Protection', 'Rate Limiting', 'DOMPurify'] },
  { label: 'DevOps', skills: ['GitHub Actions', 'Lighthouse CI', 'TypeScript strict', 'ESLint'] },
]

export interface Experience {
  role: string
  company: string
  period: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Founder & Lead Developer',
    company: 'Quantum Sites',
    period: '2024 – Present',
    description:
      'Founded a web development agency focused on modern websites, AI automations, and digital presence for Costa Rican SMBs. Designed internal SOPs, GitHub development standards, Vercel deployment standards, an OWASP security checklist, and a secrets management policy.',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'PostgreSQL', 'Vercel', 'AI SDK'],
  },
  {
    role: 'Systems Engineering Student',
    company: 'University',
    period: '2024 – Present',
    description:
      'Studying Systems Engineering with coursework in C++, algorithms, data structures, and software architecture. Applying academic foundations directly to production software.',
    tags: ['C++', 'Algorithms', 'Data Structures', 'Software Architecture'],
  },
]
