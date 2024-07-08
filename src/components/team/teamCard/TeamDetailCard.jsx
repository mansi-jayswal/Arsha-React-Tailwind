import React from "react";
import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const socialIcons = [
  { icon: <FaXTwitter size={20} />, link: "#" },
  { icon: <FaFacebook size={20} />, link: "#" },
  { icon: <BsInstagram size={20} />, link: "#" },
  { icon: <FaLinkedin size={20} />, link: "#" },
];

function TeamDetailCard({ profilePhoto, name, position, description }) {
  return (
    <>
      <div
        data-aos="fade-up"
        className="border shadow-md flex lg:flex-row gap-4 rounded-lg hover:-translate-y-3 duration-300 cursor-pointer p-4"
      >
        <div className="flex-shrink-0 flex justify-center items-center">
          <img
            src={profilePhoto}
            className="rounded-full h-32 w-32 object-cover"
            alt="Team member"
          />
        </div>
        <div className="text-start lg:text-start flex flex-col  lg:items-start justify-center">
          <h1 className="font-bold text-xl text-primary-color">{name}</h1>
          <h3 className="text-extra-heading-color py-1">{position}</h3>
          <div className="w-16 h-[2px] bg-gray-300 my-2"></div>
          <p className="text-sm text-default-color py-2">{description}</p>
          <div>
            <ul className="flex gap-3 text-default-color py-2 lg:justify-start">
              {socialIcons.map((iconData, index) => (
                <li
                  key={index}
                  className="h-9 w-9 p-2 hover:bg-secondary-color hover:text-white rounded-full bg-gray-200 text-center flex items-center justify-center"
                >
                  <a href={iconData.link} className=" ">
                    {iconData.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeamDetailCard;
