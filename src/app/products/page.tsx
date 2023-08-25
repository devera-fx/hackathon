import Image from "next/image";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../../sanity/lib/image";
import { Image as IImage } from "sanity";
import React from "react";
import Link from "next/link";

const getProductData = async () => {
  const res = await client.fetch(`*[_type == "product"]`);

  return res;
};

interface Product {
  name: string;
  _id: string;
  description: string;
  price: number;
  category: string;
  image: IImage[];
}

export default async function AllProducts() {
  const products: Product[] = await getProductData();

  return (
    <div className="flex flex-col lg:flex-row justify-center flex-wrap gap-x-3">
      {products.map((product, index) => (
        <Link href={`products/${product._id}`} key={index} className="mb-3">
          <Image
            className=""
            src={urlForImage(product.image[0]).url()}
            alt={product.name}
            width={250}
            height={350}
          />
          <h3 className="text-lg font-bold mt-3">{product.name}</h3>
          <p className="text-lg font-semibold">$ {product.price.toFixed(2)}</p>
        </Link>
      ))}
    </div>
  );
}
