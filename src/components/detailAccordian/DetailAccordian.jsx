import React from "react";
import DetailAccordianImage from "../../../public/images/DetailAccordianImage.png";
import Accordion from "../common/Accordian";
import Container from "../common/Container";

function DetailAccordian() {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className=" flex flex-col-reverse lg:flex-row gap-3 ">
          <div className="basis-full lg:basis-[60%] flex flex-col gap-4">
            <div data-aos="fade-up" className="">
              <h1 className="text-primary-color text-2xl lg:text-3xl mb-4">
                Eum ipsam laborum deleniti{" "}
                <span className="font-extrabold text-primary-color">
                  velit pariatur architecto aut nihil
                </span>
              </h1>
              <p data-aos="fade-up" className="text-extra-heading-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
                aute irure dolor in reprehenderit
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Accordion
                number="01"
                question="Non consectetur a erat nam at lectus urna duis?"
                answer="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
              />
              <Accordion
                number="02"
                question="Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?"
                answer="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
              />
              <Accordion
                number="03"
                question="Dolor sit amet consectetur adipiscing elit pellentesque?"
                answer="Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
              />
            </div>
          </div>

          <div
            data-aos="zoom-in"
            className="basis-full lg:basis-[40%] flex justify-center items-center"
          >
            <img
              src={DetailAccordianImage}
              className="p-4 lg:p-8 w-full h-auto duration-800"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default DetailAccordian;
