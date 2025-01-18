import React from 'react'
import Image from "next/image";
import circle from "@/../public/assets/Homepage/icn-circle circle-xs secondary-color-1.png";
import circle2 from "@/../public/assets/Homepage/icn-circle circle-xs mute.png";

const PricingCards = () => {
  return (
    <div className="w-full flex lg:flex lg:flex-row flex-col gap-[20px] justify-center items-center py-16">
    {/* card 1 */}
    <div className="md:w-[327px] h-[664px]">
      <div className="border rounded-[10px] items-center justify-center border-[#23A6F0] flex flex-col px-[40px] py-[50px] gap-[35px] bg-[#FFFFFF]">
        <h3 className="w-[64px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
          FREE
        </h3>
        <h5 className="w-[160px] h-[48px] font-Montserrat font-bold text-[16px] leading-[24px] flex justify-center items-center text-[#737373] tracking-[0.1px]">
          Organize across all apps by hand
        </h5>
        <div className="w-[114px] h-[56px] flex gap-[10px]">
          <h2 className="w-[28px] h-[50px] font-Montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#23A6F0]">
            0
          </h2>
          <div className="w-[76px] h-[56px]">
            <h3 className="w-[16px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#23A6F0]">
              $
            </h3>
            <h6 className="w-[76px] h-[24px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#8EC2F2]">
              Per Month
            </h6>
          </div>
        </div>
        <div className="w-[247px] h-[236px] flex flex-col gap-[15px]">
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle2} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              1GB Cloud storage
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle2} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              Email and community support
            </h6>
          </div>
        </div>
        {/* button */}
        <button className="w-[246px] h-[52px] rounded-[5px] px-[40px] py-[15px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
          <h6 className="font-Montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">
            Try for free
          </h6>
        </button>
      </div>
    </div>

    {/* card 2 */}
    <div className="md:w-[380px] h-[664px] md:mb-16 ">
      <div className="border rounded-[10px] items-center justify-center border-[#23A6F0] px-[40px] py-[70px] flex flex-col gap-[35px] bg-[#252B42]">
        <h3 className="w-[64px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-white">
          STANDARD
        </h3>
        <h5 className="w-[160px] h-[48px] font-Montserrat font-bold text-[16px] leading-[24px] flex justify-center items-center text-white tracking-[0.1px]">
          Organize across all apps by hand
        </h5>
        <div className="w-[174px] h-[56px] flex gap-[10px]">
          <h2 className="w-[88px] h-[50px] font-Montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#23A6F0]">
            9.99
          </h2>
          <div className="w-[76px] h-[56px]">
            <h3 className="w-[16px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#23A6F0]">
              $
            </h3>
            <h6 className="w-[76px] h-[24px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#8EC2F2]">
              Per Month
            </h6>
          </div>
        </div>
        <div className="w-[247px] h-[236px] flex flex-col gap-[15px]">
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle2} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
              1GB Cloud storage
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle2} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-white">
              Email and community support
            </h6>
          </div>
        </div>
        {/* button */}
        <button className="w-[246px] h-[52px] rounded-[5px] px-[40px] py-[15px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
          <h6 className="font-Montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">
            Try for free
          </h6>
        </button>
      </div>
    </div>

    {/* card 3 */}
    <div className="md:w-[327px] h-[664px] ">
      <div className="border rounded-[10px] items-center justify-center border-[#23A6F0] px-[40px] py-[50px] flex flex-col gap-[35px] bg-[#FFFFFF]">
        <h3 className="w-[64px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#252B42]">
          PREMIUM
        </h3>
        <h5 className="w-[160px] h-[48px] font-Montserrat font-bold text-[16px] leading-[24px] flex justify-center items-center text-[#737373] tracking-[0.1px]">
          Organize across all apps by hand
        </h5>
        <div className="w-[194px] h-[56px] flex gap-[10px]">
          <h2 className="w-[104px] h-[50px] font-Montserrat font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#23A6F0]">
            19.9
          </h2>
          <div className="w-[76px] h-[56px]">
            <h3 className="w-[16px] h-[32px] font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] text-[#23A6F0]">
              $
            </h3>
            <h6 className="w-[76px] h-[24px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#8EC2F2]">
              Per Month
            </h6>
          </div>
        </div>
        <div className="w-[247px] h-[236px] flex flex-col gap-[15px]">
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              Unlimited product updates
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle2} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              1GB Cloud storage
            </h6>
          </div>
          <div className="w-[247px] h-[32px] flex gap-[10px]">
            <Image src={circle2} alt="circle" />
            <h6 className="w-[205px] font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">
              Email and community support
            </h6>
          </div>
        </div>
        {/* button */}
        <button className="w-[246px] h-[52px] rounded-[5px] px-[40px] py-[15px] flex gap-[10px] items-center justify-center bg-[#23A6F0]">
          <h6 className="font-Montserrat font-bold text-[14px] leading-[22px] tracking-[0.2px] text-white">
            Try for free
          </h6>
        </button>
      </div>
    </div>
  </div>

  )
}

export default PricingCards