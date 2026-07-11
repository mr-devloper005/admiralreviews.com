'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { SiteAd } from '@/lib/site-connector'
import { AdFrame, type AdSkin } from './ad-frame'

function buildSequence(ads: SiteAd[]): SiteAd[] {
  const sorted = [...ads].sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))
  const remaining = sorted.map((ad) => Math.min(Math.max(Math.floor(ad.weight ?? 1), 1), 12))
  const sequence: SiteAd[] = []
  while (remaining.some((weight) => weight > 0)) {
    sorted.forEach((ad, index) => {
      if (remaining[index] > 0) { sequence.push(ad); remaining[index] -= 1 }
    })
  }
  return sequence
}

export function AdRotator({ ads, size, skin, defaultDurationMs = 7000, pauseOnHover = true, className, showLabel, label }: {
  ads: SiteAd[]; size?: string; skin?: AdSkin; defaultDurationMs?: number; pauseOnHover?: boolean;
  className?: string; showLabel?: boolean; label?: string
}) {
  const sequence = useMemo(() => buildSequence(ads), [ads])
  const [step, setStep] = useState(0)
  const paused = useRef(false)
  const fallback = Number.isFinite(defaultDurationMs) && defaultDurationMs > 0 ? defaultDurationMs : 7000

  useEffect(() => {
    if (sequence.length <= 1) return
    let timer: ReturnType<typeof setTimeout>
    const current = sequence[step % sequence.length]
    const duration = Math.max(1500, typeof current?.durationMs === 'number' && Number.isFinite(current.durationMs) ? current.durationMs : fallback)
    const tick = () => {
      if (paused.current || document.hidden) { timer = setTimeout(tick, 500); return }
      setStep((value) => (value + 1) % sequence.length)
    }
    timer = setTimeout(tick, duration)
    return () => clearTimeout(timer)
  }, [step, sequence, fallback])

  const current = sequence[step % sequence.length]
  if (!current) return null
  return <div className={className} onMouseEnter={pauseOnHover ? () => { paused.current = true } : undefined} onMouseLeave={pauseOnHover ? () => { paused.current = false } : undefined}><AdFrame ad={current} size={size} skin={skin} showLabel={showLabel} label={label} /></div>
}
