import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  const { navigateToExplore, navigateToArtwork, setPage } = useGallery();

  const showcasePaintings = [
    {
      id: 'art-01',
      title: 'Symphony in Ochre & Deep Cobalt',
      tag: 'Vibrant Acrylics 🎨',
      img: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
      price: '₹68,000'
    },
    {
      id: 'art-03',
      title: 'Whispering Mists of Santiniketan',
      tag: 'Dreamy Watercolors 🌿',
      img: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=800&q=80',
      price: '₹52,000'
    },
    {
      id: 'art-05',
      title: 'The Solitary Reader (Afternoon Radiance)',
      tag: 'Expressive Portraits 👩‍🎨',
      img: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80',
      price: '₹92,000'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFF4D2]/40 via-[#FFFDF9] to-[#FFFDF9] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#F4EBE0]">
      {/* Playful background doodles & accents */}
      <div className="absolute top-10 left-8 text-4xl opacity-30 select-none pointer-events-none rotate-12">
        ✨
      </div>
      <div className="absolute top-20 right-12 text-4xl opacity-30 select-none pointer-events-none -rotate-12">
        🌸
      </div>
      <div className="absolute bottom-10 left-16 text-3xl opacity-20 select-none pointer-events-none">
        🌿
      </div>
      <div className="absolute bottom-12 right-20 text-4xl opacity-25 select-none pointer-events-none rotate-6">
        🎨
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Ru&Chai style warm artist introduction */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Friendly Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF4D2] border border-[#FFE082] text-xs font-bold text-[#8C6D00] shadow-xs">
              <span>🎨 Welcome to Renuka's Art Studio</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6161]" />
              <span className="text-[#FF6161]">renus_palette</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#2B2623] tracking-tight leading-[1.08]">
              Welcome to my <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6161] via-[#FFA000] to-[#FF6161]">
                colorful world!
              </span>
            </h1>

            {/* Sub-headline / Bio */}
            <p className="text-base sm:text-lg text-[#5C5248] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              I am <strong className="text-[#2B2623]">Renuka</strong>, a painter specializing in vibrant acrylics and dreamy watercolor art focused on beautiful portraits and nature landscapes.
            </p>

            {/* Custom Art Callout Box */}
            <div className="p-4 rounded-2xl bg-[#FFEAE8] border border-[#FFCCD0] text-sm text-[#2B2623] max-w-xl mx-auto lg:mx-0 flex items-start gap-3 text-left">
              <span className="text-2xl shrink-0 mt-0.5">🎨</span>
              <div>
                <strong className="text-[#FF6161] block font-bold">Want custom art?</strong>
                <span>I love creating unique, personalized portrait and nature pieces tailored just for you! Message me to book a commission.</span>
              </div>
            </div>

            {/* Cheerful CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => navigateToExplore()}
                className="btn-sunshine px-7 py-4 text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Shop Original Paintings</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setPage('contact')}
                className="btn-coral px-6 py-4 text-sm font-bold flex items-center gap-2 cursor-pointer"
              >
                <span>Book Custom Art 💌</span>
              </button>

              <a
                href="https://www.youtube.com/@renus_palette"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 rounded-full bg-white border border-[#EAE0D4] text-[#2B2623] hover:border-[#FF0000] hover:text-[#FF0000] text-xs font-bold transition-all shadow-xs flex items-center gap-2"
              >
                <div className="w-4 h-4 rounded-full bg-[#FF0000] text-white flex items-center justify-center">
                  <Play className="w-2.5 h-2.5 fill-current" />
                </div>
                <span>Studio Vlogs</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-semibold text-[#7A6F66]">
              <span className="flex items-center gap-1.5">
                <span className="text-[#FFD13B]">✨</span> 100% Hand-Painted Originals
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#FF6161]">💌</span> Custom Art Commissions
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#2DD4BF]">📦</span> Safe Pan-India Delivery
              </span>
            </div>
          </div>

          {/* Right Column: Visual Artwork Collage (Ru&Chai style playful card grid) */}
          <div className="lg:col-span-5 relative">
            <div className="relative grid grid-cols-2 gap-4">
              {showcasePaintings.slice(0, 2).map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => navigateToArtwork(item.id)}
                  className={`group cursor-pointer bg-white p-3 rounded-2xl border-2 border-[#F0E6D8] shadow-sm hover-pop ${
                    idx === 1 ? 'translate-y-6' : ''
                  }`}
                >
                  <div className="relative aspect-4/5 rounded-xl overflow-hidden bg-[#FAF5ED] mb-2.5">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-white/95 text-[10px] font-bold text-[#2B2623] shadow-xs">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-xs text-[#2B2623] truncate group-hover:text-[#FF6161] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs font-bold text-[#FF6161] mt-0.5">{item.price}</p>
                </div>
              ))}

              {/* Floating Instagram & YouTube Badge */}
              <div className="col-span-2 mt-4 p-4 rounded-2xl bg-[#FFFDF9] border-2 border-[#FFD13B] shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E1306C] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                    📸
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#2B2623] block">@renus_palette</span>
                    <span className="text-[11px] text-[#7A6F66]">Process videos & daily art reels</span>
                  </div>
                </div>

                <a
                  href="https://www.instagram.com/renus_palette?mdxt=Z2o0YWZvZjlvNGhj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-[#FFD13B] text-[#2B2623] text-xs font-bold hover:bg-[#FFC400] transition-colors"
                >
                  Follow →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
