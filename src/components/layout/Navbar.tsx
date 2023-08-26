"use client";

import Image from "next/image";
import Logo from "/public/Logo.webp";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { getUserIdentifier, setUserIdentifier } from "@/lib/cookie";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/counterSlice";

const navItems = [
  {
    title: "Female",
    href: "/category/female",
  },
  {
    title: "Male",
    href: "/category/male",
  },
  {
    title: "Kids",
    href: "/category/kids",
  },
  {
    title: "All Products",
    href: "/products",
  },
];

const Navbar = () => {
  const cartValue = useSelector((state: RootState) => state.cart.totalQuantity);
  const [responsive, setResponsive] = useState(false);
  const [reFetch, setReFetch] = useState(false);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const dispatch = useDispatch();

  const hendleClick = () => {
    setResponsive((prev) => !prev);
    // console.log(responsive);
  };

  async function getCartItemsNum(userId: string) {
    fetch(`${baseUrl}api/cartItemsNum?userId=${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${userId}`,
      },
      cache: "no-store",
    })
      .then((response) => response.json())
      .then((response) => {
        if (response[0].numItems) {
          dispatch(cartActions.addToCart({ quantity: response[0].numItems }));
        } else {
          dispatch(cartActions.clearCart());
        }
      })
      .catch(() => {
        dispatch(cartActions.clearCart());
      });
  }

  useEffect(() => {
    const identifier = getUserIdentifier();
    if (!identifier) {
      const newIdentifier = uuidv4();
      setUserIdentifier(newIdentifier);
      setReFetch(!reFetch);
    } else {
      getCartItemsNum(identifier);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reFetch]);

  return (
    <div className="bg-white shadow-sm py-7 px-10 lg:px-20">
      <div className="flex justify-between items-center gap-8">
        <Link href={"/"} className="cursor-pointer">
          <Image src={Logo} alt="Dine image" priority />
        </Link>
        <ul className="hidden lg:flex flex-nowrap gap-x-4">
          {navItems.map((item, index: number) => (
            <li
              key={index}
              className="flex items-center relative rounded-sm px-3 py-1 hover:bg-gray-100 cursor-pointer group"
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
        {/* searchbar */}
        <div className="hidden lg:flex items-center font-normal border text-gray-800 rounded-sm">
          <CiSearch />
          <input
            type="text"
            placeholder="What are you looking for"
            className="w-64 text-sm"
          />
        </div>
        {/* cart div */}
        <Link href={"/cart"} className="hidden lg:flex">
          <div className="relative h-11 w-11 rounded-full bg-gray-200">
            <span className="absolute right-0 top-0 rounded-full bg-red-500 h-4 w-4 text-white text-center text-[11px]">
              {cartValue}
            </span>
            <div className="flex justify-center items-center h-11 w-11 flex-shrink-0">
              <ShoppingCart />
            </div>
          </div>
        </Link>
        {/* hamburger button */}
        <div className="-mr-2 flex lg:hidden">
          <button
            type="button"
            onClick={() => setResponsive(!responsive)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-white"
          >
            {responsive == true ? (
              <IoMdClose size={29} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </button>
        </div>
      </div>
      <div
        className={`flex flex-col items-center justify-center absolute min-h-screen w-screen space-y-3 bg-white text-gray-800 lg:hidden ${
          responsive ? "flex" : "hidden"
        }`}
      >
        <Link
          href={"/cart"}
          onClick={() => {
            setResponsive(false);
          }}
        >
          <div className="relative h-11 w-11 rounded-full bg-gray-200">
            <span className="absolute right-0 top-0 rounded-full bg-red-500 h-4 w-4 text-white text-center text-[11px]">
              {cartValue}
            </span>
            <div className="flex justify-center items-center h-11 w-11 flex-shrink-0">
              <ShoppingCart />
            </div>
          </div>
        </Link>
        <div className="flex flex-col space-y-3 text-center font-medium">
          {navItems.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="block px-3 py-2 text-xl font-semibold"
              onClick={() => {
                setResponsive(false);
              }}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
