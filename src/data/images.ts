export type Photo = {
  id: string
  src: string
  alt: string
  category: 'Weddings' | 'Pre-Wedding' | 'Engagement' | 'Candid Moments'
}

export const heroSlides = [
  {
    id: 'hero-1',
    src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=2400&q=80',
    alt: 'Indian wedding couple under floral mandap',
  },
  {
    id: 'hero-2',
    src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=2400&q=80',
    alt: 'Bride closeup with traditional jewelry',
  },
  {
    id: 'hero-3',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2400&q=80',
    alt: 'Cinematic couple portrait in warm light',
  },
] as const

export const galleryPhotos: Photo[] = [
  {
    id: 'g-01',
    src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=2200&q=80',
    alt: 'Bride and groom walking together',
    category: 'Weddings',
  },
  {
    id: 'g-02',
    src: 'https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?auto=format&fit=crop&w=2200&q=80',
    alt: 'Wedding ceremony candid moment',
    category: 'Weddings',
  },
  {
    id: 'g-03',
    src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=2200&q=80',
    alt: 'Bride close portrait',
    category: 'Candid Moments',
  },
  {
    id: 'g-04',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=80',
    alt: 'Couple laughing together outdoors',
    category: 'Pre-Wedding',
  },
  {
    id: 'g-05',
    src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=2200&q=80',
    alt: 'Engagement ring closeup',
    category: 'Engagement',
  },
  {
    id: 'g-06',
    src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=2200&q=80',
    alt: 'Warm golden hour couple portrait',
    category: 'Pre-Wedding',
  },
  {
    id: 'g-07',
    src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=2200&q=80',
    alt: 'Bride smile candid',
    category: 'Candid Moments',
  },
  {
    id: 'g-08',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=80',
    alt: 'Engagement couple portrait',
    category: 'Engagement',
  },
]

export const instagramPreview = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?auto=format&fit=crop&w=1400&q=80',
]

