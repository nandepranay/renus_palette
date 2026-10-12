// Centralized artist profile, contact, and studio configuration for renus_palette

export const ARTIST_CONFIG = {
  name: 'Renuka',
  brandName: 'renus_palette',
  tagline: 'Art That Feels Like Home',
  location: 'India',
  phone: '+91 9096932011',
  rawPhone: '9096932011',
  whatsappNumber: '919096932011', // Formatted for wa.me direct links
  email: 'dhirajtonge1@gmail.com',
  instagram: 'https://www.instagram.com/renus_palette?mdxt=Z2o0YWZvZjlvNGhj',
  instagramHandle: '@renus_palette',
  youtube: 'https://www.youtube.com/@renus_palette',
  youtubeHandle: '@renus_palette',

  // Core artist profile ideas confirmed from Renuka's PDF
  about: {
    shortBio:
      'Welcome to my colorful world! I am Renuka, a painter specializing in vibrant acrylics and dreamy watercolor art focused on beautiful nature landscapes and spiritual compositions.',
    leadStatement:
      'Art that connects personally with people and adds lasting warmth and meaning to spaces.',
    philosophy:
      'Renuka creates artwork intended to connect personally with people. Her paintings aim to add warmth and meaning to spaces. Her creative process brings together thought and color, chaos and calm, and the artwork and its viewer.',
    specialization: 'Original Acrylic Paintings & Custom Art Commissions',
  },

  // Default custom quote request prefill text
  customQuoteMessage:
    "Hi Renuka! I'm interested in a custom acrylic painting. I'd like to discuss the concept, canvas size, and pricing.",

  // Exact canvas sizes and pricing ranges from Renuka's PDF
  pricingTiers: [
    {
      id: 'small',
      name: 'Small Canvas',
      sizeRange: '12×12 to 18×24 inches',
      priceRange: '₹5,000 – ₹10,000',
      description: 'Perfect for cozy nooks, bedroom accents, study spaces, and intimate gifting.',
      highlights: [
        'Premium stretched cotton canvas',
        'Hand-painted in professional artist acrylics',
        'Archival protective varnish coating',
        'Signed by Renuka with custom note'
      ],
      recommended: false
    },
    {
      id: 'medium',
      name: 'Medium Canvas',
      sizeRange: '24×24 to 30×40 inches',
      priceRange: '₹10,000 – ₹20,000',
      description: 'Ideal statement scale for living rooms, dining spaces, foyer walls, and feature gallery walls.',
      highlights: [
        'Heavy-duty gallery wrap wooden stretchers',
        'Rich impasto texture & radiant color layering',
        'Double-coat archival matte or satin varnish',
        'Most popular canvas scale for homes'
      ],
      recommended: true
    },
    {
      id: 'large',
      name: 'Large Canvas',
      sizeRange: '36×48 to 48×60 inches',
      priceRange: '₹25,000+',
      description: 'Grand focal point for double-height living rooms, statement hallways, and corporate spaces.',
      highlights: [
        'Custom heavy-gauge kiln-dried pine stretchers',
        'Monumental presence with immersive detail',
        'Museum-grade archival longevity',
        'Multi-layer crated pan-India transit packing'
      ],
      recommended: false
    }
  ],

  pricingExplanation:
    'Pricing depends on artistic complexity and project details. Each custom painting is individually quoted after understanding your concept and requirements.',

  pricingDisclaimer:
    'Please note: These are canvas-size pricing ranges for custom commissions, not confirmed prices for individual paintings. Each original piece is individually quoted based on composition, detail, and canvas scale.'
};

/**
 * Returns a robust URL for static assets in the public folder,
 * taking Vite's base path ('/renus_palette/') into account for GitHub Pages.
 */
export const getArtworkUrl = (relativeAssetPath: string): string => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = relativeAssetPath.startsWith('/') ? relativeAssetPath.slice(1) : relativeAssetPath;
  return `${cleanBase}${cleanPath}`;
};

/**
 * Generates a WhatsApp direct click-to-chat URL with prefilled text.
 */
export const getWhatsAppLink = (customText?: string): string => {
  const text = encodeURIComponent(customText || ARTIST_CONFIG.customQuoteMessage);
  return `https://wa.me/${ARTIST_CONFIG.whatsappNumber}?text=${text}`;
};
