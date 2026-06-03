import Link from 'next/link'
import { ArrowRight, PenLine, Search } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-4xl font-black tracking-tight text-white">{value}<span className="text-[#3f7cff]">+</span></p>
      <p className="mt-2 text-sm font-bold text-white/45">{label}</p>
    </div>
  )
}

function ArticlePoster({ post, href, large = false, index = 0 }: { post: SitePost; href: string; large?: boolean; index?: number }) {
  return (
    <Link href={href} className={`group block overflow-hidden rounded-lg bg-[#111216] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#161820] ${large ? 'md:col-span-2' : ''}`}>
      <div className={`relative overflow-hidden rounded-lg bg-[#23262d] ${large ? 'aspect-[16/7]' : 'aspect-[16/10]'}`}>
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
        <div className="absolute inset-0 bg-[#315cff]/20 mix-blend-screen" />
      </div>
      <p className="mt-5 text-[11px] font-black uppercase tracking-[0.28em] text-[#3f7cff]">{getEditableCategory(post)}</p>
      <h3 className={`${large ? 'text-3xl sm:text-4xl' : 'text-2xl'} mt-3 line-clamp-3 font-black leading-[0.98] tracking-tight text-white`}>{post.title}</h3>
      <p className="mt-3 line-clamp-3 text-sm font-semibold leading-7 text-white/55">{getEditableExcerpt(post, large ? 190 : 130)}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-white/70">
        Read article {String(index + 1).padStart(2, '0')} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

function TextIndex({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid grid-cols-[56px_minmax(0,1fr)] gap-4 border-t border-white/10 py-6">
      <span className="text-4xl font-black tracking-tight text-white/10">#{index + 1}</span>
      <div>
        <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#3f7cff]">{getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-2 text-xl font-black leading-tight text-white">{post.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/52">{getEditableExcerpt(post, 110)}</p>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroPost = posts[0]
  const heroTitle = pagesContent.home.hero.title.join(' ')
  const heroImage = heroPost ? getEditablePostImage(heroPost) : '/placeholder.svg?height=900&width=1400'

  return (
    <section className="relative overflow-hidden bg-[#101113] text-white">
      <div className="absolute inset-0 opacity-35">
        <img src={heroImage} alt="" className="h-full w-full object-cover grayscale" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,17,19,0.38),#101113_86%)]" />
      </div>
      <div className="relative mx-auto max-w-[1120px] px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-24">
        <div className="max-w-5xl">
          <p className={dc.type.eyebrow + ' text-[#3f7cff]'}>{pagesContent.home.hero.badge}</p>
          <h1 className="mt-7 max-w-5xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-[8.5rem]">
            {heroTitle.replace('STICK.', '')}<span className="text-[#3f7cff]">STICK.</span>
          </h1>
        </div>
        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[minmax(0,1fr)_1fr] md:items-start">
          <div>
            <p className="max-w-xl text-lg font-bold leading-8 text-white/82">{pagesContent.home.hero.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={primaryRoute} className={dc.button.primary}>{pagesContent.home.hero.primaryCta.label} <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/create" className={dc.button.secondary}><PenLine className="h-4 w-4" /> {pagesContent.home.hero.secondaryCta.label}</Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <Stat value="132" label="Articles published" />
            <Stat value="42" label="Topics covered" />
            <Stat value="7" label="Editorial lanes" />
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 10)
  if (!railPosts.length) return null
  return (
    <section className="border-y border-white/10 bg-[#151619] text-white">
      <div className="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className={dc.type.eyebrow + ' text-[#3f7cff]'}>Latest issue</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">Fresh from the archive.</h2>
          </div>
          <Link href={primaryRoute} className="hidden text-sm font-black uppercase tracking-[0.14em] text-white/70 hover:text-white sm:inline-flex">View all</Link>
        </div>
        <div className="mt-8 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {railPosts.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="group w-[230px] shrink-0 snap-start rounded-lg bg-[#101113] p-3 transition hover:-translate-y-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-[#23262d]">
                <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0" />
                <span className="absolute left-3 top-3 rounded-md bg-[#3f64f4] px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white">{index + 1}</span>
              </div>
              <h3 className="mt-4 line-clamp-3 text-lg font-black leading-tight text-white">{post.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 5)
  if (!featured.length) return null
  return (
    <section className="bg-[#101113] text-white">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className={dc.type.eyebrow + ' text-[#3f7cff]'}>Editorial selection</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">
            From first thought to final paragraph.
          </h2>
          <p className="mt-6 max-w-md text-base font-bold leading-8 text-white/62">
            Browse the pieces that define the publication: researched guides, opinion essays, explainers, and contributor notes.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((post, index) => (
            <ArticlePoster key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} large={index === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(5)
  const indexPosts = sectionPosts.slice(0, 8)
  if (!indexPosts.length) return null
  return (
    <section className="bg-[#151619] text-white">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className={dc.type.eyebrow + ' text-[#3f7cff]'}>{taskLabel(primaryTask)} index</p>
          <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-tight sm:text-6xl">Search the archive without the noise.</h2>
          <p className="mt-6 max-w-md text-base font-bold leading-8 text-white/62">Use the archive for titles, categories, topics, and article trails. The page stays narrow enough to read and dense enough to scan.</p>
          <form action="/search" className="mt-8 flex max-w-md rounded-md border border-white/10 bg-[#0c0d10] p-2">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-3 text-sm font-bold text-white outline-none placeholder:text-white/35" />
            <button className="inline-flex items-center gap-2 rounded-md bg-[#3f64f4] px-4 py-3 text-sm font-black text-white"><Search className="h-4 w-4" /> Search</button>
          </form>
        </div>
        <div>
          {indexPosts.map((post, index) => <TextIndex key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="relative overflow-hidden bg-[#101113] text-white">
      <div className="mx-auto max-w-[1120px] px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className={dc.type.eyebrow + ' text-[#3f7cff]'}>Got an article in mind?</p>
        <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl">
          Let's make the next useful read.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-bold leading-8 text-white/70">
          Pitch a topic, submit a draft, or contact the editorial desk with a correction or contributor question.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/create" className={dc.button.primary}>Start writing <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}
