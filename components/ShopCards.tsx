import React from "react";
import Link from "next/link";
import Data from "../data.json";
import { Product } from "@/Product";
import AddToCart from "./AddToCart";

type Props = {
  category: string | null;
}
export default function ShopCards({category}: Props) {
  const products: Product[] = Data;
  const productCategory = products.filter((product) => 
    product.categories.includes(`${category}`)
  );  
  return (
    <div className="flex flex-col mb-10 gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {category == null ? products.map((product) => (
        <div
          key={product.title}
          className="border rounded-md bg-slate-100 flex flex-col items-center justify-between space-y-1 p-2 shadow-md"
        >
          <Link href={`/${encodeURIComponent(product.title)}`}>
            <div>
              <p className="text-xs text-slate-500 text-center line-clamp-1">
                {product.categories}
              </p>
              <h1 className="lg:text-sm text-xs font-semibold mt-1 line-clamp-2 text-blue-500">
                {product.title}
              </h1>
            </div>
          </Link>
          <p className="font-light">{product.price}</p>
          <AddToCart product={product} />
        </div>
      )): productCategory.map((product) => (
        <div
          key={product.title}
          className="border flex flex-col items-center justify-between space-y-1 p-2 shadow-md"
        >
          <Link href={`/${encodeURIComponent(product.title)}`}>
            <div>
              <p className="text-xs text-slate-500 text-center line-clamp-1">
                {product.categories}
              </p>
              <h1 className="lg:text-sm text-xs font-semibold mt-1 line-clamp-2 text-blue-500">
                {product.title}
              </h1>
            </div>
          </Link>
          <p className="font-light">{product.price}</p>
          <AddToCart product={product} />
        </div>
      ))}
    </div>
  );
}
