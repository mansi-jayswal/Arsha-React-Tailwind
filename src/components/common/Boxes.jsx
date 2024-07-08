import React from "react";

function Boxes({ heading, details, children }) {
  return (
    <div
      data-aos="fade-up"
      className="w-full lg:w-56 h-56 m-2 text-left p-4 bg-white cursor-pointer hover:-translate-y-2 duration-300 border shadow-md"
    >
      <div className="text-secondary-color mt-4 pt-4 text-4xl pl-3">
        {children}
      </div>
      <div>
        <h1 className="text-primary-color text-xl font-bold mt-4 hover:text-secondary-color ">
          {heading}
        </h1>
      </div>
      <div className="text-default-color text-sm mt-4">
        <p>{details}</p>
      </div>
    </div>
  );
}

export default Boxes;
