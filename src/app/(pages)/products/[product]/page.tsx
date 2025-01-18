// 'use client';

// import React, { useState, useEffect } from 'react';
// import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
// import Image from 'next/image';
// import AnnouncementBar from '@/app/components/HomeComponents/Announcmentbar';
// import Header from '@/app/components/HomeComponents/header';
// import ProductsNavbar from '@/app/components/ProductsComponents/ProductsNavbar';
// import List from '@/app/components/ProductsComponents/List';
// import Bestseller from '@/app/components/ProductsComponents/Bestseller';
// import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards';
// import FooterNavbar from '@/app/components/HomeComponents/FooterNavbar';
// import Footer from '@/app/components/HomeComponents/footer';
// import Link from 'next/link';

// export default function product({ params }: { params: { product: string } }) {
//   const [product, setProduct] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [activeIndex, setActiveIndex] = useState<number>(0);

//   // Fetch product data
//   useEffect(() => {
//     const fetchProduct = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`https://fakestoreapi.com/products/${params.product}`);

//         if (!response.ok) {
//           throw new Error('Failed to fetch product details');
//         }

//         const result = await response.json();
//         setProduct(result);
//       } catch (err: any) {
//         setError(err.message || 'Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [params.product]);

//   // Handlers for navigation
//   const handleNext = (): void => {
//     setActiveIndex((prevIndex) =>
//       product?.images ? (prevIndex + 1) % product.images.length : prevIndex
//     );
//   };

//   const handlePrev = (): void => {
//     setActiveIndex((prevIndex) =>
//       product?.images ? (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1) : prevIndex
//     );
//   };

//   const handleThumbnailClick = (index: number): void => {
//     setActiveIndex(index);
//   };

//   if (loading) {
//     return <div>Loading product details...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   if (!product) {
//     return <div>Product not found.</div>;
//   }

//   return (
//     <main>
//       <AnnouncementBar bgColor="#23856D" />
//       <Header />
//       <ProductsNavbar />

//           <div className="container w-full md:w-[85%] relative mx-auto px-4 py-12 flex flex-col md:flex-row gap-14 font-Montserrat">
//             {/* Left Section - Image Slider */}
//             <div className="flex-1">
//               <div className="relative">
//                 {/* Main Image */}
//                 <Image
//                   src={product.image}
//                   alt={`Product Image `}
//                   className="rounded-lg"
//                   width={600}
//                   height={400}
//                 />
      
//                 {/* Arrows */}
//                 <button
//                   className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
//                   onClick={handlePrev}
//                 >
//                   <FaChevronLeft className="text-gray-700" />
//                 </button>
//                 <button
//                   className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
//                   onClick={handleNext}
//                 >
//                   <FaChevronRight className="text-gray-700" />
//                 </button>
//               </div>
      
//               {/* Thumbnails */}
              
//          {product?.images && product.images.length > 1 && (
//             <div className="flex mt-4 gap-4">
//               {product.images.map((img: string, index: number) => (
//                 <Image
//                   key={index}
//                   src={img}
//                   alt={`Thumbnail ${index + 1}`}
//                   className={`rounded-md cursor-pointer ${
//                     activeIndex === index ? 'ring-2 ring-blue-500' : ''
//                   }`}
//                   width={100}
//                   height={100}
//                   onClick={() => handleThumbnailClick(index)}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
      
//             {/* Right Section - Product Details */}
//             <div className="flex-1">
//               {/* Product Title and Rating */}
//               <h1 className="text-3xl font-semibold text-gray-800 mb-5">{product.title}</h1>
//               <div className="flex items-center mt-2 mb-5">
//                 <span className="flex items-center text-yellow-400 gap-2">
//                   {[...Array(4)].map((_, i) => (
//                     <svg
//                       key={i}
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                       className="h-5 w-5"
//                     >
//                       <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
//                     </svg>
//                   ))}
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     className="h-5 w-5 text-gray-300"
//                   >
//                     <path d="M12 .587l3.668 7.455 8.18 1.19-5.914 5.763 1.396 8.137L12 18.897l-7.33 3.855 1.396-8.137L.152 9.232l8.18-1.19L12 .587z" />
//                   </svg>
//                 </span>
//                 <p className="ml-2 text-sm text-gray-500">(10 Reviews)</p>
//               </div>
      
