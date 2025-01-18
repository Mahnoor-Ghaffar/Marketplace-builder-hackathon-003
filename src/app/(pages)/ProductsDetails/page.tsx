import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards'
import AnnouncementBar from '@/app/components/HomeComponents/Announcmentbar'
import Footer from '@/app/components/HomeComponents/footer'
import FooterNavbar from '@/app/components/HomeComponents/FooterNavbar'
import Header from '@/app/components/HomeComponents/header'
import Bestseller from '@/app/components/ProductsComponents/Bestseller'
import List from '@/app/components/ProductsComponents/List'
import ProductDetails from '@/app/components/ProductsComponents/ProductDetails'
import ProductsNavbar from '@/app/components/ProductsComponents/ProductsNavbar'
import React from 'react'

const Products = () => {
  return (
    <main>
        <AnnouncementBar bgColor='#23856D'/>
        <Header />
        <ProductsNavbar />
        <ProductDetails />
        <List />
        <Bestseller />
        <BrandLogoCards />
        <FooterNavbar />
        <Footer />
    </main>
  )
}

export default Products