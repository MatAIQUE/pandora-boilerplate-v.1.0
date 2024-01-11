"use client";
import { useRouter } from "next/navigation";
import Carousel from "../components/Carousel";
import Card from "./_components/Card";
import { Button } from "../components";
import axios from "axios";
import { useEffect } from "react";

const HomePage = () => {
  const router = useRouter();

  // const onNavigate = () => {
  //   router.push("/lockers/new");
  // };

  const onNavigate = async () => {
    try {
      await axios
        .get(`http://localhost:9090/api/lockercontroller/door/1/open`)
        .then((res) => {
          console.log("open door");
        });
    } catch (error) {
      console.error(error);
    }
  };

  const onNavigateToOpenLocker = () => {
    router.push("/lockers/open");
  };

  // MOCK DATA ONLY
  const images = [
    {
      id: "1",
      url: "https://res.cloudinary.com/dym23akc6/image/upload/c_crop,w_2048,h_800/v1674445473/cld-sample-3.jpg",
    },
    {
      id: "2",
      url: "https://res.cloudinary.com/dym23akc6/image/upload/c_crop,w_2048,h_800/v1674445472/cld-sample.jpg",
    },
    {
      id: "3",
      url: "https://res.cloudinary.com/dym23akc6/image/upload/c_crop,w_2048,h_800/v1674445474/cld-sample-5.jpg",
    },
  ];

  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <Carousel images={images} />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <Card
          onNavigate={onNavigate}
          onNavigateToOpenLocker={onNavigateToOpenLocker}
          title=""
          subtitle=""
        />
        <div className="w-full">
          <Button
            label="Open Locker"
            bgColor="btn-primary"
            color="white"
            weight="500"
            outline=""
            onClick={() => onNavigate()}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
