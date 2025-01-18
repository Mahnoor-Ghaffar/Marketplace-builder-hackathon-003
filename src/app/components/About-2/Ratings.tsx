import React from 'react'

const Ratings = () => {
  return (
    <section>
        {/* Rating Section */}
       <div className="relative flex flex-col items-center py-10 lg:py-20 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-28  max-w-[1100px] w-full">
          {/* Num block 1 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15K</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Happy Customers</h5>
          </div>
          {/* Num block 2 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">150K</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Monthly Visitors</h5>
          </div>
          {/* Num block 3 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">15</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Countries  Worldwide</h5>
          </div>
          {/* Num block 4 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-[58px] font-bold text-[#252B42]">100+</h1>
            <h5 className="text-[16px] font-semibold text-[#737373]">Top Partners</h5>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ratings