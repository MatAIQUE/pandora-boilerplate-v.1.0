"use client";
import { useRouter } from "next/navigation";
import Carousel from "../components/Carousel";
import Card from "./_components/Card";
import ad from "../assets/ads/display-1.png"

const HomePage = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/lockers/new");
  };

  const onNavigateToOpenLocker = () => {
    router.push("/lockers/open");
  };

  // MOCK DATA ONLY
  const images = [
    {
      id: "1",
      url: ad,
    },
    {
      id: "2",
      url: ad,
    },
    {
      id: "3",
      url: ad,
    },
    // {
    //   id: "2",
    //   url: "https://res.cloudinary.com/dym23akc6/image/upload/v1674445472/cld-sample.jpg",
    // },
    // {
    //   id: "3",
    //   url: "https://res.cloudinary.com/dym23akc6/image/upload/v1674445474/cld-sample-5.jpg",
    // },
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
      </div>
    </div>
  );
};

export default HomePage;
