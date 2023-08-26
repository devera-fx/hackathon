import ProductCard from "@/components/ProductCard";
import { client } from "@/lib/sanityClient";
import { urlForImage } from "../../../../sanity/lib/image";

const getProductsByCategory = async (category: string) => {
  const res = await client.fetch(`*[_type=="product"]{
    price,
    name,
    image,
    description,
    _id,
    category -> {
      name
      }
  }`);

  console.log(res);

  return res.filter((product: any) => product.category.name === category);
};

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await getProductsByCategory(params.slug);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center flex-wrap gap-x-3">
      {result.map((product: any, index: number) => (
        <div key={index} className="py-5">
          <ProductCard
            name={product.name}
            price={product.price}
            description={product.type}
            category={product.category}
            image={urlForImage(product.image[0]).url()}
            _id={product._id}
          />
        </div>
      ))}
    </div>
  );
}