//               {/* Price and Availability */}
//               <p className="text-xl font-Montserrat font-semibold text-black mt-4">
//               ${product.price}
//               </p>
//               <p className="text-sm text-gray-500 mt-2">
//                 Availability:{" "}
//                 <span className="text-[#23A6F0] font-medium">In Stock</span>
//               </p>
      
//               {/* Description */}
//               <p className="text-gray-700 text-1xl py-6 border-b-2 border-gray w-full md:w-[85%]">
//               {product.description}
//               </p>
      
//               {/* Color Options */}
//               <div className="mt-6">
//                 <div className="flex items-center gap-2 mt-2">
//                   <span className="h-7 w-7 rounded-full bg-blue-500 border border-gray-300 cursor-pointer"></span>
//                   <span className="h-7 w-7 rounded-full bg-green-500 border border-gray-300 cursor-pointer"></span>
//                   <span className="h-7 w-7 rounded-full bg-orange-500 border border-gray-300 cursor-pointer"></span>
//                   <span className="h-7 w-7 rounded-full bg-black border border-gray-300 cursor-pointer"></span>
//                 </div>
//               </div>
      
//               {/* Buttons */}
//               <div className="flex items-center gap-4 mt-14">
//                 <Link href='/cart'>
//                 <button className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
//                   add to cart
//                 </button>
//                 </Link>
//                 <div className="flex items-center gap-4">
//                   <FaHeart className="text-gray-700 text-2xl cursor-pointer" />
//                   <Link href="/cart">
//                   <FaShoppingCart className="text-gray-700 text-2xl cursor-pointer" />
//                   </Link>
//                   <FaEye className="text-gray-700 text-2xl cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           </div>

//       <List />
//       <Bestseller />
//       <BrandLogoCards />
//       <FooterNavbar />
//       <Footer />
//     </main>
//   );
// }








'use client';

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';
import Image from 'next/image';
import AnnouncementBar from '@/app/components/HomeComponents/Announcmentbar';
import Header from '@/app/components/HomeComponents/header';
import ProductsNavbar from '@/app/components/ProductsComponents/ProductsNavbar';
import List from '@/app/components/ProductsComponents/List';
import Bestseller from '@/app/components/ProductsComponents/Bestseller';
import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards';
import FooterNavbar from '@/app/components/HomeComponents/FooterNavbar';
import Footer from '@/app/components/HomeComponents/footer';
import Link from 'next/link';
import { client } from "@/sanity/lib/client";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export default function ProductPage({products,addToCart}:{products:Product[],addToCart:(product:Product)=>void}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await client.fetch<Product[]>(`
          *[_type == "product"] {
            id,
            name,
            description,
            price,
            "imageUrl": image.asset->url
          }
        `);
        setProduct(data[0]); // Assuming you want the first product for this page
      } catch (err: any) {
        setError(err.message || 'Failed to fetch product data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product data available.</div>;
  }

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
              src={product.imageUrl}
              alt="Product Image"
              className="rounded-lg"
              width={600}
              height={400}
            />
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
            >
              <FaChevronRight className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800 mb-5">{product.name}</h1>
          <p className="text-xl font-Montserrat font-semibold text-black mt-4">${product.price}</p>
          <p className="text-sm text-gray-500 mt-2">
            Availability: <span className="text-[#23A6F0] font-medium">In Stock</span>
          </p>
          <p className="text-gray-700 text-1xl py-6 border-b-2 border-gray w-full md:w-[85%]">
            {product.description}
          </p>
          <div className="flex items-center gap-4 mt-14">
            <Link href="/cart">
              <button onClick={()=>addToCart(product)} className="px-6 py-2 bg-[#23A6F0] text-white rounded-md hover:bg-blue-600">
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
