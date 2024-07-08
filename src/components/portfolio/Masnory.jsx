import { useNavigate } from "react-router-dom";
import image1 from "../../../public/images/masonry-portfolio-1.jpg";
import image2 from "../../../public/images/masonry-portfolio-2.jpg";
import image3 from "../../../public/images/masonry-portfolio-3.jpg";
import image4 from "../../../public/images/masonry-portfolio-4.jpg";
import image5 from "../../../public/images/masonry-portfolio-5.jpg";
import image6 from "../../../public/images/masonry-portfolio-6.jpg";
import image7 from "../../../public/images/masonry-portfolio-7.jpg";
import image8 from "../../../public/images/masonry-portfolio-8.jpg";
import image9 from "../../../public/images/masonry-portfolio-9.jpg";
import { BsLink45Deg, BsZoomIn } from "react-icons/bs";

const images = [
  { src: image1, category: "app", name: "app 1" },
  { src: image6, category: "web", name: "Branding 2" },
  { src: image2, category: "card", name: "Product 1" },
  { src: image5, category: "web", name: "Product 2" },
  { src: image9, category: "web", name: "Branding 3" },
  { src: image3, category: "card", name: "Branding 1" },
  { src: image4, category: "app", name: "app 2" },
  { src: image7, category: "app", name: "app 3" },
  { src: image8, category: "card", name: "Product 3" },
];

const Masnory = ({ selectedTab }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/portfolio-details");
  };
  return (
    <div className="py-8 ">
      <div className=" columns-1 md:columns-2 lg:columns-3 gap-4 p-4">
        {images
          .filter((image) => {
            return (
              selectedTab === "All" ||
              image.category.toLowerCase() === selectedTab.toLowerCase()
            );
          })
          .map((image, index) => (
            <div
              key={index}
              className="mb-4 relative break-inside-avoid group overflow-hidden"
            >
              <img
                data-aos="fade-up"
                src={image.src}
                alt={`Image ${index}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="bg-white flex justify-between items-center p-4 w-full opacity-90 absolute -bottom-[80px] group-hover:bottom-0 group-hover:h-[80px] duration-300">
                <div>
                  <h4 className="text-lg text-primary-color text-default font-semibold">
                    {image.name}
                  </h4>
                  <p className="text-default opacity-70 text-sm">
                    Lorem ipsum, dolor sit
                  </p>
                </div>

                <div className="flex justify-center items-center gap-3 text-2xl">
                  <i className="cursor-pointer hover:text-secondary-color">
                    <BsZoomIn />
                  </i>
                  <i className="cursor-pointer hover:text-secondary-color">
                    <BsLink45Deg onClick={handleClick} />
                  </i>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Masnory;
