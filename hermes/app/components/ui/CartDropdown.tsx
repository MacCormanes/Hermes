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
import { Button } from "@/components/ui/button";
import ItemInCartDropdown from "./ItemInCartDropdown";
import { useAppSelector } from "@/app/store/store";
import { useEffect } from "react";

const CartDropdown = () => {
  const cartItems = useAppSelector(state => state.cart.cartItems)
  const total = useAppSelector(state => state.cart.total)
  const formattedNumber = total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2,});
  const categoriesMap = useAppSelector(state => state.categories.categoriesMap)
  const mensArray = categoriesMap.mens
  const womensArray = categoriesMap.womens
  
  useEffect(() => {
  }, [cartItems])

  return (
    <Sheet>
      <SheetTrigger>
        <CartIcon />
      </SheetTrigger>
      <SheetContent className="bg-orange-100 font-montserrat">
        <SheetHeader className="flex-row items-baseline justify-between mb-6 text-orange-950">
          <SheetTitle className="w-1/2 text-orange-950">
            <h1 className="text-xl font-bold whitespace-nowrap">Your Cart Items</h1>
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
        <SheetDescription className="flex flex-col h-[800px] pb-10 overflow-y-auto no-scrollbar">
          <div> 
            {cartItems.length > 0 && cartItems.map((item) => (
              <ItemInCartDropdown key={item.id} product={item} mens={mensArray} womens={womensArray}/>
            ))}
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default CartDropdown;
