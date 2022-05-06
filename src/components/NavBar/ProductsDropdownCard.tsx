import React from "react";
import { ProductsContent } from "./DrodownContent";
import DropdownCard from "./dropdownCard";

export default function ProductsDropdownCard() {
  return (
    <div className="absolute inset-x-0 z-25 bg-black text-white h-56 top-20 px-60 gap-6 flex items-center justify-items-center">
      {ProductsContent.map((item) => {
        return <DropdownCard content={item} key={item.toString()}/>;
      })}
    </div>
  );
}
