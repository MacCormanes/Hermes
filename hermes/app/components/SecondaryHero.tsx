import React from "react";
import Link from "next/link";
import Image from "next/image";
import carPic from "../../public/content/dreams-copy.jpg";

const SecondaryHero = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-orange-100 to-orange-300 pb-[100px] text-orange-950">
      <div className="relative mt-10 flex w-[500px] flex-col  items-center">
        <h1 className="text-xl font-medium">Unlimited Dreams</h1>
        <p className="m-4 min-w-[500px] text-center text-sm">
          Since 1837, the house has risen to the challenge of great fantasies,
          opening the door to boundless creativity.
        </p>
        <Link
          href=""
          className="text-sm text-orange-700 transition-all hover:scale-105 hover:text-orange-900 hover:underline duration-500"
        >
          Make your escape
        </Link>
      </div>

      <div className="relative mx-auto scale-90 rounded-2xl border-t-2 border-orange-200 shadow-md shadow-gray-800">
        <Image
          src={carPic}
          alt="testing"
          className="rounded-2xl object-contain"
        />
      </div>
    </div>
  );
};

export default SecondaryHero;
