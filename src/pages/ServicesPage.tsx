import React, { useEffect } from 'react';
import { ServicesHero } from '../components/sections/services/ServicesHero';
import { ServicesGrid } from '../components/sections/services/ServicesGrid';
import { HowItWorks }   from '../components/sections/services/HowItWorks';
import { Pricing }      from '../components/sections/services/Pricing';
import { CTABanner }    from '../components/sections/home/CTABanner';

const ServicesPage: React.FC = () => {
  useEffect(() => { document.title = 'Services — Ecliptiko'; }, []);
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <HowItWorks />
      <Pricing />
      <CTABanner />
    </>
  );
};

export default ServicesPage;
