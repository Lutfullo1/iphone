import React from "react";
import clsx from "clsx";

export const Button = ({ variant, children, onClick, type, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "px-[15px] py-[8px] flex items-center gap-[5px] rounded-lg text-xl text-white text-[20px] font-medium cursor-pointer",
        {
          "bg-primary": variant === "primary",
          "bg-secondary": variant === "secondary",
        },
      )}
    >
      {Icon ? Icon : ""}
      <span>{children}</span>
    </button>
  );
};
