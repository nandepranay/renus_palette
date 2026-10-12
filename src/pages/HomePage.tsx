import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedCollections } from '../components/FeaturedCollections';
import { NewArrivalsSection } from '../components/NewArrivalsSection';
import { CuratedArtGrid } from '../components/CuratedArtGrid';
import { CanvasPricingSection } from '../components/CanvasPricingSection';
import { CustomCommissionSection } from '../components/CustomCommissionSection';
import { AboutSection } from '../components/AboutSection';
import { StudioVlogSection } from '../components/StudioVlogSection';
import { Newsletter } from '../components/Newsletter';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      <NewArrivalsSection />
      <Hero />
      <FeaturedCollections />
      <CuratedArtGrid />
      <CanvasPricingSection />
      <CustomCommissionSection />
      <AboutSection />
      <StudioVlogSection />
      <Newsletter />
    </main>
  );
};
