"use client";
import React, { useState } from "react";
import ShopCards from "@/components/ShopCards";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string|null) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex">
      <section className="w-1/5 hidden lg:block mt-4">
        <div className="border-2 mx-9 flex flex-col text-center text-sm space-y-2">
          <h1 className="mt-1">Browse Categories</h1>
          <hr className="border-black" />
          <h2
            onClick={() => handleCategoryClick("ABS Tank")}
            className="cursor-pointer"
          >
            ABS Tank <span className="text-slate-400">(6)</span>
          </h2>
          <hr />
          <h2
            onClick={() => handleCategoryClick("Commercial RO")}
            className="cursor-pointer"
          >
            Commercial RO <span className="text-slate-400">(4)</span>
          </h2>
          <hr />
          <h2
            onClick={() => handleCategoryClick("Copper Tank")}
            className="cursor-pointer"
          >
            Copper Tank <span className="text-slate-400">(5)</span>
          </h2>
          <hr />
          <h2
            onClick={() => handleCategoryClick("Domestic RO")}
            className="cursor-pointer"
          >
            Domestic RO <span className="text-slate-400">(10)</span>
          </h2>
          <hr />
          <h2
            onClick={() => handleCategoryClick("Stainless Steel Tank")}
            className="cursor-pointer"
          >
            Stainless Steel Tank <span className="text-slate-400">(5)</span>
          </h2>
          <hr />
          <h2
            onClick={() => handleCategoryClick("Water Purifier")}
            className="cursor-pointer mb-2"
          >
            Water Purifier <span className="text-slate-400">(14)</span>
          </h2>
        </div>
      </section>

      <section className="w-4/5 mt-10 lg:mx-4 mx-auto">
        {selectedCategory ? (
          <div className="flex justify-between">
          <h1 className="text-center mb-3 text-xl font-semibold">Showing Results For {selectedCategory}</h1>
          <button className="border mb-2 text-white font-light text-sm px-1 bg-blue-500 rounded-md" onClick={() => handleCategoryClick(null)}>Show All</button>
          </div>
        ) : (
          <h1 className="text-center mb-3 text-xl font-semibold">Showing All Results</h1>
        )}
        <ShopCards category={selectedCategory} />
      </section>
    </div>
  );
};

export default Page;
