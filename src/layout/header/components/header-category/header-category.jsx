import React from "react";

import { headerCategory } from "../../../../data/data";
import iphone14 from "../../../../assets/img/iphone14.png";

export const HeaderCategory = () => {
  return (
    <div className="mt-[38px] flex items-center gap-[16px]">
      {headerCategory.map((item) => (
        <div key={item.path} className="flex items-center gap-[10px]">
          <img src={item.img} alt="" />
          <a href={item.path}>{item.name}</a>
        </div>
      ))}
      <img className="ml-[16px] w-[200px]" src={iphone14} alt="" />
    </div>
  );
};
