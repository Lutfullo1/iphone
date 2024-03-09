import React from "react";

import { Heart } from "../../../../assets/icons/heart";
import { Ring } from "../../../../assets/icons/ring";
import { Bag } from "../../../../assets/icons/bag";

import { Button } from "../../../../components/ui/button";

export const Cart = () => {
  return (
    <div className="flex items-center gap-[12px]">
      <Heart />
      <Ring />
      <Button variant="secondary" icon={<Bag />}>
        в корзине
      </Button>
    </div>
  );
};
