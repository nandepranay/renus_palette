export type PageType = 
  | 'home'
  | 'explore'
  | 'paintings'
  | 'artists'
  | 'about'
  | 'contact'
  | 'wishlist'
  | 'artwork-detail'
  | 'collection-detail'
  | 'artist-detail';

export interface Artwork {
  id: string;
  title: string;
  artistId: string;
  artistName: string;
  artistLocation: string;
  price: number; // in INR
  originalPrice?: number;
  collectionId: string;
  collectionName: string;
  medium: string;
  surface: string;
  dimensions: string; // e.g. "36 x 48 in"
  dimensionsCm: string; // e.g. "91.4 x 121.9 cm"
  orientation: 'landscape' | 'portrait' | 'square';
  year: number;
  imageUrl: string;
  secondaryImageUrl?: string;
  description: string;
  curatorNote?: string;
  isOriginal: boolean;
  isLimitedEdition?: boolean;
  editionDetails?: string;
  isFramed: boolean;
  inStock: boolean;
  rating?: number;
  featured?: boolean;
  tags: string[];
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
  exhibitions: string[];
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
