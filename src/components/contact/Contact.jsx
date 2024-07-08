import React from "react";
import Heading from "../common/Heading";
import AddressSection from "./AddressSection";
import ContactForm from "./ContactForm";
import Container from "../common/Container";

function Contact() {
  return (
    <Container>
      <div className="flex flex-col gap-7 h-auto">
        {/* heading */}
        <div className="text-center items-center">
          <Heading text="Contact" />
        </div>
        {/* paragraph */}
        <div data-aos="fade-up" className="text-center items-center">
          <p className="text-default-color">
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit
          </p>
        </div>
        {/* address and contact form */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div
            data-aos="fade-up"
            className="w-full lg:w-[40%] shadow-lg border-y-4 border-secondary-color rounded-md"
          >
            <AddressSection />
          </div>
          <div
            data-aos="fade-up"
            className="w-full  lg:w-[60%] shadow-lg border-y-4   border-secondary-color rounded-md"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
