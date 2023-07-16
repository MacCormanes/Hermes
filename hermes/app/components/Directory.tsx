import Image from "next/image";
import Link from "next/link";
import React from "react";

const Directory = () => {
  return (
    <div className="bg-gradient-to-t from-zinc-100 to-zinc-200 px-12 py-9">
      <h3 className="px-12 mb-5 text-xl font-semibold text-stone-700">Categories</h3>
      <div className="h-[400px] grid grid-rows-6 grid-col-7 grid-flow-col gap-y-5 gap-x-4 px-12">
        <div className="relative row-span-6 col-span-4 shadow-2xl rounded-3xl">
          <Image
            src="/content/women-category2.jpg"
            fill={true}
            alt="womens"
            className="rounded-3xl object-cover object-top"
          />
        </div>
        <div className="relative row-span-3 col-span-3 shadow-xl rounded-3xl">
          <Image
            src="/content/bags-category2.jpg"
            fill={true}
            alt="bags"
            className="rounded-3xl object-cover"
          />
        </div>
        <div className="relative row-span-3 col-span-3 shadow-xl rounded-3xl">
          <Image
            src="/content/hats-category2.jpg"
            fill={true}
            alt="bags"
            className="rounded-3xl object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default Directory;
