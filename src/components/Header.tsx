import React, { useState, useEffect } from 'react';
import { useGallery } from '../context/GalleryContext';
import type { PageType } from '../types';
import { Search, User, ShoppingBag, Heart, Menu, X, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    page,
    setPage,
    cart,
    wishlist,
    setIsCartOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    navigateToExplore
  } = useGallery();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navLinks: { label: string; page: PageType; action?: () => void }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Shop Paintings', page: 'explore' },
    { label: 'Collections', page: 'paintings', action: () => navigateToExplore() },
    { label: 'About Renuka', page: 'about' },
    { label: 'Custom Art 💌', page: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-xs border-b border-[#F0E6D8]'
          : 'bg-[#FFFDF9] border-b border-[#F4EBE0]'
      }`}
    >
      {/* Ru&Chai style joyful top announcement bar */}
      <div className="bg-[#FFD13B] text-[#2B2623] text-xs font-semibold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span>💛 Packed with love by Renuka</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">🎨 Custom Art Commissions Open</span>
        <span className="hidden md:inline">•</span>
        <span className="hidden md:inline font-bold">📦 Free shipping across India on orders above ₹999!</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo (Ru&Chai style cheerful playful logo) */}
          <div className="flex items-center">
            <button
              onClick={() => setPage('home')}
              className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
              aria-label="renus_palette Home"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#FFD13B] text-xl flex items-center justify-center shadow-xs group-hover:rotate-6 transition-transform">
                🎨
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2B2623] tracking-tight group-hover:text-[#FF6161] transition-colors">
                  renus_palette
                </span>
                <span className="block text-[10px] font-bold text-[#FF6161] uppercase tracking-wider -mt-1">
                  Art Studio by Renuka
                </span>
              </div>
            </button>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = page === link.page;
              return (
                <button
                  key={link.label}
                  onClick={() => {
                    if (link.action) {
                      link.action();
                    } else {
                      setPage(link.page);
                    }
                  }}
                  className={`text-sm font-semibold px-4 py-2 rounded-full transition-all focus:outline-none ${
                    isActive
                      ? 'bg-[#FF6161] text-white shadow-xs'
                      : 'text-[#453D37] hover:text-[#2B2623] hover:bg-[#FFF4D2]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions (WhatsApp, Search, Wishlist, Cart) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* WhatsApp Quick Chat */}
            <a
              href="https://wa.me/919096932011?text=Hi%20Renuka,%20I%20love%20your%20art%20and%20would%20like%20to%20inquire%20about%20a%20painting!"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8F8F0] text-[#1E7E34] text-xs font-bold hover:bg-[#D4EDDA] transition-colors"
              title="Chat with Renuka on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-[#453D37] hover:text-[#2B2623] hover:bg-[#FFF4D2] transition-colors rounded-full focus:outline-none"
              title="Search paintings"
              aria-label="Search paintings"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => setPage('wishlist')}
              className="p-2.5 text-[#453D37] hover:text-[#2B2623] hover:bg-[#FFEAE8] transition-colors rounded-full relative focus:outline-none"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 stroke-[2] ${wishlist.length > 0 ? 'text-[#FF6161] fill-[#FF6161]' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#FF6161] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 bg-[#FFD13B] hover:bg-[#FFC400] text-[#2B2623] rounded-full font-bold text-xs shadow-xs transition-transform active:scale-95 focus:outline-none"
              title="Shopping Bag"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
              <span>Bag</span>
              {totalCartCount > 0 && (
                <span className="w-5 h-5 bg-[#2B2623] text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#453D37] hover:text-[#2B2623] focus:outline-none"
              aria-label="Open navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF9] border-b border-[#F0E6D8] px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                  if (link.action) {
                    link.action();
                  } else {
                    setPage(link.page);
                  }
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-bold py-2.5 px-4 rounded-xl ${
                  page === link.page
                    ? 'bg-[#FF6161] text-white'
                    : 'text-[#453D37] hover:bg-[#FFF4D2]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between text-xs">
            <a
              href="https://wa.me/919096932011?text=Hi%20Renuka,%20I%20want%20to%20inquire%20about%20your%20art!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1E7E34] font-bold flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setIsAccountOpen(true);
                setMobileMenuOpen(false);
              }}
              className="text-[#FF6161] font-bold flex items-center gap-1"
            >
              <User className="w-4 h-4" />
              <span>My Account</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
