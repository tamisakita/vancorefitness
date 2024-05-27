import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import { cva } from "class-variance-authority";
import { cn } from "../utils/utils";

const buttonVariants = cva(
  " w-40 inline-flex items-center text-white font-semibold rounded-full py-3 px-10 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 shadow-2xl",
  {
    variants: {
      variant: {
        navbar: "hidden lg:block bg-amber-500 border border-white text-black",
        default:
          "block bg-transparent border border-white hover:text-white hover:border-dark-blue",
        orange:
          "block bg-transparent border border-amber-500 text-black hover:text-white hover:border-dark-blue",
      },
    },
  }
);

const ButtonComponent = forwardRef(({ variant, btnText }, ref) => {
  return (
    <Link to="/" className={cn(buttonVariants({ variant }))} ref={ref}>
      {btnText}
    </Link>
  );
});

export default ButtonComponent;
