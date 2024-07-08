import React from "react";
import Button from "../common/Button";
import Container from "../common/Container";

function NewsLetter() {
  return (
    <div className="bg-gray-100">
      <Container className=" px-4 sm:px-8">
        <div className=" flex items-center justify-center my-5">
          <div className="flex flex-col gap-6 w-full max-w-lg">
            <h1 className="text-primary-color text-2xl sm:text-3xl font-bold text-center">
              Join our NewsLetter
            </h1>
            <p className="text-extra-heading-color  text-center">
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <div className="relative w-full">
              <input
                type="text"
                className="shadow-md rounded-full w-full  p-3 border text-default-color focus:outline-none focus:ring-2 focus:ring-secondary-color"
                placeholder="Enter your email "
              />
              <Button
                text="Subscribe"
                className="absolute top-0 right-0 mt-2 mr-2 py-2"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default NewsLetter;
