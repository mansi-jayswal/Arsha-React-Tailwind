import React from "react";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

function TestimonialCard({ image, profession, review, name }) {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center p-4 bg-white rounded-lg w-full lg:max-w-[70%] mx-auto"
    >
      <img
        src={image}
        alt="profile"
        className="w-28 h-28 rounded-full mb-4 shadow-md"
      />
      <h3 className="text-xl font-jost-bold mb-2 text-primary-color">
        {" "}
        {name}
      </h3>
      <h4 className="text-sm  mb-2 text-extra-heading-color italic">
        {profession}
      </h4>
      <div className="flex gap-1 mb-4">
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
        <FaStar className="text-yellow-500" />
      </div>
      <p className="text-center text-default-color">
        <FaQuoteLeft className="inline-block text-xl mr-2 align-top text-secondary-color" />
        {review}
        <FaQuoteRight className="inline-block text-xl ml-2 align-top text-secondary-color" />
      </p>
    </div>
  );
}

export default TestimonialCard;
