import Image from "next/image";
import React from "react";


const HeroCards = () => {
  const cards = [
    { id: 1, title: "CLOTHS", subtitle: "5 items", image: "/assets/Homepage/card-cover-5-1.jpg" },
    { id: 2, title: "CLOTHS", subtitle: "5 items", image: "/assets/Homepage/card-cover-6-1.jpg" },
    { id: 3, title: "CLOTHS", subtitle: "5 items", image: "/assets/Homepage/card-cover-7.jpg" },
    { id: 4, title: "CLOTHS", subtitle: "5 items", image: "/assets/Homepage/card-cover-7-2.jpg" },
    { id: 5, title: "CLOTHS", subtitle: "5 items", image: "/assets/Homepage/card-cover-7-3.jpg" },
  ];

  return (
    <section className="w-full flex justify-center">

      <div className="md:w-[85%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {cards.map((card) => (
          <div key={card.id} className="relative">
            {/* Image */}
            <Image
              src={card.image}
              alt={card.title}
              width={1000}
              height={1000}
              className="w-[220px] h-[250px] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-xl font-bold">{card.title}</h2>
              <p className="text-sm">{card.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroCards;
