'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';
import home from '@/../public/assets/Homepage/unsplash_QANOF9iJlFs.png';

const List: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-full flex justify-center items-center md:mt-48 lg:mt-16 mt-[510px]">
      <div className="w-full md:w-[87%] h-[650px] flex flex-col justify-center items-center
       rounded-lg">
        <div
          className="container w-full h-[280vh] p-8 rounded-lg"
          style={{
            backgroundImage: "linear-gradient(90deg, transparent 50%, #ffc0cb 50%)",
            backgroundSize: "70px 70px",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Nav */}
          <nav className="w-full flex justify-center items-center md:gap-8 py-1 h-[130px] border-b border-gray-300">
            <span className="text-center font-Montserrat font-semibold text-gray-600 text-[12px] md:text-[16px] leading-[24px]">
              Description
            </span>
            <span className="text-center font-Montserrat font-semibold text-gray-600 text-[12px] md:text-[16px] leading-[24px]">
              Additional Information
            </span>
            <span className="text-center font-Montserrat font-semibold text-gray-600 text-[12px] md:text-[16px] leading-[24px] flex items-center gap-1">
              Reviews
              <span className="text-sm text-[#23856D]">(0)</span>
            </span>
          </nav>

          <div className="flex justify-center items-center gap-8 md:gap-11 flex-col md:flex-row mt-2 w-full">
            {/* First Section: Image */}
            <div className="w-[200px] md:w-[280px] h-[420px] flex-shrink-0 rounded-lg overflow-hidden md:ml-2">
              <Image
                src={home}
                alt="Hero Image"
                width={300}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Second Section: Heading and Paragraphs */}
            <div className="flex flex-col w-full md:w-[30%]">
              <h2 className="text-[20px] md:text-[24px] font-Montserrat font-bold text-gray-800 mb-4">
                The quick fox jumps over
              </h2>
              <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mb-6">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mb-6">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>
              <p className="text-[#737373] font-Montserrat font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mb-4">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
              </p>

            </div>

            {/* Third Section */}
            <div className="flex flex-col w-full md:w-[30%] gap-3 ">
              <h3 className="text-[20px] md:text-[24px] font-Montserrat font-bold text-gray-800 mb-2">
                The quick fox jumps over
              </h3>
              {[...Array(4)].map((_, index) => (
                <div key={index} className="mb-2">
                  <div
                    className="flex items-center justify-between cursor-pointer text-[#737373] font-Montserrat font-bold text-[14px]"
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="flex items-center gap-2">
                      {openDropdown === index ? (
                        <FaChevronDown size={12} />
                      ) : (
                        <FaChevronRight size={12} />
                      )}
                      The quick fox jumps over the lazy dog
                    </div>
                  </div>
                  {openDropdown === index && (
                    <div className="mt-2 ml-4 text-[#737373] text-sm">
                      Additional content for item {index + 1}.
                    </div>
                  )}
                </div>
              ))}


              <h3 className="text-[20px] md:text-[24px] font-Montserrat font-bold text-gray-800 mb-4">
                The quick fox jumps over
              </h3>
              {[...Array(3)].map((_, index) => (
                <div key={index} className="mb-2">
                  <div
                    className="flex items-center justify-between cursor-pointer text-[#737373] font-Montserrat font-bold text-[14px]"
                    onClick={() => toggleDropdown(index)}
                  >
                    <div className="flex items-center gap-2">
                      {openDropdown === index ? (
                        <FaChevronDown size={12} />
                      ) : (
                        <FaChevronRight size={12} />
                      )}
                      The quick fox jumps over the lazy dog
                    </div>
                  </div>
                  {openDropdown === index && (
                    <div className="mt-2 ml-4 text-[#737373] text-sm">
                      Additional content for item {index + 1}.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;



