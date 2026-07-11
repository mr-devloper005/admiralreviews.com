import type { CSSProperties } from 'react'
import { getAdSlot } from './ad-slots'
import type { SiteAd } from '@/lib/site-connector'

export type AdSkin = {
  radius?: string
  border?: string
  shadow?: string
  background?: string
  padding?: string
  labelClassName?: string
}

export function normalizeAdHref(url?: string | null): string {
  const value = (url || '').trim()
  if (!value) return '#'
  if (/^https?:\/\//i.test(value)) return value
  if (value.startsWith('//')) return `https:${value}`
  if (value.startsWith('/') || /^(mailto:|tel:)/i.test(value)) return value
  return `https://${value}`
}

export function AdFrame({ ad, size, skin, className, showLabel = false, label = 'Sponsored', eager = false }: {
  ad: SiteAd
  size?: string
  skin?: AdSkin
  className?: string
  showLabel?: boolean
  label?: string
  eager?: boolean
}) {
  const spec = getAdSlot(ad.slot, size)
  const hasPanelDimensions = typeof ad.width === 'number' && typeof ad.height === 'number' && ad.width > 0 && ad.height > 0
  const frameStyle: CSSProperties = {
    position: 'relative', display: 'block', width: '100%',
    maxWidth: hasPanelDimensions ? ad.width! : spec.maxWidth,
    borderRadius: skin?.radius, border: skin?.border, boxShadow: skin?.shadow,
    padding: skin?.padding, background: skin?.background,
  }
  const mediaStyle: CSSProperties = { width: '100%', height: '100%', objectFit: spec.fit, display: 'block' }
  const video = ad.mediaType === 'video' || /\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(ad.imageUrl || '')

  return (
    <a href={normalizeAdHref(ad.linkUrl)} target={ad.openInNewTab === false ? undefined : '_blank'}
      rel="sponsored noopener noreferrer" data-ad-slot={ad.slot} data-ad-id={ad.id}
      aria-label={ad.altText || ad.name} className={className} style={frameStyle}>
      {showLabel ? <span className={skin?.labelClassName} style={{ position: 'absolute', top: 6, right: 6, zIndex: 10, fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '2px 6px', borderRadius: 4, ...(skin?.labelClassName ? {} : { background: 'rgba(0,0,0,0.55)', color: '#fff' }) }}>{label}</span> : null}
      <span style={{ display: 'block', aspectRatio: hasPanelDimensions ? `${ad.width} / ${ad.height}` : spec.aspectRatio, overflow: 'hidden', borderRadius: 'inherit', background: skin?.background ?? '#f3f4f6' }}>
        {video ? <video src={ad.imageUrl} style={mediaStyle} autoPlay muted loop playsInline preload="metadata" aria-label={ad.altText || ad.name} /> : <img src={ad.imageUrl} alt={ad.altText || ad.name} style={mediaStyle} loading={eager ? 'eager' : 'lazy'} decoding="async" />}
      </span>
    </a>
  )
}
