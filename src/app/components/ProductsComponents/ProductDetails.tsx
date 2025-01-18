









'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductDetails: React.FC = () => {
  // Static images
  const images = [
    '/assets/Homepage/yellow-sofa.jpg',
    '/assets/Homepage/single-product-1-thumb-1-1.jpg',
  ];

  const thumbnails = [
    '/assets/Homepage/yellow-sofa.jpg',
    '/assets/Homepage/single-product-1-thumb-1-1.jpg',
  ];

  // State for active image
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handlers for navigation
  const handleNext = (): void => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (): void => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <div className="container w-full md:w-[85%] relative mx-auto px-4 py-12 flex flex-col md:flex-row gap-14 font-Montserrat">
      {/* Left Section - Image Slider */}
      <div className="flex-1">
        <div className="relative">
          {/* Main Image */}
          <Image
            src={images[activeIndex]}
            alt={`Product Image ${activeIndex + 1}`}
            className="rounded-lg"
            width={600}
            height={400}
          />

          {/* Arrows */}
          <button
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
            onClick={handleNext}
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex mt-4 gap-4">
          {thumbnails.map((thumbnail, index) => (
            <Image
              key={index}
              src={thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className={`rounded-md cursor-pointer ${
                activeIndex === index ? 'ring-2 ring-blue-500' : ''
              }`}
              width={100}
              height={100}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1">
        {/* Product Title and Rating */}
        <h1 className="text-3xl font-semibold text-gray-800 mb-5">Floating Phone</h1>
        <div className="flex items-center mt-2 mb-5">
          <span className="flex items-center text-yellow-400 gap-2">
            {[...Array(4)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5"
              >
                <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
              </svg>
            ))}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-gray-300"
            >
              <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
            </svg>
          </span>
          <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
        </div>

        {/* Price and Availability */}
        <p className="text-xl font-Montserrat font-semibold text-black mt-4">
          $1,139.33
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Availability:{" "}
          <span className="text-[#23A6F0] font-medium">In Stock</span>
        </p>

        {/* Description */}
        <p className="text-gray-700 text-1xl py-6 border-b-2 border-gray w-full md:w-[85%]">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </p>

        {/* Color Options */}
        <div className="mt-6">
          <div className="flex items-center gap-2 mt-2">
            <span className="h-7 w-7 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
            <span className="h-7 w-7 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
            <span className="h-7 w-7 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
            <span className="h-7 w-7 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-14">
          <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
            Select Options
          </button>
          <div className="flex items-center gap-4">
            <FaHeart className="text-gray-700 text-2xl cursor-pointer" />
            <FaShoppingCart className="text-gray-700 text-2xl cursor-pointer" />
            <FaEye className="text-gray-700 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
