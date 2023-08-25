"use client";
import { useState } from "react";
import React from "react";

const Quantity = () => {
  const [qty, setQty] = useState(1);

  return (
    <div className="center gap-x-3">
      {/* - */}
      <button
        className="center h-7 w-7 rounded-full test-xl font-bold bg-gray-200 border"
        onClick={() => {
          setQty(qty <= 1 ? 1 : qty - 1);
        }}
      >
        -
      </button>
      {/* number */}
      <span>{qty}</span>
      {/* + */}
      <button
        className="center h-7 w-7 rounded-full test-xl font-bold bg-gray-200 border"
        onClick={() => {
          setQty(qty + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
