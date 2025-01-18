import Image from 'next/image';
import React from 'react'
import phone from "@/../public/assets/Homepage/icn settings .icn-xl.png";
import location from "@/../public/assets/Homepage/icn settings .icn-xl (1).png";
import mail from "@/../public/assets/Homepage/icn settings .icn-xl (2).png";

const ContactCards = () => {
  return (
    <section>
      {/* OFFICE AND CONTACT */}
      <div className="w-full h-auto flex justify-center items-center bg-[#FFFFFF] py-8">
        <div className="w-full max-w-[1050px] h-auto flex flex-col gap-[80px] items-center">
          {/* Header Section */}
          <div className="w-full max-w-[633px] h-auto flex flex-col gap-[10px] items-center text-center">
            <h6 className="text-[14px] font-Montserrat font-bold leading-[24px] tracking-[0.2px] text-[#252B42]">
              VISIT OUR OFFICE
            </h6>
            <h2 className="text-[40px] font-Montserrat font-bold leading-[50px] tracking-[0.2px] text-[#252B42]">
              We help small businesses with big ideas
            </h2>
          </div>

          {/* Cards Section */}
          <div className="w-full h-auto flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
            {/* Card 1 */}
            <div className="max-w-[327px] w-full h-auto bg-[#F9F9F9] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
              {/* Icon */}
              <div className="w-[72px] h-[72px]">
                <Image src={phone} alt="phone" className="w-full h-full" />
              </div>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@example.com
                </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}
              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                Get Support
              </div>
              {/* Button */}
              <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>

            {/* Card 2 */}
            <div className="max-w-[329px] w-full h-auto bg-[#252B42] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
              {/* Icon */}
              <div className="w-[72px] h-[72px]">
                <Image
                  src={location}
                  alt="location"
                  className="w-full h-full"
                />
              </div>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                  georgia.young@example.com
                </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-white">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}
              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-white">
                Get Support
              </div>
              {/* Button */}
              <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>

            {/* Card 3 */}
            <div className="max-w-[327px] w-full h-auto bg-[#F9F9F9] px-6 py-8 flex flex-col gap-4 items-center rounded-lg shadow-lg">
              {/* Icon */}
              <div className="w-[72px] h-[72px]">
                <Image src={mail} alt="mail" className="w-full h-full" />
              </div>
              {/* Emails */}
              <div className="w-full text-center">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@example.com
                </h6>
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#252B42]">
                  georgia.young@ple.com
                </h6>
              </div>
              {/* Support */}
              <div className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                Get Support
              </div>
              {/* Button */}
              <button className="w-full max-w-[189px] h-[54px] rounded-[37px] border border-[#23A6F0] hover:bg-gray-200 flex justify-center items-center gap-2 px-6 py-2">
                <h6 className="font-Montserrat font-bold text-[14px] leading-[24px] text-[#23A6F0]">
                  Submit Request
                </h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCards;