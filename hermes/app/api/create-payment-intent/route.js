import { NextResponse } from 'next/server';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
  const total = items.reduce((acc, currentItem) => {
    return acc + (currentItem.price*currentItem.quantity)
  }, 0)

  const discount = 1000
  const taxes = total*0.05
  const shipping = 50
  const grandTotal = total + taxes + shipping - discount

  return grandTotal*100;
};

export async function POST(req) {
  const items = await req.json()
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  return NextResponse.json({
    clientSecret: paymentIntent.client_secret,
  });

};