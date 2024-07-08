import React from "react";

function Heading({ text }) {
  return (
    <div data-aos="fade-up" className="relative inline-block">
      <h1 className="font-extrabold text-primary-color uppercase  relative z-10  after:absolute after:top-[130%] after:left-0 after:bg-gray-300 after:w-full after:mx-auto after:h-[1px] before:absolute before:top-[130%] before:left-1/2 before:-translate-x-1/2 before:bg-secondary-color before:w-1/3 before:h-[3px] text-3xl before:mx-auto inline-block mt-10 font-jost-bold mb-5">
        {text}
      </h1>
    </div>
  );
}

export default Heading;
