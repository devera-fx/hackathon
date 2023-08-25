import Image from "next/image";
import Link from "next/link";
import logo from "/public/Logo.webp";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

export default function Footer() {
  return (
    <div className="bg-[#fff] px-10 lg:px-20">
      <div className="grid md:grid-cols-4 py-[64px] text-gray-700 mt-20 px-10 sm:px-20 w-full">
        <div className="p-4">
          <Image src={logo} alt="Logo" className="w-40" />
          <p className="mt-4 text-[#666] font-normal text-[16px]">
            Small, artisan label that offers a thoughtfully curated collection
            of high quality everyday essentials made.
          </p>
          <div className="flex flex-row justify-normal items-normal flex-nowrap  gap-x-[16px] mt-8 ">
            <Link href={""}>
              <Badge className="py-[10px] px-[12px] rounded-lg bg-[#f1f1f1] text-black">
                <FaTwitter className="text-lg" />
              </Badge>
            </Link>
            <Link href={""}>
              <Badge className="py-[10px] px-[12px] rounded-lg bg-[#f1f1f1] text-black">
                <FaFacebookF className="text-lg" />
              </Badge>
            </Link>
            <Link href={""}>
              <Badge className="py-[10px] px-[12px] rounded-lg bg-[#f1f1f1] text-black">
                <FaLinkedinIn className="text-lg" />
              </Badge>
            </Link>
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4 pl-2 text-[#666]">Company</h1>
          <ul className="text-gray-700 text-base">
            <li className="mb-4 font-normal text-[#666]">
              <Link href={""}>About</Link>
            </li>
            <li className="mb-4 font-normal text-[#666]">
              <Link href={""}>Terms of Use</Link>
            </li>
            <li className="mb-4 font-normal text-[#666]">
              <Link href={""}>Privacy Policy</Link>
            </li>
            <li className="mb-4 font-normal text-[#666]">
              <Link href={""}>How it Works</Link>
            </li>
            <li className="mb-4 font-normal text-[#666]">
              <Link href={""}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4 pl-2">Support</h1>
          <ul className="text-[#666] text-base">
            <li className="mb-4 font-normal">
              <Link href={""}>Support Center</Link>
            </li>
            <li className="mb-4 font-normal">
              <Link href={""}>24/7 Service</Link>
            </li>
            <li className="mb-4 font-normal">
              <Link href={""}>Quick Chat</Link>
            </li>
          </ul>
        </div>
        <div className="p-4">
          <h1 className="text-xl font-bold text-[#666] mb-4 pl-2">Contact</h1>
          <ul className="text-[#666] text-base">
            <li className="mb-4 font-normal">
              <Link href={""}>Whatsapp</Link>
            </li>
            <li className="mb-4 font-normal">
              <Link href={""}>dine@gmail.com</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-auto bg-black dark:bg-white w-full border border-black" />
      <div className="grid grid-rows-3 md:grid-cols-3 my-8 gap-10 sm:px-20 w-full">
        <p className="text-base font-normal">Copyright © 2022 Dine Market</p>
        <p className="text-base font-normal">
          Design by. <strong>Najib ul Rehman Malik</strong>
        </p>
        <p className="text-base font-normal">
          Code by. <strong>devera-fx on github</strong>
        </p>
      </div>
    </div>
  );
}
