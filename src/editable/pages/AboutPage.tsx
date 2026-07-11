import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#fffaf3)] px-4 py-14 text-[var(--editable-page-text,#241915)] sm:px-6 lg:px-8">
        <section className="mx-auto max-w-[1120px]">
          <article className="rounded-lg border border-white/10 bg-[#151619] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#3f7cff]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-7xl">{pagesContent.about.title}</h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-white/72">{pagesContent.about.description}</p>
            <div className="mt-8 max-w-3xl space-y-4 text-sm font-semibold leading-8 text-white/58">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
        </section>
      </main>
    </EditableSiteShell>
  )
}
