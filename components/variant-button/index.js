import React, { ComponentPropsWithRef, forwardRef } from "react";


const primaryStyle =
  "bg-gradient-to-tl  border-[1px] border-[#009FE1] to-[#009FE1] from-[#074E97] text-white-text text-sm";
const secondStyle =
  "bg-white border-[1px] border-[#009FE1] text-[#009FE1] text-sm ring-inset";
const ternaryStyle = "bg-white text-[#009FE1] text-sm";

function getVariantStyle(variant) {
  if (variant == "secondary") return secondStyle;
  if (variant == "ternary") return ternaryStyle;
  return primaryStyle;
}

const Button = ({
  children,
  className,
  variant = "primary",
  ...rest
}) => (
  <button
    className={`px-4 py-2 rounded-[.25rem] 
      ${getVariantStyle(variant)} 
      ${className}`}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
