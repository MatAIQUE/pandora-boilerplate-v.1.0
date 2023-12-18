import React from "react";
import display1 from "../assets/ads/display-1.png";
import Image from "next/image";

const Carousel = () => {
  return (
    <>
      <div className="flex flex-col mt-20 justify-center items-start mx-10">
        <div className="carousel rounded-box w-full">
          {/* 2048 x 800 */}
          <div id="item1" className="carousel-item">
            <Image
              src={display1}
              alt="loc"
              className=""
              height={350}
              width={992}
            />
          </div>
          <div id="item1" className="carousel-item">
            <Image
              src={display1}
              alt="loc"
              className=""
              height={350}
              width={992}
            />
          </div>
          <div id="item1" className="carousel-item">
            <Image
              src={display1}
              alt="loc"
              className=""
              height={350}
              width={992}
            />
          </div>
        </div>
        <ul className="mt-5 steps mx-auto">
          <li
            data-content="#item1"
            className="p-1 mx-1.5 bg-primary rounded-xl"
          ></li>
          <li data-content="" className="p-1 mx-1.5 bg-white rounded-xl"></li>
          <li data-content="" className="p-1 mx-1.5 bg-white rounded-xl"></li>
          <li data-content="" className="p-1 mx-1.5 bg-white rounded-xl"></li>
        </ul>
      </div>
    </>
  );
};

export default Carousel;
