import SecondNavbar from '@/app/components/About-2/SecondNavbar';
import PricingHero from '@/app/components/PricingComponents/PricingHero';
import PricingSecond from '@/app/components/PricingComponents/PricingSecond';
import PricingCards from '@/app/components/PricingComponents/PricingCards';
import React from 'react'
import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards';
import PricingFaqs from '@/app/components/PricingComponents/PricingFaqs';
import Trail from '@/app/components/PricingComponents/Trail';
import Footer from '@/app/components/HomeComponents/footer';

const Pricing = () => {
  return (
    <main>
        <SecondNavbar />
        <PricingHero />
        <PricingSecond />
        <PricingCards />
        <BrandLogoCards />
        <PricingFaqs />
        <Trail />
        <Footer />
    </main>
  )
}

export default Pricing;