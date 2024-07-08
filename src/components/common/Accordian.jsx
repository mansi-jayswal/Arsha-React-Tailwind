import React, { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Accordion({ question, answer, number }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      data-aos="fade-up"
      className="transition-all duration-200 bg-white border rounded-lg border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 w-full"
    >
      <button
        type="button"
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
      >
        <div className="flex gap-2 tex-center items-center justify-center ">
          <span className=" text-sm font-semibold text-secondary-color">
            {number ? number : <FaRegQuestionCircle className="size-5 mr-3" />}
          </span>
          <p
            className={`flex text-left text-base font-jost-bold text-primary-color hover:text-secondary-color ${
              isOpen ? "text-secondary-color" : "text-primary-color"
            }`}
          >
            {question}
          </p>
        </div>
        <MdOutlineKeyboardArrowRight
          className={`size-7 hover:text-secondary-color text-gray-400 transition-transform duration-400 ${
            isOpen
              ? "transform rotate-90 duration-400 text-secondary-color"
              : ""
          }`}
        />
      </button>
      <div
        className={`px-4 text-base  duration-300 ${
          isOpen ? "pb-4" : "overflow-hidden h-0"
        }`}
      >
        <p className="text-default-color text-left">{answer}</p>
      </div>
    </div>
  );
}

export default Accordion;
