import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import heroImage from "../../../public/images/heroImage.png";
import Container from "../common/Container";
import { BsX } from "react-icons/bs";

import { IoPlayCircleOutline } from "react-icons/io5";

function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleWatchVideoClick = () => {
    document.body.style.overflowY = "hidden";
    setIsVideoOpen(true);
  };

  const handleCloseVideoClick = () => {
    document.body.style.overflowY = "auto";
    setIsVideoOpen(false);
  };

  return (
    <section className="mx-auto py-12 bg-hero-section ">
      {isVideoOpen && (
        <>
          <BsX
            className="absolute top-3 right-3 text-white text-5xl z-[51] cursor-pointer"
            onClick={handleCloseVideoClick}
          />
          <div className="fixed w-screen h-screen top-0 left-0 z-50 grid place-items-center bg-[rgba(0,0,0,0.8)]">
            <iframe
              width="70%"
              height="70%"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?si=9g00UPvZ6n9f_Pg-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </>
      )}

      <Container className="lg:py-0">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-2 ">
          <div className="flex flex-col gap-4  lg:basis-[40%]">
            {/* heading */}
            <h1 className="text-3xl lg:text-5xl  text-white font-jost-bold">
              Better Solutions for your business
            </h1>
            {/* paragraph tagline */}
            <p className="text-xl text-gray-300 font-bold">
              We are team of talented designers making websites with Bootstrap
            </p>
            {/* get started and play button */}
            <div className="flex gap-4 items-left justify-left">
              <Button className="px-10 py-3 text-base">
                <a href="#aboutUs">Get started</a>
              </Button>
              <div
                className="transition-all duration-500 text-white flex items-center justify-center gap-2 hover:text-secondary-color cursor-pointer"
                onClick={handleWatchVideoClick}
              >
                <IoPlayCircleOutline size={35} />
                <span className="text-base">Watch Video</span>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" className="lg:basis-[60%] p-16 ">
            <img src={heroImage} className="" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
