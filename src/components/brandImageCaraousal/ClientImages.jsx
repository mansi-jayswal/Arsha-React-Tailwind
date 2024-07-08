import React from "react";
import client1 from "../../../public/images/ClientImages/client-1.png";
import client2 from "../../../public/images/ClientImages/client-2.png";
import client3 from "../../../public/images/ClientImages/client-3.png";
import client4 from "../../../public/images/ClientImages/client-4.png";
import client5 from "../../../public/images/ClientImages/client-5.png";
import client6 from "../../../public/images/ClientImages/client-6.png";
import client7 from "../../../public/images/ClientImages/client-7.png";
import client8 from "../../../public/images/ClientImages/client-8.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ClientImages() {
  const clientImages = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 6,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div data-aos="zoom-in" className="py-8 bg-gray-100 items-center">
      <div className="w-full px-8 ">
        <Carousel
          className=""
          // showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={2000}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {clientImages.map((image, index) => (
            <div key={index} className="flex justify-around w-full">
              <img
                src={image}
                alt={`Client ${index + 1}`}
                className="h-6 w-auto object-contain hover:scale-110 duration-300"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default ClientImages;
