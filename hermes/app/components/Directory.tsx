import Image from "next/image";
import React from "react";
import AnimationOnScroll from "./ui/Animations/AnimationOnScroll";

const Directory = () => {
  return (
    <div className="bg-gradient-to-tr from-slate-300 to-slate-200 px-12 py-[130px]">
      <AnimationOnScroll>
        <h3 className="mb-5 px-12 text-xl font-semibold text-stone-700">
          Categories
        </h3>
        <div className="grid-col-8 relative grid h-[500px] grid-flow-col grid-rows-6 gap-5 px-12">
          <div className="card-container-transition col-span-4 row-span-6 border-t-4 border-t-stone-300 shadow-2xl">
            <Image
              src="/content/women-category2.jpg"
              fill={true}
              alt="womens"
              className="card-transition"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-stone-900 to-stone-400 opacity-70 hover:opacity-40 transition-all duration-700"></div>
            <h1 className="card-text">Womens</h1>
          </div>
          <div className="card-container-transition col-span-4 row-span-3 border-t-4 border-t-stone-300 shadow-2xl">
            <Image
              src="/content/bags-category2.jpg"
              fill={true}
              alt="bags"
              className="card-transition"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-stone-900 to-stone-400 opacity-70 hover:opacity-40 transition-all duration-700"></div>
            <h1 className="card-text">Bags</h1>
          </div>
          <div className="card-container-transition col-span-4 row-span-3 border-t-4 border-t-stone-300 shadow-2xl">
            <Image
              src="/content/hats-category2.jpg"
              fill={true}
              alt="bags"
              className="card-transition object-top"
            />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-stone-900 to-stone-400 opacity-70 hover:opacity-40 transition-all duration-700"></div>
            <h1 className="card-text">Hats</h1>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Directory;
