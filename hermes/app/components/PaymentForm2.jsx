"use client";

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Button } from "@/components/ui/button";

export default function PaymentForm2() {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        //return_url: "http://localhost:3000/",
        return_url: "https://hermes3.vercel.app/shop/payment-successful",
        receipt_email: email,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {windowSize.width > 1023 ? (
        <form id="payment-form2" onSubmit={handleSubmit}>
          <h1 className="inline mb-4 text-lg font-semibold text-center text-orange-900">
            Paying Securely with Stripe
          </h1>
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
            className="mt-3 bg-orange-950"
          />
          <Button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="w-full mt-5"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </Button>
          {message && <div id="payment-message">{message}</div>}
        </form>
      ) : (
        <form id="payment-form1" onSubmit={handleSubmit}>
          <h1 className="inline mb-4 text-lg font-semibold text-center text-orange-900">
            Paying Securely with Stripe
          </h1>
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
            className="mt-3 bg-orange-950"
          />
          <Button
            disabled={isLoading || !stripe || !elements}
            id="submit"
            className="w-full mt-5"
          >
            <span id="button-text">
              {isLoading ? (
                <div className="spinner" id="spinner"></div>
              ) : (
                "Pay now"
              )}
            </span>
          </Button>
          {message && <div id="payment-message">{message}</div>}
        </form>
      )}
    </div>
  );
}
