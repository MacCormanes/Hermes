import Image from "next/image";
import React from "react";

const HeroCards = () => {
  return (
    <div className="grid grid-cols-3 grid-row-3 gap-x-1 h-[670px] overflow-hidden scroll-smooth hover:overflow-scroll no-scrollbar">
      <div className="flex flex-col justify-center gap-y-5">
        <div className="relative w-44 h-64 shadow-lg rounded-3xl">
          <Image
            src="/content/men1-copy.jpg"
            fill={true}
            alt="Clothing"
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="relative w-44 h-64 shadow-lg rounded-3xl">
          <Image
            src="/content/men2-copy.jpg"
            fill={true}
            alt="Clothing"
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center my-5">
        <div className="relative w-44 h-64 gap-y-5 shadow-lg rounded-3xl mb-5">
          <Image
            src="/content/women4-copy.jpg"
            fill={true}
            alt="Clothing"
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="relative w-44 h-64 gap-y-5 shadow-lg rounded-3xl mb-5">
          <Image
            src="/content/men3-copy.jpg"
            fill={true}
            alt="Clothing"
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="relative w-44 h-64 gap-y-5 shadow-lg rounded-3xl">
          <Image
            src="/content/women3-copy.jpg"
            fill={true}
            alt="Clothing"
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <div className="relative w-44 h-64 shadow-lg rounded-3xl">
          <Image
            src="/content/women1-copy.jpg"
            fill={true}
            alt="Clothing"
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="relative w-44 h-64 shadow-lg rounded-3xl">
          <Image
            src="/content/women2-copy.jpg"
            fill={true}
            alt="Clothing"
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
