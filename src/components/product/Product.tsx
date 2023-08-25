"use client";
// import { products } from "@/utills/mock";
import Image, { StaticImageData } from "next/image";
import AddToCart from "@/components/AddToCart";
import Quantity from "@/components/Quantity";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../../sanity/lib/image";
import OverView from "@/components/OverView";
import { useState } from "react";

interface Props {
  result: any;
  id: string;
}

const Product: React.FC<Props> = ({ result, id }) => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [slectIndex, setSelectIndex] = useState(2);
  const [selectSize, setSelectSize] = useState(sizes[slectIndex]);
  const [qty, setQty] = useState(1);

  // console.log(result);

  return (
    <section className="mt-20 mx-auto justify-center items-center bg-[#fcfcfc]">
      <div className="flex mb-10">
        {result.map((product: any, index: number) => (
          <div key={index} className="flex gap-x-5 justify-between">
            {/* left side (image) */}
            <div className="flex gap-x-5">
              <div>
                <Image
                  src={urlForImage(product.image[0]).url()}
                  alt={product.name}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src={urlForImage(product.image[0]).url()}
                  alt={product.name}
                  width={550}
                  height={600}
                />
              </div>
            </div>
            {/* right side (content) */}
            <div>
              {/* top */}
              <div className="mt-12">
                <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
                <h2 className="text-xl font-semibold text-gray-400 mb-8">
                  {product.description}
                </h2>
              </div>
              {/* size */}
              <div className="mb-10">
                <h3 className="text-lg font-semibold mb-2">SELECT SIZE</h3>
                <div className="flex gap-x-4">
                  {sizes.map((size, index) => {
                    return (
                      <div
                        className={`center h-9 w-9 mt-2 rounded-full hover:shadow-2xl cursor-pointer duration-300 ${
                          slectIndex == index ? "bg-gray-400" : "bg-gray-100"
                        }`}
                        onClick={() => {
                          setSelectIndex(index), setSelectSize(size);
                        }}
                        key={index}
                      >
                        <span className="text-sm font-semibold text-center text-gray-600">
                          {size}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* quantity */}
              <div className="flex justify-normal items-center gap-x-6 mb-14">
                <h3 className="text-lg font-semibold">Quantity:</h3>
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
              </div>
              <div className="flex gap-x-5">
                <AddToCart product_id={id} size={selectSize} quantity={qty} />
                <p className="text-3xl font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <OverView />
    </section>
  );
};

export default Product;
