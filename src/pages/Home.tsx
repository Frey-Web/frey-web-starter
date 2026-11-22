import { ArrowRight, Moon, ShieldCheck, Sparkles, Sun, Zap } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const FEATURES = [
  {
    icon: Zap,
    title: 'Schnelle Bundles',
    text: 'Vorkonfiguriertes Vite-Chunking für React & Icons — blitzschneller First Paint ohne Ballast.',
  },
  {
    icon: Sparkles,
    title: 'Dark & Light Mode',
    text: 'Systemerkennung, persistenter Umschalter und adaptives SVG-Favicon direkt ab Start.',
  },
  {
    icon: ShieldCheck,
    title: 'SEO & Clean Structure',
    text: 'Zentraler SeoManager pro Route, robots.txt und sauber getyptes TypeScript-Setup.',
  },
]

export default function Home() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white text-zinc-950 transition-colors dark:bg-[#0B0B10] dark:text-zinc-50">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <a href="https://frey-web.com" className="text-lg font-bold tracking-tight">
          Frey Web <span className="text-brand-light">Starter</span>
        </a>
        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Design umschalten"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 transition hover:border-brand dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
        >
          {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </header>

      <main className="mx-auto max-w-5xl px-6 pt-16 pb-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-brand dark:text-brand-light">
          Template · React · TypeScript · Tailwind
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Der saubere Startpunkt für schnelle Kunden-Websites.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Minimalistisches Vite-Starter-Template von Frey Web — sofort einsatzbereit mit Dark/Light Mode,
          optimierten Chunks und zentralem SEO-Handling.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://frey-web.com"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-light hover:text-zinc-950"
          >
            frey-web.com
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-6 dark:border-zinc-800/80 dark:bg-zinc-900/50"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand dark:text-brand-light">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
