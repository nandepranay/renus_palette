import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setPage, navigateToCollection, navigateToExplore } = useGallery();

  return (
    <footer className="bg-[#191817] text-[#FAF8F5] pt-16 sm:pt-20 pb-12 border-t border-[#33312E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-[#2E2C29]">
          {/* Brand & Editorial Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => setPage('home')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-3xl tracking-tight text-[#FAF8F5] group-hover:text-[#C5A059] transition-colors">
                renus_palette
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-sans mt-0.5">
                Fine Art Sanctuary & Marketplace
              </span>
            </button>

            <p className="text-xs text-[#A8987E] leading-relaxed max-w-sm font-sans pt-1">
              An independent fine art gallery and curated marketplace dedicated to original paintings, contemporary canvases, textured modern Indian works, and bespoke art advisory.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-[#A8987E]">
              {/* Instagram */}
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-[#3E3A34] flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                title="Instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Pinterest (using SVG) */}
              <a
                href="#pinterest"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-[#3E3A34] flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                title="Pinterest"
                aria-label="Pinterest"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.365-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.983.026l.034-.026z" />
                </svg>
              </a>

              {/* Journal / Global */}
              <a
                href="#journal"
                onClick={(e) => e.preventDefault()}
                className="w-8 h-8 rounded-full border border-[#3E3A34] flex items-center justify-center hover:text-[#C5A059] hover:border-[#C5A059] transition-colors"
                title="Curator Journal"
                aria-label="Curator Journal"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Curation */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFBA73]">
              Curated Galleries
            </h4>
            <ul className="space-y-2 text-xs text-[#B8B1A5]">
              <li>
                <button
                  onClick={() => navigateToCollection('abstract-art')}
                  className="hover:text-white transition-colors"
                >
                  Abstract Art
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCollection('modern-indian-art')}
                  className="hover:text-white transition-colors"
                >
                  Modern Indian Art
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCollection('contemporary-art')}
                  className="hover:text-white transition-colors"
                >
                  Contemporary Canvases
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCollection('nature-landscapes')}
                  className="hover:text-white transition-colors"
                >
                  Nature & Landscapes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCollection('portraits')}
                  className="hover:text-white transition-colors"
                >
                  Portraits & Figurative
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCollection('minimalist-art')}
                  className="hover:text-white transition-colors"
                >
                  Minimalist Art
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: The Gallery */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFBA73]">
              The Gallery
            </h4>
            <ul className="space-y-2 text-xs text-[#B8B1A5]">
              <li>
                <button onClick={() => setPage('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateToExplore()} className="hover:text-white transition-colors">
                  Explore All Art
                </button>
              </li>
              <li>
                <button onClick={() => setPage('artists')} className="hover:text-white transition-colors">
                  Featured Artists
                </button>
              </li>
              <li>
                <button onClick={() => setPage('about')} className="hover:text-white transition-colors">
                  Our Story & Vision
                </button>
              </li>
              <li>
                <button onClick={() => setPage('contact')} className="hover:text-white transition-colors">
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button onClick={() => setPage('wishlist')} className="hover:text-white transition-colors">
                  Collector Wishlist
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Sanctuary & Advisory */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFBA73]">
              Concierge & Advisory
            </h4>
            <div className="space-y-2.5 text-xs text-[#B8B1A5]">
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>curator@renuspalette.com</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>+91 (022) 2284-5900</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Gallery Studio: Colaba, Mumbai 400001</span>
              </div>
              <div className="pt-2 text-[11px] text-[#8C8578]">
                Advisory Hours: Mon–Sat, 10:00 AM – 7:30 PM IST
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8578] gap-4">
          <p>© {new Date().getFullYear()} renus_palette. All Rights Reserved. Fine Art Marketplace.</p>

          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-[#FAF8F5] transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-[#FAF8F5] transition-colors">
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="#certificate" onClick={(e) => e.preventDefault()} className="hover:text-[#FAF8F5] transition-colors">
              Authenticity Guarantee
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
