"use client"

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useAppSelector } from "../store/store";
import PaymentForm2 from './PaymentForm2'
import NoItemInCart from "./ui/NoItemInCart";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Payment() {
  const [clientSecret, setClientSecret] = useState("");
  const cartItems = useAppSelector(state => state.cart.cartItems)
  const jsonBody = JSON.stringify(cartItems)
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
      console.log(error)
    }
  }, []);

  const appearance = {
    theme: 'stripe'
  }

  const options = {
    clientSecret,
    appearance
  }

  return(
    <div>
      {
        clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm2 />
          </Elements>
        ) : <NoItemInCart />
      }
    </div>
  )
}
