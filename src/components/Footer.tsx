import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ARTIST_CONFIG, getWhatsAppLink } from '../config/artistConfig';
import { collections } from '../data/collections';
import { Mail, MessageCircle, Heart, ArrowRight } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const { setPage, navigateToCollection, navigateToExplore } = useGallery();

  const scrollToSection = (sectionId: string) => {
    setPage('home');
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <footer className="bg-[#2B2623] text-[#FFFDF9] pt-16 sm:pt-20 pb-12 border-t border-[#453D37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#453D37]">
          {/* Brand & Renuka's Story Column */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => setPage('home')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">🎨</span>
                <span className="font-heading text-3xl font-extrabold tracking-tight text-[#FFFDF9] group-hover:text-[#FFD13B] transition-colors">
                  {ARTIST_CONFIG.brandName}
                </span>
              </div>
              <span className="block text-[11px] font-bold text-[#FFD13B] tracking-wider mt-0.5">
                {ARTIST_CONFIG.tagline} • Hand-Painted by Renuka
              </span>
            </button>

            <div className="text-xs text-[#D6CECA] leading-relaxed space-y-2.5 pt-1">
              <p>
                {ARTIST_CONFIG.about.shortBio}
              </p>
              <p className="text-[#FFD13B] font-semibold">
                🎨 Want custom art? I love creating unique, personalized nature landscapes, spiritual art, and floral pieces tailored just for you! Message me to book a commission.
              </p>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Instagram */}
              <a
                href={ARTIST_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#5C5248] hover:border-[#E1306C] hover:text-[#FFFDF9] hover:bg-[#E1306C]/20 transition-all text-xs"
                title="Follow Renuka on Instagram"
              >
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span className="font-semibold">{ARTIST_CONFIG.instagramHandle}</span>
              </a>

              {/* YouTube */}
              <a
                href={ARTIST_CONFIG.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#5C5248] hover:border-[#FF0000] hover:text-[#FFFDF9] hover:bg-[#FF0000]/20 transition-all text-xs"
                title="Subscribe to Renuka on YouTube"
              >
                <YoutubeIcon className="w-4 h-4 text-[#FF0000]" />
                <span className="font-semibold">{ARTIST_CONFIG.youtubeHandle}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Supported Collections */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD13B]">
              Art Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#D6CECA]">
              {collections.map((col) => (
                <li key={col.id}>
                  <button
                    onClick={() => navigateToCollection(col.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {col.title} ({col.artworkCount})
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => navigateToExplore()}
                  className="text-[#FF6161] hover:underline font-bold transition-colors cursor-pointer mt-1 inline-flex items-center gap-1"
                >
                  <span>Explore All Paintings</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Studio & Commission Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD13B]">
              Studio & Custom Art
            </h4>
            <ul className="space-y-2 text-xs text-[#D6CECA]">
              <li>
                <button
                  onClick={() => scrollToSection('canvas-pricing')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Canvas Sizes & Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('custom-art')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Book Custom Commission
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage('about')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Renuka
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage('contact')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & Inquiries
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage('wishlist')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Saved Wishlist
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Artist Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD13B]">
              Direct Contact
            </h4>
            <div className="text-xs text-[#D6CECA] space-y-2.5">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#2DD4BF] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#2DD4BF] shrink-0" />
                <span>WhatsApp: {ARTIST_CONFIG.phone}</span>
              </a>

              <a
                href={`mailto:${ARTIST_CONFIG.email}`}
                className="flex items-center gap-2 hover:text-[#FFD13B] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#FFD13B] shrink-0" />
                <span className="truncate">{ARTIST_CONFIG.email}</span>
              </a>

              <div className="pt-2 text-[11px] text-[#A8987E]">
                <span>Pan-India Safe Transit Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8987E] gap-4">
          <p>© {new Date().getFullYear()} {ARTIST_CONFIG.brandName}. All rights reserved. Handcrafted original paintings by Renuka.</p>
          <p className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-[#FF6161] fill-[#FF6161]" />
            <span>for art lovers everywhere</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
