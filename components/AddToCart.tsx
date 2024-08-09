"use client";
import { Product } from "@/Product";
import { useCartStore } from "@/store/store";
import React from "react";
import RemoveFromCart from "./RemoveFromCart";

type Props = {
  product: Product;
};

export default function AddToCart({ product }: Props) {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);
  const handleAdd = () => {
    addToCart(product);
  };
  const productCount = cart.filter((item) => item.title === product.title).length;

  return (
    <>
      {productCount > 0 ? (
        <div className="flex w-28 justify-evenly border rounded-sm">
          <RemoveFromCart product={product} />
          <span className="w-1/2 text-center">{productCount}</span>
          <button className="bg-blue-500 w-1/4 rounded-sm" onClick={handleAdd}>+</button>
        </div>
      ) : (
        <button className="bg-blue-500 w-28 px-2 text-white rounded-sm" onClick={handleAdd}>Add To Cart</button>
      )}
    </>
  );
}
