import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import feature from "/public/feature.webp";

const Jewellery = () => {
  return (
    <div className="flex flex-col mt-8 mb-4">
      <div className="hidden lg:flex justify-end px-20 pb-8">
        <h1 className="lg:text-4xl font-bold text-[#212121] w-[45%]">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <h1 className="lg:hidden flex justify-center text-4xl font-bold text-[#212121] mx-auto">
        Unique and Authentic Vintage Designer Jewellery
      </h1>
      <div className="flex flex-col lg:flex-row gap-5 bg-[#fbfcff] mt-5">
        {/* left */}
        <div className="grid grid-col-1 md:grid-cols-2 relative justify-center items-center w-full lg:w-1/2 gap-5">
          <div className="flex justify-center text-start absolute text-5xl font-extrabold text-[#212121] opacity-[.07] text-[50px] sm:text-[80px] lg:text-[90px] z-1 w-full md:w-[50%]">
            Different from others
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#212121] mb-4">
              Using Good Quality Materials
            </h3>
            <p className="text-base font-light text-[#212121] pb-2">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#212121] mb-4">
              100% Handmade Products
            </h3>
            <p className="text-base font-light text-[#212121] pb-2">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#212121] mb-4">
              Modern Fashion Design
            </h3>
            <p className="text-base font-light text-[#212121] pb-2">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#212121] mb-4">
              Discount for Bulk Orders
            </h3>
            <p className="text-base font-light text-[#212121] pb-2">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full lg:w-1/2">
          <div className="flex-1">
            <Image src={feature} alt="feature image" />
          </div>
          <div className="flex-1">
            <p className="text-[#212121] text-base font-light text-justify pt-5 pr-16 pl-16 lg:pl-0 lg:pr-7">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href={"/products"}>
                <Button className="mt-10 h-16 w-28" type="button">
                  See All Product
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
