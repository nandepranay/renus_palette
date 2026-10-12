import type { Artwork } from '../types';
import { getArtworkUrl } from '../config/artistConfig';

/**
 * Renuka's actual paintings extracted directly from her studio portfolio PDF.
 * Source of truth: public/artworks/
 * 
 * Rules:
 * - Only paintings with verified physical files in public/artworks/ are included.
 * - Primary front view uses the original physical painting photo straight-on.
 * - Each painting supports 3 views: Front View (original photo), Angled View (canvas wall mockup), Close-up View (brushwork detail crop).
 * - All artworks show "Price on request" unless an exact individual price is confirmed.
 * - Dimensions and medium are only stated where confirmed from the artist.
 */
export const artworks: Artwork[] = [
  {
    id: 'lotus-pond',
    title: 'Lotus Pond',
    isOfficialTitle: true,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Floral & Botanical Art',
    categorySlug: 'floral-botanical',
    secondaryCategories: ['Nature & Landscapes'],
    description:
      'Luminous original acrylic composition capturing delicate lotus blossoms, floating lily pads, and shimmering ambient water reflections. A signature piece celebrating tranquil beauty.',
    imageUrl: getArtworkUrl('artworks/lotus-pond.jpg'),
    imageFileName: 'lotus-pond.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Sizing on Request',
    orientation: 'landscape',
    featured: true,
    tags: ['Lotus Pond', 'Acrylic', 'Floral', 'Botanical', 'Water Lilies', 'Original Canvas'],
    views: {
      front: getArtworkUrl('artworks/lotus-pond.jpg'),
      angled: getArtworkUrl('artworks/views/lotus-pond-angled.jpg'),
      detail: getArtworkUrl('artworks/views/lotus-pond-detail.jpg')
    }
  },
  {
    id: 'buddha-portrait',
    title: 'Meditative Buddha',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Spiritual Art',
    categorySlug: 'spiritual-art',
    description:
      'A serene, meditative portrayal of Lord Buddha rendered with calming earth tones, contemplative stillness, and ambient brushwork that brings tranquility to living spaces.',
    imageUrl: getArtworkUrl('artworks/buddha-portrait.jpg'),
    imageFileName: 'buddha-portrait.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'vertical',
    featured: true,
    tags: ['Buddha', 'Spiritual', 'Acrylic', 'Meditative', 'Calm', 'Serenity'],
    views: {
      front: getArtworkUrl('artworks/buddha-portrait.jpg'),
      angled: getArtworkUrl('artworks/views/buddha-portrait-angled.jpg'),
      detail: getArtworkUrl('artworks/views/buddha-portrait-detail.jpg')
    }
  },
  {
    id: 'radha-krishna',
    title: 'Radha-Krishna Painting',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Spiritual Art',
    categorySlug: 'spiritual-art',
    description:
      'A divine celebration of celestial love, sacred harmony, and devotion portrayed with evocative, fluid acrylic brushstrokes and radiant color harmonies.',
    imageUrl: getArtworkUrl('artworks/radha-krishna.jpg'),
    imageFileName: 'radha-krishna.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'vertical',
    featured: true,
    tags: ['Radha Krishna', 'Spiritual', 'Devotional', 'Acrylic', 'Indian Heritage'],
    views: {
      front: getArtworkUrl('artworks/radha-krishna.jpg'),
      angled: getArtworkUrl('artworks/views/radha-krishna-angled.jpg'),
      detail: getArtworkUrl('artworks/views/radha-krishna-detail.jpg')
    }
  },
  {
    id: 'ocean-sunset',
    title: 'Ocean Sunset',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Nature & Landscapes',
    categorySlug: 'nature-landscapes',
    description:
      'Golden evening sun dipping into rolling ocean tides, radiating warmth, gleaming water highlights, and sunset horizon tranquility that elevates any room.',
    imageUrl: getArtworkUrl('artworks/ocean-sunset.jpg'),
    imageFileName: 'ocean-sunset.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'landscape',
    featured: true,
    tags: ['Ocean', 'Sunset', 'Seascape', 'Landscape', 'Warm Colors', 'Acrylic'],
    views: {
      front: getArtworkUrl('artworks/ocean-sunset.jpg'),
      angled: getArtworkUrl('artworks/views/ocean-sunset-angled.jpg'),
      detail: getArtworkUrl('artworks/views/ocean-sunset-detail.jpg')
    }
  },
  {
    id: 'forest-landscape',
    title: 'Forest Landscape',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Nature & Landscapes',
    categorySlug: 'nature-landscapes',
    description:
      'Enchanting woodland panorama featuring filtered canopy sunlight, rich earthy greens, and tranquil forest atmosphere crafted with rich textural depth.',
    imageUrl: getArtworkUrl('artworks/forest-landscape.jpg'),
    imageFileName: 'forest-landscape.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'landscape',
    featured: true,
    tags: ['Forest', 'Woodland', 'Nature', 'Landscape', 'Greenery', 'Acrylic'],
    views: {
      front: getArtworkUrl('artworks/forest-landscape.jpg'),
      angled: getArtworkUrl('artworks/views/forest-landscape-angled.jpg'),
      detail: getArtworkUrl('artworks/views/forest-landscape-detail.jpg')
    }
  },
  {
    id: 'green-watercolor-landscape',
    title: 'Green Watercolor Landscape',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Nature & Landscapes',
    categorySlug: 'nature-landscapes',
    description:
      'Dreamy landscape study with flowing translucent washes, gentle misty slopes, and soothing green watercolor gradients that evoke morning freshness.',
    imageUrl: getArtworkUrl('artworks/green-watercolor-landscape.jpg'),
    imageFileName: 'green-watercolor-landscape.jpg',
    medium: 'Watercolor on Paper',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'landscape',
    featured: false,
    tags: ['Watercolor', 'Landscape', 'Misty Hills', 'Dreamy', 'Nature', 'Greenery'],
    views: {
      front: getArtworkUrl('artworks/green-watercolor-landscape.jpg'),
      angled: getArtworkUrl('artworks/views/green-watercolor-landscape-angled.jpg'),
      detail: getArtworkUrl('artworks/views/green-watercolor-landscape-detail.jpg')
    }
  },
  {
    id: 'cottage-landscape',
    title: 'Cottage Landscape',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Nature & Landscapes',
    categorySlug: 'nature-landscapes',
    description:
      'A cozy countryside cottage nestled amidst blooming flora and peaceful scenery, bringing warmth, nostalgia, and storybook charm to any space.',
    imageUrl: getArtworkUrl('artworks/cottage-landscape.jpg'),
    imageFileName: 'cottage-landscape.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'landscape',
    featured: false,
    tags: ['Cottage', 'Countryside', 'Garden', 'Landscape', 'Warm & Cozy'],
    views: {
      front: getArtworkUrl('artworks/cottage-landscape.jpg'),
      angled: getArtworkUrl('artworks/views/cottage-landscape-angled.jpg'),
      detail: getArtworkUrl('artworks/views/cottage-landscape-detail.jpg')
    }
  },
  {
    id: 'water-droplet-leaf',
    title: 'Leaf Painting with Dewdrops',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Floral & Botanical Art',
    categorySlug: 'floral-botanical',
    secondaryCategories: ['Nature & Landscapes'],
    description:
      'Intricate botanical study of glistening water droplets resting on a vibrant green leaf with realistic light refractions and delicate vein textures.',
    imageUrl: getArtworkUrl('artworks/water-droplet-leaf.jpg'),
    imageFileName: 'water-droplet-leaf.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'square',
    featured: true,
    tags: ['Leaf', 'Dewdrop', 'Botanical', 'Floral', 'Green Nature', 'Macro Study'],
    views: {
      front: getArtworkUrl('artworks/water-droplet-leaf.jpg'),
      angled: getArtworkUrl('artworks/views/water-droplet-leaf-angled.jpg'),
      detail: getArtworkUrl('artworks/views/water-droplet-leaf-detail.jpg')
    }
  }
];
