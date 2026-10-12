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
    availability: 'Available • Ready to Ship',
    isSoldOut: false,
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
    availability: 'Sold Out • Commission Similar',
    isSoldOut: true,
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
    availability: 'Sold Out • Commission Similar',
    isSoldOut: true,
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
    availability: 'Sold Out • Commission Similar',
    isSoldOut: true,
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
    availability: 'Sold Out • Commission Similar',
    isSoldOut: true,
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
    availability: 'Sold Out • Commission Similar',
    isSoldOut: true,
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
    availability: 'Sold Out • Commission Similar',
    isSoldOut: true,
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
    availability: 'Available • Ready to Ship',
    isSoldOut: false,
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
 * New Arrivals: 5 new paintings added directly from Renuka's latest studio collection.
 * Each artwork has high-resolution front views and multi-angle display mockups.
 */
export const newArrivalArtworks: Artwork[] = [
  {
    id: 'water-lily-study',
    title: 'Water Lily Botanical Study',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Floral & Botanical Art',
    categorySlug: 'floral-botanical',
    description:
      'Delicate watercolor study of floating water lily pads and emergent lotus buds rendered in gentle turquoise, olive green, and ambient light. Elegantly presented in a gallery white frame.',
    imageUrl: getArtworkUrl('artworks/views/02_lotus_pond_watercolor_front.jpg'),
    imageFileName: '02_lotus_pond_watercolor_front.jpg',
    medium: 'Watercolor on Paper (Framed)',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Gallery Framed',
    orientation: 'square',
    featured: true,
    tags: ['Water Lily', 'Lotus', 'Botanical', 'Floral', 'Watercolor', 'Framed Artwork', 'New Arrival'],
    views: {
      front: getArtworkUrl('artworks/views/02_lotus_pond_watercolor_front.jpg'),
      angled: getArtworkUrl('artworks/02_lotus_pond_watercolor_collage.jpg'),
      detail: getArtworkUrl('artworks/views/02_lotus_pond_watercolor_front.jpg')
    }
  },
  {
    id: 'tropical-palm-sunset',
    title: 'Tropical Palm Sunset',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Nature & Landscapes',
    categorySlug: 'nature-landscapes',
    description:
      'Sun-drenched coastal watercolor capturing swaying tropical palms, evening shoreline reflections, and radiant sunset gradients in a premium white tabletop frame.',
    imageUrl: getArtworkUrl('artworks/views/01_tropical_palm_watercolor_front.jpg'),
    imageFileName: '01_tropical_palm_watercolor_front.jpg',
    medium: 'Watercolor on Paper (Framed)',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Gallery Framed',
    orientation: 'vertical',
    featured: true,
    tags: ['Tropical Palm', 'Sunset', 'Coastal', 'Watercolor', 'Framed Artwork', 'Beach', 'New Arrival'],
    views: {
      front: getArtworkUrl('artworks/views/01_tropical_palm_watercolor_front.jpg'),
      angled: getArtworkUrl('artworks/01_tropical_palm_watercolor_collage.jpg'),
      detail: getArtworkUrl('artworks/views/01_tropical_palm_watercolor_front.jpg')
    }
  },
  {
    id: 'sunset-river-valley',
    title: 'Sunset River Valley',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Nature & Landscapes',
    categorySlug: 'nature-landscapes',
    description:
      'Atmospheric watercolor landscape depicting a gentle meandering river illuminated by golden evening skies between verdant valley hills and distant ridges.',
    imageUrl: getArtworkUrl('artworks/views/03_sunset_river_landscape_front.jpg'),
    imageFileName: '03_sunset_river_landscape_front.jpg',
    medium: 'Watercolor on Paper (Framed)',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Gallery Framed',
    orientation: 'square',
    featured: true,
    tags: ['River', 'Valley', 'Golden Sunset', 'Watercolor', 'Framed Artwork', 'Landscape', 'New Arrival'],
    views: {
      front: getArtworkUrl('artworks/views/03_sunset_river_landscape_front.jpg'),
      angled: getArtworkUrl('artworks/03_sunset_river_landscape_collage.jpg'),
      detail: getArtworkUrl('artworks/views/03_sunset_river_landscape_front.jpg')
    }
  },
  {
    id: 'moonlit-wildflower-meadow',
    title: 'Moonlit Wildflower Meadow',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Nature & Landscapes',
    categorySlug: 'nature-landscapes',
    secondaryCategories: ['Floral & Botanical Art'],
    description:
      'Dreamy evening landscape painting featuring a glowing crescent moon, starlit lavender twilight clouds, and a blooming meadow of pink and purple flora on gallery canvas.',
    imageUrl: getArtworkUrl('artworks/views/05_moonlit_flower_field_canvas_front.jpg'),
    imageFileName: '05_moonlit_flower_field_canvas_front.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Display Stand Ready',
    orientation: 'square',
    featured: true,
    tags: ['Moonlit Sky', 'Crescent Moon', 'Wildflower Meadow', 'Acrylic on Canvas', 'Dreamy Night', 'New Arrival'],
    views: {
      front: getArtworkUrl('artworks/views/05_moonlit_flower_field_canvas_front.jpg'),
      angled: getArtworkUrl('artworks/05_moonlit_flower_field_canvas_collage.jpg'),
      detail: getArtworkUrl('artworks/views/05_moonlit_flower_field_canvas_front.jpg')
    }
  },
  {
    id: 'seaside-dappled-reflections',
    title: 'Seaside Dappled Reflections',
    isOfficialTitle: false,
    artistName: 'Renuka',
    artistBrand: 'renus_palette',
    category: 'Nature & Landscapes',
    categorySlug: 'nature-landscapes',
    description:
      'Vivid acrylic canvas composition capturing feet dipping into cool ocean waters, sunlit azure ripples, and expressive deep shadow reflections.',
    imageUrl: getArtworkUrl('artworks/views/04_seaside_reflections_canvas_front.jpg'),
    imageFileName: '04_seaside_reflections_canvas_front.jpg',
    medium: 'Acrylic on Canvas',
    priceDisplay: 'Price on request',
    isPriceConfirmed: false,
    price: 0,
    availability: 'Available • Display Stand Ready',
    orientation: 'vertical',
    featured: true,
    tags: ['Ocean Reflections', 'Coastal', 'Acrylic on Canvas', 'Seaside', 'Summer Memories', 'New Arrival'],
    views: {
      front: getArtworkUrl('artworks/views/04_seaside_reflections_canvas_front.jpg'),
      angled: getArtworkUrl('artworks/04_seaside_reflections_canvas_collage.jpg'),
      detail: getArtworkUrl('artworks/views/04_seaside_reflections_canvas_front.jpg')
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

