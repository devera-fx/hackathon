import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "@/store/slice/cartItemsSlice";
import { ToastContainer, toast } from "react-toastify";

const RemoveItem = ({ _id, size }: { _id: string; size: string }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItemFromCart({ productId: _id, size }));
    toast.warn("Item removed");
  };

  return (
    <div>
      <div onClick={handleRemoveItem} className="cursor-pointer">
        <ToastContainer
          position="top-center"
          autoClose={4000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          rtl={false}
          theme="light"
        />
        <AiOutlineDelete size={25} />
      </div>
    </div>
  );
};

export default RemoveItem;
