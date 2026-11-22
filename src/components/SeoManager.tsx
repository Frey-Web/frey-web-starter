import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SeoEntry {
  title: string
  description: string
}

const ROUTES: Record<string, SeoEntry> = {
  '/': {
    title: 'Frey Web Starter — React + TypeScript + Tailwind',
    description:
      'Schnelles, leichtgewichtiges Website-Starter-Template von Frey Web mit React, TypeScript, Vite, Tailwind CSS, Dark/Light Mode und SEO.',
  },
}

export function SeoManager() {
  const { pathname } = useLocation()

  useEffect(() => {
    const entry = ROUTES[pathname] ?? ROUTES['/']
    document.title = entry.title
    let desc = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!desc) {
      desc = document.createElement('meta')
      desc.name = 'description'
      document.head.appendChild(desc)
    }
    desc.content = entry.description
  }, [pathname])

  return null
}
