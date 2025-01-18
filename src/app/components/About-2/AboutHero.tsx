
'use client'
import Image from 'next/image';
import React from 'react';
import HeroImg from '@/../public/assets/Homepage/hero-2-bg-shape-cover.png';


type HeroProps = {};

const AboutHero: React.FC<HeroProps> = () => {
    return (
        <section
            className=" overflow-hidden bg-cover bg-center w-full flex flex-col min-h-[630px] justify-center items-center"
        >
            <div className="container flex flex-wrap items-center mx-auto justify-between
            md:px-12 md:flex-row">
                {/* Text Section */}
                <div className="mb-14 lg:mb-0 lg:w-1/2.8 px-5 py-10 sm:px-10">
                <h1 className="text-[20px] font-semibold text-black">
                ABOUT COMPANY
                    </h1>

                  <h2 className="sm:text-[50px] text-[35px] leading-[5rem] uppercase text-black font-bold">
                  ABOUT US
                  </h2>

               <p className="mt-[1rem] text-black text-opacity-70 text-[18px]">
                  We know how large objects will act, We know <br/>
                  how are objects will act, We know 
                </p>

                    {/* Button with Price */}
                    <div className="mt-[2rem] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Button */}
                        <button className="px-8 py-3 sm:px-8 sm:py-3 text-[16px]
                        transition-all duration-200 hover:bg-blue-700 flex items-center rounded-md space-x-2 text-white bg-[#23A6F0]">
                            <span className="font-bold">Get Quote Now</span>
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="lg:w-[650px]">
                    <Image 
                        src={HeroImg} 
                        alt="hero section image" 
                        width={1000} 
                        height={1000} 
                        className="w-[332px] h-[330px] sm:w-[650px] sm:h-[610px] sm:mt-6 lg:ml-2"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
