export type PageType = 
  | 'home'
  | 'explore'
  | 'paintings'
  | 'about'
  | 'contact'
  | 'wishlist'
  | 'artwork-detail'
  | 'collection-detail';

export interface Artwork {
  id: string;
  title: string;
  isOfficialTitle?: boolean; // true for "Lotus Pond", false for descriptive titles
  artistName: string;
  artistBrand: string;
  category: 'Nature & Landscapes' | 'Spiritual Art' | 'Floral & Botanical Art' | 'Custom Art';
  categorySlug: 'nature-landscapes' | 'spiritual-art' | 'floral-botanical' | 'custom-art';
  secondaryCategories?: string[];
  description: string;
  imageUrl: string;
  imageFileName: string;
  dimensions?: string; // only if confirmed from artist
  medium?: string; // confirmed medium if available (e.g. 'Acrylic on Canvas')
  priceDisplay: string; // 'Price on request'
  isPriceConfirmed?: boolean;
  price?: number; // fallback numeric representation if needed
  availability?: string; // e.g. 'Available • Custom Inquiries Open'
  orientation: 'horizontal' | 'vertical' | 'square' | 'landscape';
  featured?: boolean;
  tags: string[];
  views?: {
    front: string;
    angled?: string;
    detail?: string;
  };
}

export interface Collection {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  curatorNote: string;
  imageUrl: string;
  artworkCount: number;
  accentColor: string;
}

export interface Artist {
  id: string;
  name: string;
  title: string;
  location: string;
  bio: string;
  statement: string;
  profileImage: string;
  coverImage: string;
  mediums: string[];
  artworksCount: number;
  featured: boolean;
}

export interface CartItem {
  artwork: Artwork;
  quantity: number;
  framingOption: 'unframed' | 'classic-oak' | 'matte-black' | 'champagne-gold';
  framingPrice: number;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'favorite';
  title: string;
  description?: string;
}
