import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { Sparkles, Shield, Palette, Eye, HeartHandshake, ArrowRight } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const { navigateToExplore } = useGallery();

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Hero Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Curatorial Mission</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#191817] font-normal tracking-tight mb-6">
          The Story of renus_palette
        </h1>
        <p className="font-serif text-lg sm:text-xl italic text-[#6E685F] leading-relaxed">
          “To connect collectors with original paintings that transcend decorative trends, celebrating individuality, creative courage, and tactile emotion.”
        </p>
      </div>

      {/* Two-Column Editorial Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
        <div className="lg:col-span-6 relative">
          <div className="p-3 sm:p-5 bg-white border border-[#DDD5C5] shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
              alt="Curator inspecting artwork"
              className="w-full aspect-4/5 object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 p-6 bg-[#191817] text-white max-w-xs shadow-2xl border border-[#3E3A34] hidden sm:block">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059]">
              Santiniketan & Mumbai Roots
            </p>
            <p className="font-serif text-xs italic mt-1 text-[#DDD5C5]">
              Championing contemporary studio masters and traditional pigment arts since 2018.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#191817] leading-snug">
            Celebrating Creativity, Individuality, and Original Art
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#6E685F] leading-relaxed font-sans">
            <p>
              In a digital age saturated with mass-produced reproductions, digital canvas prints, and disposable décor, <strong className="text-[#191817] font-medium">renus_palette</strong> was born out of an ardent love for genuine materiality—the scent of cold wax, the tactile impasto of marble dust, and the luminous radiance of hand-beaten gold leaf.
            </p>
            <p>
              Founded by art historian and curator Renu Sengupta, the gallery bridges the gap between emerging and established Indian studio painters and discerning private collectors worldwide. We believe that living with original art shifts the energy of an architectural space, providing everyday sanctuary and contemplative pause.
            </p>
            <p>
              Every artwork in our gallery is individually assessed, photographed in natural gallery lighting, and certified with airtight provenance directly from the artist’s easel.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={() => navigateToExplore()}
              className="px-8 py-3.5 bg-[#191817] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059] transition-colors flex items-center gap-2"
            >
              <span>Explore Our Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* The Four Core Pillars */}
      <div className="bg-[#F5F1E8] border border-[#E8E2D5] p-8 sm:p-14 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="font-serif text-3xl text-[#191817] mb-2">Our Curatorial Commitments</h3>
          <p className="text-xs text-[#736E65]">The standards that elevate renus_palette as a trusted fine art marketplace</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white border border-[#E2D9C8] space-y-3">
            <Shield className="w-6 h-6 text-[#C5A059]" />
            <h4 className="font-serif text-lg text-[#191817] font-medium">100% Guaranteed Originals</h4>
            <p className="text-xs text-[#6E685F] leading-relaxed">
              We never sell prints or mass reproductions. Every canvas is a unique, one-of-a-kind original signed by the artist.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E2D9C8] space-y-3">
            <Palette className="w-6 h-6 text-[#C5A059]" />
            <h4 className="font-serif text-lg text-[#191817] font-medium">Museum-Grade Framing</h4>
            <p className="text-xs text-[#6E685F] leading-relaxed">
              Optional bespoke framing using sustainably harvested oak, archival mats, and UV museum glazing.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E2D9C8] space-y-3">
            <Eye className="w-6 h-6 text-[#C5A059]" />
            <h4 className="font-serif text-lg text-[#191817] font-medium">Art Advisory Concierge</h4>
            <p className="text-xs text-[#6E685F] leading-relaxed">
              Complimentary consultation for architectural staging, lighting harmony, and corporate collection advisory.
            </p>
          </div>

          <div className="p-6 bg-white border border-[#E2D9C8] space-y-3">
            <HeartHandshake className="w-6 h-6 text-[#C5A059]" />
            <h4 className="font-serif text-lg text-[#191817] font-medium">Ethical Artist Patronage</h4>
            <p className="text-xs text-[#6E685F] leading-relaxed">
              We believe in fair compensation. Majority shares go directly to the living artists to support their ongoing studio practice.
            </p>
          </div>
        </div>
      </div>

      {/* Letter from Founder */}
      <div className="bg-white border border-[#E2D9C8] p-8 sm:p-14 max-w-4xl mx-auto shadow-xs">
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#C5A059] font-mono">
            A Note from Renu
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#191817]">
            “Art does not ask for permission to move you.”
          </h3>
          <div className="text-sm text-[#6E685F] leading-relaxed space-y-3 font-sans">
            <p>
              When I started renus_palette, my wish was to strip away the intimidating pretension of high-end galleries while retaining the exquisite quality of museum curation. Art should be accessible to those whose hearts beat faster in front of a rich impasto or a subtle wash of terracotta.
            </p>
            <p>
              Whether you are acquiring your very first original canvas or expanding an established private collection, we welcome you to our palette.
            </p>
          </div>
          <div className="pt-4 border-t border-[#EFEBE1] flex items-center justify-between">
            <div>
              <p className="font-serif text-base text-[#191817] font-medium">Renu Sengupta</p>
              <p className="text-xs text-[#8C8578]">Founder & Principal Curator, renus_palette</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
