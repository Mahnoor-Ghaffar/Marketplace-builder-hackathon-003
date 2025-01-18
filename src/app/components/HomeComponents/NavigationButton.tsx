// // 'use client'
// // import React, { useState } from "react";

// // export default function NavigationButton() {
// //   const [activeIndex, setActiveIndex] = useState(0);

// //   const steps = ["First", "1", "2", "3", "Next"];

// //   const handleClick = (index:number) => {
// //     setActiveIndex(index);
// //   };

// //   return (
// //     <div className="w-full flex justify-center items-center h-[100px] mt-14">
// //         <div className="flex w-[40%] justify-start border-2 rounded-md border-blue-500">
// //       {steps.map((step, index) => (
// //         <button
// //           key={index}
// //           onClick={() => handleClick(index)}
// //           className={`flex-1 py-3 px-2 text-blue-500 
// //             ${index === 0 ? 'w-[25%]' : 'w-[15%]'} 
// //             ${activeIndex === index ? 'bg-blue-500 text-white border-blue-500' : 'border-blue-500'}
// //             transition duration-300`}
// //         >
// //           {step}
// //         </button>
// //       ))}
// //     </div>
// //     </div>
    
// //   );
// // }



// 'use client'
// import React, { useState } from "react";

// export default function NavigationButton() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const steps = ["First", "1", "2", "3", "Next"];

//   const handleClick = (index: number) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className="w-full flex justify-center items-center h-[100px] mt-14">
//       <div className="flex w-[30%] justify-start border-2 rounded-md border-gray-400 overflow-hidden">
//         {steps.map((step, index) => (
//           <button
//             key={index}
//             onClick={() => handleClick(index)}
//             className={`py-3 text-blue-500 flex items-center justify-center 
//               ${index === 0 || index === steps.length - 1 ? 'w-[30%]' : 'w-[15%]'} 
//               ${activeIndex === index ? 'bg-blue-500 text-white border-blue-500' : 'border-blue-500'}
//               transition duration-300`}
//           >
//             {step}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }


'use client'
import React, { useState } from "react";

export default function NavigationButton() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = ["First", "1", "2", "3", "Next"];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full flex justify-center items-center h-[100px] mt-14">
      <div className="flex md:w-[30%] sm:w-[50%] w-[80%] justify-start border-2 rounded-md border-gray-400 overflow-hidden">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={`py-4 flex items-center justify-center 
              ${index === 0 ? 'w-[28%] text-gray-500' : 'w-[16%] text-blue-500'} 
              ${index === steps.length - 1 ? 'w-[30%]' : ''}
              ${activeIndex === index ? 'bg-blue-500 text-white border-blue-500' : 'border-blue-500'}
              transition duration-300`}
          >
            {step}
          </button>
        ))}
      </div>
    </div>
  );
}
