"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { createUserDocumentFromAuth, getCategoriesAndDocuments, onAuthStateChangedListener, signOutUser } from "@/firebase/firebase.utils";
import CartDropdown from "./ui/CartDropdown";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useEffect } from "react";
import { setCurrentUser } from "../rtk-slices/userSlice";
import { setCategoriesMap } from "../rtk-slices/categoriesSlice";
import { fetchUserCart } from "../rtk-slices/cartSlice";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const cartItems = useAppSelector(state => state.cart.cartItems)
  const dispatch = useAppDispatch()
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user:any) => {
      if (user){
        createUserDocumentFromAuth(user);
        const formattedUser = user && (({accessToken, email}) => ({accessToken,email}))(user)
        dispatch(setCurrentUser(formattedUser))
        router.push('/')
      }
    })
    return unsubscribe
  }, [cartItems]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap)
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);


 useEffect(() => {
  dispatch(fetchUserCart())
  }, [])

  const currentUser = useAppSelector((state) => state.user.currentUser)
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
      <div className="flex items-center justify-end gap-4">
        {
        currentUser ? (
          <button className="" onClick={signOutUser}>
            Sign Out
          </button>
        ) : (
          <Link href="/signin">
            <span className="">Sign In</span>
          </Link>
        )}
        <div className="">
          <CartDropdown />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
