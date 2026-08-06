import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Josue Herrera — Full Stack Developer',
  description:
    'Systems Engineering student and Quantum Sites founder. Building production software from Costa Rica — real-time tools, AI-powered SaaS, and client sites that ship to real users.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Firebase',
    'Costa Rica',
    'Quantum Sites',
  ],
  authors: [{ name: 'Josue Herrera', url: 'https://github.com/JosueFab0' }],
  openGraph: {
    title: 'Josue Herrera — Full Stack Developer',
    description:
      'Systems Engineering student and Quantum Sites founder. Building production software from Costa Rica.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josue Herrera — Full Stack Developer',
    description: 'Systems Engineering student and Quantum Sites founder.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
