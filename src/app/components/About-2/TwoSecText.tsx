import React from 'react'

const TwoSecText = () => {
  return (
    <section>

        {/* Description Section */}
        <div className="relative w-full">
  <div
    className="relative flex flex-col items-center px-4 py-6 w-full max-w-screen-xl h-auto left-1/2 -translate-x-1/2 bg-white"
  >
    <div
      className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-28 w-full max-w-full h-auto"
    >
      {/* Frame 1 */}
      <div
        className="flex flex-col items-start gap-4 w-full lg:w-[394px] h-auto"
      >
        <div
          className="flex flex-col items-start gap-3 w-full h-auto"
        >
          {/* Paragraph */}
          <p
            className="text-[14px] leading-[20px] font-normal tracking-[0.2px] text-[#E74040]"
          >
            Problems trying
          </p>

          {/* Section Title */}
          <h2
            className="w-full text-[24px] leading-[32px] font-bold tracking-[0.1px] text-[#252B42]"
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h2>
        </div>
      </div>

      {/* Column */}
      <div
        className="flex flex-col items-start gap-3 w-full lg:w-[529px] h-auto"
      >
        {/* Paragraph */}
        <p
          className="text-[14px] leading-[20px] font-normal tracking-[0.2px] text-[#737373]"
        >
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default TwoSecText