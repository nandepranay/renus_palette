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
export const galleryArtworks: Artwork[] = [
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

/**
 * New Arrivals: Unique individual paintings from public/artworks/
 * that are NOT duplicated in the existing gallery.
 * Excludes collage files (01-05).
 */
export const newArrivalArtworks: Artwork[] = [
  {
    id: 'child-portrait-oval',
    title: 'Child Portrait (Oval Canvas)',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Custom Art',
    categorySlug: 'custom-art',
    secondaryCategories: ['Portraits'],
    description:
      'A tender, emotional portrait of a child painted on a distinctive oval canvas, highlighting gentle innocence, radiant gaze, and loving personality.',
    imageUrl: getArtworkUrl('artworks/child-portrait-oval.jpg'),
    imageFileName: 'child-portrait-oval.jpg',
    medium: 'Acrylic on Oval Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'vertical',
    featured: true,
    tags: ['Portrait', 'Child Portrait', 'Oval Canvas', 'Custom Art', 'New Arrival'],
    views: {
      front: getArtworkUrl('artworks/child-portrait-oval.jpg'),
      angled: getArtworkUrl('artworks/views/child-portrait-oval-angled.jpg'),
      detail: getArtworkUrl('artworks/views/child-portrait-oval-detail.jpg')
    }
  },
  {
    id: 'child-portrait-round',
    title: 'Child Portrait (Circular Canvas)',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Custom Art',
    categorySlug: 'custom-art',
    secondaryCategories: ['Portraits'],
    description:
      'A warm circular canvas portrait capturing childhood innocence, a gentle smile, and tender expression with soft tonal transitions.',
    imageUrl: getArtworkUrl('artworks/child-portrait-round.jpg'),
    imageFileName: 'child-portrait-round.jpg',
    medium: 'Acrylic on Circular Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'square',
    featured: true,
    tags: ['Portrait', 'Child Portrait', 'Circular Canvas', 'Custom Art', 'New Arrival'],
    views: {
      front: getArtworkUrl('artworks/child-portrait-round.jpg'),
      angled: getArtworkUrl('artworks/views/child-portrait-round-angled.jpg'),
      detail: getArtworkUrl('artworks/views/child-portrait-round-detail.jpg')
    }
  },
  {
    id: 'family-portrait',
    title: 'Family Portrait',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Custom Art',
    categorySlug: 'custom-art',
    secondaryCategories: ['Portraits'],
    description:
      'A personalized custom family portrait painting celebrating togetherness, warmth, and cherished bonds in vibrant, enduring acrylic colors.',
    imageUrl: getArtworkUrl('artworks/family-portrait.jpg'),
    imageFileName: 'family-portrait.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'landscape',
    featured: true,
    tags: ['Family Portrait', 'Portraits', 'Custom Art', 'New Arrival', 'Heartfelt Keepsake'],
    views: {
      front: getArtworkUrl('artworks/family-portrait.jpg'),
      angled: getArtworkUrl('artworks/views/family-portrait-angled.jpg'),
      detail: getArtworkUrl('artworks/views/family-portrait-detail.jpg')
    }
  },
  {
    id: 'dog-portrait',
    title: 'Dog Portrait',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Custom Art',
    categorySlug: 'custom-art',
    secondaryCategories: ['Portraits'],
    description:
      'A joyful, loving custom pet portrait bringing out character, bright eyes, and loyal spirit with expressive brushwork and rich texture.',
    imageUrl: getArtworkUrl('artworks/dog-portrait.jpg'),
    imageFileName: 'dog-portrait.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Custom Inquiries Open',
    orientation: 'vertical',
    featured: true,
    tags: ['Pet Portrait', 'Dog Portrait', 'Custom Art', 'New Arrival', 'Animal Art'],
    views: {
      front: getArtworkUrl('artworks/dog-portrait.jpg'),
      angled: getArtworkUrl('artworks/views/dog-portrait-angled.jpg'),
      detail: getArtworkUrl('artworks/views/dog-portrait-detail.jpg')
    }
  }
];

/**
 * All individual paintings across the studio, combining existing gallery works and new arrivals.
 * Used for product detail lookup, search, wishlist, room view, etc.
 */
export const artworks: Artwork[] = [...galleryArtworks, ...newArrivalArtworks];

/**
 * 5 Studio Collage files and their alternate views preserved for future product-detail galleries.
 * Not displayed as separate individual paintings.
 */
export const collageGalleryAssets = [
  {
    id: '01_tropical_palm_watercolor',
    collageUrl: getArtworkUrl('artworks/01_tropical_palm_watercolor_collage.jpg'),
    frontViewUrl: getArtworkUrl('artworks/views/01_tropical_palm_watercolor_front.jpg')
  },
  {
    id: '02_lotus_pond_watercolor',
    collageUrl: getArtworkUrl('artworks/02_lotus_pond_watercolor_collage.jpg'),
    frontViewUrl: getArtworkUrl('artworks/views/02_lotus_pond_watercolor_front.jpg')
  },
  {
    id: '03_sunset_river_landscape',
    collageUrl: getArtworkUrl('artworks/03_sunset_river_landscape_collage.jpg'),
    frontViewUrl: getArtworkUrl('artworks/views/03_sunset_river_landscape_front.jpg')
  },
  {
    id: '04_seaside_reflections_canvas',
    collageUrl: getArtworkUrl('artworks/04_seaside_reflections_canvas_collage.jpg'),
    frontViewUrl: getArtworkUrl('artworks/views/04_seaside_reflections_canvas_front.jpg')
  },
  {
    id: '05_moonlit_flower_field_canvas',
    collageUrl: getArtworkUrl('artworks/05_moonlit_flower_field_canvas_collage.jpg'),
    frontViewUrl: getArtworkUrl('artworks/views/05_moonlit_flower_field_canvas_front.jpg')
  }
];

