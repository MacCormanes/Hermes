import React from "react";
import HeroCards from "./ui/HeroCards";
import AnimateOnScroll from "./ui/Animations/AnimationOnScroll";

const PrimaryHero = () => {
  return (
    <div className="lg:flex max-w-7xl place-self-center">
      <section className="flex flex-col justify-center text-center pb-36 lg:text-left sm:px-16 pt-36 lg:w-1/2">
        <h1 className="mb-3 text-4xl font-medium tracking-widest text-transparent md:text-5xl md:font-medium bg-gradient-to-tl from-orange-400 to-orange-900 bg-clip-text ">
          Your style,
        </h1>
        <h1 className="mb-5 text-4xl font-medium tracking-wide text-transparent md:text-5xl md:font-medium bg-gradient-to-tl from-orange-400 to-orange-900 bg-clip-text">
          Your personality,
        </h1>
        <p className="text-base font-light text-orange-900 md:text-lg">
          What you wear says a lot about
        </p>
        <p className="text-base font-light text-orange-900 md:text-lg">
          who you are. Wear it proud!
        </p>
      </section>
      <div className="hidden px-4 sm:block">
        <AnimateOnScroll>
          <HeroCards />
        </AnimateOnScroll>
      </div>
    </div>
  );
};

export default PrimaryHero;
