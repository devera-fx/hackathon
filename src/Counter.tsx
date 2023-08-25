"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { cartActions } from "./store/slice/counterSlice";
import { Button } from "@/components/ui/button";
import React from "react";

const CounterView = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state: RootState) => state.cart.items);
  const increment = () => {
    dispatch(cartActions.addToCart);
  };

  const decrement = () => {
    dispatch(cartActions.removeFromCart);
  };
  return (
    <div className="flex gap-6 py-6">
      <Button onClick={increment}>Increment</Button>
      <div>Counter Value {counterValue}</div>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};

export default CounterView;
