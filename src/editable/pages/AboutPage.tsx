import { BookOpen, Layers, PenLine } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fffaf3)] px-4 py-14 text-[var(--editable-page-text,#241915)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1120px] gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-lg border border-white/10 bg-[#151619] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#3f7cff]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-7xl">About {SITE_CONFIG.name}</h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-white/72">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm font-semibold leading-8 text-white/58">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value, index) => {
              const Icon = [BookOpen, Layers, PenLine][index] || BookOpen
              return (
              <div key={value.title} className="rounded-lg border border-white/10 bg-[#101113] p-6 shadow-sm">
                <Icon className="h-6 w-6 text-[#3f7cff]" />
                <h2 className="mt-5 text-2xl font-black tracking-tight text-white">{value.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/58">{value.description}</p>
              </div>
            )})}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
