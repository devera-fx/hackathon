"use client";
import { Button } from "@/components/ui/button";
import { getUserIdentifier } from "@/lib/cookie";
import { cartActions } from "@/store/slice/counterSlice";
import Link from "next/link";
import { useEffect } from "react";
import { BsBagCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";

export default function Success() {
  const dispatch = useDispatch();

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const userId = getUserIdentifier() as string;


  async function emptyCart(userId: string) {
    fetch(`${baseUrl}api/cart/empty`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${userId}`,
      },
      cache: "no-cache",
    })
      .then((response) => response.json())
      .then((response) => {
        dispatch(cartActions.clearCart());
      });
  }

  useEffect(() => {
    emptyCart(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto flex max-w-[999px] flex-col space-y-24 px-5 sm:px-10 md:px-16 lg:px-20">
      <div className="my-2 flex flex-col items-center justify-center space-y-6 rounded-xl bg-[#d2d1d1] px-5 py-10 sm:my-10">
        <BsBagCheck size={200} color={"green"} />
        <p className="text-center text-4xl font-bold text-[#212121]">
          Order Filled!
        </p>
        <p className="text-center">Receipt Mailed</p>
        <p className="text-center">
          Any Question? please email{" "}
          <span className="whitespace-nowrap text-orange-500">
            dinemarket@example.com
          </span>
        </p>
        <Link className="" href={"/products"}>
          <Button className="cursor-pointer bg-[#212121] px-10 py-2 text-lg font-semibold text-white sm:px-16 lg:px-32">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
