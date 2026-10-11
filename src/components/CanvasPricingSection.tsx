import React from 'react';
import { ARTIST_CONFIG, getWhatsAppLink } from '../config/artistConfig';
import { Sparkles, MessageCircle, Check, Info } from 'lucide-react';

export const CanvasPricingSection: React.FC = () => {
  return (
    <section
      id="canvas-pricing"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4D2] text-[#8C6D00] text-xs font-bold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#FF6161]" />
          <span>Renuka's Studio Pricing Guide</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#2B2623] tracking-tight mb-4">
          Canvas Sizes & Pricing 🎨
        </h2>
        <p className="text-sm sm:text-base text-[#5C5248] leading-relaxed max-w-2xl mx-auto">
          Clear, transparent canvas size pricing ranges from Renuka's studio portfolio guide. Every piece is hand-painted with professional artist acrylics.
        </p>
      </div>

      {/* 3 Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
        {ARTIST_CONFIG.pricingTiers.map((tier) => {
          const customTierWhatsApp = getWhatsAppLink(
            `Hi Renuka! I'm interested in a custom acrylic painting on a ${tier.name} (${tier.sizeRange}, ${tier.priceRange}). I'd like to discuss the concept, details, and quote.`
          );

          return (
            <div
              key={tier.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover-pop ${
                tier.recommended
                  ? 'bg-gradient-to-b from-[#FFFDF9] to-[#FFF9E6] border-3 border-[#FFD13B] shadow-lg ring-4 ring-[#FFD13B]/20'
                  : 'bg-white border-2 border-[#F0E6D8] shadow-sm hover:border-[#FF6161]'
              }`}
            >
              {/* Badge for Popular */}
              {tier.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF6161] text-white text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                  Most Popular for Homes 🌸
                </div>
              )}

              <div>
                {/* Header Info */}
                <div className="mb-4">
                  <h3 className="font-heading text-xl sm:text-2xl font-black text-[#2B2623] mb-1">
                    {tier.name}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FFF4D2] text-[#8C6D00] text-xs font-bold font-mono">
                    Size: {tier.sizeRange}
                  </div>
                </div>

                {/* Price Display */}
                <div className="py-4 border-y border-[#F0E6D8] mb-5">
                  <span className="text-xs uppercase font-bold text-[#7A6F66] block mb-0.5">
                    Price Range
                  </span>
                  <div className="font-heading text-3xl sm:text-4xl font-black text-[#FF6161]">
                    {tier.priceRange}
                  </div>
                  <span className="text-[11px] text-[#8C8075] mt-1 block">
                    Hand-painted original acrylic on canvas
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#5C5248] mb-5 leading-relaxed">
                  {tier.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2.5 mb-8">
                  {tier.highlights.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#453D37]">
                      <span className="w-4 h-4 rounded-full bg-[#E8F8F0] text-[#1E7E34] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check className="w-3 h-3 stroke-3" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href={customTierWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-full font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs ${
                    tier.recommended
                      ? 'btn-coral shadow-md'
                      : 'btn-sunshine'
                  }`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Request Custom Quote</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Explanatory Notice & Disclaimer Box */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FFF9E6] border-2 border-[#FFE082] max-w-4xl mx-auto shadow-xs text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6D00] uppercase tracking-wider">
          <Info className="w-4 h-4 text-[#FF6161]" />
          <span>Understanding Custom Painting Pricing</span>
        </div>
        <p className="font-heading font-extrabold text-base sm:text-lg text-[#2B2623] max-w-2xl mx-auto">
          “{ARTIST_CONFIG.pricingExplanation}”
        </p>
        <p className="text-xs sm:text-sm text-[#6E6359] leading-relaxed max-w-3xl mx-auto">
          {ARTIST_CONFIG.pricingDisclaimer}
        </p>

        {/* Global Request Custom Quote Action */}
        <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-coral px-7 py-3.5 text-sm font-bold inline-flex items-center gap-2 shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Renuka on WhatsApp ({ARTIST_CONFIG.phone})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
