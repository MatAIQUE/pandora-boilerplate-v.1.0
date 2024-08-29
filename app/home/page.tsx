"use client";
import { useRouter } from "next/navigation";
import Carousel from "../components/Carousel";
import Card from "./_components/Card";
import { useBookingContext } from "@context/BookingContext";
import axios from "axios";
import { apiHeaders } from "@utils/apiHeaders";
import { useEffect, useState } from "react";

const HomePage = () => {
  const {
    location: lockerId,
    setAvailableDoors,
    availableDoors,
    setPrice,
  } = useBookingContext();
  const router = useRouter();
  const [errorDoor, setErrorDoor] = useState(null);
  const [isLoadingDoor, setIsLoadingDoor] = useState(false);

  const onNavigate = async () => {
    const fullyBooked = await availableDoorsCount();
    if (fullyBooked) {
      router.push("/lockers/new");
    }
  };

  const onNavigateToOpenLocker = async () => {
    router.push("/lockers/open");
  };

  const availableDoorsCount = async () => {
    const requestBody: Record<any, string> = {
      location: "one ayala",
      lockerId,
    };

    try {
      setIsLoadingDoor(true);

      const response = await axios.post(
        process.env.NEXT_PUBLIC_GET_AVAILABLE_DOORS as string,
        requestBody,
        {
          headers: apiHeaders(),
        }
      );

      console.log({ response });

      if (response.status === 200) {
        setAvailableDoors(response.data.data.locker.available);
      }

      console.log({ response });

      return true;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 416) {
          setErrorDoor("No available doors");
        }
      }
    } finally {
      setIsLoadingDoor(false);
    }
  };

  const getPricingData = async () => {
    try {
      // const response = await fetch(
      //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/query?page=${page}&limit=${limit}`
      // );
      const response = await axios.get(
        process.env.NEXT_PUBLIC_GET_EFFECTIVE_PRICE as string,
        {
          headers: apiHeaders(),
        }
      );

      console.log("response", response.statusText);

      console.log({ response });
      setPrice(response.data.price);
    } catch (error) {
      console.error("Error fetching pricing data:", error);
    }
  };

  useEffect(() => {
    getPricingData();
  }, []);

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
          errorDoor={errorDoor}
          isLoadingDoor={isLoadingDoor}
        />
      </div>
    </div>
  );
};

export default HomePage;
