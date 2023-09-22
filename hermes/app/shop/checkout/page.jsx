"use client";

import React, { useEffect, useState } from "react";
import CheckoutProductCard from "./CheckoutProductCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useAppSelector } from "@/app/store/store";
import PaymentForm2 from "@/app/components/PaymentForm2";
import NoItemInCart from "@/app/components/ui/NoItemInCart";
import CreditCardForm from "./CreditCardForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");
  const customerDetailsPage = useAppSelector(state => state.cart.customerDetailsPage)
  const total = useAppSelector((state) => state.cart.total);
  const cartItems = useAppSelector((state) => state.cart.cartItems);
  const jsonBody = JSON.stringify(cartItems);
  const discount = 1000
  const taxes = total*0.05
  const shipping = 50
  const grandTotal = total + taxes + shipping - discount

  const categoriesMap = useAppSelector(state => state.categories.categoriesMap)
  const mensArray = categoriesMap.mens
  const womensArray = categoriesMap.womens

  useEffect(() => {
    try {
      fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonBody,
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const appearance = {
    theme: "night",
    variables: {
      fontFamily: "Sohne, system-ui, sans-serif",
      fontWeightNormal: "500",
      borderRadius: "8px",
      colorBackground: "#fed7aa",
      colorPrimary: "#fdba74",
      colorPrimaryText: "#431407",
      colorText: "#7c2d12",
      colorTextSecondary: "#7c2d12",
      colorTextPlaceholder: "#b45309",
      colorIconTab: "#78350f",
      colorLogo: "dark",
      colorDanger: '#ef4444',
      spacingUnit: '4px',
      spacingGridRow: '15px'
    },
    rules: {
      ".Input, .Block": {
        backgroundColor: "transparent",
        border: "1.5px solid var(--colorPrimary)",
      },
    },
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="">
      <div className="flex h-[100vh]">
        <div className="w-full bg-gradient-to-br from-orange-200 to-orange-50">
          <div className="">
            <div className="w-[32rem]">
              {customerDetailsPage ? (
                <div className="flex flex-col">
                  <CreditCardForm /> 
                </div>
              )
              : <></>}
              {clientSecret && !customerDetailsPage && total!==0 ? (
                <Elements options={options} stripe={stripePromise}>
                    <PaymentForm2 />
                </Elements>
              ) : (
                <></>
              )}
              {total === 0 ? <NoItemInCart /> : <></>}
            </div>
          </div>
        </div>
        <div className="w-full bg-orange-100 ">
          <h1 className="p-4 text-lg font-semibold">Your Cart Items</h1>
          <div id="checkout-cart-scroll" className="pb-4 overflow-y-scroll border-b-2 border-slate-400/30">
            {cartItems.map((product) => (
              <div key={product.id}>
                <CheckoutProductCard product={product} key={product.id} mens={mensArray} womens={womensArray} />
              </div>
            ))}
          </div>
          <div>
            <div className="grid w-full max-w-sm items-center gap-1.5 mx-auto my-5">
              <Label htmlFor="text" className="mb-1 text-black/60">
                Discount Code
              </Label>
              <div className="flex items-center w-full max-w-sm gap-2 mb-4 space-x-3">
                <Input
                  type="text"
                  className="shadow-inner shadow-black/20"
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
                  {discount.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex flex-row justify-between py-2">
                <span className="text-sm text-black/50">Taxes</span>
                <span className="text-sm text-orange-900">
                  ${" "}
                  {taxes.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <div className="flex flex-row justify-between py-2 mb-1">
                <span className="text-sm text-black/50">Shipping</span>
                <span className="text-sm text-orange-900">
                  ${" "}
                  {shipping.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              </div>
              <Separator className="mb-4" />
              <div className="flex flex-row justify-between">
                <span className="text-lg text-orange-950">Total</span>
                <span className="text-lg text-orange-950">
                  ${" "}
                  {grandTotal.toLocaleString(undefined, {
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
