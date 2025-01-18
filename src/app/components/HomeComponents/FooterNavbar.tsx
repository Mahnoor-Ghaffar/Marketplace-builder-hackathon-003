// FooterNavbar.tsx
import { FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";

const FooterNavbar: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      
      <div className="h-[100px] text-black  border-b w-[88%] flex justify-center border-gray-400">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <div className="text-[32px] font-bold text-left w-full sm:w-auto">
          Bandage
        </div>

        {/* Icons Section */}
        <div className="flex gap-4 w-full sm:w-auto sm:justify-end text-light-blue-400 mt-4 sm:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#23A6F0]  hover:text-blue-700"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12,2C6.477,2,2,6.477,2,12c0,5.395,4.275,9.78,9.621,9.981v-6.942H9.278v-2.725h2.343v-2.005 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365v6.659C18.768,20.613,22,16.689,22,12C22,6.477,17.523,2,12,2z"></path>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 text-[#23A6F0]"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 text-[#23A6F0]"
            aria-label="Twitter"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
      </div>

    </div>
  );
};

export default FooterNavbar;
