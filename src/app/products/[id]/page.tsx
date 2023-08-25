import { client } from "@/lib/sanityClient";
import Product from "@/components/product/Product";

const getProductsDetail = async (id: string) => {
  const res = await client.fetch(`*[_type == "product" && _id=="${id}"]{
    price,
    name,
    image,
    description,
    _id,
  }`);

  return res;
};

export default async function Page({ params }: { params: { id: string } }) {
  const result = await getProductsDetail(params.id);
  return (
    <div>
      <Product result={result} id={params.id} />
    </div>
  );
}
