"use client";

import { useDispatch } from "react-redux";
import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { cartActions } from "@/store/slice/counterSlice";
import toast from "react-hot-toast";
import { useState } from "react";
import { getUserIdentifier } from "@/lib/cookie";

interface Props {
  product_id: string;
  size: string;
  quantity: number;
}

const AddToCart: React.FC<Props> = ({ product_id, size, quantity }) => {
  const dispatch = useDispatch();
  const [bDisabled, setBDisabled] = useState(false);
  const userId = getUserIdentifier() as string;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  async function addToCart(userId:string,product_id:string,quantity:number) {
    const toastId = toast.loading('adding to cart');
    setBDisabled(true);
    fetch(`${baseUrl}api/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',Authorization: `${userId}`, },
      body: JSON.stringify({
        product_id: product_id,
        quantity: quantity,
      }),
      cache: 'no-store',
    })
      .then((response) => response.json())
      .then((response) => {
        toast.dismiss(toastId);
        if (response[0].product_quantity) {
          dispatch(cartActions.addToCart({ quantity: quantity }));
          toast.success('added to cart');
        } else {
          toast.error('adding to cart failed');
        }
      })
      .catch(() => {
        toast.dismiss(toastId);
        toast.error('adding to cart failed');
      })
      .finally(() => {
        setBDisabled(false);
      });
  }

  const addItem = async () => {
    await addToCart(userId,product_id,quantity)
  };
  return (
    <Button onClick={addItem} disabled={bDisabled}>
      <ShoppingCart className="mx-2" />
      Add to Cart
    </Button>
  );
};

export default AddToCart;
