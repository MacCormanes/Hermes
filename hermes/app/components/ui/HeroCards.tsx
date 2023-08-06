import Image from "next/image";
import React from "react";

const HeroCards = () => {
  return (
    <div className="grid grid-cols-3 grid-row-3 gap-x-1 h-[670px] overflow-hidden scroll-smooth hover:overflow-scroll no-scrollbar">
      <div className="flex flex-col justify-center gap-y-6">
        <div className="relative h-64 shadow-md w-44 rounded-3xl shadow-black/40">
          <Image
            src="/content/men1-copy.jpg"
            fill={true}
            sizes="20vw"
            alt="Clothing"
            className="object-cover border-t-2 rounded-3xl border-t-stone-300"
          />
        </div>
        <div className="relative h-64 shadow-md w-44 rounded-3xl shadow-black/40">
          <Image
            src="/content/men2-copy.jpg"
            fill={true}
            sizes="20vw"
            alt="Clothing"
            className="border-t-2 rounded-3xl object-cover/70 border-t-stone-300"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center my-5">
        <div className="relative h-64 mb-6 shadow-md w-44 gap-y-5 rounded-3xl shadow-black/40">
          <Image
            src="/content/women4-copy.jpg"
            fill={true}
            sizes="20vw"
            alt="Clothing"
            className="object-cover border-t-2 rounded-3xl border-t-stone-300"
          />
        </div>
        <div className="relative h-64 mb-6 shadow-md w-44 gap-y-5 rounded-3xl shadow-black/40">
          <Image
            src="/content/men3-copy.jpg"
            fill={true}
            sizes="20vw"
            alt="Clothing"
            className="object-cover border-t-2 rounded-3xl border-t-stone-300"
          />
        </div>
        <div className="relative h-64 shadow-md w-44 gap-y-5 rounded-3xl shadow-black/40">
          <Image
            src="/content/women3-copy.jpg"
            fill={true}
            sizes="20vw"
            alt="Clothing"
            className="object-cover border-t-2 rounded-3xl border-t-stone-300"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6">
        <div className="relative h-64 shadow-md w-44 rounded-3xl shadow-black/40">
          <Image
            src="/content/women1-copy.jpg"
            fill={true}
            sizes="20vw"
            alt="Clothing"
            className="object-cover border-t-2 rounded-3xl border-t-stone-300"
          />
        </div>
        <div className="relative h-64 shadow-md w-44 rounded-3xl shadow-black/40">
          <Image
            src="/content/women2-copy.jpg"
            fill={true}
            sizes="20vw"
            alt="Clothing"
            className="object-cover border-t-2 rounded-3xl border-t-stone-300"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
