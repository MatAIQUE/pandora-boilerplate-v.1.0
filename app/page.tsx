import { Badge, Button } from "./components";
import Card from "./components/Card";
import Carousel from "./components/Carousel";
import { FaHome, FaAngleLeft } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col w-full text-center">
        {/* Page Controller */}
        {/* Add .hidden when controllers should be hidden */}
        <div className="py-2">
          <div className="py-4 p-5 flex justify-between">
            <FaAngleLeft color="white" size={30} />
            <FaHome color="white" size={30} />
          </div>
        </div>
        {/* End of Page Controller */}

        {/* Ads Container */}
        <div className="flex flex-col my-10 justify-center items-start mx-10">
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
