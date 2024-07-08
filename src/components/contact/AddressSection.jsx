import React from "react";
import ContactDetail from "./ContactDetail";
import { GrLocation } from "react-icons/gr";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import GoogleMap from "./GoogleMap";

function AddressSection() {
  const contactDetails = [
    {
      heading: "Address",
      description: "A108 Adam Street, New York, NY 535022",
      icon: <GrLocation size={22} />,
    },
    {
      heading: "Call Us",
      description: "+1 5589 55488 55",
      icon: <IoCallOutline size={22} />,
    },
    {
      heading: "Email Us",
      description: "info@example.com",
      icon: <TfiEmail size={22} />,
    },
  ];
  return (
    <div className="flex flex-col pt-6 gap-1  items-left">
      <div data-aos="fade-up">
        {contactDetails.map((detail, index) => (
          <ContactDetail
            key={index}
            heading={detail.heading}
            description={detail.description}
          >
            {detail.icon}
          </ContactDetail>
        ))}
      </div>

      <div className="flex justify-center items-center my-6">
        <GoogleMap />
      </div>
    </div>
  );
}

export default AddressSection;
