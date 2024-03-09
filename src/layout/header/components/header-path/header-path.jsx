import React from "react";

import logo from "../../../../assets/img/logo.svg";
import { headerPath } from "../../../../data/data";

export const HeaderPath = () => {
  return (
    <div className="flex justify-between  gap-[36px] mt-[25px]">
      <img className="cursor-pointer" src={logo} alt="logo" />
      <ul className="flex items-center gap-[20px]">
        {headerPath.map((item) => (
          <li key={item.path}>
            <a
              className="font-sans text-[rgb(16, 14, 14)] font-[400] text-[18px]"
              href={item.path}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <p className="font-sans text-[rgb(16, 14, 14)] font-[400] text-[18px]">
          +7 812 561 96 62
        </p>
        <a className="text-primary font-[400] text-[16px]" href="#">
          Вам перезвонить?
        </a>
      </div>
    </div>
  );
};
