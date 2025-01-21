'use client';

import AnnouncementBar from '@/app/components/HomeComponents/Announcmentbar';
import Header from '@/app/components/HomeComponents/header';
import ProductsNavbar from '@/app/components/ProductsComponents/ProductsNavbar';
import List from '@/app/components/ProductsComponents/List';
import Bestseller from '@/app/components/ProductsComponents/Bestseller';
import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards';
import FooterNavbar from '@/app/components/HomeComponents/FooterNavbar';
import Footer from '@/app/components/HomeComponents/footer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use this instead of useRouter
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import picture1 from "@/../public/assets/Homepage/product-cover-5.png";
import pic2 from "@/../public/assets/Homepage/product-cover-5 (1).png";
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {add} from '../../../redux/cartslice'

const fallbackImages = [picture1, pic2];

interface Product {
  _id: string;
  title: string;
  imageUrl: string | null;
  price: number;
  description: string;
  tags: string[];
  dicountPercentage?: number;
  availableSizes?: string[];
}

export default function ProductDetailPage() {
  const { slug } = useParams(); // Get dynamic route parameter
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [showFullDescription, setShowFullDescription] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleAdd = (product: Product) => {
    dispatch(add(product));
  };



  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        const data = await client.fetch<Product[]>(`
          *[_type == "product" && _id == "${slug}"]{
            _id,
            title,
            "imageUrl": productImage.asset->url,
            price,
            description,
            tags,
            dicountPercentage,
            availableSizes
          }
        `);

        if (data.length > 0) {
          setProduct(data[0]);
          setSelectedSize(data[0].availableSizes ? data[0].availableSizes[0] : null);
        } else {
          setError('Product not found');
        }
      } catch (err) {
        setError('Failed to fetch product data');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % fallbackImages.length);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + fallbackImages.length) % fallbackImages.length);
  };

  const handleQuantityChange = (increment: boolean) => {
    setQuantity((prev) => (increment ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product data found.</div>;

  const displayedImage = product.imageUrl || fallbackImages[currentImageIndex].src;

  return (
    <main>
      <AnnouncementBar bgColor="#23856D" />
      <Header />
      <ProductsNavbar />

      <div className="container w-full md:w-[85%] relative mx-auto px-4 py-12 flex flex-col md:flex-row gap-14 font-Montserrat">
        {/* Left Section - Image Slider */}
        <div className="flex-1">
          <div className="relative">
            <Image
              src={displayedImage}
              alt="Product Image"
              className="rounded-lg h-[700px]"
              width={600}
              height={400}
            />
            <button
              onClick={handlePreviousImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800 mb-5">{product.title}</h1>
          <p className="text-xl font-Montserrat font-semibold text-black mt-4">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">
            Availability: <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>

          {/* Size Selector */}
          {product.availableSizes && product.availableSizes.length > 0 && (
            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2">Size:</label>
              <select
                className="border rounded-md p-2 w-40"
                value={selectedSize || ''}
                onChange={(e) => setSelectedSize(e.target.value)}
              >
                {product.availableSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="mt-6 flex items-center">
            <label className="block text-gray-700 font-medium mr-4">Quantity:</label>
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => handleQuantityChange(false)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-6">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(true)}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <p className="text-gray-700 text-1xl py-6 border-b-2 border-gray w-full md:w-[85%]">
            {showFullDescription
              ? product.description
              : truncateText(product.description, 35)}
          </p>
          <button
            onClick={() => setShowFullDescription(!showFullDescription)}
            className="text-[#23A6F0] mt-2 underline"
          >
            {showFullDescription ? 'Show Less' : 'Show More'}
          </button>

          {/* Add to Cart */}
          <div className="flex items-center gap-4 mt-14">
            <Link href="/cart">
              <button  onClick={()=>handleAdd(product)}  className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
                Add to cart
              </button>
            </Link>
            <FaHeart className="text-gray-700 text-2xl cursor-pointer" />
            <Link href="/cart">
              <FaShoppingCart className="text-gray-700 text-2xl cursor-pointer" />
            </Link>
            <FaEye className="text-gray-700 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      <List />
      <Bestseller />
      <BrandLogoCards />
      <FooterNavbar />
      <Footer />
    </main>
  );
}
