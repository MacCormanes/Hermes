import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchButton from "./ui/SearchButton";
import Bag from "./ui/Bag";
import NavbarSession from "./ui/NavbarSession";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options)
  return (
    <div className="bg-orange-50 flex justify-between items-center p-3 text-orange-950">
      <div className="flex items-center space-x-6 w-1/3">
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

      <div className="flex justify-end items-center w-2/3">
        <NavbarSession user={session?.user}/>
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
