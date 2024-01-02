"use client";
import { useRouter } from "next/navigation";
import Carousel from "../components/Carousel";
import Card from "./_components/Card";

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
      url: "https://res.cloudinary.com/dym23akc6/image/upload/v1674445473/cld-sample-3.jpg",
    },
    {
      id: "2",
      url: "https://res.cloudinary.com/dym23akc6/image/upload/v1674445472/cld-sample.jpg",
    },
    {
      id: "3",
      url: "https://res.cloudinary.com/dym23akc6/image/upload/v1674445474/cld-sample-5.jpg",
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
      </div>
    </div>
  );
};

export default HomePage;
