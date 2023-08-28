import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const {error} = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`
      }
    })

    if (error) {
      setMessage(error.message)
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement className="w-[700px]"/>
      <Button disabled={isProcessing} id="submit">
        <span id="button-text">
          {isProcessing ? "Processing ..." : "Pay now"}
        </span>
      </Button>

      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
