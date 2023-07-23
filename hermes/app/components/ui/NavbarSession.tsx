"use client"

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";


type User = {
    name?: string | null | undefined;
    image?: string | null | undefined;
} | undefined

type Props = {
    user: User
}

const NavbarSession = ({user}: Props) => {
  if (user) {
    const userImage = user?.image ? (
        <Image 
                src={user?.image}
                width={45}
                height={45}
                alt="Prof-pic"
                priority={true} 
                className="rounded-full"               
            /> 
    ) : null

    return (
        <div className="flex items-center">
            {userImage}
            <Link className="mx-5" href='/' onClick={(e) => {signOut()}}>Sign Out</Link>
        </div>
    );
  }
  if (!user)
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
      </div>
    );
};

export default NavbarSession;
