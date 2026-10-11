import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ArrowRight, Sparkles, Shield, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateToExplore, navigateToArtwork } = useGallery();

  // Curated artworks positioned harmoniously around the central brand name
  const surroundingArtworks = [
    {
      id: 'art-01',
      title: 'Symphony in Ochre & Deep Cobalt',
      artist: 'Ananya Deshmukh',
      medium: 'Oil on Belgian Linen',
      img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      positionClass: 'top-6 left-4 sm:top-10 sm:left-10 lg:left-16 w-32 sm:w-48 lg:w-60 h-40 sm:h-64 lg:h-80 -rotate-3',
      delay: '0ms'
    },
    {
      id: 'art-02',
      title: 'Deccan Sunset & Golden Geometry',
      artist: 'Meera Rathore',
      medium: '24k Gold Leaf on Canvas',
      img: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=800&q=80',
      positionClass: 'top-6 right-4 sm:top-8 sm:right-10 lg:right-16 w-32 sm:w-48 lg:w-64 h-36 sm:h-60 lg:h-76 rotate-2',
      delay: '150ms'
    },
    {
      id: 'art-03',
      title: 'Whispering Mists of Santiniketan',
      artist: 'Kabir Sen',
      medium: 'Tempera & Wasli Paper',
      img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80',
      positionClass: 'bottom-6 left-4 sm:bottom-12 sm:left-8 lg:left-24 w-36 sm:w-52 lg:w-68 h-32 sm:h-52 lg:h-68 rotate-2',
      delay: '300ms'
    },
    {
      id: 'art-06',
      title: 'Metropolis Pulse: Amber & Concrete',
      artist: 'Tariq Khan',
      medium: 'Encaustic Wax & Acrylic',
      img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
      positionClass: 'bottom-6 right-4 sm:bottom-10 sm:right-10 lg:right-20 w-32 sm:w-48 lg:w-60 h-36 sm:h-56 lg:h-72 -rotate-2',
      delay: '450ms'
    },
    {
      id: 'art-04',
      title: 'Silence Between Words',
      artist: 'Dev Verma',
      medium: 'Marble Dust Relief',
      img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=600&q=80',
      positionClass: 'hidden xl:block top-1/2 -translate-y-1/2 left-2 w-44 h-56 -rotate-1',
      delay: '200ms'
    },
    {
      id: 'art-05',
      title: 'The Solitary Reader',
      artist: 'Radhika Nair',
      medium: 'Oil Glazes on Linen',
      img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80',
      positionClass: 'hidden xl:block top-1/2 -translate-y-1/2 right-2 w-44 h-56 rotate-1',
      delay: '350ms'
    }
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5] border-b border-[#E8E2D5]">
      {/* Background Architectural Canvas Grid Lines & Ambient Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(#E8E2D5_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#FAF8F5]/60 to-[#FAF8F5] pointer-events-none" />

      {/* Surrounding Curated Gallery Collage Arrangement */}
      <div className="absolute inset-0 max-w-7xl mx-auto pointer-events-none">
        {surroundingArtworks.map((item) => (
          <div
            key={item.id}
            onClick={() => navigateToArtwork(item.id)}
            className={`absolute ${item.positionClass} pointer-events-auto cursor-pointer group transition-all duration-700 ease-out hover:z-30 hover:scale-105`}
            style={{ transitionDelay: item.delay }}
          >
            {/* Museum matting frame */}
            <div className="relative w-full h-full p-2 sm:p-2.5 bg-white border border-[#DDD5C5] shadow-[0_12px_35px_-10px_rgba(30,25,20,0.18)] transition-all duration-500 group-hover:shadow-[0_20px_45px_-10px_rgba(30,25,20,0.3)] group-hover:border-[#C5A059]">
              <div className="w-full h-full overflow-hidden bg-[#EFE8DA]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Floating Museum Placard Badge */}
              <div className="absolute -bottom-3 inset-x-3 bg-white/95 backdrop-blur-xs border border-[#E2D9C8] py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center shadow-md pointer-events-none">
                <p className="text-[10px] font-serif font-bold text-[#191817] truncate">{item.title}</p>
                <p className="text-[9px] text-[#736E65] truncate">{item.artist} • {item.medium}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Center Hero Focal Sanctum: renus_palette typography & CTA in EXACT center */}
      <div className="relative z-20 max-w-3xl mx-auto px-6 py-12 text-center animate-fade-in flex flex-col items-center justify-center">
        {/* Subtle Frosted Ivory Backing to guarantee clear readability over artwork */}
        <div className="absolute inset-0 -m-6 sm:-m-12 bg-[#FAF8F5]/85 backdrop-blur-md rounded-2xl border border-[#EDE7DA] shadow-[0_20px_60px_-15px_rgba(40,35,30,0.12)] pointer-events-none -z-10" />

        {/* Micro Curation Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F3EFE6] border border-[#DDD5C5] mb-4 sm:mb-6 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-[11px] font-sans font-medium uppercase tracking-[0.25em] text-[#6E685F]">
            Curated Fine Art Marketplace
          </span>
        </div>

        {/* Central Brand Title: renus_palette */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#191817] tracking-tight leading-[0.95] mb-4 sm:mb-6 font-normal drop-shadow-xs select-none">
          renus_palette
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-xl sm:text-2xl md:text-3xl italic text-[#4A463F] max-w-xl mx-auto mb-8 font-normal tracking-wide">
          “Discover Art. Express Yourself.”
        </p>

        {/* Action Button & Explorations */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => navigateToExplore()}
            className="w-full sm:w-auto px-9 py-4 bg-[#191817] text-[#FAF8F5] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#C5A059] transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 group cursor-pointer"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 text-[#DFBA73] group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('featured-collections');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-7 py-4 bg-transparent border border-[#7D5230]/40 text-[#191817] text-xs uppercase tracking-[0.22em] font-medium hover:bg-[#EFE8DA] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Curated Galleries</span>
          </button>
        </div>

        {/* Curatorial Trust Highlights below hero */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#E8E2D5] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-[11px] uppercase tracking-wider text-[#736E65]">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>100% Certified Originals</span>
          </div>
          <span className="hidden sm:inline text-[#C5A059]">•</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[#191817] font-semibold">₹</span>
            <span>Artisan Direct Pricing</span>
          </div>
          <span className="hidden sm:inline text-[#C5A059]">•</span>
          <div className="flex items-center gap-1.5">
            <span>Custom Wooden Crate Shipping</span>
          </div>
        </div>
      </div>
    </section>
  );
};
