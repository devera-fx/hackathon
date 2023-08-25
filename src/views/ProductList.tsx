"use client";
import Image from "next/image";

import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../sanity/lib/image";
import { Image as IImage } from "sanity";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

export const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]`);

  return res;
};

interface Product {
  name: string;
  description: string;
  price: number;
  image: IImage[];
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function ProductList() {
  const data: Product[] = await getProductData();
  // console.log(data);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <p className="text-base font-semibold text-blue-600">PRODUCTS</p>
        <h2 className="scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl my-6">
          Check What We Have
        </h2>
      </div>
      <div className="w-full overflow-x-hidden m-0">
        <Slider {...sliderSettings}>
          {data?.map((item: Product, index) => (
            <div
              key={index}
              className="mb-2 hover:scale-110 duration-500 gap-x-1"
            >
              <Link href={"/products"}>
                <Image
                  className=""
                  src={urlForImage(item.image[0]).url()}
                  alt={item.name}
                  width={380}
                  height={480}
                />
              </Link>
              <h3 className="text-lg font-bold mt-3">{item.name}</h3>
              <p className="text-lg font-semibold">$ {item.price.toFixed(2)}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
