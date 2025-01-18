import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

const PricingSecond = () => {
  return (
    <section>
        <div className="flex flex-col items-center justify-center px-4 lg:px-0 space-y-[16px] mt-16">
            <div className="flex flex-col items-center w-full max-w-[625px] space-y-[8px]">
              <h2 className="text-[#252B42] text-[32px] lg:text-[40px] font-montserrat font-bold leading-[40px] lg:leading-[50px] tracking-[0.2px] text-center">
                Pricing
              </h2>
              <p className="text-[#737373] text-[14px] leading-[20px] text-center tracking-[0.2px]">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>
          </div>

          {/* TOGGLE BUTTON */}
          <div className="relative flex flex-row items-center justify-center gap-4 w-full max-w-md mx-auto px-4">
            {/* Monthly Label */}
            <h5 className="text-[16px] font-Montserrat font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">
              Monthly
            </h5>

            {/* Toggle Switch */}
            <div className="relative flex items-center w-[45px] h-[25px] bg-white border border-[#23A6F0] rounded-full">
              <div className="absolute w-[19px] h-[19px] bg-[#D0D0D0] rounded-full left-1 top-[3px] transition-transform transform-gpu"></div>
            </div>

            {/* Yearly Label */}
            <h5 className="text-[16px] font-Montserrat font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">
              Yearly
            </h5>

            {/* Save Button */}
            <button className="flex items-center justify-center p-2 w-28 h-11 bg-[#B3E3FF] rounded-[37px]">
              <h6 className="text-[14px] font-Montserrat font-bold text-[#23A6F0] text-center tracking-[0.2px]">
                Save 25%
              </h6>
            </button>
          </div>
    </section>

  )
}

export default PricingSecond