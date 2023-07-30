"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";


const NavbarSession = () => {
    return (
      <div className="flex">
        <Link className=" px-3" href="/signIn">
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
        <div className="flex items-center">
            <Link className="mx-5" href='/' >Sign Out</Link>
        </div>
      </div>
    );
};

export default NavbarSession;
