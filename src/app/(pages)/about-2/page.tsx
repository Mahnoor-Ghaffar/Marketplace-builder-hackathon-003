import AboutCards from '@/app/components/About-2/AboutCards'
import AboutHero from '@/app/components/About-2/AboutHero'
import BlueHero from '@/app/components/About-2/BlueHero'
import Ratings from '@/app/components/About-2/Ratings'
import SecondNavbar from '@/app/components/About-2/SecondNavbar'
import TwoSecText from '@/app/components/About-2/TwoSecText'
import Video from '@/app/components/About-2/Video'
import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards'
import Footer from '@/app/components/HomeComponents/footer'
import FooterNavbar from '@/app/components/HomeComponents/FooterNavbar'
import React from 'react'

const about02 = () => {
  return (
    <main>
        <SecondNavbar />
        <AboutHero />
        <TwoSecText />
        <Ratings />
        <Video />
        <AboutCards/>
        <BrandLogoCards />
        <BlueHero />
        <FooterNavbar />
        <Footer />
    </main>
  )
}

export default about02