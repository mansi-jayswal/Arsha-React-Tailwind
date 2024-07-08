import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Button from "./Button";

function BottomToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    //trigger the handleScroll when window is scrolling , handleScroll function will make the button visible if scrollY > 300
    window.addEventListener("scroll", handleScroll);

    //cleanup function
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <Button
          data-aos="fade-up"
          onClick={scrollToTop}
          className="fixed  bottom-4 right-4 p-3 bg-secondary-color text-white rounded-full shadow-lg z-[500000]"
        >
          <FaArrowUp size={15} />
        </Button>
      )}
    </div>
  );
}

export default BottomToTop;
