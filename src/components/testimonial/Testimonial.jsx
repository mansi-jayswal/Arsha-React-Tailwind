import Heading from "../common/Heading";
import TestimonialCard from "./testimonialCard/TestimonialCard";
import testinomial1 from "../../../public/images/testimonials-1.jpg";
import testinomial2 from "../../../public/images/testimonials-2.jpg";
import testinomial3 from "../../../public/images/testimonials-3.jpg";
import testinomial4 from "../../../public/images/testimonials-4.jpg";
import testinomial5 from "../../../public/images/testimonials-5.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Container from "../common/Container";

const testimonials = [
  {
    image: testinomial1,
    name: "Saul Godman",
    profession: "Ceo and Founder",
    review:
      "This product has been a game-changer for our company. It has streamlined our processes and increased our efficiency dramatically.I love using this product in my design work.",
  },
  {
    image: testinomial2,
    name: "Sara Willson",
    profession: "Designer",
    review:
      "I love using this product in my design work. It has intuitive features that save me a lot of time and effort.This product has helped boost my store's sales and customer satisfaction.",
  },
  {
    image: testinomial3,
    name: "Jena Kerlis",
    profession: "Store owner",
    review:
      "This product has helped boost my store's sales and customer satisfaction. It's reliable and easy to use. It has intuitive features that save me a lot of time and effort.This product has helped boost my store's sales and customer satisfaction",
  },
  {
    image: testinomial4,
    name: "Matt Brandon",
    profession: "Freelancer",
    review:
      "As a freelancer, this product has been invaluable. It helps me stay organized and on top of my projects. It has intuitive features that save me a lot of time and effort.This product has helped boost my store's sales and customer satisfaction",
  },
  {
    image: testinomial5,
    name: "John Larson",
    profession: "Entrepreneur",
    review:
      "This product is a must-have for any entrepreneur. It has improved my productivity and allowed me to focus on growing my business. It has intuitive features that save me a lot of time and effort.This product has helped boost my store's sales and customer satisfaction",
  },
];

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

function Testimonial() {
  return (
    <Container>
      <div className="flex flex-col gap-4">
        <div className="text-center items-center ">
          <Heading text="Testimonial" />
        </div>

        <div data-aos="fade-up" className=" p-4 mx-auto text-center ">
          <p className="text-extra-heading-color text-lg">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <Carousel
          className="pb-20"
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          transitionDuration={2000}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          containerClass="custom-carousel"
        >
          {testimonials.map((testimonial, index) => (
            <div className="p-6 flex items-center justify-center" key={index}>
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                profession={testimonial.profession}
                review={testimonial.review}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}

export default Testimonial;
