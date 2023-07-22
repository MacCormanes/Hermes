import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchButton from "./ui/SearchButton";
import Bag from "./ui/Bag";

const Navbar = () => {
  return (
    <div className="bg-orange-50 flex justify-between items-center p-3 text-orange-950">
      <div className="flex items-center space-x-6">
        <a href="" className="w-24 ml-7 items-center">
          <Image
            src="/hermes.svg"
            width={70}
            height={70}
            alt="Hermes Logo"
          ></Image>
        </a>
        <Link className="" href="/">
          Men
        </Link>
        <Link className="" href="/">
          Women
        </Link>
        <Link className="" href="/">
          About
        </Link>
        <Link className="" href="/">
          Men
        </Link>
      </div>

      <div className="flex justify-center items-center">
        <div className="flex">
          <Link className=" px-3" href="/">
            Sign in
          </Link>
          <Image
            className=""
            src="/icons/divider.svg"
            width={20}
            height={20}
            alt="Hermes Logo"
          />
          <Link className=" pl-3 pr-6" href="/">
            Create Account
          </Link>
        </div>

        <select className="select select-sm ">
          <option>USD</option>
          <option>Php</option>
          <option>Gbp</option>
        </select>

        <div>
          <SearchButton />
        </div>

        <div className="flex">
          <Bag />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
