import image1 from "../../../public/images/app-1.jpg";
import image2 from "../../../public/images/books-1.jpg";
import image3 from "../../../public/images/branding-1.jpg";
import image4 from "../../../public/images/product-1.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [image1, image2, image3, image4];

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function ProductDetail() {
  return (
    <div className="px-16 py-8 flex flex-col gap-8 lg:flex-row">
      {/*ImageCaraousal */}
      {/* <div className="lg:basis-[50%]"> */}
      <Carousel
        className="size-full pb-10 "
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500}
        removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        containerClass="custom-carousel"
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`carousel-item-${index}`} />
          </div>
        ))}
      </Carousel>
      {/* </div> */}

      {/* information */}
      <div className="flex flex-col gap-4 lg:basis-[40%]">
        <div>
          <div
            data-aos="fade-up"
            className=" border border-gray-100 shadow-lg text-left p-8 bg-white  rounded-md flex flex-col gap-4"
          >
            {/* heading */}
            <h1 className="font-bold text-xl text-primary-color">
              Project information
            </h1>
            {/* line */}
            <div className="h-[2px] bg-gray-200 w-[80%]"></div>
            {/* details */}
            <InfoItem label="Category" value="Web Design" />
            <InfoItem label="Client" value="ASU Company" />
            <InfoItem label="Project Date" value="01 March, 2020" />
            <InfoItem label="Project URL" value="www.example.com" />
          </div>
        </div>
        <div className=" w-full mt-8 flex flex-col gap-4">
          <h1
            data-aos="fade-up"
            className="text-2xl text-primary-color font-bold"
          >
            Exercitationem repudiandae officiis neque suscipit
          </h1>
          <p data-aos="fade-up" className="text-gray-400">
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
            inventore commodi labore quia quia. Exercitationem repudiandae
            officiis neque suscipit non officia eaque itaque enim. Voluptatem
            officia accusantium nesciunt est omnis tempora consectetur
            dignissimos. Sequi nulla at esse enim cum deserunt eius.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

const InfoItem = ({ label, value }) => (
  <p className="text-default-color text-sm">
    <span className="font-bold mr-2 text-default-color">{label}:</span>
    {value}
  </p>
);
