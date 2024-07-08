import React from "react";
import { cn } from "../../utils/cn";

function Button({ text, className, children, ...props }) {
  return (
    <div>
      <button
        className={cn(
          "text-white font-jost-bold bg-secondary-color text-sm px-6 py-2 hover:bg-blue-500 rounded-full transition duration-300",
          className
        )}
        type={props.type}
        {...props}
      >
        {text} {children}
      </button>
    </div>
  );
}

export default Button;
