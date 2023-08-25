import Image from "next/image";
import Link from "next/link";

function ProductCard(props: {
  _id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}) {
  return (
    <Link href={`/products/${props._id}`}>
      <div className="hover:scale-105 duration-500">
        <Image src={props.image} alt="product image" width={300} height={300} />
        <h3 className="text-lg font-bold mt-3">{props.name}</h3>
        <h4 className="text-lg font-semibold">{props.description}</h4>
        <p className="text-lg font-semibold">
          Price: ${props.price.toFixed(2)}
        </p>
      </div>
    </Link>
  );
}

export default ProductCard;
