import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Artwork, CartItem, PageType, ToastMessage } from '../types';
import { artworks } from '../data/artworks';

interface FilterState {
  category: string;
  medium: string;
  orientation: string;
  minPrice: number;
  maxPrice: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
  searchQuery: string;
}

interface GalleryContextType {
  page: PageType;
  setPage: (page: PageType) => void;
  selectedArtworkId: string | null;
  selectedCollectionId: string | null;
  selectedArtistId: string | null;
  navigateToArtwork: (id: string) => void;
  navigateToCollection: (id: string) => void;
  navigateToArtist: (id: string) => void;
  navigateToExplore: (category?: string) => void;
  wishlist: string[];
  toggleWishlist: (artworkId: string) => void;
  isInWishlist: (artworkId: string) => boolean;
  cart: CartItem[];
  addToCart: (artwork: Artwork, framingOption?: CartItem['framingOption']) => void;
  removeFromCart: (artworkId: string) => void;
  updateCartQuantity: (artworkId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isAccountOpen: boolean;
  setIsAccountOpen: (open: boolean) => void;
  isRoomViewOpen: boolean;
  setIsRoomViewOpen: (open: boolean) => void;
  roomViewArtwork: Artwork | null;
  openRoomView: (art: Artwork) => void;
  toasts: ToastMessage[];
  addToast: (msg: { type: 'success' | 'info' | 'favorite'; title: string; description?: string }) => void;
  removeToast: (id: string) => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  formatPrice: (price: number) => string;
}

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);

const INITIAL_FILTERS: FilterState = {
  category: 'all',
  medium: 'all',
  orientation: 'all',
  minPrice: 0,
  maxPrice: 150000,
  sortBy: 'featured',
  searchQuery: ''
};

export const GalleryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [page, setPageInternal] = useState<PageType>('home');
  const [selectedArtworkId, setSelectedArtworkId] = useState<string | null>(null);
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [selectedArtistId, setSelectedArtistId] = useState<string | null>(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isRoomViewOpen, setIsRoomViewOpen] = useState(false);
  const [roomViewArtwork, setRoomViewArtwork] = useState<Artwork | null>(null);

  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Local storage for wishlist
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('renus_palette_wishlist');
      return saved ? JSON.parse(saved) : ['art-01', 'art-02'];
    } catch {
      return ['art-01', 'art-02'];
    }
  });

  // Local storage for cart
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('renus_palette_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('renus_palette_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('renus_palette_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const addToast = (msg: { type: 'success' | 'info' | 'favorite'; title: string; description?: string }) => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    const newToast: ToastMessage = { ...msg, id };
    setToasts((prev) => [...prev, newToast]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const setPage = (newPage: PageType) => {
    setPageInternal(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToArtwork = (id: string) => {
    setSelectedArtworkId(id);
    setPage('artwork-detail');
  };

  const navigateToCollection = (id: string) => {
    setSelectedCollectionId(id);
    setFilters((prev) => ({ ...prev, category: id }));
    setPage('collection-detail');
  };

  const navigateToArtist = (id: string) => {
    setSelectedArtistId(id);
    setPage('artist-detail');
  };

  const navigateToExplore = (category?: string) => {
    if (category) {
      setFilters((prev) => ({ ...prev, category }));
    }
    setPage('explore');
  };

  const toggleWishlist = (artworkId: string) => {
    const art = artworks.find((a) => a.id === artworkId);
    setWishlist((prev) => {
      if (prev.includes(artworkId)) {
        addToast({
          type: 'info',
          title: 'Removed from Wishlist',
          description: art ? `"${art.title}" removed.` : undefined
        });
        return prev.filter((id) => id !== artworkId);
      } else {
        addToast({
          type: 'favorite',
          title: 'Added to Wishlist',
          description: art ? `"${art.title}" saved to your private collection.` : undefined
        });
        return [...prev, artworkId];
      }
    });
  };

  const isInWishlist = (artworkId: string) => wishlist.includes(artworkId);

  const addToCart = (artwork: Artwork, framingOption: CartItem['framingOption'] = 'unframed') => {
    const framingPrice = framingOption === 'unframed' ? 0 : 6500;
    setCart((prev) => {
      const existing = prev.find((item) => item.artwork.id === artwork.id && item.framingOption === framingOption);
      if (existing) {
        return prev.map((item) =>
          item.artwork.id === artwork.id && item.framingOption === framingOption
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { artwork, quantity: 1, framingOption, framingPrice }];
    });

    addToast({
      type: 'success',
      title: 'Added to Art Bag',
      description: `"${artwork.title}" is ready for secure checkout.`
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (artworkId: string) => {
    setCart((prev) => prev.filter((item) => item.artwork.id !== artworkId));
  };

  const updateCartQuantity = (artworkId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(artworkId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.artwork.id === artworkId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => {
    const unitPrice = item.artwork.price + item.framingPrice;
    return sum + unitPrice * item.quantity;
  }, 0);

  const openRoomView = (art: Artwork) => {
    setRoomViewArtwork(art);
    setIsRoomViewOpen(true);
  };

  const resetFilters = () => {
    setFilters(INITIAL_FILTERS);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <GalleryContext.Provider
      value={{
        page,
        setPage,
        selectedArtworkId,
        selectedCollectionId,
        selectedArtistId,
        navigateToArtwork,
        navigateToCollection,
        navigateToArtist,
        navigateToExplore,
        wishlist,
        toggleWishlist,
        isInWishlist,
        cart,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartTotal,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAccountOpen,
        setIsAccountOpen,
        isRoomViewOpen,
        setIsRoomViewOpen,
        roomViewArtwork,
        openRoomView,
        toasts,
        addToast,
        removeToast,
        filters,
        setFilters,
        resetFilters,
        formatPrice
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};
