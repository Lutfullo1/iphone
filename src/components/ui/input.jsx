import React from "react";
import clsx from "clsx";

export const Input = React.forwardRef(
  (
    {
      name,
      placeholder,
      value,
      onChange,
      id,
      type,
      label,
      error,
      helperText,
      variant,
      icon: Icon,
    },
    ref,
  ) => {
    return (
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          className={clsx(
            "px-[20px] py-[8px] flex items-center gap-[10px] rounded-lg text-xl font-medium",
            {
              "border border-gray-300 outline-none w-[480px] px-[66px] py-[9px] font-sans font-[400] text=[20px]":
                variant === "search",
            },
          )}
          ref={ref}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          placeholder={placeholder}
          type={type}
        />
        {Icon ? Icon : ""}
      </div>
    );
  },
);
