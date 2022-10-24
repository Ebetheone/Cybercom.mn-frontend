import React from "react";
import { ProductsWidget } from "../../widgets/Product";
const Product = () => {
  return (
    <div className="bg-[#FFFFFF] w-1/4 h-auto mx-2">
      <div className="py-4 px-5 text-xs border-b-2 border-t-8 border-[#F0F0F0]">
        АНГИЛАЛ
      </div>
      <ProductsWidget />
    </div>
  );
};

export default Product;
