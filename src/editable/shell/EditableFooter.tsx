'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight, LogOut, PenLine } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#0c0d10', '--editable-footer-text': '#f8f8f3', '--editable-border': 'rgba(255,255,255,0.12)', '--editable-container': '1120px' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-16 w-16 object-contain" />
            <span className="text-lg font-black uppercase tracking-tight">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/62">{globalContent.footer?.description || SITE_CONFIG.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Explore</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold text-white/72 hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5 text-[#3f7cff]" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold text-white/72 hover:text-white">{label}</Link>
            ))}
            {session ? <Link href="/create" className="inline-flex items-center gap-2 text-sm font-bold text-white/72 hover:text-white"><PenLine className="h-3.5 w-3.5" /> {session.name}</Link> : null}
            {session ? <button type="button" onClick={logout} className="inline-flex items-center gap-2 text-left text-sm font-bold text-white/72 hover:text-white"><LogOut className="h-3.5 w-3.5" /> Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold text-white/45">
        (c) {year} {SITE_CONFIG.name}. Articles, essays, and reading notes for curious people.
      </div>
    </footer>
  )
}
