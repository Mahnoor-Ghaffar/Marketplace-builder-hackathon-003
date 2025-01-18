// "use client";
// import {
//   FaSearch,
//   FaHeart,
//   FaShoppingCart,
//   FaChevronDown,
//   FaChevronUp,
// } from "react-icons/fa";
// import Link from "next/link";
// import { useState } from "react";


// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false); // Controls mobile menu toggle
//   const [dropdownOpen, setDropdownOpen] = useState(false); // Controls Shop dropdown toggle

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <main className="border-b-2 bg-neutral-100">
//       <div className="w-full flex items-center bg-white h-[70px]">
//         {/* All content */}
//         <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
//           {/* Logo */}
//           <div>
//             <h1 className="sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-blue-800 lg:ml-4 ml-1">
//               Bandage
//             </h1>
//           </div>

//           {/* Links - Animated sliding nav */}
//           <div
//             className={`${
//               menuOpen ? "translate-x-0" : "-translate-x-full"
//             } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
//           >
//             <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-3 xl:gap-x-4 text-white md:text-black">
//               {/* Home Link */}
//               <li className="relative group px-2 py-4 hover:underline underline-offset-2">
//                 <Link href="/">Home</Link>
//               </li>

//               {/* Shop Dropdown */}
//               <li
//                 className="relative group px-2 py-4 flex items-center gap-2 cursor-pointer"
//                 onClick={toggleDropdown}
//               >
//                 <Link href="/Products" className="hover:underline underline-offset-2">
//                   Shop
//                 </Link>
//                 {dropdownOpen ? (
//                   <FaChevronUp className="text-sm" />
//                 ) : (
//                   <FaChevronDown className="text-sm" />
//                 )}
//                 <ul
//                   className={`absolute bg-white text-black shadow-lg mt-2 rounded transition-all duration-300 ${
//                     dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
//                   }`}
//                 >
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <Link href="/Products">Category 1</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <Link href="/Products">Category 2</Link>
//                   </li>
//                   <li className="px-4 py-2 hover:bg-gray-100">
//                     <Link href="/Products">Category 3</Link>
//                   </li>
//                 </ul>
//               </li>

//               {/* Other Links */}
//               <li className="px-2 py-4 hover:underline underline-offset-2">
//                 <Link href="/about-2">About</Link>
//               </li>
//               <li className="px-2 py-4 hover:underline underline-offset-2">
//                 <Link href="/Products">Blog</Link>
//               </li>
//               <li className="px-2 py-4 hover:underline underline-offset-2">
//                 <Link href="/contact">Contact</Link>
//               </li>
//               <li className="px-2 py-4 hover:underline underline-offset-2">
//                 <Link href="/about">Pages</Link>
//               </li>

//               {/* Login/Register - Visible only on smaller screens */}
//               <div className="md:hidden text-white p-4">
//                 <Link href="/login">
//                   <span className="hover:underline cursor-pointer">Login</span>
//                 </Link>
//                 <span className="mx-1">/</span>
//                 <Link href="/register">
//                   <span className="hover:underline cursor-pointer">Register</span>
//                 </Link>
//               </div>
//             </ul>
//           </div>

//           {/* Icons */}
//           <div className="flex gap-x-4 items-center relative text-right">
//             {/* Login/Register - Visible only on medium screens and above */}
//             <div className="hidden md:flex items-center text-blue-500">
//               <Link href="/login">
//                 <span className="hover:underline cursor-pointer">Login</span>
//               </Link>
//               <span className="mx-1">/</span>
//               <Link href="/register">
//                 <span className="hover:underline cursor-pointer">Register</span>
//               </Link>
//             </div>

//             {/* Search, Heart, and Cart Icons */}
//             <FaSearch className="text-2xl text-blue-500 cursor-pointer relative text-right"  />
//             <FaHeart className="text-2xl text-blue-500 cursor-pointer relative text-right" />
//             <FaShoppingCart className="text-2xl text-blue-500 cursor-pointer relative text-right" />

//             {/* Toggle Button for mobile */}
//             <button
//               className="text-black block md:hidden text-3xl z-50"
//               onClick={toggleMenu}
//             >
//               ☰
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default Header;

"use client";
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store"; 

function Header() {
  const item = useSelector((state: RootState) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false); // Controls mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // Controls Shop dropdown toggle
  const [searchOpen, setSearchOpen] = useState(false); // Controls search input visibility
  // const [searchText,setSearchText] = useState("")

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <main className="border-b-2 bg-neutral-100">
      <div className="w-full flex items-center bg-white h-[70px]">
        {/* All content */}
        <div className="sm:w-full md:w-[80%] flex items-center justify-between h-[50px]">
          {/* Logo */}
          <div>
            <h1 className="sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-blue-800 lg:ml-4 ml-1">
              Bandage
            </h1>
          </div>

          {/* Links - Animated sliding nav */}
          <div
            className={`${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[50%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className="flex flex-col md:flex-row md:gap-x-2 lg:gap-x-3 xl:gap-x-4 text-white md:text-black">
              {/* Home Link */}
              <li className="relative group px-2 py-4 hover:underline underline-offset-2">
                <Link href="/">Home</Link>
              </li>

              {/* Shop Dropdown */}
              <li
                className="relative group px-2 py-4 flex items-center gap-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <Link href="/products" className="hover:underline underline-offset-2">
                  Shop
                </Link>
                {dropdownOpen ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                )}
                <ul
                  className={`absolute bg-white text-black shadow-lg mt-2 rounded transition-all duration-300 ${
                    dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/products">Category 1</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/products">Category 2</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="products">Category 3</Link>
                  </li>
                </ul>
              </li>

              {/* Other Links */}
              <li className="px-2 py-4 hover:underline underline-offset-2">
                <Link href="/about-2">About</Link>
              </li>
              <li className="px-2 py-4 hover:underline underline-offset-2">
                <Link href="/Products">Blog</Link>
              </li>
              <li className="px-2 py-4 hover:underline underline-offset-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="px-2 py-4 hover:underline underline-offset-2">
                <Link href="/about">Pages</Link>
              </li>

              {/* Login/Register - Visible only on smaller screens */}
              <div className="md:hidden text-white p-4">
                <Link href="/login">
                  <span className="hover:underline cursor-pointer">Login</span>
                </Link>
                <span className="mx-1">/</span>
                <Link href="/register">
                  <span className="hover:underline cursor-pointer">Register</span>
                </Link>
              </div>
            </ul>
          </div>

          {/* Icons */}
          <div className="flex gap-x-4 items-center relative text-right">
            {/* Login/Register - Visible only on medium screens and above */}
            <div className="hidden md:flex items-center text-blue-500">
              <Link href="/login">
                <span className="hover:underline cursor-pointer">Login</span>
              </Link>
              <span className="mx-1">/</span>
              <Link href="/register">
                <span className="hover:underline cursor-pointer">Register</span>
              </Link>
            </div>

            {/* Search, Heart, and Cart Icons */}
            <FaSearch
              className="text-2xl text-blue-500 cursor-pointer relative text-right"
              onClick={toggleSearch}
            />
            {searchOpen && (
              <input
                type="text"
                
                className="relative top-full mt-2 w-full md:w-auto border border-gray-300 rounded p-2 z-"
                placeholder="Search..."
              />
            )}
            <FaHeart className="text-2xl text-blue-500 cursor-pointer relative text-right" />
            <Link href='/cart'>
            <FaShoppingCart className="text-2xl text-blue-500 cursor-pointer relative text-right" />
            </Link>
            {item.length}
            
            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-3xl z-50"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
