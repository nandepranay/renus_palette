import React from 'react';
import { useGallery } from '../context/GalleryContext';
import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

export const AboutUsPage: React.FC = () => {
  const { navigateToExplore } = useGallery();

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full bg-[#FFF4D2] text-[#8C6D00] mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6161]" />
          <span>The Artist & Studio</span>
        </div>
        <h1 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#2B2623] tracking-tight mb-4">
          About Renuka & renus_palette
        </h1>
        <p className="text-lg text-[#5C5248] leading-relaxed max-w-2xl mx-auto font-medium">
          “Welcome to my colorful world! I am Renuka, a painter specializing in vibrant acrylics and dreamy watercolor art focused on beautiful portraits and nature landscapes.”
        </p>
      </div>

      {/* Main Two-Column Story */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
        <div className="lg:col-span-6 relative">
          <div className="p-3 sm:p-4 bg-white border-2 border-[#F0E6D8] rounded-3xl shadow-sm overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80"
              alt="Renuka painting in studio"
              className="w-full aspect-4/5 object-cover rounded-2xl"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 p-5 bg-[#FFD13B] text-[#2B2623] rounded-2xl shadow-md border-2 border-white hidden sm:block max-w-xs">
            <p className="text-xs font-bold">🎨 Renuka's Art Studio</p>
            <p className="text-[11px] font-medium text-[#453D37] mt-1">
              Handcrafted original paintings, custom commission pieces, and creative studio vlogs.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#2B2623] leading-tight">
            Art that Brings Joy & Color to Your Life 🌸
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-[#5C5248] leading-relaxed">
            <p>
              Hi there! I started <strong className="text-[#2B2623]">renus_palette</strong> with a simple dream: to bring warmth, wonder, and vibrant color into everyday living spaces through original hand-painted artwork.
            </p>
            <p>
              Every brushstroke is infused with curiosity and love. From layered palette-knife acrylic textures that dance in natural room light, to ethereal translucent watercolor washes of misty nature horizons and intimate emotional portraits.
            </p>
            <div className="p-4 rounded-2xl bg-[#FFEAE8] border border-[#FFCCD0] text-[#2B2623] space-y-1">
              <strong className="text-[#FF6161] font-bold block">🎨 Want Custom Art?</strong>
              <p className="text-xs sm:text-sm">
                I love creating unique, personalized portrait and nature pieces tailored just for you! Message me to discuss colors, sizes, or to book a custom commission.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => navigateToExplore()}
              className="btn-sunshine px-7 py-3.5 text-sm font-bold flex items-center gap-2 cursor-pointer"
            >
              <span>Explore My Paintings</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/919096932011?text=Hi%20Renuka,%20I%20would%20love%20to%20discuss%20a%20custom%20painting%20commission!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral px-6 py-3.5 text-sm font-bold flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Renuka's Studio */}
      <div className="bg-[#FFF4D2]/50 border-2 border-[#F0E6D8] rounded-3xl p-8 sm:p-12 mb-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#2B2623] mb-2">
            Why Patrons Love renus_palette
          </h3>
          <p className="text-xs text-[#7A6F66]">The values behind every single painting leaving my studio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 bg-white rounded-2xl border border-[#F0E6D8] shadow-xs space-y-2">
            <span className="text-2xl">✨</span>
            <h4 className="font-heading font-bold text-base text-[#2B2623]">100% Hand-Painted</h4>
            <p className="text-xs text-[#7A6F66]">
              Never digital prints or reproductions. Every single canvas is a genuine original painted by Renuka.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#F0E6D8] shadow-xs space-y-2">
            <span className="text-2xl">🎨</span>
            <h4 className="font-heading font-bold text-base text-[#2B2623]">Custom Commissions</h4>
            <p className="text-xs text-[#7A6F66]">
              Personalized portraits and custom landscape pieces tailored to your exact preferences and wall dimensions.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#F0E6D8] shadow-xs space-y-2">
            <span className="text-2xl">📦</span>
            <h4 className="font-heading font-bold text-base text-[#2B2623]">Packed with Love</h4>
            <p className="text-xs text-[#7A6F66]">
              Multi-layer protective packing with corner guards and insured transit to anywhere in India.
            </p>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#F0E6D8] shadow-xs space-y-2">
            <span className="text-2xl">📺</span>
            <h4 className="font-heading font-bold text-base text-[#2B2623]">Process & Tutorials</h4>
            <p className="text-xs text-[#7A6F66]">
              Follow behind-the-scenes vlogs, satisfying painting reels, and creative tutorials on YouTube & Instagram.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
