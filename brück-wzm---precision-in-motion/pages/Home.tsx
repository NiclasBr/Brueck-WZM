import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { ProductSlider } from '../components/ProductSlider';
import { PartnerTrack } from '../components/PartnerTrack';
import { Services } from '../components/Services';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ProductSlider />
      <PartnerTrack />
      <Services />
    </>
  );
};