import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Independent articles and sharp reading notes',
      description: 'Read thoughtful articles, practical guides, essays, and editorial notes through a clean article-first experience.',
      openGraphTitle: 'Independent articles and sharp reading notes',
      openGraphDescription: 'Discover articles, essays, guides, and contributor notes through a focused reading experience.',
      keywords: ['article site', 'editorial journal', 'essays', 'reading platform'],
    },
    hero: {
      badge: 'Article publication',
      title: ['READ THAT', 'MAKES IDEAS STICK.'],
      description: 'Browse sharp articles, practical explainers, opinion pieces, and contributor notes built for people who want useful reading without clutter.',
      primaryCta: { label: 'Read articles', href: '/article' },
      secondaryCta: { label: 'Submit an idea', href: '/create' },
      searchPlaceholder: 'Search articles, topics, authors, or categories',
      focusLabel: 'Editorial focus',
      featureCardBadge: 'latest issue',
      featureCardTitle: 'Fresh articles lead the homepage and keep the archive alive.',
      featureCardDescription: 'Recent posts, thoughtful excerpts, and clear routes make it easy to keep reading.',
    },
    intro: {
      badge: 'About the platform',
      title: 'Built for articles that need room to breathe.',
      paragraphs: [
        'This site keeps the reading experience focused: strong headlines, useful summaries, clean cards, and article pages that do not bury the actual piece.',
        'The archive is designed for repeated browsing, so readers can scan categories, open related articles, and move from one idea to the next without losing context.',
        'Contributors get a simple publishing path, while visitors get a publication that feels intentional from homepage to detail page.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Reading-first homepage with strong article hierarchy.',
        'Clean archive cards for headlines, categories, and excerpts.',
        'Focused search for topics, titles, and contributor ideas.',
        'Simple publishing flow for new article submissions.',
      ],
      primaryLink: { label: 'Browse articles', href: '/article' },
      secondaryLink: { label: 'Create article', href: '/create' },
    },
    cta: {
      badge: 'Start exploring',
      title: 'Start with one article. Leave with five better ideas.',
      description: 'Search the archive, read the latest pieces, or submit your own article draft from the publishing workspace.',
      primaryCta: { label: 'Browse Articles', href: '/article' },
      secondaryCta: { label: 'Contact editor', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: `About ${slot4BrandConfig.siteName}`,
    title: 'Independent reviews for better-informed decisions.',
    description: `${slot4BrandConfig.siteName} helps readers understand products, services, and everyday choices through clear, useful, and carefully considered editorial content.`,
    paragraphs: [
      'Our goal is simple: make research easier to follow. We publish reviews, comparisons, practical guides, and informed perspectives without unnecessary complexity.',
      'Each article is designed to explain what matters, highlight meaningful differences, and give readers enough context to form their own conclusions.',
      'We value clarity, accuracy, and transparency. As the site grows, we will continue building a useful archive that readers can return to whenever they need a dependable starting point.',
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Pitch a story, ask a question, or reach the editorial desk.',
    description: 'Send article ideas, correction requests, partnership notes, or contributor questions. Keep it specific and we will respond with the right next step.',
    formTitle: 'Contact the editors',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search articles, topics, categories, and titles across the publication.',
    },
    hero: {
      badge: 'Search the article archive',
      title: 'Find the article you came for, then keep reading.',
      description: 'Search by keyword, title, topic, category, or article type across the full publication archive.',
      placeholder: 'Search by keyword, article topic, category, or title',
    },
    resultsTitle: 'Latest searchable articles',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a new article draft for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to write a new article.',
      description: 'Use your account to open the article workspace, save your submission details, and prepare a clean draft.',
    },
    hero: {
      badge: 'Article workspace',
      title: 'Draft an article with a clear title, summary, and source trail.',
      description: 'Add the headline, category, summary, source link, featured image, and article body in one focused workspace.',
    },
    formTitle: 'Article details',
    submitLabel: 'Submit article',
    successTitle: 'Article submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this article publication.',
      badge: 'Member access',
      title: 'Welcome back to the reading room.',
      description: 'Login to open your publishing workspace, prepare article drafts, and keep your contributor identity connected to the site.',
      formTitle: 'Login to continue',
      submitLabel: 'Enter workspace',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this article publication.',
      badge: 'Contributor access',
      title: 'Create an account and bring your article ideas with you.',
      description: 'Sign up to publish article drafts, save contributor details, and keep your submissions tied to one simple account.',
      formTitle: 'Create contributor account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
