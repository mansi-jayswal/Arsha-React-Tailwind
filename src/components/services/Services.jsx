import React from "react";
import Heading from "../common/Heading";
import Boxes from "../common/Boxes";
import { FiActivity } from "react-icons/fi";
import { BsBoundingBoxCircles } from "react-icons/bs";
import { BsCalendar4Week } from "react-icons/bs";
import { BsBroadcast } from "react-icons/bs";
import CallToAction from "../callToAction/CallToAction";
import Container from "../common/Container";

function Services() {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className=" py-8 flex flex-col gap-4">
          <div className="text-center items-center">
            <Heading text={"services"} />
          </div>
          <div
            data-aos="fade-up"
            className="text-center items-center mx-auto pt-4 text-default-color w-[90%]"
          >
            <p className="text-extra-heading-color  mx-auto text-center ">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Boxes
                heading="lorem, ipsum"
                details={
                  "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint "
                }
              >
                <FiActivity />
              </Boxes>
              <Boxes
                heading="Sed ut perspici"
                details={
                  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
                }
              >
                <BsBoundingBoxCircles />
              </Boxes>
              <Boxes
                heading="Magni Dolores"
                details={
                  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
                }
              >
                <BsCalendar4Week />
              </Boxes>
              <Boxes
                heading="Nemo Enim"
                details={
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
                }
              >
                <BsBroadcast />
              </Boxes>
            </div>
          </div>
        </div>
      </Container>
      <div className="">
        <CallToAction />
      </div>
    </div>
  );
}

export default Services;
