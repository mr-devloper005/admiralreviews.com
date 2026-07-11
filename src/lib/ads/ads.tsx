import type { ReactNode } from 'react'
import { fetchSiteAds, type SiteAd } from '@/lib/site-connector'
import { skinFor } from '@/editable/ads/ads-theme'
import { AdFrame } from './ad-frame'
import { AdRotator } from './ad-rotator'

export type AdsProps = {
  slot: string; size?: string; className?: string; index?: number; rotate?: boolean;
  defaultDurationMs?: number; pauseOnHover?: boolean; showLabel?: boolean; label?: string;
  eager?: boolean; fallback?: ReactNode
}

export default async function Ads({ slot, size, className, index, rotate = true, defaultDurationMs, pauseOnHover = true, showLabel = false, label, eager = false, fallback = null }: AdsProps) {
  const safeSlot = typeof slot === 'string' ? slot.trim() : ''
  if (!safeSlot) return <>{fallback}</>
  const ads = await fetchSiteAds(safeSlot)
  if (!ads.length) return <>{fallback}</>
  const skin = skinFor(safeSlot)
  const fixed = typeof index === 'number' && Number.isFinite(index)
  if (rotate && !fixed && ads.length > 1) return <AdRotator ads={ads} size={size} skin={skin} defaultDurationMs={defaultDurationMs} pauseOnHover={pauseOnHover} className={className} showLabel={showLabel} label={label} />
  const position = fixed ? Math.abs(Math.floor(index)) : 0
  const ad: SiteAd = ads[position % ads.length]
  return <AdFrame ad={ad} size={size} skin={skin} className={className} showLabel={showLabel} label={label} eager={eager} />
}
