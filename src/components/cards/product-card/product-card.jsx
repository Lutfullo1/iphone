import React from "react";

import { Button } from "../../ui/button";
import { ProductCart } from "../../../assets/icons/product-cart";

export const ProductCard = ({ title, img, price }) => {
  return (
    <div className="text-center flex flex-col gap-[5px] rounded-lg shadow-md bg-white px-[20px] py-[10px]">
      <h3 className="text-gray-900 font-sans font-medium text-lg leading-tight">
        {title}
      </h3>
      <img src={img} alt="" />
      <p className="text-gray-700 font-sans font-medium text-2xl leading-relaxed">
        {price}
      </p>
      <Button icon={<ProductCart />} variant="primary">
        в корзине
      </Button>
    </div>
  );
};
