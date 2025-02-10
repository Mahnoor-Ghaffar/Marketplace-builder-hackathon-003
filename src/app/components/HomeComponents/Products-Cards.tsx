// import Image from "next/image";
// import CardText from "./cards";
// import picture1 from "@/../public/assets/Homepage/product-cover-5.png";
// import pic2 from "@/../public/assets/Homepage/product-cover-5 (1).png";
// import pic3 from "@/../public/assets/Homepage/product-cover-5 (2).png";
// import pic4 from "@/../public/assets/Homepage/product-cover-5 (3).png";
// import pic5 from "@/../public/assets/Homepage/product-cover-5 (4).png";
// import pic6 from "@/../public/assets/Homepage/product-cover-5 (5).png";
// import pic7 from "@/../public/assets/Homepage/product-cover-5 (6).png";
// import pic8 from "@/../public/assets/Homepage/product-cover-5 (7).png";
// import CenterText from "./CenterText";

// export default function ProductCard() {
//   return (
//     <section className="w-full flex justify-center items-center">
//       {/* Cards */}
//       <div className="w-[85%] flex justify-center">
//       <div className="sm:w-[90%] w-[95%]  flex flex-col gap-[80px]">
        

//         {/* Card Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
//           {/* Product Cards */}
//           {[picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map(
//             (pic, index) => (
//               <div key={index} className="w-[238px] h-[615px] mx-auto">
//                 <div className="w-full h-full">
//                   <div className="w-[239px] h-[400px]">
//                     <Image src={pic} alt={`picture${index + 1}`} className="w-[239px] h-[400px]" />
//                   </div>
//                   <CardText />
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// }






import picture1 from "@/../public/assets/Homepage/product-cover-5.png";
import pic2 from "@/../public/assets/Homepage/product-cover-5 (1).png";
import pic3 from "@/../public/assets/Homepage/product-cover-5 (2).png";
import pic4 from "@/../public/assets/Homepage/product-cover-5 (3).png";
import pic5 from "@/../public/assets/Homepage/product-cover-5 (4).png";
import pic6 from "@/../public/assets/Homepage/product-cover-5 (5).png";
import pic7 from "@/../public/assets/Homepage/product-cover-5 (6).png";
import pic8 from "@/../public/assets/Homepage/product-cover-5 (7).png";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import colours from "@/../public/assets/Homepage/product-colors.png";

interface Product {
  _id: string;
  title: string;
  imageUrl: string; 
  price: number;
  tags: string[];
  dicountPercentage?: number; 
  description: string; 
  isNew: boolean;
}

async function getdata(): Promise<Product[]> {
  const fetchData = await client.fetch<Product[]>(
    `*[_type=="product"]{
    _id,
    title,
    "imageUrl": productImage.asset->url,
    price,
    tags,
    dicountPercentage,
    description,
    isNew
}`);
  return fetchData;
}

export default async function ProductCard() {
  const data = await getdata();

  // Fallback images array
  const fallbackImages = [
    picture1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
  ];

  return (
    <section className="w-full flex justify-center items-center">
      {/* Cards */}
      <div className="w-[85%] flex justify-center items-center">
        <div className="sm:w-[90%] w-[95%] flex flex-col gap-[80px]">
          {/* Card Section */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
            {/* Product Cards */}
            {data.map((val, i) => {
              // Fallback to a default image if `val.imageUrl` is null
              const imageUrl = val.imageUrl || fallbackImages[i % fallbackImages.length];
              return (
                <div key={i} className="md:w-[239px] w-[200px] h-[615px] mx-auto">
                  <Link href={`products/${val._id}`}>
                    <div className="w-full h-full">
                      {/* Product Image */}
                      <div className="md:w-[239px] w-[200px] h-[400px]">
                        <Image
                          src={imageUrl}
                          alt={val.title || "Product Image"}
                          className="md:w-[239px] w-[200px] h-[400px]"
                          height={500}
                          width={500}
                        />
                      </div>

                      {/* Product Details */}
                      <div className="w-[200px] sm:w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]">
                        <h5 className="w-full font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
                          {val.title}
                        </h5>
                        <p className="w-full font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
                          <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
                            ${val.price}
                          </h5>
                          {val.dicountPercentage && (
                            <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
                              {val.dicountPercentage}%
                            </h5>
                          )}
                        </div>
                        <div className="w-[82.2px] h-[16px] flex justify-center">
                          <Image src={colours} alt="colours" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}













