import React from "react";
import { ProductsContent } from "./DrodownContent";
import DropdownCard from "./dropdownCard";

export default function DropdownCardParent() {
  return (
    <div className="absolute inset-x-0 z-25 bg-black text-white flex">
      {ProductsContent.map((item) => {
        return <DropdownCard content={item} key={item.toString()}/>;
      })}
    </div>
  );
}
