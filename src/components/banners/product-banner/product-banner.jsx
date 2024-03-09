import React from "react";

export const ProductBanner = ({ children }) => {
  return (
    <div className="mt-[20px]">
      <h2 className="text-center mb-[50px] text-[rgb(16, 14, 14)] font-sans font-[500] text-[48px]">
        купить iPhone в Москве
      </h2>
      <p className="mb-[24px] text-primary font-sans font-[500px] text-[24px]">
        Самое популярное
      </p>
      <div className="grid grid-cols-4 gap-5">{children}</div>
    </div>
  );
};
