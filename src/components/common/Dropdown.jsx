import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ items }) => {
  return (
    <ul className="bg-white w-48 text-secondary-color rounded font-poppins shadow-lg">
      {items.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </ul>
  );
};

const DropdownItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a
        href={item.href || "#"}
        className="flex justify-between items-center font-poppins  px-4 py-3 hover:text-blue-500 mx-4"
      >
        {item.label}
        {item.subItems && <IoIosArrowDown className="ml-2" />}
      </a>
      {item.subItems && isOpen && (
        <div className="absolute right-full top-0 mt-[-1px]">
          <Dropdown items={item.subItems} />
        </div>
      )}
    </li>
  );
};

export default Dropdown;
