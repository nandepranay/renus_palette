import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedCollections } from '../components/FeaturedCollections';
import { CuratedArtGrid } from '../components/CuratedArtGrid';
import { CustomCommissionSection } from '../components/CustomCommissionSection';
import { StudioVlogSection } from '../components/StudioVlogSection';
import { AboutSection } from '../components/AboutSection';
import { Newsletter } from '../components/Newsletter';

export const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      <Hero />
      <FeaturedCollections />
      <CuratedArtGrid />
      <CustomCommissionSection />
      <StudioVlogSection />
      <AboutSection />
      <Newsletter />
    </main>
  );
};
