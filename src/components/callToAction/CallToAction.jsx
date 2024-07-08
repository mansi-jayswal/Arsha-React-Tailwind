import React from "react";
import Button from "../common/Button";

function CallToAction() {
  return (
    <div className="flex flex-col w-full bg-slate-100 ">
      <div className="relative bg-[url('/images/callToactionBG.jpg')] bg-fixed h-[70vh] lg:h-[50vh] bg-cover bg-center lg:rounded-b-[0px]">
        <div className="absolute inset-0 bg-black opacity-65"></div>
        <div className="h-full flex flex-col gap-5 justify-center items-center text-white relative z-10 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row gap-2 justify-center items-center px-8">
            <div className=" w-full lg:w-[70%] m-8 ">
              <h1 data-aos="zoom-in" className="text-3xl font-bold text-white ">
                Call to Action
              </h1>
              <p data-aos="zoom-in" className="text-white text-base pt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
            <div className=" flex justify-center items-center lg:w-[30%]">
              <Button
                data-aos="zoom-in"
                text="Call to Action"
                className="bg-transparent hover:bg-secondary-color text-white border border-white px-9 lg:px-12 py-3 text-sm lg:text-md "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
