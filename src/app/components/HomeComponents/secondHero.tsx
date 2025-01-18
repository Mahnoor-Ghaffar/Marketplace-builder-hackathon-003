
'use client'
import Image from 'next/image';
import React from 'react';
import HeroImg from '@/../public/assets/Homepage/shop-hero-2-png-picture-1.png';
import bgImageDesktop from '@/../public/assets/Homepage/shop-hero-2-product-slide-2.jpg';
import bgImageMobile from '@/../public/assets/Homepage/product-slide-1-1.jpg';

type HeroProps = {};

const SecondHero: React.FC<HeroProps> = () => {
    return (
        <section
            className="mt-11 overflow-hidden bg-cover bg-center w-full flex flex-col min-h-[630px] justify-center items-center"
            style={{
                backgroundImage: `url('${bgImageDesktop.src}')`,
            }}
        >
            <div className="container flex flex-wrap items-center mx-auto justify-center
            md:px-12 md:flex-row">
                {/* Text Section */}
                <div className="mb-14 lg:mb-0 lg:w-1/2 px-5 py-10 sm:px-10">
                <h1 className="text-[20px] font-semibold text-white">
                      summer 2020
                    </h1>

                  <h2 className="sm:text-[50px] text-[35px] leading-[5rem] uppercase text-white font-bold">
                     Vita  Classic Products
                  </h2>

               <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
                  We know how large objects will act, We know <br/>
                  how are objects will act, We know 
                </p>

                    {/* Button with Price */}
                    <div className="mt-[2rem] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Price Text */}
                        <span className="text-white text-[18px] font-bold px-8 py-3">
                            $16.48
                        </span>
                        {/* Button */}
                        <button className="px-8 py-3 sm:px-8 sm:py-3 text-[16px] bg-green-500
                        transition-all duration-200 hover:bg-green-700 flex items-center rounded-md space-x-2 text-white">
                            <span className="font-bold">ADD TO CART</span>
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2">
                    <Image 
                        src={HeroImg} 
                        alt="hero section image" 
                        width={1000} 
                        height={1000} 
                        className="w-[335px] h-[330px] sm:w-[500px] sm:h-[610px] sm:mt-6 lg:ml-24"
                    />
                </div>
            </div>

            {/* Responsive Background for Medium Screens */}
            <style jsx>{`
                @media (max-width: 768px) {
                    section {
                        background-image: url('${bgImageMobile.src}');
                    }
                }
            `}</style>
        </section>
    );
};

export default SecondHero;
