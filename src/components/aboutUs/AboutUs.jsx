import React from "react";
import Heading from "../common/Heading";
import { BsCheck2Circle } from "react-icons/bs";
import Button from "../common/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../common/Container";

function AboutUs() {
  return (
    <Container>
      <div className="text-center items-center my-4 ">
        <Heading text="About us" />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-1 mt-8 ">
        {/* left side section  */}
        <div
          data-aos="fade-up"
          className=" text-default-color  lg:w-1/2 w-full "
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            iusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-2 mt-8">
            <span>
              <BsCheck2Circle size={20} className="text-secondary-color" />
            </span>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="flex gap-2 mt-2">
            <span>
              <BsCheck2Circle size={20} className="text-secondary-color" />
            </span>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </div>
          <div className="flex gap-2 mt-2">
            <span>
              <BsCheck2Circle size={20} className="text-secondary-color" />
            </span>
            <p>Ullamco laboris nisi ut aliquip ex ea commodo</p>
          </div>
        </div>
        {/* right side section  */}
        <div data-aos="fade-up" className=" text-default-color  lg:w-1/2">
          <p>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <div className="mt-4">
            <Button className="rounded border group border-secondary-color bg-white  text-secondary-color hover:bg-secondary-color hover:text-white">
              <div className="flex gap-2 text-center items-center justify-center">
                <span>Read more</span>
                <span>
                  <FaArrowRightLong className="group-hover:ml-1" />
                </span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutUs;
