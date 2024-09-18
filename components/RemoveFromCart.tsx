"use client"
import { Product } from "@/Product";
import { useStore } from "@/store/store";
import React from "react";

type Props = {
  product: Product;
};

export default function RemoveFromCart({ product }: Props) {
  const [cart, removeFromCart] = useStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);
  const handleAdd = () => {
    removeFromCart(product);
  }
  return (
    <>
      {cart.length> 0 && <button className="bg-red-500 w-1/4 rounded-sm" onClick={handleAdd}>-</button>} 
    </>
  );
}
