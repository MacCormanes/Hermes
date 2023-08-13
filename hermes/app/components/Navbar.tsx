"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { signOutUser } from "@/firebase/firebase.utils";
import CartDropdown from "./ui/CartDropdown";

const Navbar = () => {
  
  const { currentUser } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between p-0 m-0 bg-orange-200 font-montserrat text-orange-950">
      <div className="flex items-center w-1/3 ml-5 space-x-6">
        <Link href="/" className="">
          <div className="relative w-[77px] h-[80px]">
            <Image
              src="/hermes.svg"
              fill
              sizes="30vw"
              priority={true}
              alt="Hermes Logo"
            />
          </div>
        </Link>
        <Link className="" href="/shop/mens">
          Men
        </Link>
        <Link className="" href="/shop/womens">
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
          <Link href="/signIn">
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
