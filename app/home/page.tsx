import React from "react";
import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Card from "./_components/Card";

const HomePage = () => {
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <Menu />
      <Carousel />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <Card title="Good Morning!" subtitle="" />
      </div>
    </div>
  );
};

export default HomePage;
