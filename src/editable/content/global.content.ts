import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Independent reading platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Article journal',
    primaryLinks: [
      { label: 'Articles', href: '/articles' },
      { label: 'Archive', href: '/article' },
      { label: 'Create', href: '/create' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Start exploring', href: '/' },
      secondary: { label: 'Submit', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Sharp articles, useful ideas, cleaner reading',
    description: 'An article-first publication for thoughtful reads, practical explainers, opinion pieces, research notes, and contributor stories.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Articles', href: '/articles' },
          { label: 'Search', href: '/search' },
          { label: 'Create', href: '/create' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
    ],
    bottomNote: 'Built for clean reading and connected publishing.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
