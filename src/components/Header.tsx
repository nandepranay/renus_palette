import React, { useState, useEffect } from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getWhatsAppLink } from '../config/artistConfig';
import { Search, Heart, Menu, X, MessageCircle } from 'lucide-react';

export const Header: React.FC = () => {
  const {
    page,
    setPage,
    wishlist,
    setIsSearchOpen,
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

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (page !== 'home') {
      setPage('home');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', action: () => { setMobileMenuOpen(false); setPage('home'); }, isActive: page === 'home' },
    { label: 'Shop Paintings', action: () => { setMobileMenuOpen(false); navigateToExplore(); }, isActive: page === 'explore' },
    { label: 'Collections', action: () => scrollToSection('featured-collections'), isActive: false },
    { label: 'About Renuka', action: () => { setMobileMenuOpen(false); setPage('about'); }, isActive: page === 'about' },
    { label: 'Canvas Sizes & Pricing', action: () => scrollToSection('canvas-pricing'), isActive: false },
    { label: 'Custom Art', action: () => scrollToSection('custom-art'), isActive: false },
    { label: 'Contact', action: () => { setMobileMenuOpen(false); setPage('contact'); }, isActive: page === 'contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-xs border-b border-[#F0E6D8]'
          : 'bg-[#FFFDF9] border-b border-[#F4EBE0]'
      }`}
    >
      {/* Cheerful top announcement bar */}
      <div className="bg-[#FFD13B] text-[#2B2623] text-xs font-semibold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span>💛 Packed with love by Renuka</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline">🎨 Custom Art Commissions Open</span>
        <span className="hidden md:inline">•</span>
        <span className="hidden md:inline font-bold">✨ Art That Feels Like Home</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo */}
          <div className="flex items-center">
            <button
              onClick={() => { setMobileMenuOpen(false); setPage('home'); }}
              className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
              aria-label="renus_palette Home"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#FFD13B] text-xl flex items-center justify-center shadow-xs group-hover:rotate-6 transition-transform">
                🎨
              </div>
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2B2623] tracking-tight group-hover:text-[#FF6161] transition-colors">
                  {ARTIST_CONFIG.brandName}
                </span>
                <span className="block text-[10px] font-bold text-[#FF6161] uppercase tracking-wider -mt-1">
                  Art Studio by Renuka
                </span>
              </div>
            </button>
          </div>

          {/* Center: Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1.5">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className={`text-xs font-bold px-3.5 py-2 rounded-full transition-all focus:outline-none cursor-pointer whitespace-nowrap ${
                  item.isActive
                    ? 'bg-[#FF6161] text-white shadow-xs'
                    : 'text-[#453D37] hover:text-[#2B2623] hover:bg-[#FFF4D2]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right: Actions (WhatsApp, Wishlist, Search, Mobile Menu Toggle) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* WhatsApp Quick Chat */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#E8F8F0] text-[#1E7E34] hover:bg-[#D4F4E2] text-xs font-bold transition-colors border border-[#C6EFD9]"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>

            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-[#5C5248] hover:text-[#2B2623] hover:bg-[#FFF4D2] rounded-full transition-colors cursor-pointer"
              aria-label="Search artwork"
              title="Search paintings"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => { setMobileMenuOpen(false); setPage('wishlist'); }}
              className="relative p-2.5 text-[#5C5248] hover:text-[#FF6161] hover:bg-[#FFEAE8] rounded-full transition-colors cursor-pointer"
              aria-label="Wishlist"
              title="Saved artworks"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#FF6161] text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-[#453D37] hover:text-[#2B2623] focus:outline-none"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFDF9] border-t border-[#F0E6D8] px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className={`w-full text-left px-4 py-2.5 rounded-xl font-bold text-sm transition-colors ${
                item.isActive
                  ? 'bg-[#FF6161] text-white'
                  : 'text-[#453D37] hover:bg-[#FFF4D2]'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-[#F0E6D8] flex flex-col gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#E8F8F0] text-[#1E7E34] text-xs font-bold flex items-center justify-center gap-2 border border-[#C6EFD9]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat with Renuka ({ARTIST_CONFIG.phone})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
