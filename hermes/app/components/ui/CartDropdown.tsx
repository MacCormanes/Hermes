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

const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  return (
      <Sheet>
        <SheetTrigger>
            <CartIcon />
        </SheetTrigger>
        <SheetContent className="w-[400px] h-full bg-orange-50">
          <SheetHeader className="mb-6">
            <SheetTitle>
            Your Cart Items
            </SheetTitle>
          </SheetHeader>
            <SheetDescription>
              <div>
                {cartItems.map(item => <ItemInCart key={item.id} product={item}/>)}
              </div>
              <Link href='/shop'>Go to Checkout</Link>
            </SheetDescription>
        </SheetContent>
      </Sheet>
  );
};

export default CartDropdown;
