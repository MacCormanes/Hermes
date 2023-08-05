"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { signOutUser } from "@/firebase/firebase.utils";
import CartDropdown from "./ui/CartDropdown";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between p-3 bg-orange-100 text-orange-950">
      <div className="flex items-center w-1/3 ml-5 space-x-6">
        <a href="/" className="">
          <div className="relative w-[77px] h-[77px]">
            <Image
              src="/hermes.svg"
              fill
              sizes="30vw"
              priority={false}
              alt="Hermes Logo"
            />
          </div>
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
        <Link className="" href="/shop">
          Shop
        </Link>
      </div>

      <div className="flex items-center justify-end w-2/3 gap-7">
        {currentUser ? (
          <button className="mr-5" onClick={signOutUser}>
            Sign Out
          </button>
        ) : (
          <Link href="/signIn" className="mr-5">
            Sign In
          </Link>
        )}
        <div className="flex">
          <CartDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
