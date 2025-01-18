"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { client } from '@/sanity/lib/client'

async function getData() {
  const fetchData = await client.fetch(`*[_type == "Home"] {
  HeroTitle,HeroDescription,
    "imageUrl": image.asset->url
}`)
return fetchData
}


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional
  },
};

export default async function Hero() {

   const data = await getData()
   return (
    <section>
      {
        data.map((val: any,i:any) => {


          return (
            <Carousel
              additionalTransfrom={0}
              arrows={false}
              autoPlay={true}
              autoPlaySpeed={4000}
              centerMode={false}
              infinite
              responsive={responsive}
              itemClass="item"
              showDots={true}
            >
              {/* First Hero Slide */}
              <div
                className="w-[100%] h-[90vh] flex items-center flex-col bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/Homepage/shop-hero-1-product-slide-1.jpg')",
                  }}
              >
                <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto mt-[90px]">
                  {/* Information */}
                  <div>
                    <h1 className="text-[20px] font-semibold text-white">
                      summer 2020
                    </h1>
                    <h2 className="text-[50px] leading-[5rem] uppercase text-white font-bold">
                      New Collection
                    </h2>
                    <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                      we Know how large objects will act, <br />
                      but thigs on a small scale.
                    </p>
        
                    {/* Button */}
                    <button
                      className="mt-[2rem] px-8 py-3 sm:px-8 sm:py-3 text-[16px] bg-green-500
                      transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white"
                    >
                      <span className="font-bold">SHOP NOW</span>
                    </button>
                  </div>
                </div>
              </div>
        
              {/* Second Hero Slide */}
              <div
                className="w-[100%] h-[90vh] flex items-center flex-col bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/Homepage/shop-hero-1-product-slide-1.jpg')", 
                  }}
              >
                <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-[2rem] mx-auto mt-[90px]">
                  {/* Information */}
                  <div>
                    <h1 className="text-[20px] font-semibold text-white">
                      summer 2020
                    </h1>
                    <h2 className="text-[50px] leading-[5rem] uppercase text-white font-bold">
                      New Collection
                    </h2>
                    <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                      we Know how large objects will act, <br />
                      but thigs on a small scale.
                    </p>
        
                    {/* Button */}
                    <button
                      className="mt-[2rem] px-8 py-3 sm:px-8 sm:py-3 text-[16px] bg-green-500
                      transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white"
                    >
                      <span className="font-bold">SHOP NOW</span>
                    </button>
                  </div>
                </div>
              </div>
            </Carousel>
          );

        })
      }
    </section>
   )
  
};






