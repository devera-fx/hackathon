"use client";
import { Toaster } from "react-hot-toast";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode}> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
      <Toaster position="top-right" reverseOrder={false} />
    </Provider>
  );
};
export default Wrapper;
