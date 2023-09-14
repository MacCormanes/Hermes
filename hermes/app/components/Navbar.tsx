"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  auth,
  getCategoriesAndDocuments,
  signOutUser,
} from "@/firebase/firebase.utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import CartDropdown from "./ui/CartDropdown";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect, useState } from "react";
import { setCategoriesMap } from "../rtk-slices/categoriesSlice";
import { fetchUserCart } from "../rtk-slices/cartSlice";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const userData = auth.currentUser?.providerData[0];
  const userAvatar = userData?.photoURL;
  const name = userData?.displayName;

  const inputString = name;
  const words = inputString?.split(" ");
  let firstName = "";
  if (words) {
    firstName = words[0];
  }

  const handleSignOut = async () => {
    await signOutUser();
    window.location.reload();
  };  

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  useEffect(() => {
    dispatch(fetchUserCart());
  }, []);

  useEffect(() => {
    if (currentUser) {
      setisLoggedIn(true);
    } else {
      setisLoggedIn(false);
    }
  }, [currentUser]);

  return (
    <div className="flex items-center justify-between p-0 m-0 bg-orange-200 font-montserrat text-orange-950 h-[80px] min-w-full">
      <Sheet>
        <SheetTrigger className="inline-block ml-5 sm:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-orange-100 font-montserrat">
          <SheetHeader className="text-orange-950">
            <div className="flex flex-col items-center gap-5 text-xl font-medium">
              <Link className="" href="/">
                <span className="">Home</span>
              </Link>
              <Link className="" href="/shop/mens">
                <span className="">Men</span>
              </Link>
              <Link className="" href="/shop/womens">
                <span className="">Women</span>
              </Link>
              <Link className="" href="/">
                <span className="">About</span>
              </Link>
              <Link className="" href="/shop">
                <span className="">Shop</span>
              </Link>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="flex items-center ml-20 space-x-6 sm:ml-5">
        <div className="relative w-[77px] h-[80px]">
          <Link href="/" className="">
            <Image
              src="/hermes.svg"
              fill
              sizes="30vw"
              priority={true}
              alt="Hermes Logo"
              placeholder="blur"
              blurDataURL="/hermes.svg"
            />
          </Link>
        </div>
        <Link className="hidden sm:block" href="/shop/mens">
          <span className="">Men</span>
        </Link>
        <Link className="hidden sm:block" href="/shop/womens">
          <span className="">Women</span>
        </Link>
        <Link className="hidden sm:block" href="/payment">
          <span className="">About</span>
        </Link>
        <Link className="hidden sm:block" href="/shop">
          <span className="">Shop</span>
        </Link>
      </div>
      <div className="flex items-center justify-end gap-1">
        <div className="">
          <CartDropdown />
        </div>
        {isLoggedIn ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                  <AvatarImage
                    src={`${userAvatar}`}
                    className="mr-10 rounded-full w-11 h-11"
                  />
                  <AvatarFallback className="bg-white rounded-full w-11 h-11"></AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-orange-100">
                <DropdownMenuLabel className="text-base text-orange-900">
                  {firstName}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="border-hidden hover:border-hidden">
                  <Link
                    href={"/shop/checkout"}
                    className="pt-2 pb-1 text-sm transition-all duration-500 text-orange-950 hover:text-orange-700 hover:border-hidden border-hidden"
                  >
                    Go To Checkout
                  </Link>
                </DropdownMenuItem>
                <button
                  type="button"
                  className="py-1 text-sm transition-all duration-500 text-orange-950 hover:text-orange-700"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Link href="/signIn">
            <span className="mr-10">Sign In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
