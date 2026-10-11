import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setPage, navigateToCollection, navigateToExplore } = useGallery();

  return (
    <footer className="bg-[#191817] text-[#FAF8F5] pt-16 sm:pt-20 pb-12 border-t border-[#33312E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#2E2C29]">
          {/* Brand & Renuka's Story Column (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => setPage('home')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-3xl tracking-tight text-[#FAF8F5] group-hover:text-[#C5A059] transition-colors">
                renus_palette
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-sans mt-0.5">
                Vibrant Acrylics & Dreamy Watercolors
              </span>
            </button>

            <div className="text-xs text-[#C8BCAC] leading-relaxed space-y-2.5 font-sans pt-1">
              <p>
                Welcome to my colorful world! I am <strong className="text-[#FAF8F5] font-medium">Renuka</strong>, a painter specializing in vibrant acrylics and dreamy watercolor art focused on beautiful portraits and nature landscapes.
              </p>
              <p className="text-[#A8987E]">
                Subscribe for a front-row seat in my studio, featuring satisfying process videos, painting tutorials, and behind-the-scenes vlogs.
              </p>
              <p className="text-[#DFBA73] font-medium flex items-start gap-1.5 pt-1">
                <span>🎨 Want custom art? I love creating unique, personalized portrait and nature pieces tailored just for you! Message me to book a commission.</span>
              </p>
            </div>

            {/* Social Icons: Instagram & YouTube */}
            <div className="pt-2 flex items-center space-x-3 text-[#A8987E]">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/renus_palette?mdxt=Z2o0YWZvZjlvNGhj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4A453E] hover:border-[#E1306C] hover:text-[#FAF8F5] hover:bg-[#E1306C]/15 transition-all text-xs"
                title="Follow Renuka on Instagram"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="font-medium">@renus_palette</span>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@renus_palette"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#4A453E] hover:border-[#FF0000] hover:text-[#FAF8F5] hover:bg-[#FF0000]/15 transition-all text-xs"
                title="Subscribe on YouTube"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current text-[#FF0000]" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="font-medium">YouTube</span>
              </a>
            </div>
          </div>

          {/* Column 2: Curated Galleries (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFBA73]">
              Art Collections
            </h4>
            <ul className="space-y-2 text-xs text-[#B8B1A5]">
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
                  onClick={() => navigateToCollection('nature-landscapes')}
                  className="hover:text-white transition-colors"
                >
                  Nature & Landscapes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateToCollection('abstract-art')}
                  className="hover:text-white transition-colors"
                >
                  Vibrant Acrylics
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
                  onClick={() => navigateToCollection('minimalist-art')}
                  className="hover:text-white transition-colors"
                >
                  Dreamy Watercolors
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFBA73]">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#B8B1A5]">
              <li>
                <button onClick={() => setPage('home')} className="hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => navigateToExplore()} className="hover:text-white transition-colors">
                  Explore All Paintings
                </button>
              </li>
              <li>
                <button onClick={() => setPage('artists')} className="hover:text-white transition-colors">
                  Renuka's Studio
                </button>
              </li>
              <li>
                <button onClick={() => setPage('about')} className="hover:text-white transition-colors">
                  About the Artist
                </button>
              </li>
              <li>
                <button onClick={() => setPage('contact')} className="hover:text-white transition-colors">
                  Book a Commission
                </button>
              </li>
              <li>
                <button onClick={() => setPage('wishlist')} className="hover:text-white transition-colors">
                  Saved Favorites
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Artist Contact & Commissions (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#DFBA73]">
              Contact & Commissions
            </h4>
            <div className="space-y-3 text-xs text-[#B8B1A5]">
              {/* Phone / Call */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="tel:+919096932011"
                    className="hover:text-[#FAF8F5] transition-colors font-medium text-[#FAF8F5] block"
                  >
                    +91 9096932011
                  </a>
                  <span className="text-[11px] text-[#8C8578]">Direct Artist Call & WhatsApp</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <a
                    href="mailto:dhirajtonge1@gmail.com"
                    className="hover:text-[#FAF8F5] transition-colors font-medium text-[#FAF8F5] block break-all"
                  >
                    dhirajtonge1@gmail.com
                  </a>
                  <span className="text-[11px] text-[#8C8578]">Inquiries & Commissions</span>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#4A6B5D] shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/919096932011?text=Hi%20Renuka,%20I%20love%20your%20art%20and%20would%20like%20to%20inquire%20about%20a%20custom%20commission!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#4A6B5D] font-medium"
                >
                  Chat on WhatsApp →
                </a>
              </div>

              {/* Commission Note */}
              <div className="p-2.5 bg-[#24221F] border border-[#3E3A34] text-[11px] text-[#C8BCAC] leading-snug">
                ✨ Custom portraits & nature landscape art personalized just for you.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8C8578] gap-4">
          <p>© {new Date().getFullYear()} renus_palette by Renuka. Original Artwork & Custom Commissions.</p>

          <div className="flex items-center space-x-6 text-[11px]">
            <a
              href="https://www.instagram.com/renus_palette?mdxt=Z2o0YWZvZjlvNGhj"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF8F5] transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href="https://www.youtube.com/@renus_palette"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FAF8F5] transition-colors"
            >
              YouTube
            </a>
            <span>•</span>
            <button onClick={() => setPage('contact')} className="hover:text-[#FAF8F5] transition-colors">
              Commission Booking
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
