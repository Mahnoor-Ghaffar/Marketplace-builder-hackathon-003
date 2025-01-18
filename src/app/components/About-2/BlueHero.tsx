import React from 'react';
import HeroImg from '@/../public/assets/Homepage/unsplash_vjMgqUkS8q8.png';
import Image from 'next/image';

const BlueHero = () => {
  return (
    <section
      className="overflow-hidden w-full flex flex-col min-h-[630px] justify-center items-center bg-blue-600"
    >
      <div className="flex flex-wrap items-center lg:justify-between justify-center md:flex-row w-full">
        {/* Text Section */}
        <div className="mb-14 lg:mb-0 lg:w-1/2.8 px-5 py-10 sm:px-10 md:ml-[190px]">
          <h1 className="text-[20px] font-semibold text-white">
            Work With Us
          </h1>

          <h2 className="sm:text-[50px] text-[35px] leading-[5rem] uppercase text-white font-bold">
            Now Let&#39;s Grow Yours
          </h2>

          <p className="mt-[1rem] text-white text-opacity-70 text-[18px]">
            We know how large objects will act, We know <br />
            how are objects will act, We know
          </p>

          {/* Button with Price */}
          <div className="mt-[2rem] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Button */}
            <button
              className="px-8 py-3 sm:px-8 sm:py-3 text-[16px]
              transition-all duration-200 hover:bg-blue-700 flex items-center rounded-md space-x-2 text-white border-2 border-white"
            >
              <span className="font-bold">Button</span>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[400px]">
          <Image
            src={HeroImg}
            alt="hero section image"
            width={1000}
            height={1000}
            className="w-[332px] h-[350px] sm:w-[400px] sm:h-[670px] sm:mt-0 mt-6 lg:ml-2"
          />
        </div>
      </div>
    </section>
  );
};

export default BlueHero;
