import React from "react";
import LinksListing from "./LinksListing";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Container from "../common/Container";

const links = [
  {
    name: "Home",
  },
  {
    name: "About Us",
  },
  {
    name: "Services",
  },
  {
    name: "Terms of Services",
  },
];
const services = [
  {
    name: "Web design",
  },
  {
    name: "Web development",
  },
  {
    name: "Product Management",
  },
  {
    name: "Marketing",
  },
];
const socialIcons = [
  { icon: <FaXTwitter size={18} />, link: "#" },
  { icon: <FaFacebook size={18} />, link: "#" },
  { icon: <BsInstagram size={18} />, link: "#" },
  { icon: <FaLinkedin size={18} />, link: "#" },
];

function Footer() {
  return (
    <Container>
      <div className="py-8">
        <div className="flex flex-col lg:flex-row gap-2">
          <div className="w-full lg:w-1/3 flex flex-col gap-3 ml-3 lg:ml-0">
            <h1 className="text-primary-color text-3xl font-jost-bold">
              ARSHA
            </h1>
            <p className="text-sm text-default-color">
              A108 Adam Street <br />
              New York, NY 535022{" "}
            </p>
            <p className="text-sm text-default-color">
              <span className="font-bold text-default-color">Phone:</span> +1
              5589 55488 55
            </p>
            <p className="text-sm text-default-color">
              <span className="font-bold text-default-color">Email:</span>{" "}
              info@example.com
            </p>
          </div>
          <div className="lg:w-2/3 flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3">
              <LinksListing heading="Useful links" links={links} />
            </div>
            <div className=" lg:w-1/3">
              <LinksListing heading="Services" links={services} />
            </div>
            <div className=" lg:w-1/3 flex flex-col gap-4">
              <h1 className="text-primary-color text-base font-bold">
                Follow us
              </h1>
              <p className=" text-default-color">
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <ul className="flex gap-3  text-default-color py-2 justify-start">
                {socialIcons.map((iconData, index) => (
                  <li
                    key={index}
                    className="h-9 w-9 p-2 hover:border-secondary-color hover:text-secondary-color rounded-full border border-default-color text-default-color  flex items-center justify-center"
                  >
                    <a href={iconData.link}>{iconData.icon}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 h-[2px] w-full lg:w-[80%] mx-auto mt-10"></div>
        <div className="text-center  my-8 text-default-color flex flex-col  gap-4 lg:gap-2 px-4 lg:px-0">
          <p className="text-sm text-default-color">
            © Copyright <span className="font-bold">ARSHA</span> All Rights
            Reserved
          </p>
          <p className="text-sm text-default-color">
            Designed by{" "}
            <a
              href="https://github.com/mansi-jayswal"
              className="text-secondary-color hover:underline"
            >
              Mansi Jayswal
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
