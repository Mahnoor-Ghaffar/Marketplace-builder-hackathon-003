
'use client'
import Image from 'next/image';
import React from 'react';
import HeroImg from '@/../public/assets/Homepage/desktop-header-24.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';


type HeroProps = {};

const ContactHero: React.FC<HeroProps> = () => {
    return (
        <section
            className=" overflow-hidden bg-cover bg-center w-full flex flex-col min-h-[630px] justify-center items-center"
        >
            <div className="container flex flex-wrap items-center mx-auto justify-between
            md:px-12 md:flex-row">
                {/* Text Section */}
                <div className="mb-28 lg:mb-0 lg:w-1/2.8 px-5 py-10 sm:px-10">
                <h1 className="text-[20px] font-semibold text-gray-700 mb-6">
                Contact Us
                    </h1>

                  <h2 className="sm:text-[50px] mt-4 text-[35px] leading-[5rem] uppercase text-gray-700 font-bold">
                  Get in touch <br/> today!
                  </h2>

               <p className="mt-[1rem] ml-4 text-black text-opacity-70 text-[18px]">
                  We know how large objects will act, We know <br/>
                  how are objects will act, We know 
                </p>

                    {/* no and icons */}
                    <div className='ml-4'>
      <div>
        <h3 className="text-[20px] font-bold text-[#252b42ea] mt-6">
          Phone: +451 215 215
        </h3>
        <h3 className="text-[20px] font-bold text-[#252b42ea] mt-4">
          Fax: +451 215 215
        </h3>
      </div>
      <div className="flex gap-4 mt-9">
        {/* Twitter */}
        <FaTwitter size={30} color="#33CEFF" />

        {/* Facebook */}
        <FaFacebook size={30} color="#33CEFF" />

        {/* Instagram */}
        <FaInstagram size={30} color="#33CEFF" />

        {/* LinkedIn */}
        <FaLinkedin size={30} color="#33CEFF" />
      </div>
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

export default ContactHero;
