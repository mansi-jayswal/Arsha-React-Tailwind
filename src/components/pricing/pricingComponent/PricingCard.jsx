import Button from "../../common/Button";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function PricingCard({ isCenter, heading, price, prosCons }) {
  return (
    <div>
      <div
        data-aos="zoom-in"
        className={`bg-white px-8 py-4 shadow-sm ${
          isCenter
            ? "border-t-4 border-secondary-color rounded-lg"
            : "border-t-4 border-gray-200 rounded-lg"
        }`}
      >
        <div className="flex flex-col gap-5 text-start py-4">
          {/* Heading */}
          <div className="mt-8">
            <h1 className="font-bold text-xl text-primary-color">{heading}</h1>
          </div>
          {/* Pricing */}
          <div className="flex gap-3 items-end">
            <p className="box-border text-center items-center text-secondary-color m-0 text-5xl border-solid">
              <span className="text-3xl relative top-[-0.5em]">$</span>
              {price}
            </p>
            <p
              className="box-border m-0 border-solid text-extra-heading-color"
              style={{ borderImage: "initial" }}
            >
              / month
            </p>
          </div>
          {/* Pros and Cons */}
          <div className="flex flex-col gap-5">
            {prosCons.map((item, index) => (
              <div key={index} className="flex gap-2 text-left items-center">
                {item.type === "pro" ? (
                  <span className="text-green-400">
                    <FaCheck />
                  </span>
                ) : (
                  <span className="text-gray-800">
                    <IoClose />
                  </span>
                )}
                <p
                  className={`text-extra-heading-color ${
                    item.type === "con" ? "line-through text-gray-400  " : ""
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          {/* Buy Now Button */}
          <div className="my-8">
            <Button
              text="Buy now"
              className={`px-10 py-3 text-base ${
                !isCenter
                  ? "border border-secondary-color bg-white text-secondary-color hover:text-white hover:bg-secondary-color"
                  : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingCard;
