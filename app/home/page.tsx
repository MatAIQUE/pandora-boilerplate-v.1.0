import React from "react";
import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Card from "./_components/Card";

const HomePage = () => {
  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      {/* Page Controller */}
      <div className="my-4 absolute w-full">
        {/* Add .hidden when controllers should be hidden */}
        <Menu />
      </div>
      {/* End of Page Controller */}

      {/* Ads Container */}
      <div className="flex flex-col mt-20 justify-center items-start mx-10">
        <Carousel />
      </div>
      {/* End of Ads Container */}

      {/* Page Content */}
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <Card title="Good Morning!" subtitle="" />
      </div>
      {/* End of Page Content */}
    </div>
  );
};

export default HomePage;
