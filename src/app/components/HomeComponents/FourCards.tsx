'use client';

import Image from "next/image";
import React from "react";
import filter1 from '@/../public/assets/Homepage/media bg-cover.png';
import filter2 from '@/../public/assets/Homepage/filter (1).png';
import filter3 from '@/../public/assets/Homepage/filter (2).png';
import filter4 from '@/../public/assets/Homepage/filter (3).png';
import CenterText from "./CenterText";

const FourCards = () => {
  return (
    <section>

      <CenterText 
      headings={[
        { title: "EDITOR'S PICK", subheading: "Problems trying to resolve the conflict between" },
      ]} 
      />

      <div className="w-full h-auto flex flex-col justify-center items-center  md:flex-row md:justify-center gap-7">

        {/* part 1 */}
        <div className="flex justify-center items-center flex-col md:flex-row gap-4 relative">
          <div className="relative">
            <Image 
              src={filter1} 
              alt="Men" 
              width={1000} 
              height={1000} 
              className="w-[230px] sm:w-[350px] h-[390px] object-cover"
            />
            <button 
              className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-[#c5bcbc]">
              Men
            </button>
          </div>

          <div className="relative">
            <Image 
              src={filter2} 
              alt="Women" 
              width={1000} 
              height={1000} 
              className="w-[230px] h-[390px] object-cover"
            />
            <button 
              className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-[#c5bcbc]">
              Women
            </button>
          </div>
        </div>

        {/* part 2 */}
        <div className="flex flex-col justify-center items-center md:justify-between relative gap-2.5">
          <div className="relative">
            <Image 
              src={filter3} 
              alt="Accessories" 
              width={1000} 
              height={1000} 
              className="w-[230px] sm:w-[200px] h-[190px] object-cover"
            />
            <button 
              className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-[#c5bcbc]">
              Accessories
            </button>
          </div>

          <div className="relative">
            <Image 
              src={filter4} 
              alt="Kids" 
              width={1000} 
              height={1000} 
              className="w-[230px] sm:w-[200px] h-[190px] object-cover"
            />
            <button 
              className="absolute bottom-4 left-4 bg-white text-black px-4 py-2 text-sm font-semibold hover:bg-[#c5bcbc]">
              Kids
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FourCards;
