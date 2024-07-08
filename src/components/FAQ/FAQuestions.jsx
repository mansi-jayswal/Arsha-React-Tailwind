import React from "react";
import Heading from "../common/Heading";
import Accordion from "../common/Accordian";
import Container from "../common/Container";

function FAQuestions() {
  return (
    <div className="bg-gray-100">
      <Container>
        <div className="flex flex-col gap-8 text-center items-center ">
          <div>
            <Heading text="Frequently asked questions" />
          </div>
          <div data-aos="fade-up" className="text-center">
            <p className="text-extra-heading-color ">
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:w-[80%]">
            <Accordion
              question="Non consectetur a erat nam at lectus urna duis?"
              answer="Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
            />
            <Accordion
              question="Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?"
              answer="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
            />
            <Accordion
              question="Dolor sit amet consectetur adipiscing elit pellentesque?"
              answer="Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
            />
            <Accordion
              question="Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?"
              answer="Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default FAQuestions;
