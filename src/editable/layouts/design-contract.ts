import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#101113',
  '--slot4-page-text': '#f8f8f3',
  '--slot4-panel-bg': '#181a1f',
  '--slot4-surface-bg': '#151619',
  '--slot4-muted-text': '#b6bac4',
  '--slot4-soft-muted-text': '#8f96a3',
  '--slot4-accent': '#3f7cff',
  '--slot4-accent-fill': '#3f64f4',
  '--slot4-accent-soft': '#d7e2ff',
  '--slot4-dark-bg': '#08090b',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#23262d',
  '--slot4-cream': '#101113',
  '--slot4-warm': '#151619',
  '--slot4-lavender': '#1b2233',
  '--slot4-gray': '#0d0e10',
  '--slot4-body-gradient': 'linear-gradient(180deg, #101113 0%, #151619 46%, #0d0e10 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-white/10',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_12px_40px_rgba(0,0,0,0.08)]',
  shadowStrong: 'shadow-[0_18px_70px_rgba(0,0,0,0.14)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.62))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8',
    sectionY: 'py-14 sm:py-16 lg:py-20',
  },
  layout: {
    safeGrid: 'grid gap-6 md:grid-cols-2 xl:grid-cols-3',
    featureGrid: 'grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center',
    rail: 'flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[140px] shrink-0 snap-start sm:w-[160px]',
  },
  type: {
    eyebrow: 'text-xs font-extrabold uppercase tracking-[0.22em]',
    heroTitle: 'text-4xl font-black leading-[0.94] tracking-tight sm:text-6xl lg:text-[5.6rem]',
    sectionTitle: 'text-3xl font-black leading-[0.96] tracking-tight sm:text-5xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-lg border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-lg border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-lg ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary: `inline-flex items-center justify-center rounded-md ${editablePalette.accentBg} px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:opacity-90`,
    secondary: `inline-flex items-center justify-center rounded-md border ${editablePalette.border} bg-white/5 px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:bg-white/10`,
    accent: `inline-flex items-center justify-center rounded-md ${editablePalette.accentBg} px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:opacity-90`,
  },
  media: {
    frame: `relative overflow-hidden rounded-xl ${editablePalette.mediaBg}`,
    ratio: 'aspect-[2/3]',
  },
  motion: {
    lift: 'transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(0,0,0,0.14)]',
    fade: 'transition duration-300 hover:opacity-80',
  },
} as const

export const aiLayoutRules = [
  'Change the full site color palette in editableRootStyle first; all homepage sections consume those CSS variables.',
  'Keep page structure in src/editable/sections/HomeSections.tsx so AI can redesign the whole home experience in one file.',
  'Use wide readable grids; never create skinny columns for paragraphs or cards.',
  'Use horizontal rails for dense post browsing, like the MysteryCoder reference layout.',
  'Keep dynamic post fetching intact; do not replace posts with mock arrays.',
  'Use postHref() for all post links so task-specific routes keep working.',
] as const
