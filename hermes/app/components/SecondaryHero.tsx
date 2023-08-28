import React from "react";
import Link from "next/link";
import Image from "next/image";
import carPic from "../../public/content/dreams-copy.jpg";

const SecondaryHero = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-orange-100 to-orange-300 pb-[100px] text-orange-950">
      <div className="relative flex flex-col items-center mt-10">
        <h1 className="text-xl font-medium">Unlimited Dreams</h1>
        <p className="m-4 text-sm text-center">
          Since 1837, the house has risen to the challenge of great fantasies,
          opening the door to boundless creativity.
        </p>
        <Link
          href="/shop"
          className="text-orange-700 transition-all duration-500 text-md hover:scale-105 hover:text-orange-900 hover:underline"
        >
          Make your escape
        </Link>
      </div>

      <div className="relative mx-auto scale-90 border-t-2 border-orange-200 shadow-md rounded-2xl shadow-gray-800">
        <Image
          src={carPic}
          alt="testing"
          className="object-contain rounded-2xl"
        />
      </div>
    </div>
  );
};

export default SecondaryHero;
