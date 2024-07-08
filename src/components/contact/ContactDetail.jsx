import React from "react";

function ContactDetail({ children, heading, description }) {
  return (
    <div className="flex gap-4 text-left px-8 py-4">
      <div className="size-10 rounded-full bg-gray-100 text-secondary-color hover:bg-secondary-color transition transform duration-300 hover:text-white flex text-center items-center justify-center p-1">
        {children}
      </div>
      <div className="text-left flex flex-col gap-1">
        <h1 className="text-primary-color font-bold text-lg">{heading}</h1>
        <p className="text-default-color">{description}</p>
      </div>
    </div>
  );
}

export default ContactDetail;
