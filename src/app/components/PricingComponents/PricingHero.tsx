import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const PricingHero = () => {
  return (
    <section>
        <div className="w-full max-w-[870px] mx-auto mt-[32px] lg:mt-[64px] flex flex-col items-center space-y-[16px] px-4">
                <h5 className="text-[#737373] text-[16px] font-bold leading-[24px] tracking-[0.1px] text-center">
                  PRICING
                </h5>
                <h2 className="text-[#252B42] text-[32px] lg:text-[58px] font-bold leading-[40px] lg:leading-[80px] tracking-[0.2px] text-center">
                  Simple Pricing
                </h2>
                <div className="flex items-center space-x-[8px] lg:space-x-[15px]">
                  <a
                    className="text-[#252B42] text-[14px] font-bold leading-[24px] tracking-[0.2px]"
                    href="#"
                  >
                    Home
                  </a>
                  <div className="w-[9px] h-[16px]">
                    <FaAngleRight />
                  </div>
                  <span className="text-[#737373] text-[14px] font-bold leading-[24px] tracking-[0.2px]">
                    Pricing
                  </span>
                </div>
              </div>
    </section>
  )
}

export default PricingHero