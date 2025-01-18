import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Trail = () => {
  return (
    <div className="relative bg-white flex flex-col items-center py-[160px] gap-[96px] lg:w-full lg:h-[582px] w-full">
      {/* Container */}
      <div className="flex flex-col items-center gap-[36px] w-full lg:w-full lg:h-[602px]">
        {/* Main content */}
        <div className="flex flex-col items-center gap-[30px] w-full h-[282px]">
          <h2 className="font-Montserrat font-bold lg:text-[40px] text-[20px] leading-[50px] text-center text-[#252B42] w-full">
            Start your 14 days free trial
          </h2>

          <h6 className="font-Montserrat font-normal text-[14px] leading-[20px] text-center text-[#737373] w-full">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br/> do met sent. RELIT official consequent.
          </h6>

          <div className="flex flex-row items-center gap-[10px]">
            <div className="bg-[#23A6F0] hover:bg-blue-900 text-white font-Montserrat font-bold text-[14px] leading-[22px] rounded-[5px] px-[40px] py-[15px]">
              Try it free now
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row gap-[34px] text-lightblue">
          {/* Twitter */}
          <div className="w-[30px] h-[24.49px]">
            <FaTwitter size={30} color="#33CEFF" />
          </div>

          {/* Facebook */}
          <div className="w-[30px] h-[30px]">
            <FaFacebook size={30} color="#33CEFF" />
          </div>

          {/* Instagram */}
          <div className="w-[30px] h-[30px]">
            <FaInstagram size={30} color="#33CEFF" />
          </div>

          {/* LinkedIn */}
          <div className="w-[30px] h-[29.88px]">
            <FaLinkedin size={30} color="#33CEFF" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trail;
