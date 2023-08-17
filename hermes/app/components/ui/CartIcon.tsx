import React from "react";
import ShoppingBag from "../../../public/icons/shopping-bag.svg";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const CartIcon = () => {
  const cartCount = useSelector((state: RootState) => state.cart.cartCount)
  return (
    <div className="relative w-[36px] h-[36px] mr-5 flex justify-center">
      <Image src={ShoppingBag} fill sizes="20vw" alt="shopping-bag-icon" />
      <Badge className="flex justify-center mt-3 text-lg bg-transparent text-orange-950">
        {cartCount}
      </Badge>
    </div>
  );
};

export default CartIcon;
