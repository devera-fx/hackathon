"use client";
import getStripePromise from "@/lib/stripe";
import { Button } from "./ui/button";

const products = [
  {
    product: 1,
    name: "Stripe Product",
    price: 400,
    quantity: 3,
  },
  {
    product: 2,
    name: "Stripe Product2",
    price: 40,
    quantity: 2,
  },
  {
    product: 3,
    name: "Stripe Product23",
    price: 4000,
    quantity: 1,
  },
];

const StripeCheckOutButton = () => {
  const handleCheckout = async () => {
    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(products),
    });

    const data = await response.json();
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="py-5">
      <Button
        className="bg-[#212121] text-[#fff] h-[10px] font-semibold"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>
    </div>
  );
};

export default StripeCheckOutButton;