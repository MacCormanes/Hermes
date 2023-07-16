import Image from "next/image";
import React from "react";
import AnimationOnScroll from "./ui/Animations/AnimationOnScroll";

const Directory = () => {
  return (
    <div className="bg-gradient-to-t from-zinc-100 to-zinc-200 px-12 py-9">
      <AnimationOnScroll>
        <h3 className="mb-5 px-12 text-xl font-semibold text-stone-700">
          Categories
        </h3>
        <div className="grid-col-8 relative grid h-[500px] grid-flow-col grid-rows-6 gap-1 px-12">
          <div className="card-container-transition col-span-4 row-span-6">
            <Image
              src="/content/women-category2.jpg"
              fill={true}
              alt="womens"
              className="card-transition"
            />

            <h1 className="card-text">Womens</h1>
          </div>
          <div className="card-container-transition col-span-4 row-span-3">
            <Image
              src="/content/bags-category2.jpg"
              fill={true}
              alt="bags"
              className="card-transition"
            />
            <h1 className="card-text">Womens</h1>
          </div>
          <div className="card-container-transition col-span-4 row-span-3">
            <Image
              src="/content/hats-category2.jpg"
              fill={true}
              alt="bags"
              className="card-transition"
            />
            <h1 className="card-text">Womens</h1>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Directory;
