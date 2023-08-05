import React, { useContext } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartIcon from "./CartIcon";
import Link from "next/link";
import { CartContext } from "@/app/context/cart.context";
import ItemInCart from "./ItemInCart";
import { Button } from "@/components/ui/button";

const CartDropdown = () => {
  const { cartItems, total } = useContext(CartContext);
  const formattedNumber = total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,});
  return (
    <Sheet>
      <SheetTrigger>
        <CartIcon />
      </SheetTrigger>
      <SheetContent className="h-full bg-orange-50">
        <SheetHeader className="flex-row items-baseline justify-between mb-6 text-orange-950">
          <SheetTitle className="w-1/2 text-orange-950">
            <h1 className="text-xl font-bold">Your Cart Items</h1>
            <div className="flex flex-col mt-2 text-sm">
              <h4 className="opacity-60">
                Total Cart Value: 
              </h4>
              <span className="self-center text-lg">$ {formattedNumber}</span>
            </div>
          </SheetTitle>
          <Button className="w-1/3 mx-8 transition-all duration-500 bg-orange-400 shadow-md shadow-slate-800/30 text-orange-950 hover:bg-orange-300">
            <Link href="/shop/checkout">CHECKOUT</Link>
          </Button>
        </SheetHeader>
        <SheetDescription className="flex flex-col h-full pb-10 overflow-y-auto no-scrollbar">
          <div>
            {cartItems.map((item) => (
              <ItemInCart key={item.id} product={item} />
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default CartDropdown;