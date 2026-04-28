export type GridImage = {
  id: string
  src: string
  alt: string
}

export type FeaturedStory = {
  id: string
  title: string
  location?: string
  dateLabel: string
  cover: string
}

export const editorialGrid: GridImage[] = [
  {
    id: 'e-01',
    src: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=2200&q=80',
    alt: 'Couple walking in warm light',
  },
  {
    id: 'e-02',
    src: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?auto=format&fit=crop&w=2200&q=80',
    alt: 'Bride portrait closeup',
  },
  {
    id: 'e-03',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=80',
    alt: 'Couple candid laughter',
  },
  {
    id: 'e-04',
    src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=2200&q=80',
    alt: 'Engagement ring detail',
  },
  {
    id: 'e-05',
    src: 'https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?auto=format&fit=crop&w=2200&q=80',
    alt: 'Wedding ceremony frame',
  },
  {
    id: 'e-06',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=80',
    alt: 'Candid emotional moment',
  },
  {
    id: 'e-07',
    src: 'https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?auto=format&fit=crop&w=2200&q=80',
    alt: 'Cinematic wide wedding frame',
  },
  {
    id: 'e-08',
    src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=80',
    alt: 'Couple portrait in soft tones',
  },
]

export const featuredStories: FeaturedStory[] = [
  {
    id: 'f-01',
    title: 'A Sunset Sangeet',
    location: 'Chennai',
    dateLabel: 'Oct 7, 2024',
    cover:
      'https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=2200&q=80',
  },
  {
    id: 'f-02',
    title: 'Temple Vows',
    location: 'Madurai',
    dateLabel: 'Aug 25, 2024',
    cover:
      'https://images.unsplash.com/photo-1523437237164-d442d57cc3c9?auto=format&fit=crop&w=2200&q=80',
  },
  {
    id: 'f-03',
    title: 'City Love Story',
    location: 'Bangalore',
    dateLabel: 'Aug 8, 2024',
    cover:
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2200&q=80',
  },
]

