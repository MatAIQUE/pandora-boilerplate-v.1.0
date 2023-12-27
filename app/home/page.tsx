"use client";
import React from "react";
import Menu from "../components/Menu";
import Carousel from "../components/Carousel";
import Card from "./_components/Card";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const onNavigate = () => {
    router.push("/lockers/new");
  };

  const onNavigateToOpenLocker = () => {
    router.push("/lockers/open");
  };

  return (
    <div className="h-screen relative flex flex-col w-full text-center">
      <Carousel />
      <div className="basis-2/4 flex flex-auto justify-center items-center mb-96">
        <Card
          onNavigate={onNavigate}
          onNavigateToOpenLocker={onNavigateToOpenLocker}
          title="Good Morning!"
          subtitle=""
        />
      </div>
    </div>
  );
};

export default HomePage;
