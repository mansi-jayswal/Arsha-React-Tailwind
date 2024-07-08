import React, { useState } from "react";
import Heading from "../common/Heading";
import Masnory from "./Masnory";
import Button from "../common/Button";
import Container from "../common/Container";
import { cn } from "../../utils/cn";

const tabItems = ["All", "App", "Card", "Web"];

function Portfolio() {
  const [selectedTab, setSelectedTab] = useState("All");
  return (
    <Container>
      <div className="flex flex-col gap-3 ">
        <div className="text-center items-center">
          <Heading text="Portfolio" />
        </div>
        <div data-aos="fade-up" className="mb-4 p-4 mx-auto text-center ">
          <p className="text-default-color">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div data-aos="fade-up" className="flex gap-2">
            {tabItems.map((tabItem, index) => {
              return (
                <Button
                  key={index}
                  text={tabItem}
                  className={cn(
                    selectedTab === tabItem
                      ? "bg-secondary-color text-white px-5 font-bold"
                      : "bg-white text-default-color hover:bg-secondary-color hover:text-white px-5"
                  )}
                  onClick={() => setSelectedTab(tabItem)}
                />
              );
            })}
          </div>
        </div>
        <div>
          <Masnory selectedTab={selectedTab} />
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;
