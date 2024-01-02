import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Props {
  images: Array<{ id: string; url: string }>;
}

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col mt-20 justify-center items-start mx-10 pointer-events-none">
        <div className="carousel rounded-box w-full pointer-events-none">
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <Image
                src={image.url}
                alt={`Image ${index + 1}`}
                className="pointer-events-none"
                height={350}
                width={992}
              />
            </div>
          ))}
        </div>
        <ul className="mt-5 steps mx-auto">
          {images.map((_, index) => (
            <li
              key={index}
              data-content={`#${index}`}
              className={`p-1 mx-1.5 ${
                currentIndex === index ? "bg-primary" : "bg-white"
              } rounded-xl`}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Carousel;
