import type { Artist } from '../types';

export const artists: Artist[] = [
  {
    id: 'ananya-deshmukh',
    name: 'Ananya Deshmukh',
    title: 'Master Colorist & Abstract Expressionist',
    location: 'Mumbai, Maharashtra',
    bio: 'Ananya Deshmukh trained at the Sir J.J. School of Art in Mumbai. Her practice investigates how sensory memories of coastal monsoons and urban architecture can be transcribed into thick, luminous layers of oil and beeswax on Belgian linen.',
    statement: '“Pigment is not just color; it is an emotional acoustic wave. When I apply cobalt against raw ochre, I am scoring a symphony for silence.”',
    profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
    exhibitions: [
      'Jehangir Art Gallery, Solo Showcase (2025)',
      'India Art Fair, Curated Pavilion (2024)',
      'National Gallery of Modern Art, Group Retrospective (2023)'
    ],
    mediums: ['Oil on Linen', 'Raw Pigment & Wax', 'Palette Knife Impasto'],
    artworksCount: 7,
    featured: true
  },
  {
    id: 'kabir-sen',
    name: 'Kabir Sen',
    title: 'Contemporary Botanical & Landscape Painter',
    location: 'Kolkata & Santiniketan, West Bengal',
    bio: 'Rooted in the Bengal school legacy and natural dye traditions of Santiniketan, Kabir Sen constructs ethereal mistscapes and botanical meditations that bridge Eastern miniature sensibilities with grand-scale atmospheric immersion.',
    statement: '“The horizon is an invitation to pause. In my landscapes, the mist is not empty air, but the sacred breath of our earth.”',
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80',
    exhibitions: [
      'Academy of Fine Arts Kolkata, Annual Salon (2025)',
      'Kochi-Muziris Biennale Collateral Exhibition (2024)',
      'Birla Academy of Art & Culture (2023)'
    ],
    mediums: ['Natural Mineral Pigments', 'Watercolor on Handmade Wasli Paper', 'Tempera on Silk'],
    artworksCount: 6,
    featured: true
  },
  {
    id: 'meera-rathore',
    name: 'Meera Rathore',
    title: 'Heritage Modernist & Geometric Painter',
    location: 'Jaipur, Rajasthan',
    bio: 'Descended from a lineage of Rajasthani fresco artisans, Meera Rathore juxtaposes traditional lapis lazuli, sindoor red, and gold leaf with sharp geometric abstractions, evoking both stepwell architecture and cosmic mandalas.',
    statement: '“Our historical geometry is deeply spiritual. I strip away ornamental excess to reveal the raw, sacred architecture of subcontinental color.”',
    profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80',
    exhibitions: [
      'Jawahar Kala Kendra, Solo Retrospective (2025)',
      'Asia Contemporary Art Show, Hong Kong (2024)',
      'Bikaner House, New Delhi (2023)'
    ],
    mediums: ['24k Gold Leaf', 'Lapis & Cinnabar on Canvas', 'Mixed Media Fresco on Board'],
    artworksCount: 5,
    featured: true
  },
  {
    id: 'dev-verma',
    name: 'Dev Verma',
    title: 'Architectural Minimalist & Spatial Sculptor',
    location: 'Bengaluru, Karnataka',
    bio: 'With an initial background in modernist architecture, Dev Verma creates relief paintings that explore the quiet dialogue between architectural light, brutalist textures, and meditative monochrome surfaces.',
    statement: '“When you strip an artwork of color, light becomes the sole protagonist. Shadow becomes the painting.”',
    profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    exhibitions: [
      'Venkatappa Art Gallery, Bengaluru (2025)',
      'Aicon Contemporary, New York (2024)',
      'India Design ID Art Pavilion (2024)'
    ],
    mediums: ['Plaster & Marble Dust on Wood', 'Monochrome Acrylic Impasto', 'Raw Cotton Canvas'],
    artworksCount: 6,
    featured: true
  },
  {
    id: 'radhika-nair',
    name: 'Radhika Nair',
    title: 'Contemporary Figurative & Portrait Artist',
    location: 'Kochi, Kerala',
    bio: 'Radhika Nair is celebrated for her intimate, emotionally charged portraits that portray contemporary Indian women, matriarchal heritage, and quiet domestic contemplation with velvety brushwork and rich terracotta warmth.',
    statement: '“I do not paint a face to capture likeness; I paint to capture the lingering silence between thoughts.”',
    profileImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=80',
    exhibitions: [
      'Durbar Hall Art Gallery, Ernakulam (2025)',
      'Women in Indian Contemporary Art, New Delhi (2024)',
      'Lalit Kala Akademi National Exhibition (2023)'
    ],
    mediums: ['Oil on Canvas', 'Charcoal & Sanguine', 'Glaze on Wood Panel'],
    artworksCount: 5,
    featured: true
  },
  {
    id: 'tariq-khan',
    name: 'Tariq Khan',
    title: 'Experimental Mixed Media & Kinetic Colorist',
    location: 'New Delhi',
    bio: 'Tariq Khan blends classical calligraphic gesture with rebellious street texture and layered encaustic pigments, creating sprawling canvases that vibrate with contemporary urban energy.',
    statement: '“Art is an act of listening to the hum of the city, distilling its chaos into poetic rhythm and tactile wonder.”',
    profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
    coverImage: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    exhibitions: [
      'India Habitat Centre Visual Arts Gallery (2025)',
      'Gallery Espace, Group Show (2024)',
      'Art Mumbai, Inaugural Edition (2023)'
    ],
    mediums: ['Encaustic & Oil Stick', 'Aerosol & Acrylic', 'Jute & Distressed Canvas'],
    artworksCount: 5,
    featured: false
  }
];
