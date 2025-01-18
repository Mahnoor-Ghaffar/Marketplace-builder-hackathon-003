import React from 'react'
import AnnouncementBar from './components/HomeComponents/Announcmentbar'
import Header from './components/HomeComponents/header';
import Hero from './components/HomeComponents/Hero'
import FourCards from './components/HomeComponents/FourCards';
import Footer from './components/HomeComponents/footer';
import ProductCard from './components/HomeComponents/Products-Cards';
import SecondHero from './components/HomeComponents/secondHero';
import ThirdHero from './components/HomeComponents/ThirdHero';
import FeaturedPost from './components/HomeComponents/FeaturedPost';
import FooterNavbar from './components/HomeComponents/FooterNavbar';
import CenterText from './components/HomeComponents/CenterText';

const Home = () => {
  return (
   <main>
    <AnnouncementBar />
    <Header />
    <Hero />
    <FourCards />

    {/* Heading */}
    <CenterText 
      headings={[
        { 
          smallHeading: "FEATURED PRODUCTS",
          title: "BESTSELLER PRODUCTS", 
          subheading: "Problems trying to resolve the conflict between" 
        }
      ]} 
      />

    <ProductCard />
    <SecondHero />
    <ThirdHero />
    <FeaturedPost />
    <FooterNavbar />
    <Footer />
   </main>
  )
}

export default Home