import React from "react";

function Container({ children, className }) {
  return (
    <div className={`container mx-auto px-4 lg:px-16 py-8 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
