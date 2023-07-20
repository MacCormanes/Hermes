import React from "react";
import Image from "next/image";

const SecondaryHero = () => {
  return (
    <div className="flex h-[600px] flex-col items-center">
      <h1 className="">Unlimited Dreams</h1>
      <p className="">
        A dreamlike journey on a rollercoaster of boldness offers freewheeling
        expressions of materials and know-how.
      </p>
      <div className="">
        <Image
          src="/content/dreams.webp"
          fill
          alt="roller-coaster image"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default SecondaryHero;
