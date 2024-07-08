import React, { useEffect } from "react";
import NewsLetter from "../newsletter/NewsLetter";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Container from "../common/Container";

function PortFolioDetail() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex flex-col gap-2">
      <div>
        <Navbar className="bg-primary-color" />
      </div>
      <div className="pt-24 bg-gray-100 px-16 py-4 flex flex-col gap-1">
        <nav className="rounded-md mb-4 ">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-secondary-color ">
                Home
              </Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center">
              <span className="text-default-color">Portfolio Details</span>
            </li>
          </ol>
        </nav>
        <h1 className="text-primary-color font-bold text-2xl">
          Portfolio Details
        </h1>
      </div>
      <Container>
        <ProductDetail />
      </Container>
      <div>
        <NewsLetter />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default PortFolioDetail;
