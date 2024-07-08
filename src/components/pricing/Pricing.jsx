import React from "react";
import Heading from "../common/Heading";
import PricingCard from "./pricingComponent/PricingCard";
import Container from "../common/Container";

const prosConsData1 = [
  { type: "pro", text: " Quam adipiscing vitae proin" },
  { type: "pro", text: "Nec feugiat nisl pretium" },
  { type: "pro", text: "Nulla at volutpat diam uteera" },
  { type: "con", text: "Pharetra massa massa ultricies" },
  { type: "con", text: "Massa ultricies mi quis hendrerit" },
];
const prosConsData2 = [
  { type: "pro", text: " Quam adipiscing vitae proin" },
  { type: "pro", text: "Nec feugiat nisl pretium" },
  { type: "pro", text: "Nulla at volutpat diam uteera" },
  { type: "pro", text: "Pharetra massa massa ultricies" },
  { type: "pro", text: "Massa ultricies mi quis hendrerit" },
];
const prosConsData3 = [
  { type: "pro", text: " Quam adipiscing vitae proin" },
  { type: "pro", text: "Nec feugiat nisl pretium" },
  { type: "pro", text: "Nulla at volutpat diam uteera" },
  { type: "pro", text: "Pharetra massa massa ultricies" },
  { type: "pro", text: "Massa ultricies mi quis hendrerit" },
];

const priceCardData = [
  {
    heading: "Free plan",
    price: "0",
    prosCons: prosConsData1,
    isCenter: false,
  },
  {
    heading: "Business plan",
    price: "29",
    prosCons: prosConsData2,
    isCenter: true,
  },
  {
    heading: "Developer plan",
    price: "49",
    prosCons: prosConsData3,
    isCenter: false,
  },
];

function Pricing() {
  return (
    <div className="bg-gray-100 ">
      <Container>
        <div className=" flex flex-col gap-6">
          <div className="text-center items-center ">
            <Heading text={"Pricing"} />
          </div>

          <div
            data-aos="fade-up"
            className="p-4 mx-auto text-center text-extra-heading-color "
          >
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-5">
            {priceCardData.map((data, index) => (
              <PricingCard
                key={index}
                heading={data.heading}
                price={data.price}
                prosCons={data.prosCons}
                isCenter={data.isCenter}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Pricing;
