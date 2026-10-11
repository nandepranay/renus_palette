import type { Collection } from '../types';
import { getArtworkUrl } from '../config/artistConfig';

export const collections: Collection[] = [
  {
    id: 'nature-landscapes',
    title: 'Nature & Landscapes',
    slug: 'nature-landscapes',
    subtitle: 'Earth, Oceans & Serene Horizons',
    description:
      'Tranquil coastal sunsets, rich forest canopies, and dreamy green watercolor hills that bring natural peace into your living spaces.',
    curatorNote:
      'Inspired by the changing moods of nature, these landscapes invite a moment of pause and grounding in everyday modern life.',
    imageUrl: getArtworkUrl('artworks/ocean-sunset.jpg'),
    artworkCount: 5,
    accentColor: '#4A6B5D'
  },
  {
    id: 'spiritual-art',
    title: 'Spiritual Art',
    slug: 'spiritual-art',
    subtitle: 'Meditative Stillness & Divine Harmony',
    description:
      'Evocative representations of Lord Buddha and Radha-Krishna, capturing deep sacred peace, devotion, and soulful atmosphere.',
    curatorNote:
      'Created to infuse rooms with spiritual serenity, calm thoughts, and harmonious positive energy.',
    imageUrl: getArtworkUrl('artworks/buddha-portrait.jpg'),
    artworkCount: 2,
    accentColor: '#D4AF37'
  },
  {
    id: 'portraits',
    title: 'Portraits',
    slug: 'portraits',
    subtitle: 'Tender Expressions & Human Spirit',
    description:
      'Heartfelt portraits on classic, round, and oval canvases capturing personal innocence, family love, and character.',
    curatorNote:
      'Each portrait is an intimate dialogue with the viewer, celebrating life stories and tender expressions in radiant acrylics.',
    imageUrl: getArtworkUrl('artworks/child-portrait-oval.jpg'),
    artworkCount: 4,
    accentColor: '#C08081'
  },
  {
    id: 'floral-botanical',
    title: 'Floral & Botanical Art',
    slug: 'floral-botanical',
    subtitle: 'Lotus Water Blossoms & Fresh Botanical Life',
    description:
      'Signature pieces including Lotus Pond and dewdrops on fresh leaves, capturing the vibrant vitality of flora.',
    curatorNote:
      'Botanical compositions that celebrate organic beauty, shimmering morning light, and lush green serenity.',
    imageUrl: getArtworkUrl('artworks/lotus-pond.jpg'),
    artworkCount: 2,
    accentColor: '#2DD4BF'
  },
  {
    id: 'custom-art',
    title: 'Custom Art',
    slug: 'custom-art',
    subtitle: 'Bespoke Family, Child & Pet Commissions',
    description:
      'Personalized commissioned paintings tailored to your concept, special memory, favorite colors, and chosen canvas size.',
    curatorNote:
      'Renuka works closely with you to transform personal memories into enduring, hand-painted original art.',
    imageUrl: getArtworkUrl('artworks/family-portrait.jpg'),
    artworkCount: 4,
    accentColor: '#FF6161'
  }
];
