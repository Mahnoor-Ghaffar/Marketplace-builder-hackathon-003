// 'use client'
// import Image from 'next/image';
// import React from 'react';
// import HeroImg from '@/../public/assets/Homepage/asian-woman-man-with-winter-clothes 1.png';

// type HeroProps = {};

// const ThirdHero: React.FC<HeroProps> = () => {
//     return (
//         <section
//             className="w-full flex flex-col min-h-[630px] justify-center items-center"
//         >

            
//             <div className="container flex flex-wrap items-center mx-auto justify-center
//             md:px-12 md:flex-row">

//                 {/* Image Section */}
//             <div className="lg:w-1/2">
//                     <Image 
//                         src={HeroImg} 
//                         alt="hero section image" 
//                         width={1000} 
//                         height={1000} 
//                         className="w-full h-[330px] sm:w-[550px] sm:h-[630px]"
//                     />
//                 </div>
                
//                 {/* Text Section */}
//                 <div className="mb-14 lg:mb-0 lg:w-1/2 px-5 py-10 sm:px-10">
//                     <h1 className="text-[20px] font-semibold text-black">
//                         summer 2020
//                     </h1>

//                     <p className="mt-[1rem] text-black text-opacity-70 text-[18px]">
//                         We know how large objects will act, We know <br/>
//                         how are objects will act, We know 
//                     </p>

//                     <h2 className="sm:text-[50px] text-[30px] leading-[5rem] uppercase text-black font-bold">
//                     Part of the Neural 
//                     Universe
//                     </h2>

//                     {/* Buttons Section */}
//                     <div className="mt-[2rem] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
//                         {/* Order Now Button */}
//                         <button className="px-8 py-3 sm:px-8 sm:py-3 text-[16px] sm:bg-green-500 bg-blue-500
//                         transition-all duration-200 sm:hover:bg-green-700 hover:bg-blue-700 flex items-center rounded-md space-x-2 text-white">
//                             <span className="font-bold">Order Now</span>
//                         </button>
//                         {/* Read More Button */}
//                         <button className="px-8 py-3 sm:px-8 sm:py-3 text-[16px] border sm:border-green-500 border-blue-500
//                         transition-all duration-200 hover:bg-green-100 flex items-center rounded-md space-x-2 sm:text-green-500 text-blue-500">
//                             <span className="font-bold">Read More</span>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ThirdHero;



'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/cartslice';
import HeroImg from '@/../public/assets/Homepage/asian-woman-man-with-winter-clothes 1.png';

const ThirdHero: React.FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const handleAddToCart = () => {
        const product = {
            _id: 'hero-product-002',
            title: 'Neural Universe Product',
            imageUrl: HeroImg.src, // ✅ Convert StaticImageData to string
            price: 20.99,
            description: 'Explore the future with our Neural Universe collection.',
            tags: ['neural', 'universe', 'future'],
            discountPercentage: 0,
            availableSizes: ['S', 'M', 'L', 'XL'],
            quantity: 1,
        };
        
        dispatch(add(product)); // Add to cart
        router.push('/cart'); // Navigate to cart page
    };
    

    return (
        <section className="w-full flex flex-col min-h-[630px] justify-center items-center">
            <div className="container flex flex-wrap items-center mx-auto justify-center md:px-12 md:flex-row">
                {/* Image Section */}
                <div className="lg:w-1/2">
                    <Image 
                        src={HeroImg} 
                        alt="hero section image" 
                        width={1000} 
                        height={1000} 
                        className="w-full h-[330px] sm:w-[550px] sm:h-[630px]"
                    />
                </div>
                
                {/* Text Section */}
                <div className="mb-14 lg:mb-0 lg:w-1/2 px-5 py-10 sm:px-10">
                    <h1 className="text-[20px] font-semibold text-black">summer 2020</h1>
                    <p className="mt-[1rem] text-black text-opacity-70 text-[18px]">
                        We know how large objects will act, We know <br/>
                        how our objects will act, We know 
                    </p>
                    <h2 className="sm:text-[50px] text-[30px] leading-[5rem] uppercase text-black font-bold">
                        Part of the Neural Universe
                    </h2>

                    {/* Buttons Section */}
                    <div className="mt-[2rem] flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        {/* Order Now Button */}
                        <button 
                            onClick={handleAddToCart}
                            className="px-8 py-3 sm:px-8 sm:py-3 text-[16px] sm:bg-green-500 bg-blue-500
                            transition-all duration-200 sm:hover:bg-green-700 hover:bg-blue-700 flex items-center rounded-md space-x-2 text-white">
                            <span className="font-bold">ADD TO CART</span>
                        </button>
                        {/* Read More Button */}
                        <button className="px-8 py-3 sm:px-8 sm:py-3 text-[16px] border sm:border-green-500 border-blue-500
                        transition-all duration-200 hover:bg-green-100 flex items-center rounded-md space-x-2 sm:text-green-500 text-blue-500">
                            <span className="font-bold">Read More</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdHero;
