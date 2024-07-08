import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Button from "../common/Button";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import Dropdown from "../common/Dropdown";
import { AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "aboutUs" },
  { name: "Services", to: "services" },
  { name: "Portfolio", to: "portfolio" },
  { name: "Team", to: "team" },
  { name: "Pricing", to: "pricing" },
  // { name: "Dropdown", to: "dropdown" },
  { name: "Contact", to: "contact" },
];

const dropdownItems = [
  { label: "Dropdown 1", href: "#" },
  {
    label: "Dropdown 2",
    href: "#",
    subItems: [
      { label: "Deep Dropdown 1", href: "#" },
      { label: "Deep Dropdown 2", href: "#" },
      { label: "Deep Dropdown 3", href: "#" },
      { label: "Deep Dropdown 4", href: "#" },
      { label: "Deep Dropdown 5", href: "#" },
    ],
  },
  { label: "Dropdown 3", href: "#" },
  { label: "Dropdown 4", href: "#" },
  { label: "Dropdown 5", href: "#" },
];

function Navbar({ className }) {
  const [isOpen, setIsOpen] = useState(false); //for mobile device navbar menu
  const [isScrolling, setIsScrolling] = useState(false); // for background color change on scroll
  const [activeLink, setActiveLink] = useState(""); //active link  on scroll
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //dropdown state

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; //dont let background scroll when nav menu is open
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const navHeight = document.querySelector("#nav").offsetHeight;
    window.scrollY > navHeight ? setIsScrolling(true) : setIsScrolling(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div className="">
      <div
        id="nav"
        className={`fixed z-50 top-0 left-0 right-0 flex justify-between gap-8 items-center w-full  py-4 px-12 lg:py-7 lg:px-12 duration-500  ${
          isScrolling ? "bg-primary-color" : ""
        }  ${className}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-1 ">
          <h1 className="text-white text-3xl">ARSHA</h1>
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 z-30"></div>
        )}
        {/* Links */}
        <div className="flex gap-6 items-center  ">
          <div className="">
            <ul
              className={`sm:text-sm text-black lg:flex ${
                isOpen
                  ? "mt-2 bg-white flex flex-col gap-5 absolute w-[90vw] top-16 items-start -translate-x-1/2 left-1/2 rounded z-40 p-8 cursor-pointer"
                  : "hidden gap-7 cursor-pointer text-white"
              }`}
            >
              {navLinks.map((navLink, index) => (
                <li key={index} className="font-poppins p-1">
                  <Link
                    to={navLink.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onSetActive={handleSetActive}
                    className={`hover:text-secondary-color font-poppins ${
                      activeLink === navLink.to ? "text-secondary-color " : ""
                    }`}
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
              <li
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="relative"
              >
                <span className="hover:text-secondary-color p-1 font-poppins cursor-pointer  gap-1 items-center justify-center flex">
                  Dropdown <IoIosArrowDown className="ml-2" />
                </span>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-4">
                    <Dropdown items={dropdownItems} />
                  </div>
                )}
              </li>
            </ul>
          </div>

          {/* Get started Button */}
          <div className="flex gap-3 justify-center items-center ">
            <div>
              <Button text="Get started" />
            </div>

            <div className=" lg:hidden flex flex-col" onClick={handleToggle}>
              {!isOpen ? (
                <AiOutlineMenu
                  size={25}
                  className="text-white cursor-pointer"
                />
              ) : (
                <IoMdClose
                  size={25}
                  className="text-white cursor-pointer z-40 "
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
