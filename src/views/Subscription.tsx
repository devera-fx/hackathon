"use client";

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Subscription = () => {
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [email, setEmail] = useState("");

  const handleButtonSubmit = () => {
    if (validateEmail(email)) {
      setEmail("");
      toast.success("Successfully Subscribe!");
    } else {
      toast.error("Error : Email not Valid");
    }
  };

  return (
    <section className="mx-auto">
      <div className="relative">
        {/* News Letter Component */}
        <div className="flex flex-col items-center justify-center py-10">
          {/* Title and description */}
          <h3 className="mb-2 px-5 text-center text-4xl font-bold tracking-normal text-[#212121] sm:mb-4 sm:text-4xl">
            Subscribe Our Newsletter
          </h3>
          <p className="mb-4 px-5 text-center text-base tracking-normal text-[#212121] sm:mb-8">
            Get the latest information and promo offers directly
          </p>
          {/* Input and button */}
          <div className="mx-auto flex w-full max-w-xl flex-col items-center space-x-0 space-y-3 px-1 sm:flex-row sm:space-x-3 sm:space-y-0 sm:px-5">
            <Input
              type="email"
              placeholder="Input email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button
              type="submit"
              onClick={() => {
                handleButtonSubmit();
              }}
              className="inline-block w-auto whitespace-nowrap bg-[#212121] px-5 focus-visible:bg-[#212121]"
            >
              Get Started
            </Button>
            <Toaster position="bottom-center" />
          </div>
        </div>
        {/* News Letter Back-ground */}
        <div className="absolute inset-0 -z-50 flex items-center justify-center">
          <div className="text-[64px] lg:text-[120px] font-extrabold text-[#f2f3f7] sm:text-9xl sm:font-extrabold">
            Newsletter
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscription;
