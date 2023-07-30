"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchButton from "./ui/SearchButton";
import Bag from "./ui/Bag";
import { useContext } from "react";
import { UserContext } from "../context/user.context";
import { signOutUser } from "@/firebase/firebase.utils";

const Navbar = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between p-3 bg-orange-50 text-orange-950">
      <div className="flex items-center w-1/3 space-x-6">
        <a href="" className="items-center w-24 ml-7">
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

      <div className="flex items-center justify-end w-2/3">
        {currentUser ? (
          <button className="mr-5" onClick={signOutUser}>
            Sign Out
          </button>
        ) : (
          <Link href="/signIn" className="mr-5">
            Sign In
          </Link>
        )}

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
