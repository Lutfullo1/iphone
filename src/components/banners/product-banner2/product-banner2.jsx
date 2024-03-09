import React from "react";

export const ProductBanner2 = ({ children }) => {
  return (
    <div className="mt-[20px]">
      <p className="mb-[24px] text-primary font-sans font-[500px] text-[24px]">
        Новинки
      </p>
      <div className="grid grid-cols-4 gap-5">{children}</div>
    </div>
  );
};
