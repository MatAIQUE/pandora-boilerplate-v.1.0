import { Badge, Button } from "./components";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import { FaHome, FaAngleLeft } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="h-screen relative flex flex-col w-full text-center">
        {/* Page Controller */}
        <div className="my-4 absolute w-full">
          {/* Add .hidden when controllers should be hidden */}
          <div className="px-5 flex justify-between">
            <button className="btn btn-accent">
              <FaAngleLeft color="white" size={30} />
            </button>
            <button className="btn btn-accent">
              <FaHome color="white" size={30} />
            </button>
          </div>
        </div>
        {/* End of Page Controller */}

        {/* Ads Container */}
        <div className="flex flex-col mt-20 my-10 justify-center items-start mx-10">
          <Carousel />
        </div>
        {/* End of Ads Container */}

        {/* Page Content */}
        <div className="basis-2/4 mt-10 flex flex-auto justify-center items-start">
          <Card title="Good Morning!" subtitle="" />
        </div>
        {/* End of Page Content */}
      </div>
    </>
  );
}
