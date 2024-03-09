import React from "react";

import { HeaderPath } from "./components/header-path";
import { Search } from "./components/search/search";
import { Cart } from "./components/cart/cart";
import { HeaderCategory } from "./components/header-category";
export const Header = () => {
  return (
    <div className="container header__container">
      <HeaderPath />
      <div className="flex gap-[27px] mt-[55px]">
        <Search />
        <Cart />
      </div>
      <HeaderCategory />
    </div>
  );
};
