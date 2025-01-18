import AboutNavbar from '@/app/components/AboutComponents/AboutNavbar'
import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards'
import HeroCards from '@/app/components/AboutComponents/HeroCards'
import ThreeSecNavbar from '@/app/components/AboutComponents/ThreeSecNavbar'
import AnnouncementBar from '@/app/components/HomeComponents/Announcmentbar'
import Footer from '@/app/components/HomeComponents/footer'
import FooterNavbar from '@/app/components/HomeComponents/FooterNavbar'
import Header from '@/app/components/HomeComponents/header'
import NavigationButton from '@/app/components/HomeComponents/NavigationButton'
import ProductCard from '@/app/components/HomeComponents/Products-Cards'
import React from 'react'


const Product = () => {
  return (
    <main>
        <AnnouncementBar bgColor='#23856D'/>
        <Header />
        <AboutNavbar />
        <HeroCards />
        <ThreeSecNavbar />
        <BrandLogoCards />
        <FooterNavbar />
        <Footer />
        <ProductCard />
        <NavigationButton />
    </main>
  )
}

export default Product



// import AboutNavbar from '@/app/components/AboutComponents/AboutNavbar'
// import BrandLogoCards from '@/app/components/AboutComponents/BrandLogoCards'
// import HeroCards from '@/app/components/AboutComponents/HeroCards'
// import ThreeSecNavbar from '@/app/components/AboutComponents/ThreeSecNavbar'
// import AnnouncementBar from '@/app/components/HomeComponents/Announcmentbar'
// import Footer from '@/app/components/HomeComponents/footer'
// import FooterNavbar from '@/app/components/HomeComponents/FooterNavbar'
// import Header from '@/app/components/HomeComponents/header'
// import NavigationButton from '@/app/components/HomeComponents/NavigationButton'
// import ProductCard from '@/app/components/HomeComponents/Products-Cards'
// import React from 'react'


// import { client } from "@/sanity/lib/client";
// import Image from "next/image";
// import Link from "next/link";
// import colours from "@/../public/assets/Homepage/product-colors.png";



// // Define an interface for the product data
// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   imageUrl: string;
//   description: string;
// }

// // Fetch data function
// async function getdata(): Promise<Product[]> {
//   const fetchData = await client.fetch<Product[]>(
//     `*[_type == "product"] {
//     id,
//     name,
//     description,
//     price,
//     "Rating": {
//     "Value": rating,
//     "Count": ratingCount
//   },
//   "Tags": tags[],
//   "Sizes": sizes[],
//   "imageUrl": image.asset->url
// }`);
//   return fetchData;
// }

// export default async function Products() {
//   const data = await getdata();

//   return (
//     <main>
//         <AnnouncementBar bgColor='#23856D'/>
//         <Header />
//         <AboutNavbar />
//         <HeroCards />
//         <ThreeSecNavbar />
//         <BrandLogoCards />
//         <FooterNavbar />
//         <Footer />
        


//         <section className="w-full flex justify-center items-center">
//     {/* Cards */}
//     <div className="w-[85%] flex justify-center">
//     <div className="sm:w-[90%] w-[95%]  flex flex-col gap-[80px]">
      

//       {/* Card Section */}
//       <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
//         {/* Product Cards */}
//         {data.map((val, i) => (
//             <div key={i} className="w-[238px] h-[615px] mx-auto">
              
//               <Link href={`products/${val.id}`}>
//               <div className="w-full h-full">
//                 <div className="w-[239px] h-[400px]">
//                   <Image src={val.imageUrl} alt={val.name} className="w-[239px] h-[400px]" 
//                   height={500}
//                   width={500}
//                   />
//                 </div>

//       {/* Product Details */}

//       <div className="w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
//       <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
//         {val.name}
//       </h5>
//       <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//       </p>
//       <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
//         <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
//           ${val.price}
//         </h5>
//         <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
//           50%
//         </h5>
//       </div>
//       <div className="w-[82.2px] h-[16px] flex justify-center">
//         <Image src={colours} alt="colours" />
//       </div>
//     </div>
                
//   </div>
//   </Link>
// </div>
//           )
//         )}
//       </div>
//     </div>
//   </div>
//   </section>


//         <NavigationButton />
//     </main>
//   )
// }


