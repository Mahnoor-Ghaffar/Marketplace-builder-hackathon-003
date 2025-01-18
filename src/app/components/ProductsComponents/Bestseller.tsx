// import pic1 from "@/../public/assets/Besteller/product-cover-5 (6).png";
// import pic3 from "@/../public/assets/Besteller/product-cover-5 (1).png";
// import pic2 from "@/../public/assets/Besteller/product-cover-5 (2).png";
// import pic4 from "@/../public/assets/Besteller/product-cover-5 (3).png";
// import pic5 from "@/../public/assets/Besteller/product-cover-5 (4).png";
// import pic6 from "@/../public/assets/Besteller/product-cover-5 (5).png";
// import pic7 from "@/../public/assets/Besteller/product-cover-5 (7).png";
// import pic8 from "@/../public/assets/Besteller/product-cover-5.png";
// import cm1 from "@/../public/assets/Homepage/fa-brands-1-3.png";
// import cm2 from "@/../public/assets/Homepage/fa-brands-2-2.png";
// import cm3 from "@/../public/assets/Homepage/fa-brands-3-3.png";
// import cm4 from "@/../public/assets/Homepage/fa-brands-4-2.png";
// import cm5 from "@/../public/assets/Homepage/fa-brands-5-3.png";
// import cm6 from "@/../public/assets/Homepage/fa-brands-6.png";

// export default function Bestseller() {
//   // Type the renderCard function
//   const renderCard = (imageSrc: StaticImageData) => (
//     <div className="w-[238px] lg:w-[238px] sm:w-[200px] h-[200px] mt-[10px] flex flex-col bg-[#FFFFFF] shadow-lg">
//       <div className="flex-grow">
//         <Image src={imageSrc} alt="Product" className="w-[200px] h-[200px] object-cover" />
//       </div>
//       <div className="w-full h-full px-[25px] py-[25px] flex flex-col gap-[10px]">
//         <h5 className="font-Montserrat font-bold text-[24px] tracking-[0.1px] text-[#252B42]">Graphic Design</h5>
//         <h5 className="font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">English Department</h5>
//         <div className="flex gap-[5px]">
//           <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] flex items-center text-[#BDBDBD]">$16.48</h5>
//           <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">$6.48</h5>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className=" bg-[#FAFAFA] w-full">
//       <div className="max-w-[1440px] mx-auto">
//         <div className="max-w-[1124px] py-[48px] flex flex-col gap-[24px] bg-red-500 h-[900px]">
//           {/* Heading */}
//           <div className="flex gap-[10px]">
//             <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] tracking-[0.2px] text-[#252B42]">
//               BESTSELLER PRODUCTS
//             </h3>
//           </div>
//           {/* Line under the heading */}
//           <div className="w-full h-[2px] bg-[#dbdbdb]"></div>
//           {/* Products Section */}
//           <div className="flex flex-row gap-[30px] flex-wrap justify-center">
//             {renderCard(pic1)}
//             {renderCard(pic2)}
//             {renderCard(pic3)}
//             {renderCard(pic4)}
//             {renderCard(pic5)}
//             {renderCard(pic6)}
//             {renderCard(pic7)}
//             {renderCard(pic8)}
//           </div>
//         </div>
//       </div>
//       {/* Companies */}
//       <div className="w-full bg-[#FAFAFA] py-8">
//         <div className="max-w-[1124px] mx-auto">
//           {/* Logo Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
//             {[cm1, cm2, cm3, cm4, cm5, cm6].map((logo, index) => (
//               <div key={index} className="flex justify-center">
//                 <Image src={logo} alt={`Client ${index + 1} Logo`} className="h-12 w-auto" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image, { StaticImageData } from "next/image";
import pic1 from "@/../public/assets/Besteller/product-cover-5 (6).png";
import pic2 from "@/../public/assets/Besteller/product-cover-5 (2).png";
import pic3 from "@/../public/assets/Besteller/product-cover-5 (1).png";
import pic4 from "@/../public/assets/Besteller/product-cover-5 (3).png";
import pic5 from "@/../public/assets/Besteller/product-cover-5 (4).png";
import pic6 from "@/../public/assets/Besteller/product-cover-5 (5).png";
import pic7 from "@/../public/assets/Besteller/product-cover-5 (7).png";
import pic8 from "@/../public/assets/Besteller/product-cover-5.png";

// Reusable Card Component
const CustomCard = ({ imageSrc }: { imageSrc: StaticImageData }) => {
  return (
    <div className="md:w-[250px] sm:w-[200px] w-full h-[400px] bg-white shadow-md flex flex-col">
      {/* Image Section */}
      <div className="w-full h-[300px] relative">
        <Image
          src={imageSrc}
          alt="Product Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/* Text Section */}
      <div className="flex-grow p-4 flex flex-col gap-2">
        <h5 className="font-Montserrat font-bold text-[24px] tracking-[0.1px] text-[#252B42]">
          Graphic Design
        </h5>
        <h5 className="font-Montserrat font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]">
          English Department
        </h5>
        <div className="flex gap-2 mt-auto">
          <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#BDBDBD] line-through">
            $16.48
          </h5>
          <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#23856D]">
            $6.48
          </h5>
        </div>
      </div>
    </div>
  );
};

// Bestseller Component
export default function Bestseller() {
  const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

  return (
    <div className="flex w-full justify-center items-center lg:mt-20 md:mt-48 mt-[600px]">
    <div className="bg-[#FAFAFA] w-full py-8 md:w-[85%]">
      <div className="max-w-[1440px] mx-auto px-4">
         {/* Heading */}
           <div className="flex gap-[10px]">
             <h3 className="font-Montserrat font-bold md:text-[24px] text-[20px] leading-[32px] tracking-[0.2px] text-[#252B42] mb-7">
               BESTSELLER PRODUCTS
             </h3>
           </div>
           {/* Line under the heading */}
           <div className="w-full h-[2px] bg-[#dbdbdb] mb-7"></div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {images.map((image, index) => (
            <CustomCard key={index} imageSrc={image} />
          ))}
        </div>
      </div>
    </div>
    </div>

  );
}
