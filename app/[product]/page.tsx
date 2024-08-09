import { Product } from "@/Product";
import Image from "next/image";
import Link from "next/link";
import Data from "../../data.json";
import AddToCart from "@/components/AddToCart";
type Props = {
  params: {
    product: string;
  };
  searchParams: object;
};
export default function Page(search: Props) {
  const productName = decodeURIComponent(search.params.product);
  const products: Product[] = Data;
  const product = products.filter((item) => item.title === productName);
  return (
    <div className="flex flex-col justify-center items-center w-full mt-10">
      <div className="flex flex-col p-2 md:flex-row">
        <Image src={product[0].image} width={400} height={400} alt="logo" />
        <div className="flex p-2 flex-col items-center space-y-3">
          <p className="text-xs text-slate-500">{product[0].categories}</p>
          <h1 className="text-blue-500 font-semibold text-2xl">
            {product[0].title}
          </h1>
          <hr className=" w-full" />
          <ul className="space-y-2 text-slate-600 text-sm">
            {product[0].features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <p className="text-2xl font-semibold">{product[0].price}</p>
          <AddToCart product={product[0]} />
        </div>
      </div>
      <div className="mt-12 border rounded-md mb-6 mx-4">
        <h1 className="text-2xl font-semibold underline text-blue-500 my-4 text-center">
          Technical Specifications
        </h1>
        {product[0].specification?.map((s, i) => (
          <div className="bg-slate-100" key={i}>
            <span className="flex text-sm py-2 sm:text-base px-2">
              <p className="w-2/5">{Object.keys(s)}</p>
              <p className="w-3/5">{Object.values(s)}</p>
            </span>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
