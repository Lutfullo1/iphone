import React from "react";
import { Button } from "../../../../components/ui/button";
import { Dots } from "../../../../assets/icons/dots";
import { Input } from "../../../../components/ui/input";

export const Search = () => {
  return (
    <div>
      <form className="flex items-center gap-[24px]">
        <Button
          className="w-[100px] rounded-[10px] p-[16px]"
          icon={<Dots />}
          variant="primary"
        >
          Каталог товаров
        </Button>
        <Input
          className="border-[1px]"
          variant="search"
          placeholder="Поиск по каталогу товаров"
        />
      </form>
    </div>
  );
};
