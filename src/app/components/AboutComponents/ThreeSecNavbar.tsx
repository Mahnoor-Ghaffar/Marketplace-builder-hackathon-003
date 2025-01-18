'use client'
import { useState } from "react";

const ThreeSecNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-center h-[90px] mt-16">
            <nav className=" w-[85%] px-4 py-3 bg-gray-100 flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0 mt-11 md:mt-0">
      {/* Section 1: Showing all results */}
      <div className="flex items-center text-gray-700 font-medium">
        Showing all results
      </div>

      {/* Section 2: Views */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-700 font-medium">Views:</span>
        {/* Gallery Icon */}
        <div className="flex items-center justify-center w-10 h-10 border border-black rounded-md">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-700"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <rect x="3" y="3" width="8" height="8" rx="1" />
      <rect x="13" y="3" width="8" height="8" rx="1" />
      <rect x="3" y="13" width="8" height="8" rx="1" />
      <rect x="13" y="13" width="8" height="8" rx="1" />
    </svg>
        </div>
        {/* List Icon */}
        <div className="flex items-center justify-center w-10 h-10 border border-black rounded-md">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-700"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {/* Checkmark for Line 1 */}
      <path d="M3 5l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Line 1 */}
      <line x1="11" y1="5" x2="21" y2="5" strokeLinecap="round" />
      
      {/* Checkmark for Line 2 */}
      <path d="M3 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Line 2 */}
      <line x1="11" y1="12" x2="21" y2="12" strokeLinecap="round" />
      
      {/* Checkmark for Line 3 */}
      <path d="M3 19l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Line 3 */}
      <line x1="11" y1="19" x2="21" y2="19" strokeLinecap="round" />
    </svg>


        </div>
      </div>

      {/* Section 3: Dropdown and Filter */}
      <div className="flex items-center space-x-4">
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center px-4 py-2 border border-blue-300 rounded-md text-gray-700"
          >
            Popularity
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg">
              <button
                className="px-4 py-2 w-full text-left hover:bg-blue-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                Popularity
              </button>
              <button
                className="px-4 py-2 w-full text-left hover:bg-blue-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                Price: Low to High
              </button>
              <button
                className="px-4 py-2 w-full text-left hover:bg-blue-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                Price: High to Low
              </button>
            </div>
          )}
        </div>

        {/* Filter Button */}
        <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-500">
          Filter
        </button>
      </div>
 

    </nav>
    </div>
  );
};

export default ThreeSecNavbar;
