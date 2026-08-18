'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, LogOut, Menu, PenLine, Search, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { getVisualPreset, visualSystem } from '@/editable/theme/visual-system'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const preset = getVisualPreset(visualSystem.recommendedPreset as any)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = { '--editable-nav-bg': preset.colors.background, '--editable-nav-text': preset.colors.foreground, '--editable-nav-active': preset.colors.foreground, '--editable-nav-active-text': preset.colors.background, '--editable-cta-bg': preset.colors.primary, '--editable-cta-text': '#ffffff', '--editable-search-bg': '#0c0d10', '--editable-border': 'rgba(255,255,255,0.12)', '--editable-container': '1120px' } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/96 text-[var(--editable-nav-text)] shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-[72px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-16 w-16 object-contain" />
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[180px] truncate text-base font-black uppercase tracking-tight">{SITE_CONFIG.name}</span>
            <span className="block max-w-[180px] truncate text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">{globalContent.nav?.tagline || SITE_CONFIG.tagline}</span>
          </span>
        </Link>

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex w-full max-w-sm items-center rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2.5 shadow-sm">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder={'Search posts'} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold outline-none placeholder:text-current/45" />
          </label>
        </form>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-3 py-2 text-sm font-black transition ${active ? 'bg-white text-black' : 'text-white/82 hover:bg-white/8 hover:text-white'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><PenLine className="h-4 w-4" /> Create</Link>
              <span className="hidden max-w-[150px] truncate rounded-md border border-[var(--editable-border)] px-3 py-2 text-sm font-black text-white/85 sm:inline-block">{session.name}</span>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black text-white/80 hover:bg-white/8 hover:text-white sm:inline-flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black text-white/80 hover:bg-white/8 hover:text-white sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] shadow-sm sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
          <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-md border border-[var(--editable-border)] bg-white/5 p-2 lg:hidden" aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--editable-nav-bg)] px-4 py-4 lg:hidden">
          <form action="/search" className="mb-4 flex rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2">
            <Search className="mt-1 h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search posts" className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none" />
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, { label: 'Contact', href: '/contact' }, ...(session ? [{ label: session.name, href: '/create' }, { label: 'Logout', href: '#' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }])].map((item) => (
              item.label === 'Logout' ? <button key={item.label} type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md border border-[var(--editable-border)] bg-white/5 px-4 py-3 text-left text-sm font-black">Logout</button> :
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-[var(--editable-border)] bg-white/5 px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
