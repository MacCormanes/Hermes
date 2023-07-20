import Link from "next/link";
import Image from "next/image";
import React from "react";
import AnimationOnScroll from "./ui/Animations/AnimationOnScroll";

const Directory = () => {
  return (
    <div className="bg-gradient-to-tr from-slate-300 to-slate-200 px-12 py-[130px]">
      <AnimationOnScroll>
        <div className="mb- flex items-baseline justify-between text-stone-800">
          <h3 className="-mb-3 inline pl-[60px] text-2xl font-semibold text-stone-700">
            Categories
          </h3>
          <div className="pr-[60px]">
            <Link href="">
              <p className="inline text-right">Browse all categories </p>
              <Image
                src="/icons/right-arrow.svg"
                width={25}
                height={25}
                alt="right-arrow svg"
                className="inline"
              />
            </Link>
          </div>
        </div>
        <div className="grid-col-8 relative grid h-[500px] grid-flow-col grid-rows-6 gap-4 px-12">
          <div className="card-container-transition col-span-4 row-span-6 shadow-md shadow-slate-600/70">
            <Image
              src="/content/new-arrivals.webp"
              fill={true}
              alt="womens"
              className="card-transition border-t-4 border-t-slate-50"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-stone-900 to-stone-400 opacity-70 transition-all duration-700 hover:opacity-40"></div>
            <h1 className="card-text mb-1 text-2xl">
              New Arrivals
            </h1>
            <h3 className="card-text mb-4 text-sm text-stone-300">Shop Now</h3>
          </div>
          <div className="card-container-transition col-span-4 row-span-3 shadow-md shadow-slate-600/70">
            <Image
              src="/content/women-category2.jpg"
              fill={true}
              alt="bags"
              className="card-transition border-t-4 border-t-slate-50 object-top"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-stone-900 to-stone-400 opacity-70 transition-all duration-700 hover:opacity-40"></div>
            <h1 className="card-text mb-1 text-2xl">Womens</h1>
            <h3 className="card-text mb-4 text-sm text-stone-300">Shop Now</h3>
          </div>
          <div className="card-container-transition col-span-4 row-span-3 shadow-md shadow-slate-600/70">
            <Image
              src="/content/men-category.jpg"
              fill={true}
              alt="bags"
              className="card-transition border-t-4 border-t-slate-50 object-top"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-stone-900 to-stone-400 opacity-70 transition-all duration-700 hover:opacity-40"></div>
            <h1 className="card-text mb-1 text-2xl">Mens</h1>
            <h3 className="card-text mb-4 text-sm text-stone-300">Shop Now</h3>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Directory;
