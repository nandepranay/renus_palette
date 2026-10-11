import React, { useState, useEffect } from 'react';
import { useGallery } from '../context/GalleryContext';
import type { PageType } from '../types';
import { Search, User, ShoppingBag, Heart, Menu, X, ChevronRight } from 'lucide-react';

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
    { label: 'Explore Art', page: 'explore' },
    { label: 'Paintings', page: 'paintings', action: () => navigateToExplore() },
    { label: 'Artists', page: 'artists' },
    { label: 'About Us', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D5] shadow-xs'
          : 'bg-[#FAF8F5] border-b border-[#EFEBE1]'
      }`}
    >
      {/* Top micro announcement bar */}
      <div className="bg-[#191817] text-[#FAF8F5] text-[11px] tracking-widest py-1.5 px-4 text-center font-sans uppercase">
        <span className="opacity-90">Curated Original Artworks</span>
        <span className="mx-2 text-[#C5A059]">•</span>
        <span className="hidden sm:inline opacity-80">Complimentary Wooden Crate Delivery Across India</span>
        <span className="hidden sm:inline mx-2 text-[#C5A059]">•</span>
        <span className="text-[#DFBA73] font-medium">Authenticity Certified</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <button
              onClick={() => setPage('home')}
              className="text-left group cursor-pointer focus:outline-none"
              aria-label="renus_palette Home"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#191817] group-hover:text-[#A38038] transition-colors">
                renus_palette
              </span>
              <span className="block text-[9px] uppercase tracking-[0.25em] text-[#8C8578] -mt-1 font-sans">
                Fine Art Sanctuary
              </span>
            </button>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                  className={`text-[13px] tracking-wider uppercase font-medium transition-all relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-[#191817] font-semibold'
                      : 'text-[#6E685F] hover:text-[#191817]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#191817] animate-fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions (Search, Account, Wishlist, Cart) */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-[#4A4742] hover:text-[#191817] hover:bg-[#F3EFE6] transition-colors rounded-full focus:outline-none"
              title="Search gallery"
              aria-label="Search gallery"
            >
              <Search className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Account Trigger */}
            <button
              onClick={() => setIsAccountOpen(true)}
              className="p-2.5 text-[#4A4742] hover:text-[#191817] hover:bg-[#F3EFE6] transition-colors rounded-full focus:outline-none"
              title="Collector Account"
              aria-label="Collector Account"
            >
              <User className="w-5 h-5 stroke-[1.75]" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => setPage('wishlist')}
              className="p-2.5 text-[#4A4742] hover:text-[#191817] hover:bg-[#F3EFE6] transition-colors rounded-full relative focus:outline-none"
              title="Wishlist"
              aria-label="Wishlist"
            >
              <Heart className={`w-5 h-5 stroke-[1.75] ${wishlist.length > 0 ? 'text-[#C08081]' : ''}`} />
              {wishlist.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#C08081] text-white text-[10px] rounded-full flex items-center justify-center font-mono">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Bag Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="p-2.5 text-[#4A4742] hover:text-[#191817] hover:bg-[#F3EFE6] transition-colors rounded-full relative focus:outline-none"
              title="Shopping Bag"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.75]" />
              {totalCartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-[#191817] text-[#FAF8F5] text-[10px] rounded-full flex items-center justify-center font-mono">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-[#4A4742] hover:text-[#191817] focus:outline-none"
              aria-label="Open mobile navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-6 py-6 space-y-4 animate-fade-in shadow-xl">
          <nav className="flex flex-col space-y-3">
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
                className={`flex items-center justify-between text-left text-sm uppercase tracking-wider py-2.5 border-b border-[#EFEBE1] ${
                  page === link.page
                    ? 'text-[#191817] font-semibold'
                    : 'text-[#6E685F]'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#A8987E]" />
              </button>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between text-xs text-[#8C8578]">
            <button
              onClick={() => {
                setPage('wishlist');
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 text-[#191817]"
            >
              <Heart className="w-4 h-4 text-[#C08081]" /> Saved Works ({wishlist.length})
            </button>
            <button
              onClick={() => {
                setIsAccountOpen(true);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 text-[#191817]"
            >
              <User className="w-4 h-4 text-[#C5A059]" /> Collector Sanctuary
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
