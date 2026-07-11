import type { AdSkin } from '@/lib/ads/ad-frame'

export const adSkin: AdSkin = {
  radius: '16px',
  border: '1px solid rgba(0,0,0,0.06)',
  shadow: '0 8px 30px rgba(0,0,0,0.06)',
  background: '#ffffff',
}

export const adSkinBySlot: Partial<Record<string, AdSkin>> = {
  sidebar: { radius: '12px', shadow: 'none', border: '1px solid rgba(0,0,0,0.08)' },
  interstitial: { radius: '24px' },
  header: { radius: '20px' },
}

export function skinFor(slot: string): AdSkin {
  return { ...adSkin, ...(adSkinBySlot[slot] ?? {}) }
}
