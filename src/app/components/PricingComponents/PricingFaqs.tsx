// import React from 'react';

// // Reusable right-angle arrow icon as a React component
// const RightArrowIcon = () => (
//   <svg
//     width="9"
//     height="16"
//     viewBox="0 0 9 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M1 1L8 8L1 15"
//       stroke="#252B42"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const PricingFaqs = () => {
//   return (
//     <div className="lg:block hidden w-full h-[1037px] bg-white">
//       <div className="w-[1056px] h-[1037px] absolute left-[192px] py-[80px] flex flex-col items-center gap-[50px]">
//         {/* FAQs Text */}
//         <div className="w-[1050px] h-[210px] py-[45px] flex flex-col items-center">
//           <div className="w-[651px] h-[120px] flex flex-col items-center">
//             <div className="w-[607px] h-[120px] flex flex-col justify-center items-center gap-[10px]">
//               <h2 className="w-[262px] h-[50px] font-Montserrat font-bold text-[40px] text-[#252B42] leading-[50px] tracking-[0.2px] text-center">
//                 Pricing FAQs
//               </h2>
//               <h4 className="w-[552px] h-[60px] font-Montserrat font-normal text-center text-[20px] text-[#737373] leading-[30px] tracking-[0.2px]">
//                 Problems trying to resolve the conflict between the two major
//                 realms of Classical physics
//               </h4>
//             </div>
//           </div>
//         </div>

//         {/* Answers to FAQs */}
//         <div className="lg:w-[1056px] lg:h-[537px] lg:relative absolute flex flex-col gap-[30px]">
//           {/* Repeated Questions and Answers */}
//           {[...Array(3)].map((_, index) => (
//             <div
//               key={index}
//               className="flex flex-row items-center gap-[30px] w-[1056px] h-[159px]"
//             >
//               {[...Array(2)].map((_, subIndex) => (
//                 <div
//                   key={subIndex}
//                   className="flex flex-col items-start w-[491px] h-[159px]"
//                 >
//                   <div className="flex flex-col items-start p-[25px] w-[491px] h-[159px] rounded-[9px]">
//                     <div className="flex flex-row items-start gap-[20px] w-[437px] h-[109px]">
//                       {/* Right Arrow Icon */}
//                       <div className="w-[9px] h-[16px] flex-none">
//                         <RightArrowIcon />
//                       </div>

//                       <div className="flex flex-col items-start gap-[5px] w-[408px] h-[109px]">
//                         <h5 className="w-[309px] h-[24px] font-Montserrat font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">
//                           The quick fox jumps over the lazy dog
//                         </h5>
//                         <h6 className="w-[408px] h-[80px] font-Montserrat font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">
//                           Met minim Mollie non desert Alamo est sit cliquey
//                           dolor do met sent. RELIT official consequent door
//                           ENIM RELIT Mollie. Excitation venial consequent sent
//                           nostrum met.
//                         </h6>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//           <h1 className="font-Montserrat font-normal flex justify-center items-center text-[20px] leading-[30px] tracking-[0.2px] text-[#737373]">
//             Haven’t got your answer? Contact our support
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PricingFaqs;



'use client'

import React, { useState } from "react";

// Define props for RightArrowIcon
interface RightArrowIconProps {
  isOpen: boolean;
}

// Reusable right-angle arrow icon as a React component
const RightArrowIcon: React.FC<RightArrowIconProps> = ({ isOpen }) => (
  <svg
    width="9"
    height="16"
    viewBox="0 0 9 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
      transition: "transform 0.2s ease",
    }}
  >
    <path
      d="M1 1L8 8L1 15"
      stroke="#252B42"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PricingFaqs: React.FC = () => {
  // Define the state with numerical keys and boolean values
  const [openIndexes, setOpenIndexes] = useState<{ [key: number]: boolean }>({});

  const toggleText = (index: number) => {
    setOpenIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className=" w-full h-auto bg-white px-9">
      <div className="w-full mx-auto py-[80px] flex flex-col items-center gap-[50px]">
        {/* FAQs Text */}
        <div className="w-full text-center">
          <h2 className="font-Montserrat font-bold text-[40px] text-[#252B42] leading-[50px]">
            Pricing FAQs
          </h2>
          <h4 className="font-Montserrat font-normal text-[20px] text-[#737373] leading-[30px]">
            Problems trying to resolve the conflict between the two major realms of Classical physics
          </h4>
        </div>

        {/* Answers to FAQs */}
        <div className="flex flex-col lg:flex-row w-full">

          {/* sec 1 */}
        <div className="lg:w-[900px] lg:h-auto flex flex-col  gap-[30px]">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-start  w-full p-[25px]"
            >
              <div
                className="flex flex-row items-center gap-[20px] w-full cursor-pointer"
                onClick={() => toggleText(index)}
              >
                {/* Right Arrow Icon */}
                <div className="w-[9px] h-[16px]">
                  <RightArrowIcon isOpen={!!openIndexes[index]} />
                </div>

                <h5 className="font-Montserrat font-bold text-[16px] text-[#252B42] leading-[24px]">
                  The quick fox jumps over the lazy dog
                </h5>
              </div>
              <h6 className="font-Montserrat font-normal text-[14px] text-[#737373] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </h6>
              {openIndexes[index] && (
                <h6 className="font-Montserrat font-normal text-[14px] text-[#737373] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent sjhdhd dkdk. 
                </h6>
              )}
            </div>
          ))}
        </div>

        {/* sec 2 */}

        <div className="lg:w-[900px] lg:h-auto flex flex-col  gap-[30px]">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-start  w-full p-[25px]"
            >
              <div
                className="flex flex-row items-center gap-[20px] w-full cursor-pointer"
                onClick={() => toggleText(index)}
              >
                {/* Right Arrow Icon */}
                <div className="w-[9px] h-[16px]">
                  <RightArrowIcon isOpen={!!openIndexes[index]} />
                </div>

                <h5 className="font-Montserrat font-bold text-[16px] text-[#252B42] leading-[24px]">
                  The quick fox jumps over the lazy dog
                </h5>
              </div>
              <h6 className="font-Montserrat font-normal text-[14px] text-[#737373] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </h6>
              {openIndexes[index] && (
                <h6 className="font-Montserrat font-normal text-[14px] text-[#737373] leading-[20px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent sjhdhd dkdk. 
                </h6>
              )}
            </div>
          ))}
        </div>
        
        </div>
        <h1 className="font-Montserrat font-normal text-[20px] text-[#737373] mt-[30px]">
          Haven’t got your answer? Contact our support
        </h1>
      </div>
    </div>
  );
};

export default PricingFaqs;
