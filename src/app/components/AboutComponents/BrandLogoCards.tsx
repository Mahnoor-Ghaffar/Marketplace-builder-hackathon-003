import Image from "next/image";
import React from "react";

const BrandLogoCards = () => {
  const cards = [
    { id: 1, image: "/assets/Homepage/fa-brands-1-3.png", width: "w-[155px]", height: "h-[90px]" },
    { id: 2, image: "/assets/Homepage/fa-brands-2-2.png", width: "w-[110px]", height: "h-[85px]" },
    { id: 3, image: "/assets/Homepage/fa-brands-3-3.png", width: "w-[150px]", height: "h-[100px]" },
    { id: 4, image: "/assets/Homepage/fa-brands-4-2.png", width: "w-[120px]", height: "h-[80px]" },
    { id: 5, image: "/assets/Homepage/fa-brands-5-3.png", width: "w-[110px]", height: "h-[100px]" },
    { id: 6, image: "/assets/Homepage/fa-brands-6.png", width: "w-[110px]", height: "h-[120px]" },
  ];

  return (
    <section className="w-full flex justify-center mt-28 md:mt-24 mb-36
    
     ">
      <div className="md:w-[85%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 w-[200px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`relative flex items-center justify-center `}
          >
            {/* Image */}
            <Image
              src={card.image}
              alt={`Card ${card.id}`}
              width={1000}
              height={1000}
              className={`${card.width} ${card.height}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandLogoCards;
