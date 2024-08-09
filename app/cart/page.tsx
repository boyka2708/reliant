"use client";
import { Product } from "@/Product";
import { useCartStore } from "@/store/store";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableFooter } from "@mui/material";
import Link from "next/link";

type Props = {};

function Page({}: Props) {
  const cart = useCartStore((state) => state.cart);

  const total = cart.reduce((acc: number, currentProduct: Product) => {
    const priceNumber = parseFloat(currentProduct.price.replace(/,/g, ""));
    return acc + priceNumber;
  }, 0);

  const productCounts = cart.reduce((acc, item) => {
    if (acc[item.title]) {
      acc[item.title].quantity += 1;
    } else {
      acc[item.title] = {
        quantity: 1,
        price: parseFloat(item.price.replace(/,/g, "")),
      };
    }
    return acc;
  }, {} as Record<string, { quantity: number; price: number }>);

  return (
    <div>
      {cart.length > 0 ? (
        <Table className="p-3">
          <TableCaption>Your Cart</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/5 sm:w-1/2">Product</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-right">SubTotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(productCounts).map(
              ([title, { quantity, price }]) => (
                <TableRow key={title}>
                  <TableCell className="font-medium">{title}</TableCell>
                  <TableCell className="text-center">
                    {price.toFixed(2)}
                  </TableCell>
                  <TableCell className="text-center">{quantity}</TableCell>
                  <TableCell className="text-right">
                    {(quantity * price).toFixed(2)}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
          <TableFooter className="bg-slate-100">
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{total}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      ) : (
        <div className="flex flex-col justify-center items-center h-[50vh]">
          <h1 className="text-3xl">No Items in Cart</h1>
          <Link href='/shop'><button className="border p-1 text-white rounded-sm mt-5 bg-blue-500">Return To Shop</button></Link>
        </div>
      )}
    </div>
  );
}

export default Page;
