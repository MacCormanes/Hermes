import { NextResponse } from 'next/server';
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const calculateOrderAmount = (items) => {
  const totalOrderAmount = items.reduce((acc, currentItem) => {
    return acc + (currentItem.price*currentItem.quantity)
  }, 0)
  return totalOrderAmount*100;
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