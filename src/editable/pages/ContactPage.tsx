'use client'

import { FileText, Mail, MessageSquareText } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

const lanes = [
  { icon: FileText, title: 'Article pitches', body: 'Send a headline, angle, audience note, and any source links that help us understand the piece.' },
  { icon: MessageSquareText, title: 'Corrections and updates', body: 'Flag factual issues, outdated details, attribution questions, or suggested clarifications.' },
  { icon: Mail, title: 'Contributor support', body: 'Ask about drafts, editorial fit, publishing workflow, partnerships, and account access.' },
]

export default function ContactPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#101113] text-white">
        <section className="mx-auto grid max-w-[1120px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-16">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#3f7cff]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.92] tracking-tight sm:text-7xl">{pagesContent.contact.title}</h1>
            <p className="mt-6 max-w-2xl text-base font-bold leading-8 text-white/64">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-white/10 bg-[#151619] p-5">
                  <lane.icon className="h-5 w-5 text-[#3f7cff]" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm font-semibold leading-7 text-white/58">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-[#0c0d10] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <h2 className="text-3xl font-black tracking-tight">{pagesContent.contact.formTitle}</h2>
            <p className="mt-3 text-sm font-semibold leading-7 text-white/55">Use the form below for article ideas, corrections, editorial requests, and contributor questions.</p>
            <div className="mt-6">
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
