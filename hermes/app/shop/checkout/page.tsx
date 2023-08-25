"use client";

import Navbar from "@/app/components/Navbar";
import React from "react";
import CheckoutProductCard from "./CheckoutProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import CreditCardForm from "./CreditCardForm";
import { useAppSelector } from "@/app/store/store";

const Checkout = () => {
  const cartItems = useAppSelector(state => state.cart.cartItems)
  const total = useAppSelector(state => state.cart.total)
  const handleSubmit = () => {};
  return (
    <div>
      <Navbar />
      <div className="flex h-[110vh]">
        <div className="w-8/12 bg-gradient-to-br from-orange-200 to-orange-50">
          <div className="flex flex-col justify-center w-7/12 gap-3 mx-auto mt-10">
            <Button className="w-full text-lg font-extrabold text-purple-600 transition-all duration-700 bg-orange-300 hover:text-orange-300 hover:bg-purple-600">Stripe</Button>
            <div className="relative flex items-center justify-center">
              <span className="absolute px-2 bg-transparent">Or</span>
              <Separator className="my-7 h-[2px] bg-orange-300" />
            </div>
            <CreditCardForm />
            <Button className="mt-5">
              Pay $
              {total.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Button>
          </div>
        </div>
        <div className="w-4/12 bg-orange-100">
          <h1 className="p-4 text-lg font-semibold">Your Cart Items</h1>
          <div className="h-[560px] overflow-y-auto border-b-2 pb-4 border-slate-400/30">
            {cartItems.map((product) => (
              <div key={product.id}>
                <CheckoutProductCard product={product} key={product.id} />
              </div>
            ))}
          </div>
          <div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto my-5">
              <Label htmlFor="text" className="text-black/60">
                Discount Code
              </Label>
              <div className="flex items-center w-full max-w-sm mb-4 space-x-2">
                <Input
                  type="text"
                  className="shadow-inner shadow-black/20"
                  placeholder='Type "HERMES" for a discount'
                />
                <Button
                  type="button"
                  className="transition-all duration-500 bg-orange-400 shadow-md text-orange-950 hover:bg-orange-500 shadow-black/30"
                >
                  Apply
                </Button>
              </div>
              <div className="flex flex-row justify-between py-2">
                <span className="text-sm text-black/50">Subtotal</span>
                <span className="text-sm text-orange-900">
                  ${" "}
                  {total.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex flex-row justify-between py-2">
                <span className="text-sm text-black/50">Discount</span>
                <span className="text-sm text-orange-900">
                  ${" "}
                  {total.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex flex-row justify-between py-2">
                <span className="text-sm text-black/50">Taxes</span>
                <span className="text-sm text-orange-900">
                  ${" "}
                  {total.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex flex-row justify-between py-2 mb-3">
                <span className="text-sm text-black/50">Shipping</span>
                <span className="text-sm text-orange-900">
                  ${" "}
                  {total.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <Separator className="mx-1 mb-4 bg-orange-300" />
              <div className="flex flex-row justify-between">
                <span className="text-lg text-orange-950">Total</span>
                <span className="text-lg text-orange-950">
                  ${" "}
                  {total.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
