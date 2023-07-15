import Image from "next/image";
import React from "react";

const HeroCards = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-6 gap-5">
      <div className="relative w-44 h-64 overflow-hidden">
        <Image
          src="/content/men1-copy.jpg"
          layout="fill"
          alt="Clothing"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="relative w-44 h-64 overflow-hidden">
        <Image
          src="/content/women3-copy.jpg"
          layout="fill"
          alt="Clothing"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="relative w-44 h-64 overflow-hidden">
        <Image
          src="/content/men3-copy.jpg"
          layout="fill"
          alt="Clothing"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="relative w-44 h-64 overflow-hidden">
        <Image
          src="/content/women1-copy.jpg"
          layout="fill"
          alt="Clothing"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="relative w-44 h-64 overflow-hidden">
        <Image
          src="/content/women2-copy.jpg"
          layout="fill"
          alt="Clothing"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="relative w-44 h-64 overflow-hidden">
        <Image
          src="/content/men2-copy.jpg"
          layout="fill"
          alt="Clothing"
          className="rounded-3xl object-cover"
        />
      </div>
      <div className="relative w-44 h-64 overflow-hidden">
        
      </div>
      <div className="relative w-44 h-64 overflow-hidden">
        <Image
          src="/content/women4-copy.jpg"
          layout="fill"
          alt="Clothing"
          className="rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};

export default HeroCards;
