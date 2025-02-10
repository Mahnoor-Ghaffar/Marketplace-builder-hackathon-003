"use client";

import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react"; // Import useEffect
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ClerkLoaded, SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { BsBasket } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

function Header() {
  const item = useSelector((state: RootState) => state.cart);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { isSignedIn, user } = useUser();
  const orders = [];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleSearch = () => setSearchOpen(!searchOpen);

  // Use useEffect to ensure client-side only logic
  useEffect(() => {
    // Any client-side logic can go here
  }, []);

  return (
    <main className="border-b-2 bg-neutral-100 h-[70px]">
      <div className="w-full flex items-center bg-white h-[70px] justify-center">
        <div className="w-[97%] flex items-center justify-between h-[50px]">
          <div>
            <Link href="/">
              <h1 className="text-2xl md:text-4xl font-bold text-blue-800 ml-2">Bandage</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <div className="relative" onClick={toggleDropdown}>
              <button className="flex items-center gap-2 hover:underline">
                Shop {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {/* Ensure dropdown is consistent on server and client */}
              <ul className={`absolute bg-white shadow-lg mt-2 rounded transition-all duration-300 z-20 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/products">Category 1</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/products">Category 2</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link href="/products">Category 3</Link></li>
              </ul>
            </div>
            <Link href="/about-2" className="hover:underline">About</Link>
            <Link href="/Products" className="hover:underline">Blog</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>

          {/* Icons (Visible on Desktop) */}
          <div className="hidden md:flex gap-x-4 items-center">
            <FaSearch className="text-2xl text-blue-500 cursor-pointer" onClick={toggleSearch} />
            {/* Ensure search input is consistent on server and client */}
            {searchOpen && (
              <input type="text" className="border p-2 rounded" placeholder="Search..." />
            )}
            <FaHeart className="text-2xl text-blue-500 cursor-pointer" />
            <Link href="/cart"><FaShoppingCart className="text-2xl text-blue-500 cursor-pointer" /></Link>
            {item.length}
            <ClerkLoaded>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <SignInButton mode="modal">
                  <FiUser className="text-2xl text-darkBlue cursor-pointer" />
                </SignInButton>
              )}
            </ClerkLoaded>
          </div>

          {/* Hamburger Menu */}
          <button className="md:hidden text-3xl z-50" onClick={toggleMenu}>☰</button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute z-30 top-0 left-0 h-full w-full bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 p-4`}>
        <button className="text-2xl mb-4" onClick={toggleMenu}>✕</button>
       
        {/* Second main div */}
        <div className="w-full flex justify-center flex-col items-center">

          {/* Mobile Icons */}
          <div className="mt-6 flex py-5 w-full justify-between">
            {/* Login */}
            <ClerkLoaded>
              {isSignedIn ? (
                <UserButton />
              ) : (
                <SignInButton mode="modal">
                  <FiUser className="text-2xl text-darkBlue cursor-pointer" />
                </SignInButton>
              )}
            </ClerkLoaded>

            <div className="flex gap-4">
              <FaSearch className="text-2xl text-blue-500 cursor-pointer" onClick={toggleSearch} />
              {searchOpen && <input type="text" className="border p-2 rounded" placeholder="Search..." />}
              <FaHeart className="text-2xl text-blue-500 cursor-pointer" />
              <Link href="/cart" onClick={toggleMenu}><FaShoppingCart className="text-2xl text-blue-500 cursor-pointer" /></Link>
            </div>
          </div> 

          <ul className="flex flex-col gap-y-4 text-lg">
            <Link href="/" onClick={toggleMenu}>Home</Link>
            <button className="flex items-center gap-2" onClick={toggleDropdown}>Shop {dropdownOpen ? <FaChevronUp /> : <FaChevronDown />}</button>
            {dropdownOpen && (
              <ul className="pl-4">
                <li className="py-2"><Link href="/products">Category 1</Link></li>
                <li className="py-2"><Link href="/products">Category 2</Link></li>
                <li className="py-2"><Link href="/products">Category 3</Link></li>
              </ul>
            )}
            <Link href="/about-2" onClick={toggleMenu}>About</Link>
            <Link href="/Products" onClick={toggleMenu}>Blog</Link>
            <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Header;





