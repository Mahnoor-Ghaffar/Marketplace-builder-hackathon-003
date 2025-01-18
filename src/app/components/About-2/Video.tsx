import Image from 'next/image'
import React from 'react'
import video from '@/../public/assets/Homepage/media bg-cover-02.png'

const Video = () => {
  return (
    <section>
        {/* video section */}
      <div className="relative w-full bg-white h-[764px] max-w-[1440px] mx-auto flex justify-center items-center">
  {/* Video Card */}
  <div className="relative bg-white rounded-[20px] w-[90%] max-w-[989px] h-[540px] flex items-center justify-center">
    {/* Background Image */}
    <div className="absolute inset-0 rounded-[20px] overflow-hidden">
      <Image
        src={video}
        alt="Video Background"
        layout="fill"
        objectFit="cover"
        className="rounded-[20px]"
      />
      {/* Gradient Filter */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-80"></div>
    </div>

    {/* Play Button */}
    <div className="relative z-10">
      <button
        className="w-[92.6px] h-[92.6px] bg-[#23A6F0] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[19px] h-[23px] text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 3l14 9-14 9V3z" />
        </svg>
      </button>
    </div>
  </div>
</div>

    </section>
  )
}

export default Video